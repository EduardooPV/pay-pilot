import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserAuthProps {
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface UserAuthContext {
  children: ReactNode;
}

const UserAuthContext = createContext({} as UserAuthProps);

export function UserAuthProvider({ children }: UserAuthContext) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        if (token) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <UserAuthContext.Provider value={{ isLoading, isAuthenticated }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(UserAuthContext);
}
