import User from "../model/User";

export default interface UserRepository {
  findAll(): Promise<User[]>;
  findUserById(id:number): Promise<User | null>;
  checkEmail(email: string): Promise<User | null>
  create(user: User): Promise<User>
}