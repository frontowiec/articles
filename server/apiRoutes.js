const articles = {
    "1ac73ede-5830-4a81-b824-47db177fa50c": {
        id: "1ac73ede-5830-4a81-b824-47db177fa50c",
        title: 'Title 1',
        content: 'Very very log string'
    }
};

module.exports = server => {
    server.get('/api/article/:id', (req, res) => {
        res.send(articles[req.params.id]);
    });
};
