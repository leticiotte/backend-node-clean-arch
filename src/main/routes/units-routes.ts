import { Router } from 'express'
import { adaptExpressRoute } from '../adapters/express-adapter'

import { makeListUnitsController, makeUpdateUnitController, makeDeleteUnitController, makeAddUnitController, makeGetUnitController } from '../factories/controllers'
import { makeAddUnitUseCase, makeUpdateUnitUseCase, makeListUnitsUseCase, makeDeleteUnitUseCase, makeGetUnitUseCase, makeGetCompanyUseCase } from '../factories/use-cases'


export default (router: Router, Units: any, Companies: any): void => {
    router.get('/units', listAllUnitsControllerExpressRoute(Units))
    router.post('/companies/:companyId/units', addUnitControllerExpressRoute(Units, Companies))
    router.delete('/units/:unitId', deleteUnitControllerExpressRoute(Units))
    router.put('/companies/:companyId/units/:unitId', updateUnitControllerExpressRoute(Units, Companies))
    router.get('/units/:unitId', getUnitControllerExpressRoute(Units))
}

const addUnitControllerExpressRoute = (Units: any, Companies: any) => {
    return adaptExpressRoute(makeAddUnitController(makeAddUnitUseCase(Units), makeGetCompanyUseCase(Companies)))
}

const getUnitControllerExpressRoute = (Units: any) => {
    return adaptExpressRoute(makeGetUnitController(makeGetUnitUseCase(Units)))
}

const listAllUnitsControllerExpressRoute = (Units: any) => {
    return adaptExpressRoute(makeListUnitsController(makeListUnitsUseCase(Units)))
}

const deleteUnitControllerExpressRoute = (Units: any) => {
    return adaptExpressRoute(makeDeleteUnitController(makeDeleteUnitUseCase(Units)))
}

const updateUnitControllerExpressRoute = (Units: any, Companies: any) => {
    return adaptExpressRoute(makeUpdateUnitController(makeUpdateUnitUseCase(Units), makeGetCompanyUseCase(Companies)))
}
