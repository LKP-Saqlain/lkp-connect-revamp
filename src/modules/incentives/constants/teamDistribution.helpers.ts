import type { TeamDistDetail } from "../types/teamDistribution.types";

export const ROLE_LABELS: Record<string, string> = {
  RM: "Relationship Managers",
  Dealer: "Advisors – Dealing",
  BDM: "BDMs",
  TL: "Team Leaders",
  CAD: "CAD",
};

export const ROLE_CHIP_COLORS: Record<string, { bg: string; color: string }> = {
  RM: { bg: "#E6F0FB", color: "#185FA5" },
  Dealer: { bg: "#FFF3D6", color: "#9A6700" },
  BDM: { bg: "#E7F7EF", color: "#0F9D58" },
  TL: { bg: "#EFE7FB", color: "#6941C6" },
  CAD: { bg: "#EEF1F5", color: "#475467" },
};

export const ROOT_ROLE_LABELS: Record<string, string> = {
  TL: "Team Leader",
  BM: "Branch Manager",
  AH: "Area Head",
};

export interface TeamGroup {
  role: string;
  label: string;
  members: TeamDistDetail[];
}

export const groupTeamMembers = (details: TeamDistDetail[]): TeamGroup[] => {
  const nonRoot = details.filter((d) => d.hierarchyLevel > 0);

  const grouped = nonRoot.reduce<Record<string, TeamDistDetail[]>>(
    (acc, member) => {
      if (!acc[member.employeeType]) acc[member.employeeType] = [];
      acc[member.employeeType].push(member);
      return acc;
    },
    {},
  );

  return Object.entries(grouped).map(([role, members]) => ({
    role,
    label: ROLE_LABELS[role] ?? role,
    members,
  }));
};
