const faker = require('faker');
const {keyBy} = require('lodash');


const ids = [
    "1ac73ede-5830-4a81-b824-47db177fa50c",
    "bac4f1da-abe3-4293-9b33-fcd7ae5f5c31",
    "0c7da17c-5544-4b12-915e-bf7d9c0cd5cb",
    "084ae15b-e925-48d2-9b2e-55b4dccf2056",
    "de238200-9cfd-4a0f-b005-f105d630f134",
    "d95613a6-2d05-4868-bf3e-bfc3d8122a34",
    "5851a180-9b8d-46e8-8e3d-3615e554224f",
    "aa3adbe9-e13d-45ca-b771-20e30757f831",
    "e84243d6-0b88-4f82-9711-9ef55bbd90c9",
    "171d3e06-a6d1-4383-b6b4-2d96e19f66ff",
    "f0a3817a-1213-4c81-a89e-977167f03a1e",
    "037f780a-d1a8-4a74-8a27-64a0baeeecf9",
    "37a48fec-bc98-4848-b4e2-338d2e39fd23"
];

const articles = keyBy(
    ids.map(id => ({
        id,
        title: faker.name.title(),
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    })), 'id'
);

module.exports = server => {
    server.get('/api/article/:id', (req, res) => {
        const article = articles[req.params.id] ||
            Object.values(articles).find(a => a.title === req.params.id);

        res.send(article || {title: '', content: ''});
    });
};
