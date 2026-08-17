export interface AcquisitionSummaryCard {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  color: string;
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

  client: string;

  clientCode: string;

  accountOpening: string;

  brokingRevenue: string;

  nonBrokingRevenue: string;

  totalRevenue: string;

  expanded?: boolean;

  details: AcquisitionDetails;
}

export interface ClientAcquisitionData {
  summary: AcquisitionSummaryCard[];

  clients: AcquisitionClient[];
}
