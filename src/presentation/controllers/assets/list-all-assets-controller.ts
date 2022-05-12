import { ListAssets } from "../../../domain/use-cases/assets/list-all-assets";
import { serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class ListAssetsController implements Controller {
  constructor(private readonly listAssets: ListAssets) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    console.log(httpRequest)
    try {
      const filter = httpRequest.queryParameters?.unitId
      console.log(filter)
      const result = await this.listAssets.list(filter);
      if(!result) return notFound();
      return ok({unitId: filter, assets: result});
    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
