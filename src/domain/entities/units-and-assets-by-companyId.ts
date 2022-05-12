import { Asset } from './asset'
import { Unit } from './unit'

export type UnitsWithAssets = Unit
   & { assets: Asset[] }

export type UnitsAndAssetsByCompanyId = {
    _id?: string;
    name: string;
    email: string;
    cnpj: string;
    units: UnitsWithAssets[]
} 