import { prisma } from "../../../lib/prisma";

interface ITransactionRequest {
  title: string;
  description?: string;
  value: number;
  type: string;
  user_id: string;
}

class CreateTransactionUseCase {
  async execute({
    title,
    description,
    value,
    type,
    user_id,
  }: ITransactionRequest) {
    const newTransaction = await prisma.transaction.create({
      data: {
        title,
        description: description ? description : "",
        value,
        type,
        user_id,
      },
    });

    if (!newTransaction) {
      throw new Error("Não foi possivel criar a transação");
    }

    return newTransaction;
  }
}

export { CreateTransactionUseCase };
