const data = require('../data/activities.json');
const { connect } = require('./mongo');

const COLLECTION_NAME = 'activities';

async function collection(){
    const client = await connect();
    return client.db('fitness4u').collection(COLLECTION_NAME);
}

async function getActivities() {
    const db = await collection();
    const data = await db.find().toArray()
    return { total: data.length, limit: data.length, activities: data };
}

async function addActivity(activity){
    const db = await collection();
    const result = await db.insertOne(activity)
    return activity;
}

module.exports = {
    COLLECTION_NAME,
    collection,
    getActivities,
    addActivity,
};