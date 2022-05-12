import { GetAsset } from "../../../domain/use-cases/assets/get-asset";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class GetAssetController implements Controller {
  constructor(private readonly getAsset: GetAsset) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.assetId) {
        return badRequest(new MissingParamError("missing assetId parameter"));
      }
      const assetId = httpRequest.pathParameters.assetId;

      const result = await this.getAsset.get(assetId);
      if(!result) return notFound();
      return ok({asset: result});
    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
