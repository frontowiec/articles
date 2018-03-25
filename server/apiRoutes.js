const faker = require('faker');
const {keyBy, mapValues} = require('lodash');
const users = require('./data/users');

const articles = {
    "1ac73ede-5830-4a81-b824-47db177fa50c": {
        id: '1ac73ede-5830-4a81-b824-47db177fa50c',
        title: 'Dzisiaj zaczyna się astronomiczna wiosna',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "bac4f1da-abe3-4293-9b33-fcd7ae5f5c31": {
        id: 'bac4f1da-abe3-4293-9b33-fcd7ae5f5c31',
        title: 'Trwa konkurs astrofotografii AstroCamera 2018',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "0c7da17c-5544-4b12-915e-bf7d9c0cd5cb": {
        id: '0c7da17c-5544-4b12-915e-bf7d9c0cd5cb',
        title: 'Wykryto echa radiowe pochodzące od czarnej dziury żywiącej się gwiazdą',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "084ae15b-e925-48d2-9b2e-55b4dccf2056": {
        id: '084ae15b-e925-48d2-9b2e-55b4dccf2056',
        title: 'Kończy się paliwo w Kosmicznym Teleskopie Keplera',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "de238200-9cfd-4a0f-b005-f105d630f134": {
        id: 'de238200-9cfd-4a0f-b005-f105d630f134',
        title: 'Geometryczne układy cyklonów na biegunach Jowisza',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "d95613a6-2d05-4868-bf3e-bfc3d8122a34": {
        id: 'd95613a6-2d05-4868-bf3e-bfc3d8122a34',
        title: 'Sonda Trace Gas Orbiter prawie gotowa do badania marsjańskiej atmosfery',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "5851a180-9b8d-46e8-8e3d-3615e554224f": {
        id: '5851a180-9b8d-46e8-8e3d-3615e554224f',
        title: 'tnie chwile chińskiej stacji kosmicznej',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "aa3adbe9-e13d-45ca-b771-20e30757f831": {
        id: 'aa3adbe9-e13d-45ca-b771-20e30757f831',
        title: 'Astronomowie odkryli, że galaktyki rotują jak w zegarku',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "e84243d6-0b88-4f82-9711-9ef55bbd90c9": {
        id: 'e84243d6-0b88-4f82-9711-9ef55bbd90c9',
        title: 'Chiny wysyłają na orbitę kolejnego satelitę rozpoznawczego serii LKW',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "171d3e06-a6d1-4383-b6b4-2d96e19f66ff": {
        id: '171d3e06-a6d1-4383-b6b4-2d96e19f66ff',
        title: 'Astronarium nr 56 o maserach',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "f0a3817a-1213-4c81-a89e-977167f03a1e": {
        id: 'f0a3817a-1213-4c81-a89e-977167f03a1e',
        title: 'Naukowcy odkrywają, że promieniowanie kosmiczne jest jeszcze bardziej niebezpieczne',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "037f780a-d1a8-4a74-8a27-64a0baeeecf9": {
        id: '037f780a-d1a8-4a74-8a27-64a0baeeecf9',
        title: 'Hubble znajduje pobliską galaktykę reliktową',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "37a48fec-bc98-4848-b4e2-338d2e39fd23": {
        id: '37a48fec-bc98-4848-b4e2-338d2e39fd23',
        title: 'Rysują się plany amerykańskiego powrotu na Księżyc',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    },
    "d65f6193-7b0d-4608-b029-4c42ad77c854": {
        id: 'd65f6193-7b0d-4608-b029-4c42ad77c854',
        title: 'Test elo elo',
        content: faker.lorem.text(),
        createDate: faker.date.recent()
    }
};
const menu = {
    "_root": {
        "id": "_root",
        "childIds": [
            "1ac73ede-5830-4a81-b824-47db177fa50c",
            "bac4f1da-abe3-4293-9b33-fcd7ae5f5c31",
            "0c7da17c-5544-4b12-915e-bf7d9c0cd5cb",
            "084ae15b-e925-48d2-9b2e-55b4dccf2056",
            "de238200-9cfd-4a0f-b005-f105d630f134",
            "d95613a6-2d05-4868-bf3e-bfc3d8122a34",
            "5851a180-9b8d-46e8-8e3d-3615e554224f",
            "aa3adbe9-e13d-45ca-b771-20e30757f831",
            "e84243d6-0b88-4f82-9711-9ef55bbd90c9",
            "171d3e06-a6d1-4383-b6b4-2d96e19f66ff"
        ]
    },
    "1ac73ede-5830-4a81-b824-47db177fa50c": {
        "id": "1ac73ede-5830-4a81-b824-47db177fa50c",
        "title": "Dzisiaj zaczyna się astronomiczna wiosna",
        "childIds": ["f0a3817a-1213-4c81-a89e-977167f03a1e", "037f780a-d1a8-4a74-8a27-64a0baeeecf9", "37a48fec-bc98-4848-b4e2-338d2e39fd23"],
        "parent": "_root",
        "visited": false
    },
    "bac4f1da-abe3-4293-9b33-fcd7ae5f5c31": {
        "id": "bac4f1da-abe3-4293-9b33-fcd7ae5f5c31",
        "title": "Trwa konkurs astrofotografii AstroCamera 2018",
        "childIds": [],
        "parent": "_root"
    },
    "0c7da17c-5544-4b12-915e-bf7d9c0cd5cb": {
        "id": "0c7da17c-5544-4b12-915e-bf7d9c0cd5cb",
        "title": "Wykryto echa radiowe pochodzące od czarnej dziury żywiącej się gwiazdą",
        "childIds": [],
        "parent": "_root",
        "visited": false
    },
    "084ae15b-e925-48d2-9b2e-55b4dccf2056": {
        "id": "084ae15b-e925-48d2-9b2e-55b4dccf2056",
        "title": "Kończy się paliwo w Kosmicznym Teleskopie Keplera",
        "childIds": [],
        "parent": "_root",
        "visited": false
    },
    "de238200-9cfd-4a0f-b005-f105d630f134": {
        "id": "de238200-9cfd-4a0f-b005-f105d630f134",
        "title": "Geometryczne układy cyklonów na biegunach Jowisza",
        "childIds": [],
        "parent": "_root",
        "visited": false
    },
    "d95613a6-2d05-4868-bf3e-bfc3d8122a34": {
        "id": "d95613a6-2d05-4868-bf3e-bfc3d8122a34",
        "title": "Sonda Trace Gas Orbiter prawie gotowa do badania marsjańskiej atmosfery",
        "childIds": [],
        "parent": "_root",
        "visited": false
    },
    "5851a180-9b8d-46e8-8e3d-3615e554224f": {
        "id": "5851a180-9b8d-46e8-8e3d-3615e554224f",
        "title": "Ostatnie chwile chińskiej stacji kosmicznej",
        "childIds": [],
        "parent": "_root",
        "visited": false
    },
    "aa3adbe9-e13d-45ca-b771-20e30757f831": {
        "id": "aa3adbe9-e13d-45ca-b771-20e30757f831",
        "title": "Astronomowie odkryli, że galaktyki rotują jak w zegarku",
        "childIds": [],
        "parent": "_root",
        "visited": false
    },
    "e84243d6-0b88-4f82-9711-9ef55bbd90c9": {
        "id": "e84243d6-0b88-4f82-9711-9ef55bbd90c9",
        "title": "Chiny wysyłają na orbitę kolejnego satelitę rozpoznawczego serii LKW",
        "childIds": [],
        "parent": "_root",
        "visited": false
    },
    "171d3e06-a6d1-4383-b6b4-2d96e19f66ff": {
        "id": "171d3e06-a6d1-4383-b6b4-2d96e19f66ff",
        "title": "Astronarium nr 56 o maserach",
        "childIds": [],
        "parent": "_root",
        "visited": false
    },
    "f0a3817a-1213-4c81-a89e-977167f03a1e": {
        "id": "f0a3817a-1213-4c81-a89e-977167f03a1e",
        "title": "Naukowcy odkrywają, że promieniowanie kosmiczne jest jeszcze bardziej niebezpieczne",
        "childIds": [],
        "parent": "1ac73ede-5830-4a81-b824-47db177fa50c",
        "visited": false
    },
    "037f780a-d1a8-4a74-8a27-64a0baeeecf9": {
        "id": "037f780a-d1a8-4a74-8a27-64a0baeeecf9",
        "title": "Hubble znajduje pobliską galaktykę reliktową",
        "childIds": [],
        "parent": "1ac73ede-5830-4a81-b824-47db177fa50c",
        "visited": false
    },
    "37a48fec-bc98-4848-b4e2-338d2e39fd23": {
        "id": "37a48fec-bc98-4848-b4e2-338d2e39fd23",
        "title": "Rysują się plany amerykańskiego powrotu na Księżyc",
        "childIds": ["d65f6193-7b0d-4608-b029-4c42ad77c854"],
        "parent": "1ac73ede-5830-4a81-b824-47db177fa50c",
        "visited": false
    },
    "d65f6193-7b0d-4608-b029-4c42ad77c854": {
        "id": "d65f6193-7b0d-4608-b029-4c42ad77c854",
        "title": "Test elo elo",
        "childIds": [],
        "parent": "37a48fec-bc98-4848-b4e2-338d2e39fd23",
        "visited": false
    }
};

module.exports = server => {
    server.get('/api/article/:id', (req, res) => {
        const article = articles[req.params.id] ||
            Object.values(articles).find(a => a.title === req.params.id.replace(/-/g, ' '));

        const userId = req.cookies.articles || req.query.user;
        const user = users[userId];
        user.articles.push(req.params.id);

        res.send(article || {title: '', content: ''});
    });

    server.get('/api/menu/:id/children', (req, res) => {
        const id = req.params.id;
        const children = menu[id].childIds.map(childId => menu[childId]);

        res.send(keyBy(children, 'id'));
    });

    server.get('/api/menu/:id', (req, res) => {
        const userId = req.query.user;
        const user = users[userId];
        const readArticles = user.articles;
        const id = req.params.id;
        const rootsElements = [menu._root, ...menu._root.childIds.map(rootId => menu[rootId])];
        const elementHasChildren = menu[id].childIds.length !== 0;

        if (rootsElements.some(element => element.id === id) && !elementHasChildren) {
            const results =
                mapValues(
                    keyBy(rootsElements, 'id'),
                    item => readArticles.some(artId => item.id === artId) ? ({...item, visited: true}) : item);
            res.send(results);
            return;
        }

        let parentId = menu[id].parent;
        let childrenIds = [];
        while (parentId !== '_root') {
            childrenIds = [...childrenIds, ...menu[parentId].childIds];
            parentId = menu[parentId].parent;
        }

        if (elementHasChildren) {
            childrenIds = [...childrenIds, ...menu[id].childIds];
        }

        const children = childrenIds.map(childId => menu[childId]);
        const results =
            mapValues(
                keyBy([...rootsElements, ...children], 'id'),
                item => readArticles.some(artId => item.id === artId) ? ({...item, visited: true}) : item);

        res.send(results);
    });
};
