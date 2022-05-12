import { GetCompany } from "../../../domain/use-cases/companies/get-company";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class GetCompanyController implements Controller {
  constructor(private readonly getCompany: GetCompany) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.companyId) {
        return badRequest(new MissingParamError("missing companyId parameter"));
      }
      const companyId = httpRequest.pathParameters.companyId;

      const result = await this.getCompany.get(companyId);
      if(!result) return notFound();
      return ok({company: result});
    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
