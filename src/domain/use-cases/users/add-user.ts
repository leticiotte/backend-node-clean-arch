import { User } from "../../entities/user";

export interface AddUser {
  add: (user: User) => Promise<boolean>
}
