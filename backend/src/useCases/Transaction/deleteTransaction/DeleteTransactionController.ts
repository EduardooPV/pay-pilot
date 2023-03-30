import { Request, Response } from "express";
import { z } from "zod";
import { DeleteTransactionUseCase } from "./DeleteTransactionUseCase";

class DeleteTransactionController {
  async handle(request: Request, response: Response) {
    const transactionsIdHeaders = z.object({
      id: z.string(),
    });

    const { id } = transactionsIdHeaders.parse(request.headers);

    const deleteTransactionUseCase = new DeleteTransactionUseCase();

    const transaction = await deleteTransactionUseCase.execute({ id });

    return response.status(200).send(transaction);
  }
}

export { DeleteTransactionController };
