import { User } from "../../../domain/entities/user";
import { AddUser } from "../../../domain/use-cases/users/add-user";
import { AddUserRepository } from "../../protocols/users/add-user-repository";

export class DbAddUser implements AddUser {
  constructor (
    private readonly addUserRepository: AddUserRepository
    ) {}

  async add (user: User): Promise<boolean> {
    return await this.addUserRepository.add(user)
  }
}