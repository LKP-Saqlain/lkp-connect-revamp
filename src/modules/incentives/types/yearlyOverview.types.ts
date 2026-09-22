export interface YearlyOverviewSummary {
  empCode: string;
  employeeType: string;
  policyId: string;
  empCTC: number;
  brokingCredits: number;
  nonBrokingCredits: number;
  totalCredits: number;
  revenueMultiple: number;
  brokingPercent: number;
  nonBrokingPercent: number;
  teamCTC: number;
  teamRevenueMultiple: number;
  teamBrokingCredits: number;
  teamNonBrokingCredits: number;
  teamTotalBrokingCredits: number;
  mpc: string;
}

export interface YearlyIncentiveQuarter {
  empCode: string;
  quarterName: string;
  finalIncentive: string;
}

export interface YearlyOverviewData {
  yearlyOverview: YearlyOverviewSummary;
  yearlyIncentive: YearlyIncentiveQuarter[];
}

export interface GetYearlyOverviewPayload {
  empCode: string;
  financialYear: string;
}

export interface GetYearlyOverviewResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: YearlyOverviewData;
  message: string;
}

// ---- Yearly client revenue ----
export interface GetYearlyClientwiseRevenuePayload {
  empCode: string;
  financialYear: string;
}

export interface GetYearlyClientwiseDetailsRevenuePayload {
  clientcode: string;
  financialYear: string;
}

// ---- Yearly emp-wise revenue breakdown ----
export interface GetYearlyEmpwiseDetailsRevenuePayload {
  empCode: string;
  financialYear: string;
}

// ---- New client business (yearly client acquisition) ----
export interface GetNewClientBusinessPayload {
  empCode: string;
  financialYear: string;
}
