import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { z } from "zod";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserBody = z.object({
      email: z.string(),
      password: z.string(),
    });

    const { email, password } = createUserBody.parse(request.body);

    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute({ email, password });

    return response.status(200).send(user);
  }
}

export { CreateUserController };
