export interface AcquisitionSummaryCard {
  id: string;
  title: string;
  value: string;
  subtitle?: string;
  color: string;

  suffix?: string;
}

export interface AcquisitionBreakdownItem {
  id: number;
  name: string;
  value: string;
}

export interface AcquisitionCredit {
  brokingCredit: string;
  nonBrokingCredit: string;
  netCredit: string;
}

export interface AcquisitionDetails {
  broking: AcquisitionDetailSection;
  nonBroking: AcquisitionDetailSection;
  credits: AcquisitionCredit;
}

export interface AcquisitionDetailSection {
  total: string;
  items: AcquisitionDetailItem[];
}

export interface AcquisitionDetailItem {
  id: number;
  name: string;
  value: string;
}

export interface AcquisitionClient {
  id: number;
  name: string;
  margin: number;
  brokerage: number;
  status: string;
}

export type AcquisitionRule = string;
export interface AcquisitionRole {
  title: string;
  description: string;
}

export interface ClientAcquisitionData {
  summary: AcquisitionSummaryCard[];
  clients: AcquisitionClient[];

  rules: AcquisitionRule[];

  role: AcquisitionRole;
}

export interface SelfAcquisitionSummary {
  empCode: string;
  employeeType: string;
  newAccountsAcquired: number;
  marginQualified: number;
  brokerageQualified: number;
  eligibleAccounts: number;
  requiredAccounts: number;
  requiredFunding: number;
  requiredBrokerage: number;
  finalStatus: string;
}

export interface SelfAcquisitionAccount {
  srNo: number;
  clientCode: string;
  clientName: string;
  funding: number;
  brokerage: number;
  eligibleMargin: number;
  eligibleBrokerage: number;
  eligible: number;
  accountStatus: string;
}

export interface TeamMemberAcquisition {
  srNo: number;
  empCode: string;
  employeeName: string;
  employeeType: string;
  newAccountsAcquired: number;
  requiredAccounts: number;
  marginQualified: number;
  brokerageQualified: number;
  eligibleAccounts: number;
  status: string;
}

export interface AdditionalIncentiveRow {
  source: string;
  newAccounts: number;
  eligible: number;
  rate: number | null;
  bonus: number;
}

export interface ClientAcquisitionReportingHeadData {
  selfSummary: SelfAcquisitionSummary;
  selfAccounts: SelfAcquisitionAccount[];
  teamMembers: TeamMemberAcquisition[];
  additionalIncentive: AdditionalIncentiveRow[];
}

export interface GetClientAcquisitionReportingHeadResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: ClientAcquisitionReportingHeadData;
  message: string;
}
