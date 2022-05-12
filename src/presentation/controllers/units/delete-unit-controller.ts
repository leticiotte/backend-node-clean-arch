import { DeleteUnit } from "../../../domain/use-cases/units/delete-unit";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, created, ok, noContent } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class DeleteUnitController implements Controller {
  constructor(private readonly deleteUnit: DeleteUnit) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.unitId) {
        return badRequest(new MissingParamError("missing unitId parameter"));
      }
      const unitId = httpRequest.pathParameters.unitId;

      const result = await this.deleteUnit.delete(unitId);
      if(!result) return badRequest(new Error('Error deleting unit'))
      return noContent();

    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
