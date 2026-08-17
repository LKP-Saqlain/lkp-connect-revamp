import type { EmployeeIncentiveData } from "@/modules/incentives/types/incentive.types";

export interface GetTeamMemberDetailsPayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}

export interface GetTeamMemberDetailsResponse {
  // Add actual API response structure once backend response is available.
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

export interface GetIncentiveSlabsResponse {
  // Add actual API response structure once backend response is available.
  data?: unknown;
  message?: string;
  status?: boolean;
}
