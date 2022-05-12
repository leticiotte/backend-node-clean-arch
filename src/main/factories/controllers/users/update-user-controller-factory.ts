import { UpdateUserController } from "../../../../presentation/controllers/users/update-user-controller"
import { Controller } from "../../../../presentation/protocols"
import { UpdateUser } from "../../../../domain/use-cases/users/update-user";
import { GetCompany } from "../../../../domain/use-cases/companies/get-company";


export const makeUpdateUserController = (makeUpdateUserUseCase: UpdateUser, makeGetCompanyUseCase: GetCompany): Controller => {
  return new UpdateUserController(makeUpdateUserUseCase, makeGetCompanyUseCase);
};
