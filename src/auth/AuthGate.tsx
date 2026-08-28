import type { ReactNode } from "react";
import { useAuth } from "./AuthContext";
import unauthorizedImage from "@/assets/images/unauthorized.png";

const AuthGate = ({ children }: { children: ReactNode }) => {
  const { ready, token } = useAuth();

  if (!ready) {
    return null;
  }

  if (!token) {
    return (
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <img
          src={unauthorizedImage}
          alt="Unauthorized - Please launch this app from LKP Connect"
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "auto",
            display: "block",
          }}
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGate;
