import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import { decryptAES } from "@/utils/encryptDecrypt";

const STORAGE_KEYS = {
  token: "lkp_token",
  userId: "lkp_user_id",
  userType: "lkp_user_type",
} as const;

interface AuthState {
  token: string | null;
  userId: string | null;
  userType: string | null;
  ready: boolean;
}

const AuthContext = createContext<AuthState>({
  token: null,
  userId: null,
  userType: null,
  ready: false,
});

const stripEmpPrefix = (userId: string): string => {
  return userId.replace(/^EMP-/i, "");
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>({
    token: sessionStorage.getItem(STORAGE_KEYS.token),
    userId: sessionStorage.getItem(STORAGE_KEYS.userId),
    userType: sessionStorage.getItem(STORAGE_KEYS.userType),
    ready: false,
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encryptedData = params.get("data");

    if (encryptedData) {
      try {
        const decrypted = decryptAES(encryptedData);
        const { token, user_id, user_type } = JSON.parse(decrypted);

        if (token && user_id && user_type) {
          const cleanUserId = stripEmpPrefix(user_id);

          sessionStorage.setItem(STORAGE_KEYS.token, token);
          sessionStorage.setItem(STORAGE_KEYS.userId, cleanUserId);
          sessionStorage.setItem(STORAGE_KEYS.userType, user_type);

          // This is the critical part: push the freshly-decrypted values
          // into React state directly, instead of relying on a later
          // re-render to re-read sessionStorage.
          setState({
            token,
            userId: cleanUserId,
            userType: user_type,
            ready: true,
          });
        } else {
          console.error("Decrypted payload missing required fields");
          setState((prev) => ({ ...prev, ready: true }));
        }
      } catch (error) {
        console.error("Failed to decrypt auth payload", error);
        setState((prev) => ({ ...prev, ready: true }));
      }

      window.history.replaceState({}, "", window.location.pathname);
    } else {
      // No data param — rely on whatever was already in sessionStorage
      // (e.g. a page refresh after the first successful decrypt)
      setState((prev) => ({ ...prev, ready: true }));
    }
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
