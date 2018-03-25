const uuidv4 = require('uuid/v4');
const users = require('./data/users.js');

module.exports = (req, res, next) => {
    if (req.url === '/_next/on-demand-entries-ping?page=/') {
        next();
        return;
    }

    if (!req.cookies.articles) {
        const userId = uuidv4();
        users[userId] = {id: userId, articles: []};
        res.cookie('articles', userId);
        req.user = users[userId];
    } else {
        res.cookie('articles', req.cookies.articles);
        req.user = users[req.cookies.articles];
    }

    next();
};
