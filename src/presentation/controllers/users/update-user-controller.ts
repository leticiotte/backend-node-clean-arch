import { User } from "../../../domain/entities/user";
import { GetCompany } from "../../../domain/use-cases/companies/get-company";
import { UpdateUser } from "../../../domain/use-cases/users/update-user";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, ok, notFound } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class UpdateUserController implements Controller {
  constructor(private readonly updateUser: UpdateUser, private readonly getCompany: GetCompany) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.companyId) {
        return badRequest(new MissingParamError("missing companyId parameter"));
      }
      const companyId = httpRequest.pathParameters.companyId;

      if (!httpRequest.pathParameters?.userId) {
        return badRequest(new MissingParamError("missing userId parameter"));
      }
      const userId = httpRequest.pathParameters.userId;

      const requiredFields = [ 'name', 'email', 'cpf']
      for (const field of requiredFields) {
        if (httpRequest.body[field] === undefined) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, cpf } = httpRequest.body
      const company = await this.getCompany.get(companyId)
      if(!company) return badRequest(new Error("Company doesn't exist."));

      const user: User = {
        _id: userId,
        companyId,
        name,
        email,
        cpf
      }
      const result = await this.updateUser.update(user)
      if(!result) return notFound();
      return ok({user});
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}
