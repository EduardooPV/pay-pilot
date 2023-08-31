import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FireBaseConfig";

interface UserAuthProps {
  user: User | null;
  authChecked: boolean;
}

interface UserAuthContext {
  children: ReactNode;
}

const UserAuthContext = createContext({} as UserAuthProps);

export function UserAuthProvider({ children }: UserAuthContext) {
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      setAuthChecked(true);
    });
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, authChecked }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(UserAuthContext);
}
