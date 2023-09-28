import UseCase from "../../shared/UseCase";
// import User from "../model/User";
import { User } from "@prisma/client";
import UserRepository from "./UserRepository";

export default class FindAllUsers implements UseCase<void, User[]>{
  constructor(readonly repository: UserRepository){}
  execute(): Promise<User[]> {
    return this.repository.findAll()
  }

}