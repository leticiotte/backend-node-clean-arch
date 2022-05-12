import { User } from "../../entities/user"

export interface ListUsers {
  list: (companyId?: string) => Promise<User[]>
}
