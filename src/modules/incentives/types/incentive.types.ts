export type IncentivePeriod =
  "fy" | "q1" | "q2" | "q3" | "q4" | "sales-policy" | "annual-target";

export type IncentiveTab =
  "overview" | "client-revenue" | "revenue-breakdown" | "client-acquisition";

export interface PeriodItem {
  id: IncentivePeriod;
  label: string;

  disabled?: boolean;
  notification?: boolean;
}

export interface TabItem {
  id: IncentiveTab;
  label: string;

  disabled?: boolean;
}

export interface MetricCardData {
  id: string;

  title: string;
  value: string;

  meta?: string;

  subtitle?: string;

  caption?: string;

  icon?: string;

  color?: string;
}

export interface ProgressLegendItem {
  id: string;

  label: string;

  color: string;

  amount: string;

  percentage?: string;
}

export interface RevenueProgressData {
  revenueMultiple: string;

  progressValue: number;

  currentLabel: string;

  targetLabel: string;

  targetAmount: string;

  mpc: string;

  legends: ProgressLegendItem[];
}

export interface DeferredIncentiveRow {
  id: string;

  period: string;

  amount: string;

  status: string;

  statusColor?: string;
}

export interface DeferredIncentiveData {
  title: string;

  info: string;

  rows: DeferredIncentiveRow[];
}

export interface PolicyCardData {
  title: string;

  description: string;

  icon?: string;
}

export interface OverviewData {
  metrics: MetricCardData[];

  progress: RevenueProgressData;

  deferred: DeferredIncentiveData;

  policy: PolicyCardData;
}

export interface PeriodChipProps {
  item: PeriodItem;
  active: boolean;
  onClick: (id: IncentivePeriod) => void;
}

export interface MetricCardData {
  id: string;
  title: string;
  value: string;
  subtitle?: string;
}
