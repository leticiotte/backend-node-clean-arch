import { GetCompany } from "../../../domain/use-cases/companies/get-company";
import { ListUnits } from "../../../domain/use-cases/units/list-all-units";
import { ListAssets } from "../../../domain/use-cases/assets/list-all-assets";

import { serverError, ok, notFound, badRequest } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { UnitsWithAssets, UnitsAndAssetsByCompanyId } from "../../../domain/entities/units-and-assets-by-companyId";
import { MissingParamError } from "../../errors/missing-param-error";


export class ListUnitsAndAssetsByCompanyIdController implements Controller {
  constructor(private readonly getCompany: GetCompany, private readonly listUnits: ListUnits, private readonly listAssets: ListAssets) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.companyId) {
        return badRequest(new MissingParamError("missing companyId parameter"));
      }
      const companyId = httpRequest.pathParameters.companyId

      const company = await this.getCompany.get(companyId);
      if(!company) return notFound();
      
      const units = await this.listUnits.list(companyId);
      const unitsWithAssets : UnitsWithAssets[] = []
      for (const unit of units) {
        const unitId = unit._id
        const assets = await this.listAssets.list(unitId);
        const unitWithAssets : UnitsWithAssets = {
          _id: unit._id,
          name: unit.name,
          companyId: unit.companyId,
          description: unit.description,
          assets
        }
        unitsWithAssets.push(unitWithAssets)
      }
      const response : UnitsAndAssetsByCompanyId = {
        _id: company._id,
        name: company.name,
        email: company.email,
        cnpj: company.cnpj,
        units: unitsWithAssets
      }
      return ok({company: response});
    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
