import { GetUser } from "../../../domain/use-cases/users/get-user";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class GetUserController implements Controller {
  constructor(private readonly getUser: GetUser) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.userId) {
        return badRequest(new MissingParamError("missing userId parameter"));
      }
      const userId = httpRequest.pathParameters.userId;

      const result = await this.getUser.get(userId);
      if(!result) return notFound();
      return ok({user: result});
    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
