import { User } from "../../../domain/entities/user";
import { GetUser } from "../../../domain/use-cases/users/get-user";
import { GetUserRepository } from "../../protocols/users/get-user-repository";

export class DbGetUser implements GetUser {
  constructor (
    private readonly getUserRepository: GetUserRepository
    ) {}

  async get (userId: string): Promise<User> {
    return await this.getUserRepository.get(userId)
  }
}