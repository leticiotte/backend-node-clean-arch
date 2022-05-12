import { DeleteCompany } from "../../../domain/use-cases/companies/delete-company";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, noContent } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class DeleteCompanyController implements Controller {
  constructor(private readonly deleteCompany: DeleteCompany) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.companyId) {
        return badRequest(new MissingParamError("missing companyId parameter"));
      }
      const companyId = httpRequest.pathParameters.companyId;

      const result = await this.deleteCompany.delete(companyId);
      if(!result) return badRequest(new Error('Error deleting company'))
      return noContent();
    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
