import { User } from "../../../domain/entities/user";

export interface UpdateUserRepository {
  update: (user: User) => Promise<boolean>
}
