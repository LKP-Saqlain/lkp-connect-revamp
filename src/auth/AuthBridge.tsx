import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { decryptAES } from "@/utils/encryptDecrypt";
import { setSession, hasSession } from "./session";

interface AuthBridgeProps {
  children: ReactNode;
}

const stripEmpPrefix = (userId: string): string => {
  return userId.replace(/^EMP-/i, "");
};

const AuthBridge = ({ children }: AuthBridgeProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encryptedData = params.get("data");

    if (encryptedData) {
      try {
        const decrypted = decryptAES(encryptedData);

        console.log("DecryptedData", decrypted);
        const { token, user_id, user_type } = JSON.parse(decrypted);

        if (token && user_id && user_type) {
          const cleanUserId = stripEmpPrefix(user_id);
          setSession(token, cleanUserId, user_type);
        } else {
          console.error("Decrypted payload missing required fields");
        }
      } catch (error) {
        console.error("Failed to decrypt auth payload", error);
      }

      // Wipe the entire query string, leaving just the bare path
      window.history.replaceState({}, "", window.location.pathname);
    }

    setReady(true);
  }, []);

  if (!ready) {
    return null;
  }

  if (!hasSession()) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        Unauthorized. Please launch this app from LKP Connect.
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthBridge;
