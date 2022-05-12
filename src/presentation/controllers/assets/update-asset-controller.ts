import { Asset } from "../../../domain/entities/asset";
import { UpdateAsset } from "../../../domain/use-cases/assets/update-asset";
import { GetUnit } from "../../../domain/use-cases/units/get-unit";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class UpdateAssetController implements Controller {
  constructor(private readonly updateAsset: UpdateAsset, private readonly getUnit: GetUnit) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.unitId) {
        return badRequest(new MissingParamError("missing unitId parameter"));
      }
      const unitId = httpRequest.pathParameters.unitId;
      
      if (!httpRequest.pathParameters?.assetId) {
        return badRequest(new MissingParamError("missing assetId parameter"));
      }
      const assetId = httpRequest.pathParameters.assetId;

      const requiredFields = [ 'name', 'description', 'image', 'model', 'owner', 'status', 'healthLevel']
      for (const field of requiredFields) {
        if (httpRequest.body[field] === undefined) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, description, image, model, owner, status, healthLevel } = httpRequest.body
      const unit = await this.getUnit.get(unitId);
      if(!unit) return badRequest(new Error("Unit doesn't exist."));
      
      const statuses = ["Running", "Alerting", "Stopped"]
      if(!statuses.includes(status)) return badRequest(new Error('Invalid status.'))
      if(healthLevel>100 || healthLevel<0) return badRequest(new Error('Invalid healthLevel.'))

      const asset: Asset = {
        _id: assetId,
        unitId,
        name,
        description,
        image,
        model,
        owner,
        status,
        healthLevel
      }
      const result = await this.updateAsset.update(asset)
      if(!result) return notFound();
      return ok({asset});
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}
