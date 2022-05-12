import { GetUser } from "../../../../domain/use-cases/users/get-user";
import { DbGetUser } from "../../../../data/use-cases/users/db-get-user-use-cases";
import { MongoUserRepository } from "../../../../infra/repositories/mongo/mongo-user-repository";

export const makeGetUserUseCase = (User: any): GetUser => {
  const mongoGetUserRepository = new MongoUserRepository(User);
  return new DbGetUser(mongoGetUserRepository);
};
