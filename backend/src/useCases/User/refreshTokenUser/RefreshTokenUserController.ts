import { Request, Response } from "express";
import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase";
import { z } from "zod";

class RefreshTokenUserController {
  async handle(request: Request, response: Response) {
    const refreshTokenBody = z.object({
      refresh_token: z.string(),
    });

    const { refresh_token } = refreshTokenBody.parse(request.body);

    const refreshTokenUserUseCase = new RefreshTokenUserUseCase();

    const token = await refreshTokenUserUseCase.execute(refresh_token);

    return response.json(token);
  }
}

export { RefreshTokenUserController };
