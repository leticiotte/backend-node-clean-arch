import { DeleteUserController } from "../../../../presentation/controllers/users/delete-user-controller"
import { Controller } from "../../../../presentation/protocols"
import { DeleteUser } from "../../../../domain/use-cases/users/delete-user";


export const makeDeleteUserController = (makeDeleteUserUseCase: DeleteUser): Controller => {
  return new DeleteUserController(makeDeleteUserUseCase);
};
