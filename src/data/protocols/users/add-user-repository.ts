import { User } from "../../../domain/entities/user";

export interface AddUserRepository {
  add: (user: User) => Promise<boolean>
}
