import { createContext, ReactNode, useEffect, useState } from 'react';
import { getToken, removeToken, saveToken } from '@/utils/storage';

type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadToken() {
      const storedToken = await getToken();
      setToken(storedToken);
      setIsLoading(false);
    }

    loadToken();
  }, []);

  async function login(newToken: string) {
    await saveToken(newToken);
    setToken(newToken);
  }

  async function logout() {
    await removeToken();
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}