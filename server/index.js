const express = require('express');
const cookieParser = require('cookie-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const apiRouters = require('./apiRoutes');
const uuidv4 = require('uuid/v4');
const usersMiddleware = require('./user.middleware');
const testNewApi = require('./testNewApi');

app.prepare()
    .then(() => {
        const server = express();

        server.use(cookieParser());

        // REST API
        apiRouters(server);

        // TEST
        testNewApi(server);

        server.get('/article/:id', usersMiddleware, (req, res) => {
            const actualPage = '/';
            const queryParams = {id: req.params.id, user: req.user};
            app.render(req, res, actualPage, queryParams);
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });