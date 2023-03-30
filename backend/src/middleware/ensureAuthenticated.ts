import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response
      .status(401)
      .send({ error: "Não foi encontrando token de autorização" });
  }

  const [, token] = authToken.split(" ");

  try {
    jwt.verify(
      token,
      "D(G-KaPdSgVkYp3s6v9y$B&E)H@MbQeThWmZq4t7w!z%C*F-JaNdRfUjXn2r5u8x"
    );

    return next();
  } catch (error) {
    return response.status(401).send({ error: "Token inválido" });
  }
}
