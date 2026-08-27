import type { EmployeeIncentiveData } from "@/modules/incentives/types/incentive.types";

export interface GetTeamMemberDetailsPayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}

export interface GetTeamMemberDetailsResponse {
  data?: unknown;
  message?: string;
  status?: boolean;
}

export interface CalculateEmployeeIncentivePayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}

export interface CalculateEmployeeIncentiveResponse {
  data?: EmployeeIncentiveData;
  message?: string;
  status?: boolean;
}

export interface GetIncentiveSlabsPayload {
  empCode: string;
  financialYear: string;
}

export interface GetclientwiseRevenuePayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}
export interface GetclientwiseDetailRevenuePayload {
  clientcode: string;
  financialYear: string;
  quarterName: string;
}

export interface GetEmpwiseDetailsRevenuePayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}

export interface GetClientAcquisitionPayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}

export interface GetRevenueEmployeeTypePayload {
  empcode: string;
}

// export interface GetclientwiseDetailsRevenue {
//   empCode: string;
//   financialYear: string;
//   quarterName: string;
// }

// export interface GetIncentiveSlabsResponse {
//   // Add actual API response structure once backend response is available.
//   data?: unknown;
//   message?: string;
//   status?: boolean;
// }

export interface IncentiveSlab {
  empcode: string;
  fromMultiple: number;
  toMultiple: number;
  brokingPercentage: number;
  nonBrokingPercentage: number;
  boosterPercentage: string;
}

export interface GetIncentiveSlabsResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: IncentiveSlab[];
  message: string;
}
