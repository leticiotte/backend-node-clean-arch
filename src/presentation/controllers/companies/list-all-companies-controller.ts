import { ListCompanies } from "../../../domain/use-cases/companies/list-all-companies";
import { serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class ListCompaniesController implements Controller {
  constructor(private readonly listCompanies: ListCompanies) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.listCompanies.list();
      if(!result) return notFound();
      return ok({companys: result});
    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
