import User from "../../core/user/model/User";
import UserRepository from "../../core/user/service/UserRepository";
import { PrismaClient } from "@prisma/client";

export default class UserRepositoryPrismaPg implements UserRepository{
  private prisma: PrismaClient
  constructor(){
    this.prisma = new PrismaClient()
  }
  findUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where:{
        id,
      }
    })
  }

  findAll(): Promise<User[]> {
    return this.prisma.users.findMany()
  }

  checkEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where:{
        email,
      }
    })
  }
  create(user: User): Promise<User> {
    return this.prisma.user.create({data: user})
  }

}