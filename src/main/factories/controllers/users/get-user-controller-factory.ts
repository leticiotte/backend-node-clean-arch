import { GetUserController } from "../../../../presentation/controllers/users/get-user-controller"
import { Controller } from "../../../../presentation/protocols"
import { GetUser } from "../../../../domain/use-cases/users/get-user";


export const makeGetUserController = (makeGetUserUseCase: GetUser): Controller => {
  return new GetUserController(makeGetUserUseCase);
};
