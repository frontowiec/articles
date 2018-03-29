const NewsAPI = require('newsapi');
const config = require('./config/keys');
const newsapi = new NewsAPI(config.newsApiKey);

module.exports = server => {
    server.get('/api/test/news', async (req, res) => {
        const news = await newsapi.v2.topHeadlines({
            category: 'business',
            country: 'pl'
        });

        res.send(news);
    });
};
