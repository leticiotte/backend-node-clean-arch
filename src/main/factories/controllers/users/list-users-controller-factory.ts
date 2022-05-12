import { ListUsersController } from "../../../../presentation/controllers/users/list-all-users-controller"
import { Controller } from "../../../../presentation/protocols"
import { ListUsers } from "../../../../domain/use-cases/users/list-all-users";


export const makeListUsersController = (makeListUsersUseCase: ListUsers): Controller => {
  return new ListUsersController(makeListUsersUseCase);
};
