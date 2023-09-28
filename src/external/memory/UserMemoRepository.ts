import User from "../../core/user/model/User";
import UserRepository from "../../core/user/service/UserRepository";

export default class UserMemoRepository implements UserRepository{
  private readonly users: User[] = []

  async findUserById(id: number): Promise<User | null> {
    return this.users.find((user)=> user.id === id) ?? null
  }  
  
  async findAll(): Promise<User[]> {
    return this.users
  }

  async checkEmail (email: string): Promise<User | null> {
    return this.users.find((user)=> user.email === email) ?? null
  }
  async create(user: User): Promise<User> {
    const newUser = {...user, id:Math.random()}
    this.users.push(newUser);
    return newUser
  }

  

}