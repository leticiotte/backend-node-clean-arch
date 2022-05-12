import { Company } from "../../../domain/entities/company";
import { UpdateCompany } from "../../../domain/use-cases/companies/update-company";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class UpdateCompanyController implements Controller {
  constructor(private readonly updateCompany: UpdateCompany) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.companyId) {
        return badRequest(new MissingParamError("missing companyId parameter"));
      }
      const companyId = httpRequest.pathParameters.companyId;

      const requiredFields = ['name', 'email', 'cnpj']
      for (const field of requiredFields) {
        if (httpRequest.body[field] === undefined) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, cnpj } = httpRequest.body
      const company: Company = {
        _id: companyId,
        name,
        email,
        cnpj
      }
      const result = await this.updateCompany.update(company)
      console.log(result)
      if(!result) return notFound();
      return ok({company});
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}
