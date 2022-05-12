import { User } from "../../../domain/entities/user";
import { UpdateUser } from "../../../domain/use-cases/users/update-user";
import { UpdateUserRepository } from "../../protocols/users/update-user-repository";

export class DbUpdateUser implements UpdateUser {
  constructor (
    private readonly updateUserRepository: UpdateUserRepository
    ) {}

  async update (user: User): Promise<boolean> {
    return await this.updateUserRepository.update(user)
  }
}