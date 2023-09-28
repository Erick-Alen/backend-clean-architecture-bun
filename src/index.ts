import app from "./external/api/config";
import UserMemoRepository from "./external/memory/UserMemoRepository";
import CreateUser from "./core/user/service/CreateUser";
import CreateUserController from "./adapters/CreateUserController";
import UserRepositoryPrismaPg from "./external/prisma/UserRepositoryPrismaPg";
import FindAllUsers from "./core/user/service/FindAllUsers";
import FindAllUsersController from "./adapters/FindAllUsersController";
import FindUserByIdController from "./adapters/FindUserByIdController";
import FindUserById from "./core/user/service/FindUserById";


//----------------------------register routes
const userRepository = new UserMemoRepository()
//when using postgresql
// const userRepository = new UserRepositoryPrismaPg()
const createUser = new CreateUser(userRepository)
new CreateUserController(app, createUser)


const findAllUsers = new FindAllUsers(userRepository)
new FindAllUsersController(app, findAllUsers)

const findUserById = new FindUserById(userRepository)
new FindUserByIdController(app, findUserById)


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
