import { User } from "../../../domain/entities/user";

export interface GetUserRepository {
  get: (userId: string) => Promise<User>
}
