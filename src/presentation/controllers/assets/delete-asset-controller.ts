import { DeleteAsset } from "../../../domain/use-cases/assets/delete-asset";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, created, ok, noContent } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class DeleteAssetController implements Controller {
  constructor(private readonly deleteAsset: DeleteAsset) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.assetId) {
        return badRequest(new MissingParamError("missing assetId parameter"));
      }
      const assetId = httpRequest.pathParameters.assetId;

      const result = await this.deleteAsset.delete(assetId);
      if(!result) return badRequest(new Error('Error deleting asset'))
      return noContent();

    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
