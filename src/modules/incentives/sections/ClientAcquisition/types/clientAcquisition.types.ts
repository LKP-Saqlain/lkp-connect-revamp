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
