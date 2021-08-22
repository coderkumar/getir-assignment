const { MongoClient } = require('mongodb')
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();

// Database Name
const dbName = process.env.MONGO_DB_NAME

module.exports = {
    async getCollection(collectionName) {
        const url = process.env.NODE_ENV == 'test' ? await mongod.getConnectionString() : process.env.MONGO_DB_URL
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
        await client.connect();
        const db = client.db(dbName)
        const collection = db.collection(collectionName)
        return collection;
    }
}