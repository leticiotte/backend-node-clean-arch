import { Unit } from "../../../domain/entities/unit";
import { GetCompany } from "../../../domain/use-cases/companies/get-company";
import { AddUnit } from "../../../domain/use-cases/units/add-unit";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, created } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";


export class AddUnitController implements Controller {
  constructor (
    private readonly addUnit: AddUnit, private readonly getCompany: GetCompany
    ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.companyId) {
        return badRequest(new MissingParamError("missing companyId parameter"));
      }
      const companyId = httpRequest.pathParameters.companyId;

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
        companyId,
        name,
        description
      }
      await this.addUnit.add(unit)
      return created(unit)
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}