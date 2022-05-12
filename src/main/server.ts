import app from './configs/app'
import { MongoHelper } from '../infra/repositories/mongo/mongo-helper'

MongoHelper.connect().then(() => {
  app.listen(3000, () => console.log(`MongoDB connect!`))
}).catch((e) => console.log('error: ', e))

