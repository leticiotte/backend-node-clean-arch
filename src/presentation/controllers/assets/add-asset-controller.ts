import { Asset } from "../../../domain/entities/asset";
import { AddAsset } from "../../../domain/use-cases/assets/add-asset";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, created } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { GetUnit } from "../../../domain/use-cases/units/get-unit";

export class AddAssetController implements Controller {
  constructor (
    private readonly addAsset: AddAsset, private readonly getUnit: GetUnit
    ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.unitId) {
        return badRequest(new MissingParamError("missing unitId parameter"));
      }
      const unitId = httpRequest.pathParameters.unitId;

      const requiredFields = ['name', 'description', 'image', 'model', 'owner', 'status', 'healthLevel']
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
        unitId,
        name,
        description,
        image,
        model,
        owner,
        status,
        healthLevel
      }
      await this.addAsset.add(asset)
      return created(asset)
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}