import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

interface GetTransactionsUser {
  isFetching: boolean;
  data: GetTransactionsUserProps[];
}

interface GetTransactionsUserContext {
  children: ReactNode;
}

interface GetTransactionsUserProps {
  created_at: string;
  description?: string;
  id: string;
  title: string;
  type: "Expense" | "Income";
  user_id: string;
  value: number;
}

const GetTransactionsUserContext = createContext({} as GetTransactionsUser);

export function GetTransactionsUser({ children }: GetTransactionsUserContext) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<GetTransactionsUserProps[]>([]);

  useEffect(() => {
    async function getTransactions() {
      try {
        setIsFetching(true);
        const response = await api.get("/transaction");

        if (response) {
          setData(response.data);
          setIsFetching(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    }

    getTransactions();
  }, []);

  return (
    <GetTransactionsUserContext.Provider value={{ data, isFetching }}>
      {children}
    </GetTransactionsUserContext.Provider>
  );
}

export function UserTransactions() {
  return useContext(GetTransactionsUserContext);
}
