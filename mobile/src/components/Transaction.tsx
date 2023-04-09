import { View, Text } from "react-native";

import { formatValue } from "../util/formatValue";

import IncomeImage from "../assets/incomebutton.svg";
import ExpenseImage from "../assets/expensebutton.svg";
import clsx from "clsx";

interface TransactionProps {
  title: string;
  value: number;
  createdAt: string;
  type: "Income" | "Expense";
}

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export default function Transaction({
  title,
  value,
  createdAt,
  type,
}: TransactionProps) {
  const formatedDate = (createdAt: string) => {
    const date = new Date(createdAt);

    const day = date.getDate();
    const month = months[date.getMonth()];

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day} de ${month} - ${hours}:${minutes}h`;
  };

  const newDateFormated = formatedDate(createdAt);
  const newValueFormated = formatValue(value).split(",");

  return (
    <View className="w-full p-[16px] flex-row justify-between items-center">
      <View className="flex-row items-center flex-1">
        {type === "Income" ? (
          <IncomeImage color="#E00000" />
        ) : (
          <ExpenseImage color="#3FCD1B" />
        )}

        <View className="ml-3 mr-2 flex-1 ">
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-neutral600 leading-[25px] text-paragraph2 capitalize truncate"
          >
            {title}
          </Text>
          <Text className="text-neutral40000 text-[11px]">
            {newDateFormated}
          </Text>
        </View>
      </View>

      <Text
        className={clsx("leading-[25px] text-paragraph1", {
          "text-success": type === "Expense",
          "text-error": type === "Income",
        })}
      >
        {type === "Income" ? "- $" : "$"}
        {newValueFormated[0]},
        <Text className="leading-[25px] text-caption">
          {newValueFormated[1]}
        </Text>
      </Text>
    </View>
  );
}
