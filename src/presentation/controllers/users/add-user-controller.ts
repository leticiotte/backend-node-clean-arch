import { User } from "../../../domain/entities/user";
import { GetCompany } from "../../../domain/use-cases/companies/get-company";
import { AddUser } from "../../../domain/use-cases/users/add-user";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, serverError, created } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";


export class AddUserController implements Controller {
  constructor (
    private readonly addUser: AddUser, private readonly getCompany: GetCompany
    ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.pathParameters?.companyId) {
        return badRequest(new MissingParamError("missing companyId parameter"));
      }
      const companyId = httpRequest.pathParameters.companyId;

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
        companyId,
        name,
        email,
        cpf
      }
      await this.addUser.add(user)
      return created(user)
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}