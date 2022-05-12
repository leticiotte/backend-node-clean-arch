import { ListUsers } from "../../../domain/use-cases/users/list-all-users";
import { serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class ListUsersController implements Controller {
  constructor(private readonly listUsers: ListUsers) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const filter = httpRequest.queryParameters?.companyId
      const result = await this.listUsers.list(filter);
      if(!result) return notFound();
      return ok({ companyId: filter, users: result});
    } catch (error) {
      console.error(error);
      return serverError(error as Error);
    }
  }
}
