import { DeleteUser } from "../../../domain/use-cases/users/delete-user";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, created, ok, noContent } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class DeleteUserController implements Controller {
  constructor(private readonly deleteUser: DeleteUser) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.userId) {
        return badRequest(new MissingParamError("missing userId parameter"));
      }
      const userId = httpRequest.pathParameters.userId;

      const result = await this.deleteUser.delete(userId);
      if(!result) return badRequest(new Error('Error deleting user'))
      return noContent();

    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
