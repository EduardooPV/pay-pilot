import { prisma } from "../../../lib/prisma";

interface ISummaryTransactionsRequest {
  id: string;
}

class SummaryTransactionsUseCase {
  async execute({ id }: ISummaryTransactionsRequest) {
    const totalExpense = await prisma.transaction.aggregate({
      where: {
        user_id: id,
        type: "Expense",
      },
      _sum: {
        value: true,
      },
    });

    const totalIncome = await prisma.transaction.aggregate({
      where: {
        user_id: id,
        type: "Income",
      },
      _sum: {
        value: true,
      },
    });

    const summaryTransactions = {
      totalExpense: totalExpense._sum.value,
      totalIncome: totalIncome._sum.value,
      total: totalExpense._sum.value - totalIncome._sum.value,
    };

    return summaryTransactions;
  }
}

export { SummaryTransactionsUseCase };
