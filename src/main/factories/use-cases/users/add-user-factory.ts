import { AddUser } from "../../../../domain/use-cases/users/add-user";
import { DbAddUser } from "../../../../data/use-cases/users/db-add-user-use-cases";
import { MongoUserRepository } from "../../../../infra/repositories/mongo/mongo-user-repository";

export const makeAddUserUseCase = (User: any): AddUser => {
  const mongoAddUserRepository = new MongoUserRepository(User);
  return new DbAddUser(mongoAddUserRepository);
};
