export const ROLE_CHIP_STYLES: Record<string, { bg: string; color: string }> = {
  RM: { bg: "#E6F0FB", color: "#185FA5" },
  Dealer: { bg: "#FFF3D6", color: "#9A6700" },
  BDM: { bg: "#E7F7EF", color: "#0F9D58" },
};

export const ROOT_CHIP_STYLE = { bg: "#EFE7FB", color: "#6941C6" };

export const ROOT_LABELS: Record<string, string> = {
  TL: "Team Leader",
  BM: "Branch Manager",
  AH: "Area Head",
};

export const getMemberChip = (empType: string, isRoot: boolean) => {
  if (isRoot) {
    return { label: ROOT_LABELS[empType] ?? empType, ...ROOT_CHIP_STYLE };
  }
  const style = ROLE_CHIP_STYLES[empType] ?? {
    bg: "#EEF1F5",
    color: "#475467",
  };
  return { label: empType, ...style };
};
