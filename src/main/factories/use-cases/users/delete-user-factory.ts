import { DeleteUser } from "../../../../domain/use-cases/users/delete-user";
import { DbDeleteUser } from "../../../../data/use-cases/users/db-delete-user-use-cases";
import { MongoUserRepository } from "../../../../infra/repositories/mongo/mongo-user-repository";

export const makeDeleteUserUseCase = (User: any): DeleteUser => {
  const mongoDeleteUserRepository = new MongoUserRepository(User);
  return new DbDeleteUser(mongoDeleteUserRepository);
};
