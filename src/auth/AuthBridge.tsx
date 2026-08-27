import type { ReactNode } from "react";
import { AuthProvider, useAuth } from "./AuthContext";

const AuthGate = ({ children }: { children: ReactNode }) => {
  const { ready, token } = useAuth();

  if (!ready) {
    return null;
  }

  if (!token) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        Unauthorized. Please launch this app from LKP Connect.
      </div>
    );
  }

  return <>{children}</>;
};

const AuthBridge = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <AuthGate>{children}</AuthGate>
    </AuthProvider>
  );
};

export default AuthBridge;
