import Elysia from "elysia";
import FindUserById from "../core/user/service/FindUserById";

export default class FindUserByIdController { 
  constructor(
    readonly server: Elysia,
    readonly useCase: FindUserById,
    ){
      server.get(`/users/:id`, async ({params}) => {
        return useCase.execute(+params.id)
      })
    }
}