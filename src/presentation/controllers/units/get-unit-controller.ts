import { GetUnit } from "../../../domain/use-cases/units/get-unit";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class GetUnitController implements Controller {
  constructor(private readonly getUnit: GetUnit) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.unitId) {
        return badRequest(new MissingParamError("missing unitId parameter"));
      }
      const unitId = httpRequest.pathParameters.unitId;

      const result = await this.getUnit.get(unitId);
      if(!result) return notFound();
      return ok({unit: result});
    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
