export const roleChipColors: Record<string, { bg: string; color: string }> = {
  RM: { bg: "#E6F0FB", color: "#185FA5" },
  BDM: { bg: "#E7F7EF", color: "#0F9D58" },
  Dealer: { bg: "#FFF3D6", color: "#9A6700" },
};

export const getRoleChipStyle = (role: string) =>
  roleChipColors[role] ?? { bg: "#EEF1F5", color: "#475467" };
