const STORAGE_KEYS = {
  token: "lkp_token",
} as const;

export const getAccessToken = (): string | null => {
  return sessionStorage.getItem(STORAGE_KEYS.token);
};
