import Elysia from "elysia";
import FindAllUsers from "../core/user/service/FindAllUsers";

export default class FindAllUsersController { 
  constructor(
    readonly server: Elysia,
    readonly useCase: FindAllUsers,
    ){
      server.get(`/users`, async () => {
        return useCase.execute()
      })
    }
}