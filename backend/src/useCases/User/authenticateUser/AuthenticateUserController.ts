import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { z } from "zod";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const userAuthenticateBody = z.object({
      email: z.string(),
      password: z.string(),
    });

    const { email, password } = userAuthenticateBody.parse(request.body);

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    const token = await authenticateUserUseCase.execute({ email, password });

    return response.json(token)
  }
}

export { AuthenticateUserController };
