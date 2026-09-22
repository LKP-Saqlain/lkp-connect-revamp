export interface NewClientDetail {
  clientCode: string;
  clientName: string;
  activationOpeningDate: string;
  brokingRevenue: number;
  nonBrokingRevenue: number;
  totalRevenue: number;
}

export interface NewClientBusinessTotal {
  totalCount: string;
  totalBrokingRevenue: number;
  totalNonBrokingRevenue: number;
}

export interface NewClientBusinessData {
  newclientDetails: NewClientDetail[];
  total: NewClientBusinessTotal;
}

export interface GetNewClientBusinessResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: NewClientBusinessData;
  message: string;
}
