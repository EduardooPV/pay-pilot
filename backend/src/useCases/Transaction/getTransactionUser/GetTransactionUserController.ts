import { Request, Response } from "express";
import { GetTransactionUserUseCase } from "./GetTransactionUserUseCase";
import { z } from "zod";

class GetTransactionUserController {
  async handle(request: Request, response: Response) {
    const transactionIdHeaders = z.object({
      id: z.string(),
    });

    const { id } = transactionIdHeaders.parse(request.headers);

    const getTransactionsUserUseCase = new GetTransactionUserUseCase();

    const user = await getTransactionsUserUseCase.execute({ id });

    return response.status(200).send(user);
  }
}

export { GetTransactionUserController };
