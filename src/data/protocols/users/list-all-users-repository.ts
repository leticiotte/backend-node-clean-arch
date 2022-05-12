import { User } from "../../../domain/entities/user";

export interface ListUsersRepository {
  list: (companyId?: string) => Promise<User[]>
}
