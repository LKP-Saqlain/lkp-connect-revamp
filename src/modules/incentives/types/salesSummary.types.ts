export interface MPCResponse {
  criteriaValue: string;
  maxCTCCap: string;
  clientRevenueCap: string;
}

export interface SummaryModule {
  moduleHeader: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
}

export interface SalesSummaryData {
  mpcResponse: MPCResponse;
  summarydetails: SummaryModule[];
}

export interface GetSalesSummaryPayload {
  employeeType: string;
}

export interface GetSalesSummaryResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: SalesSummaryData;
  message: string;
}
