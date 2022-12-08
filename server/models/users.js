const data = require('../data/users.json');
const { connect } = require('./mongo');

const COLLECTION_NAME = 'users';

async function collection(){
    const client = await connect();
    return client.db('fitness4u').collection(COLLECTION_NAME);
}

async function getUsers() {
    const db = await collection();
    const data = await db.find().toArray()
    return { total: data.length, limit: data.length, users: data };
}

async function addUser(user){
    const db = await collection();
    const result = await db.insertOne(user)
    return user;
}

module.exports = {
    COLLECTION_NAME,
    collection,
    getUsers,
    addUser,
};