import type { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import AuthGate from "./AuthGate";

const AuthBridge = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <AuthGate>{children}</AuthGate>
    </AuthProvider>
  );
};

export default AuthBridge;
