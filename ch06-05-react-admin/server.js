const {ApolloServer} = require('apollo-server');
const requireText = require('require-text');

const typeDefs = requireText('./schema.graphql', require);

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const reverse = (fn) => (p0, p1) => -fn(p0, p1);

const sort = (by) =>
    (p0, p1) => {
        const p0Value = by(p0);
        const p1Value = by(p1);
        if (p0Value === undefined) {
            return p1Value === undefined ? 0 : 1;
        }
        if (p1Value === undefined) {
            return -1;
        }
        return p0Value === p1Value ? 0 : (p0Value < p1Value ? -1 : 1);
    };

const messages = [
    {
        id: '2bc8d451-d843-450e-91d1-2799b60f9744', author: 'SC',
        text: 'Rolls complete and a pitch is program. One BRAVO.'
    },
    {
        id: '2aaf5636-5db9-415a-90f3-581749689ab8', author: 'PAO',
        text: 'One BRAVO is an abort control model. Altitude is 2 miles.'
    },
    {
        id: '3bc62804-1aff-4d9b-bad8-bfbb0602b6d5', author: 'CAPCOM',
        text: 'All is well at Houston. You are good at 1 minute.'
    },
];

function filterMessages(params) {
    let results = messages;
    for (let field in params.filter) {
        if (field === 'q') {
            results = results.filter(m => {
                const all = Object.values(m).map(s => '' + s).join(' ').toUpperCase();
                return all.toUpperCase().indexOf(params.filter.q.toUpperCase()) !== -1;
            });
        } else {
            results = results.filter(m => {
                const all = m[field].toUpperCase();
                return all.toUpperCase().indexOf(params.filter[field].toUpperCase()) !== -1;
            });
        }
    }
    if (params.sortField) {
        results = params.sortOrder === 'DESC'
            ? results.sort(sort(i => i[params.sortField]))
            : results.sort(reverse(sort(i => i[params.sortField])))
        ;
    }
    let start = params.page * params.perPage;
    results = results.slice(start, start + params.perPage);
    return results;
}

function createMessage(params) {
    let newId = uuidv4();
    const item = {id: newId, ...params};
    messages.push(item);
    return item;
}

function updateMessage(params) {
    let matcher = m => m.id === params.id;
    const i = messages.findIndex(matcher);
    const item = {...params};
    messages[i] = item;
    return item;
}

function deleteMessage(params) {
    let matcher = m => m.id === params.id;
    const message = messages.find(matcher);
    const i = messages.findIndex(matcher);
    messages.splice(i, 1);
    return message;
}

const resolvers = {
    Query: {
        allMessages: (parent, params) => {
            return filterMessages(params);
        },
        _allMessagesMeta: (parent, params) => ({count: filterMessages(params).length}),
        Message: (parent, params) => messages.find(m => m.id === params.id),
    },
    Mutation: {
        createMessage: (parent, params) => {
            return createMessage(params);
        },
        updateMessage: (parent, params) => {
            return updateMessage(params);
        },
        deleteMessage: (parent, params) => {
            return deleteMessage(params);
        },
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen({port: 5000}).then(({url}) => {
    console.log(`🚀 Launched at ${url}!`);
});
