const mongoose = require("mongoose");

import { AddUserRepository } from "../../../data/protocols/users/add-user-repository";
import { DeleteUserRepository } from "../../../data/protocols/users/delete-user-repository";
import { GetUserRepository } from "../../../data/protocols/users/get-user-repository";
import { ListUsersRepository } from "../../../data/protocols/users/list-all-users-repository";
import { UpdateUserRepository } from "../../../data/protocols/users/update-user-repository";
import { User } from "../../../domain/entities/user";

export class MongoUserRepository
  implements
    AddUserRepository,
    DeleteUserRepository,
    GetUserRepository,
    ListUsersRepository,
    UpdateUserRepository
{

  constructor (
    private readonly userModel: any
    ) {}

  async add(user: User): Promise<boolean> {
    try {
      await this.userModel.create(user);
      return true;
    } catch (error) {
      return false;
    }
  }

  async get(userId: string): Promise<User | undefined> {
    try {
      const user = await this.userModel.findOne({ _id: userId });
      return user;
    } catch (error) {
      return undefined;
    }
  }

  async list(companyId?: string): Promise<User[]> {
    try {
      let filter;
      if(companyId)  filter = { $text : { $search : companyId } }
      const users = await this.userModel.find(filter);
      return users;
    } catch (error) {
      return undefined;
    }
  }

  async delete(userId: string): Promise<boolean> {
    try {
      await this.userModel.deleteOne({ _id: userId });
      return true;
    } catch (error) {
      return false;
    }
  }

  async update(user: User): Promise<boolean> {
    const userUpdate = {
      companyId: user.companyId,
      name: user.name,
      email: user.email,
      cpf: user.cpf
    } 
    try {
      const updtatedUser = await this.userModel.updateOne({ _id: user._id }, userUpdate);
      if (updtatedUser.matchedCount === 0) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}
