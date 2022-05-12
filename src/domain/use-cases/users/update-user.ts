import { User } from "../../entities/user"

export interface UpdateUser {
  update: (user: User) => Promise<boolean>
}
