import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
        setIsAuthenticated(false);
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
