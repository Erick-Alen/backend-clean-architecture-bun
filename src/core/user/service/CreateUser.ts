import UseCase from "../../shared/UseCase";
import UserRepository from "./UserRepository";

type Input = {
  name: string;
  email: string;
  password: string;
}

export default class CreateUser implements UseCase<Input, void> {
  constructor(private readonly repository: UserRepository) {}

  async execute(data: Input): Promise<void> {
    const {name, email, password} = data;

    const userAlreadyExists = await this.repository.checkEmail(email);
    if (userAlreadyExists){
      throw new Error('User already exists')
    }

    await this.repository.create({name, email, password})
  }

}
