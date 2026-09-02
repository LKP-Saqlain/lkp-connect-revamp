export interface TeamSummaryMember {
  empCode: string;
  empName: string;
  empType: string;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
}

export type TeamSummaryOptionType = "Multiple_summary" | "Incentive_summary";

export interface GetTeamMultipleAndIncentiveSummaryPayload {
  empCode: string;
  financialYear: string;
  optionType: TeamSummaryOptionType;
}

export interface GetTeamMultipleAndIncentiveSummaryResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: TeamSummaryMember[];
  message: string;
}

export interface TeamSummaryMember {
  empCode: string;
  empName: string;
  empCategory: string;
  ctc: number;
  brokingRevenue: number;
  brokingCredit: number;
  nonBrokingRevenue: number;
  nonBrokingCredit: number;
  totalRevenue: number;
  totalCredit: number;
  brokingMultiple: number;
  nonBrokingMultiple: number;
  totalMultiple: number;
  isQualified: boolean;
}

export interface TeamSummaryData {
  totalMembers: number;
  qualifiedMembers: number;
  totalBrokingRevenue: number;
  totalBrokingCredit: number;
  totalNonBrokingRevenue: number;
  totalNonBrokingCredit: number;
  brokingMultiple: number;
  nonBrokingMultiple: number;
  totalRevenue: number;
  totalCredit: number;
  teamMultiple: number;
  teamCTC: number;
}

export interface GetTeamSummaryResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: {
    members: TeamSummaryMember[];
    summary: TeamSummaryData;
  };
  message: string;
}

export interface GetTeamSummaryPayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}
