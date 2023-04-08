import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

interface SummaryUserProvider {
  children: ReactNode;
}

interface SummaryUserProps {
  totalIncome: number;
  totalExpense: number;
  total: number;
}

const SummaryUserContext = createContext<SummaryUserProps | undefined>(
  undefined
);

export function SummaryUser({ children }: SummaryUserProvider) {
  const [isFetching, setIsFetching] = useState(false);
  const [summary, setSummary] = useState<SummaryUserProps>();

  useEffect(() => {
    async function getSummary() {
      try {
        setIsFetching(true);
        const response = await api.get("/transaction/summary");

        if (response) {
          setSummary(response.data);
          setIsFetching(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    }

    getSummary();
  }, []);

  return (
    <SummaryUserContext.Provider value={summary}>
      {children}
    </SummaryUserContext.Provider>
  );
}

export function Summary() {
  return useContext(SummaryUserContext);
}
