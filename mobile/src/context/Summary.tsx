import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { UserAuth } from "./FireBaseAuth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { FIREBASE_DB } from "../../FireBaseConfig";

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
  const { user } = UserAuth();
  const db = FIREBASE_DB;
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<SummaryUserProps>();

  useEffect(() => {
    async function getSummary() {
      try {
        if (user?.email) {
          const docRef = doc(db, "users", user?.email);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setSummary({
              totalIncome: Number(docSnap.data().income),
              totalExpense: Number(docSnap.data().expensive),
              total: Number(docSnap.data().income - docSnap.data().expensive),
            });
            setLoading(false);
          } else {
            console.log("No such document!");
          }
        }
      } catch (e) {
        console.error("Error adding document: ", e);
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
