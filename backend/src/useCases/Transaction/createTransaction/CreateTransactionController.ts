import { Request, Response } from "express";
import { z } from "zod";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const createTransactionBody = z.object({
      title: z.string(),
      description: z.string().optional(),
      value: z.number(),
      type: z.enum(["Income", "Expense"]),
      user_id: z.string(),
    });

    const { title, description, value, type, user_id } =
      createTransactionBody.parse(request.body);

    const createTransactionUseCase = new CreateTransactionUseCase();

    const transaction = createTransactionUseCase.execute({
      title,
      description,
      value,
      type,
      user_id,
    });

    return response.status(200).send(transaction);
  }
}

export { CreateTransactionController };
