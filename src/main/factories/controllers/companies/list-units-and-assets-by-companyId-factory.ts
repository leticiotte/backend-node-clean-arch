import { ListUnitsAndAssetsByCompanyIdController } from "../../../../presentation/controllers/companies/list-all-units-and-assets-by-companyId-controller"
import { Controller } from "../../../../presentation/protocols"
import { GetCompany } from "../../../../domain/use-cases/companies/get-company";
import { ListUnits } from "../../../../domain/use-cases/units/list-all-units";
import { ListAssets } from "../../../../domain/use-cases/assets/list-all-assets";


export const makeListUnitsAndAssetsByCompanyIdController = (makeGetCompanyUseCase: GetCompany, makeListUnitsUseCase: ListUnits, makeListAssetsUseCase: ListAssets): Controller => {
  return new ListUnitsAndAssetsByCompanyIdController(makeGetCompanyUseCase, makeListUnitsUseCase, makeListAssetsUseCase);
};
