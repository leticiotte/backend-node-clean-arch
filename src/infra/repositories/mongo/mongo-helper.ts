const mongoose = require("mongoose")
require('dotenv/config');

const DB_USERNAME = process.env.MONGO_USERNAME
const DB_PASSWORD = encodeURIComponent(process.env.MONGO_PASSWORD)

export const MongoHelper = {
  uri: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@tractianchallenge.7tiif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,

  async connect(): Promise<void> {
    this.client = await mongoose.connect(this.uri)
  }
}