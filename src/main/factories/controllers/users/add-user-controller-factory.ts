import { AddUserController } from "../../../../presentation/controllers/users/add-user-controller"
import { Controller } from "../../../../presentation/protocols"
import { AddUser } from "../../../../domain/use-cases/users/add-user";
import { GetCompany } from "../../../../domain/use-cases/companies/get-company";


export const makeAddUserController = (makeAddUserUseCase: AddUser, makeGetCompanyUseCase: GetCompany): Controller => {
  return new AddUserController(makeAddUserUseCase, makeGetCompanyUseCase);
};
