const STORAGE_KEYS = {
  token: "lkp_token",
  userId: "lkp_user_id",
  userType: "lkp_user_type",
} as const;

export const setSession = (token: string, userId: string, userType: string) => {
  sessionStorage.setItem(STORAGE_KEYS.token, token);
  sessionStorage.setItem(STORAGE_KEYS.userId, userId);
  sessionStorage.setItem(STORAGE_KEYS.userType, userType);
};

export const getAccessToken = (): string | null => {
  return sessionStorage.getItem(STORAGE_KEYS.token);
};

export const getUserId = (): string | null => {
  return sessionStorage.getItem(STORAGE_KEYS.userId);
};

export const getUserType = (): string | null => {
  return sessionStorage.getItem(STORAGE_KEYS.userType);
};

export const clearSession = () => {
  sessionStorage.removeItem(STORAGE_KEYS.token);
  sessionStorage.removeItem(STORAGE_KEYS.userId);
  sessionStorage.removeItem(STORAGE_KEYS.userType);
};

export const hasSession = (): boolean => {
  return !!getAccessToken();
};
