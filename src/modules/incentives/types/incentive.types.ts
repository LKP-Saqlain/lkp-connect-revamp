export type IncentivePeriod =
  "fy" | "q1" | "q2" | "q3" | "q4" | "sales-policy" | "annual-target";

export type IncentiveTab =
  "overview" | "client-revenue" | "revenue-breakdown" | "client-acquisition";

export type PolicyTab = "policy-summary" | "incentive-calculator";

export interface PeriodItem {
  id: IncentivePeriod;
  label: string;

  disabled?: boolean;
  notification?: boolean;
}

export interface TabItem {
  id: string;
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

export interface RevenueItem {
  label: string;

  amount: string;

  percent: string;
}

export interface SlabItem {
  id: string;

  range: string;

  text: string;

  active?: boolean;

  disabled?: boolean;
}

export interface RevenueProgressData {
  multiplier: string;

  multiplierColor?: string;

  subtitle?: string;

  subtitleColor?: string;

  mpc: string;

  barMax: number;

  progressPercent?: number;

  target: {
    label: string;
    value: string;
  };

  broking: RevenueItem;

  nonBroking: RevenueItem;

  netCredit: RevenueItem;

  slabLabel?: string;

  slabs?: SlabItem[];
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

export interface RevenueProgressProps {
  data: RevenueProgressData;
}

export interface EligibilityRequirement {
  id: string;

  label: string;

  status: "completed" | "pending" | "failed";

  value: string;
}

export interface QualificationItem {
  title: string;
  actual: string;
  required: string;
  status: "completed" | "failed";
}

export interface EligibilityChecklistData {
  title: string;

  banner: {
    type: "success" | "error";

    title: string;

    description: string;
  };

  currentSlab?: string;
  qualifications: QualificationItem[];
  accounts?: any[];
  requirements?: EligibilityRequirement[];
}

export interface PayoutBreakdownRow {
  id: string;

  label: string;

  value: string;

  bold?: boolean;

  highlight?: boolean;

  color?: string;
}

export interface PayoutRow {
  component: string;

  basis: string;

  rate: string;

  amount: string;

  amountColor?: string;

  highlight?: boolean;
}

export interface PayoutBreakdownData {
  title: string;

  rows: PayoutRow[];
}
