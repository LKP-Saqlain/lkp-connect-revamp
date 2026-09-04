import type { EmployeeIncentiveData } from "@/modules/incentives/types/incentive.types";

export interface CalculateEmployeeIncentivePayload {
  empCode: any;
  financialYear: any;
  quarterName: any;
}

export interface CalculateEmployeeIncentiveResponse {
  data?: EmployeeIncentiveData;
  message?: string;
  status?: boolean;
}

export interface GetIncentiveSlabsPayload {
  empCode: string | any;
  financialYear: string;
}

export interface GetclientwiseRevenuePayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}
export interface GetclientwiseDetailRevenuePayload {
  clientcode: string | any;
  financialYear: string | any;
  quarterName: string | any;
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
  empcode: string | any;
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

export interface GetClientAcquisitionReportingHeadPayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}

export interface GetTeamDistributionPayload {
  empCode: string;
  financialYear: string;
}

export interface TeamSummaryBasePayload {
  empCode: string;
  financialYear: string;
}
