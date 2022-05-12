import { Unit } from "../../../domain/entities/unit";
import { UpdateUnit } from "../../../domain/use-cases/units/update-unit";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { GetCompany } from "../../../domain/use-cases/companies/get-company";

export class UpdateUnitController implements Controller {
  constructor(private readonly updateUnit: UpdateUnit, private readonly getCompany: GetCompany) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.companyId) {
        return badRequest(new MissingParamError("missing companyId parameter"));
      }
      const companyId = httpRequest.pathParameters.companyId;

      if (!httpRequest.pathParameters?.unitId) {
        return badRequest(new MissingParamError("missing unitId parameter"));
      }
      const unitId = httpRequest.pathParameters.unitId;

      const requiredFields = [ 'name', 'description']
      for (const field of requiredFields) {
        if (httpRequest.body[field] === undefined) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, description } = httpRequest.body

      const company = await this.getCompany.get(companyId)
      if(!company) return badRequest(new Error("Company doesn't exist."));
      
      const unit: Unit = {  
        _id: unitId,
        companyId,
        name,
        description
      }
      const result = await this.updateUnit.update(unit)
      if(!result) return notFound();
      return ok({unit});
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}
