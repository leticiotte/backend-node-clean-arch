import * as express from "express";
import usersRoutes from '../routes/users-routes'
import companiesRoutes from '../routes/companies-routes'
import unitsRoutes from '../routes/units-routes'
import assetsRoutes from '../routes/assets-routes'
import * as cors from 'cors'
import * as Users from "../models/Users";
import * as Companies from "../models/Companies";
import * as Assets from "../models/Assets";
import * as Units from "../models/Units";


const app = express()
const corsOptions = {
    origin: "*"
}
app.use(cors(corsOptions))
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());
usersRoutes(app, Users, Companies)
companiesRoutes(app, Companies, Units, Assets)
unitsRoutes(app, Units, Companies)
assetsRoutes(app, Assets, Units)

export default app