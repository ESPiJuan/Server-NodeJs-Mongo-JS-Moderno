import MongoClient from "mongodb";

export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology: true, useNewUrlParser: true})
        const db = client.db('discordBotRestApi');
        return db;
    } catch (error) {
        console.log(error)
    }

}