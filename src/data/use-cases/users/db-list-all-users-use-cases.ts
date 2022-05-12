import { User } from "../../../domain/entities/user";
import { ListUsers } from "../../../domain/use-cases/users/list-all-users";
import { ListUsersRepository } from "../../protocols/users/list-all-users-repository";

export class DbListUsers implements ListUsers {
  constructor (
    private readonly listUsersRepository: ListUsersRepository
    ) {}

  async list(companyId?: string): Promise<User[]> {
    return await this.listUsersRepository.list(companyId)
  }
}