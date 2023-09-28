import UseCase from "../../shared/UseCase";
import { User } from "@prisma/client";
import UserRepository from "./UserRepository";


export default class FindUserById  implements UseCase<number, User | null>{
  constructor (private readonly repository: UserRepository){}
  execute(id: number): Promise<User | null> {
    return this.repository.findUserById(id)
  }

}