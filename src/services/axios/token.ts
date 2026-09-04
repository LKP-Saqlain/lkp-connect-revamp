const STORAGE_KEYS = {
  token: "lkp_token",
} as const;

export const getAccessToken = (): string | null => {
  return sessionStorage.getItem(STORAGE_KEYS.token);
  // return "BW0NgzsfHo4AeiSmDVe0Z5m24MHq7mzDyH3Ed6Zj5IM=";
};
