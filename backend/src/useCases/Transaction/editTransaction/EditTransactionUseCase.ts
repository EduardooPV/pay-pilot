import { prisma } from "../../../lib/prisma";

interface IEditTransactionRequest {
  id: string;
  title: string;
  description?: string;
  value: number;
  type: string;
}

class EditTransactionUseCase {
  async execute({
    id,
    title,
    description,
    value,
    type,
  }: IEditTransactionRequest) {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id,
      },
    });

    if (!transaction) {
      throw new Error("Transação não encontrada");
    }

    const updatedTransaction = await prisma.transaction.update({
      where: {
        id,
      },
      data: {
        title: title || transaction.title,
        description: description || transaction.description,
        value: value || transaction.value,
        type: type || transaction.type,
      },
    });

    return updatedTransaction;
  }
}

export { EditTransactionUseCase };
