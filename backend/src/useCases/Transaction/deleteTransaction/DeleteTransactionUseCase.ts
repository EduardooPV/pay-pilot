import { prisma } from "../../../lib/prisma";

interface IGetTransactionRequest {
  id: string;
}

class DeleteTransactionUseCase {
  async execute({ id }: IGetTransactionRequest) {
    const transaction = await prisma.transaction.findFirst({
      where: {
        id,
      },
    });

    if (!transaction) {
      throw new Error("Transação não encontrada.");
    }

    await prisma.transaction.delete({
      where: {
        id,
      },
    });

    return transaction;
  }
}

export { DeleteTransactionUseCase };
