import { UpdateUser } from "../../../../domain/use-cases/users/update-user";
import { DbUpdateUser } from "../../../../data/use-cases/users/db-update-user-use-cases";
import { MongoUserRepository } from "../../../../infra/repositories/mongo/mongo-user-repository";

export const makeUpdateUserUseCase = (User: any): UpdateUser => {
  const mongoUpdateUserRepository = new MongoUserRepository(User);
  return new DbUpdateUser(mongoUpdateUserRepository);
};
