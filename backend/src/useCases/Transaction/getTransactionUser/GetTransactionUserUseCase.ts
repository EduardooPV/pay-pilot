import { prisma } from "../../../lib/prisma";

interface IGetTransactionRequest {
  id: string;
}

class GetTransactionUserUseCase {
  async execute({ id }: IGetTransactionRequest) {
    const userTransactions = await prisma.transaction.findMany({
      where: {
        user_id: id,
      },
    });

    if (!userTransactions) {
      throw new Error("Não foi possivel encontrar transações para o usuário");
    }

    return userTransactions;
  }
}

export { GetTransactionUserUseCase };
