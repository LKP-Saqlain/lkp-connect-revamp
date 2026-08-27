import { getAccessToken as getSessionToken } from "@/auth/session";

export const getAccessToken = (): string | null => {
  return getSessionToken();
};
