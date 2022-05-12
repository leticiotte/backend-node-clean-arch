import { User } from "../../entities/user";

export interface GetUser {
  get: (userId: string) => Promise<User>
}
