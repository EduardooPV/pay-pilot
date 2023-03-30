import { Request, Response } from "express";
import { EditTransactionUseCase } from "./EditTransactionUseCase";
import { z } from "zod";

class EditTransactionController {
  async handle(request: Request, response: Response) {
    const transactionIdHeaders = z.object({
      id: z.string(),
    });

    const { id } = transactionIdHeaders.parse(request.headers);

    const updateTransactionBody = z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      value: z.number().optional(),
      type: z.enum(["Income", "Expense"]),
    });

    const { title, description, value, type } = updateTransactionBody.parse(
      request.body
    );

    const editTransactionsUseCase = new EditTransactionUseCase();

    const transaction = await editTransactionsUseCase.execute({
      title,
      description,
      value,
      type,
      id,
    });

    return response.status(200).send(transaction);
  }
}

export { EditTransactionController };
