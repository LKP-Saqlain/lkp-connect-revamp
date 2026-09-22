export interface IncentiveCalculatorPayload {
  employeeType: string;
  ctc: number;
  brokRevenue: number;
  nonBrokRevenue: number;
  newAccounts: number;
  brokAccounts: number;
  boosterEligible: number; // 1 or 0
}

export interface IncentiveCalculatorResult {
  revenueMultiple: number;
  fromMultiple: number;
  toMultiple: number;
  estPayout: number;
  brokPerc: number;
  brokingIncentive: number;
  nonBrokPerc: number;
  nonBrokingIncentive: number;
  boosterPercent: number;
  accountRate: number;
  acqBonus: number;
}

export interface IncentiveCalculatorResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: IncentiveCalculatorResult;
  message: string;
}
