import { Company } from "../../../domain/entities/company";
import { AddCompany } from "../../../domain/use-cases/companies/add-company";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, created } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";


export class AddCompanyController implements Controller {
  constructor (
    private readonly addCompany: AddCompany 
    ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'email', 'cnpj']
      for (const field of requiredFields) {
        if (httpRequest.body[field] === undefined) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, cnpj } = httpRequest.body
      const company: Company = {
        name,
        email,
        cnpj
      }
      await this.addCompany.add(company)
      return created(company)
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}