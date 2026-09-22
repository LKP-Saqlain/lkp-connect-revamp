export interface AnnualTargetSummary {
  empCode: string;
  brokingTarget: number;
  brokingCredits: number;
  nonBrokingTarget: number;
  nonBrokingCredits: number;
  totalTarget: number;
  totalCredits: number;
}

export interface AnnualRevenueMonth {
  empCode: string;
  monthName: string;
  brokingCredits: number;
  nonBrokingCredits: number;
}

export interface AnnualTargetData {
  annualtarget: AnnualTargetSummary;
  annualRevenueMonthwise: AnnualRevenueMonth[];
}

export interface GetAnnualTargetDetailsPayload {
  empcode: string;
}

export interface GetAnnualTargetDetailsResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: AnnualTargetData;
  message: string;
}

export interface CADAnnualTargetSummary {
  annualAccountTarget: number;
  annualAchievedTarget: number;
}

export interface CADQuarterWiseTarget {
  empCode: string;
  quarter: string;
  targetAccounts: number;
  achieved: number;
  status: string;
}

export interface CADAnnualTargetData {
  cadAnnualTarget: CADAnnualTargetSummary;
  cadQuarterWiseTarget: CADQuarterWiseTarget[];
}

export interface GetCADAnnualTargetDetailsPayload {
  empcode: string;
}

export interface GetCADAnnualTargetDetailsResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: CADAnnualTargetData;
  message: string;
}
