import { Router } from 'express'
import { adaptExpressRoute } from '../adapters/express-adapter'

import { makeListCompaniesController, makeUpdateCompanyController, makeDeleteCompanyController, makeAddCompanyController, makeGetCompanyController, makeListUnitsAndAssetsByCompanyIdController } from '../factories/controllers'
import { makeAddCompanyUseCase, makeUpdateCompanyUseCase, makeListCompaniesUseCase, makeDeleteCompanyUseCase, makeGetCompanyUseCase, makeListUnitsUseCase, makeListAssetsUseCase } from '../factories/use-cases'


export default (router: Router, Companies: any, Units: any, Assets: any): void => {
    router.get('/companies', listAllCompaniesControllerExpressRoute(Companies))
    router.post('/companies', addCompanyControllerExpressRoute(Companies))
    router.delete('/companies/:companyId', deleteCompanyControllerExpressRoute(Companies))
    router.put('/companies/:companyId', updateCompanyControllerExpressRoute(Companies))
    router.get('/companies/:companyId', getCompanyControllerExpressRoute(Companies))
    router.get('/companies/:companyId/stats', listAllUnitsAndAssetsByCompanyIdControllerExpressRoute(Companies, Units, Assets))
}

const addCompanyControllerExpressRoute = (Companies: any) => {
    return adaptExpressRoute(makeAddCompanyController(makeAddCompanyUseCase(Companies)))
}

const getCompanyControllerExpressRoute = (Companies: any) => {
    return adaptExpressRoute(makeGetCompanyController(makeGetCompanyUseCase(Companies)))
}

const listAllCompaniesControllerExpressRoute = (Companies: any) => {
    return adaptExpressRoute(makeListCompaniesController(makeListCompaniesUseCase(Companies)))
}

const listAllUnitsAndAssetsByCompanyIdControllerExpressRoute = (Companies: any, Units: any, Assets: any) => {
    return adaptExpressRoute(makeListUnitsAndAssetsByCompanyIdController(makeGetCompanyUseCase(Companies), makeListUnitsUseCase(Units), makeListAssetsUseCase(Assets)))
}

const deleteCompanyControllerExpressRoute = (Companies: any) => {
    return adaptExpressRoute(makeDeleteCompanyController(makeDeleteCompanyUseCase(Companies)))
}

const updateCompanyControllerExpressRoute = (Companies: any) => {
    return adaptExpressRoute(makeUpdateCompanyController(makeUpdateCompanyUseCase(Companies)))
}


