import { ListUnits } from "../../../domain/use-cases/units/list-all-units";
import { serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class ListUnitsController implements Controller {
  constructor(private readonly listUnits: ListUnits) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const filter = httpRequest.queryParameters?.companyId
      console.log(filter)
      const result = await this.listUnits.list(filter);
      if(!result) return notFound();
      return ok({ companyId: filter, units: result});
    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
