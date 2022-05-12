import { Router } from 'express'
import { adaptExpressRoute } from '../adapters/express-adapter'

import { makeListAssetsController, makeUpdateAssetController, makeDeleteAssetController, makeAddAssetController, makeGetAssetController } from '../factories/controllers'
import { makeAddAssetUseCase, makeUpdateAssetUseCase, makeListAssetsUseCase, makeDeleteAssetUseCase, makeGetAssetUseCase, makeGetUnitUseCase } from '../factories/use-cases'


export default (router: Router, Assets: any, Units: any): void => {
    router.get('/assets', listAllAssetsControllerExpressRoute(Assets))
    router.post('/units/:unitId/assets', addAssetControllerExpressRoute(Assets, Units))
    router.delete('/assets/:assetId', deleteAssetControllerExpressRoute(Assets))
    router.put('/units/:unitId/assets/:assetId', updateAssetControllerExpressRoute(Assets, Units))
    router.get('/assets/:assetId', getAssetControllerExpressRoute(Assets))
}

const addAssetControllerExpressRoute = (Assets: any, Units: any) => {
    return adaptExpressRoute(makeAddAssetController(makeAddAssetUseCase(Assets), makeGetUnitUseCase(Units)))
}

const getAssetControllerExpressRoute = (Assets: any) => {
    return adaptExpressRoute(makeGetAssetController(makeGetAssetUseCase(Assets)))
}

const listAllAssetsControllerExpressRoute = (Assets: any) => {
    return adaptExpressRoute(makeListAssetsController(makeListAssetsUseCase(Assets)))
}

const deleteAssetControllerExpressRoute = (Assets: any) => {
    return adaptExpressRoute(makeDeleteAssetController(makeDeleteAssetUseCase(Assets)))
}

const updateAssetControllerExpressRoute = (Assets: any, Units: any) => {
    return adaptExpressRoute(makeUpdateAssetController(makeUpdateAssetUseCase(Assets), makeGetUnitUseCase(Units)))
}
