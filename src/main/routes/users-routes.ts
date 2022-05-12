import { Router } from 'express'
import { adaptExpressRoute } from '../adapters/express-adapter'

import { makeListUsersController, makeUpdateUserController, makeDeleteUserController, makeAddUserController, makeGetUserController } from '../factories/controllers'
import { makeAddUserUseCase, makeUpdateUserUseCase, makeListUsersUseCase, makeDeleteUserUseCase, makeGetUserUseCase, makeGetCompanyUseCase } from '../factories/use-cases'


export default (router: Router, Users: any, Companies: any): void => {
    router.get('/users', listAllUsersControllerExpressRoute(Users))
    router.post('/companies/:companyId/users', addUserControllerExpressRoute(Users, Companies))
    router.delete('/users/:userId', deleteUserControllerExpressRoute(Users))
    router.put('/companies/:companyId/users/:userId', updateUserControllerExpressRoute(Users, Companies))
    router.get('/users/:userId', getUserControllerExpressRoute(Users))
}

const addUserControllerExpressRoute = (Users: any, Companies: any) => {
    return adaptExpressRoute(makeAddUserController(makeAddUserUseCase(Users), makeGetCompanyUseCase(Companies)))
}

const getUserControllerExpressRoute = (Users: any) => {
    return adaptExpressRoute(makeGetUserController(makeGetUserUseCase(Users)))
}

const listAllUsersControllerExpressRoute = (Users: any) => {
    return adaptExpressRoute(makeListUsersController(makeListUsersUseCase(Users)))
}

const deleteUserControllerExpressRoute = (Users: any) => {
    return adaptExpressRoute(makeDeleteUserController(makeDeleteUserUseCase(Users)))
}

const updateUserControllerExpressRoute = (Users: any, Companies: any) => {
    return adaptExpressRoute(makeUpdateUserController(makeUpdateUserUseCase(Users), makeGetCompanyUseCase(Companies)))
}
