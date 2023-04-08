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

interface SummaryUserContextProps {
  summary: SummaryUserProps | undefined;
  loading: boolean;
}

const SummaryUserContext = createContext<SummaryUserContextProps>({
  summary: undefined,
  loading: true,
});

export function SummaryUser({ children }: SummaryUserProvider) {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<SummaryUserProps>();

  useEffect(() => {
    async function getSummary() {
      try {
        const response = await api.get("/transaction/summary");

        if (response) {
          setSummary(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getSummary();
  }, []);

  return (
    <SummaryUserContext.Provider value={{ summary, loading }}>
      {children}
    </SummaryUserContext.Provider>
  );
}

export function Summary() {
  return useContext(SummaryUserContext);
}
