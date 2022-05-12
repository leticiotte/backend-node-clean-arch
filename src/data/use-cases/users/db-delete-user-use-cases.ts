import { DeleteUser } from "../../../domain/use-cases/users/delete-user";
import { DeleteUserRepository } from "../../protocols/users/delete-user-repository";

export class DbDeleteUser implements DeleteUser {
  constructor (
    private readonly deleteUserRepository: DeleteUserRepository
    ) {}

  async delete (userId: string): Promise<boolean> {
    return await this.deleteUserRepository.delete(userId)
  }
}