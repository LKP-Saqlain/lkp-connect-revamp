export interface TeamDistDetail {
  empCode: string;
  empName: string;
  empCategoryId: number;
  employeeType: string;
  hierarchyLevel: number;
}

export interface TeamDistSummary {
  empCode: string;
  employeeType: string;
  totalReporting: number;
  totalBM: number;
  totalTL: number;
  totalDealer: number;
  totalRM: number;
  totalBDM: number;
  totalCAD: number;
}

export interface TeamDistributionData {
  teamDistDetails: TeamDistDetail[];
  teamdistSummary: TeamDistSummary;
}

export interface GetTeamDistributionPayload {
  empCode: string;
  financialYear: string;
}

export interface GetTeamDistributionResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: TeamDistributionData;
  message: string;
}
