import { ListUsers } from "../../../../domain/use-cases/users/list-all-users";
import { DbListUsers } from "../../../../data/use-cases/users/db-list-all-users-use-cases";
import { MongoUserRepository } from "../../../../infra/repositories/mongo/mongo-user-repository";

export const makeListUsersUseCase = (User: any): ListUsers => {
  const mongoListUsersRepository = new MongoUserRepository(User);
  return new DbListUsers(mongoListUsersRepository);
};
