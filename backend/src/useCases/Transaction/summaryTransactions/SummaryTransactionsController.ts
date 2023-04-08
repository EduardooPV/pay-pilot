import { Request, Response } from "express";
import { SummaryTransactionsUseCase } from "./SummaryTransactionsUseCase";
import { z } from "zod";

class SummaryTransactionController {
  async handle(request: Request, response: Response) {
    const idUser = z.object({
      id: z.string(),
    });

    const { id } = idUser.parse(request.headers);

    const summaryTransactionUseCase = new SummaryTransactionsUseCase();

    const summary = await summaryTransactionUseCase.execute({ id });

    return response.status(200).send(summary);
  }
}

export { SummaryTransactionController };
