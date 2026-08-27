export type IncentivePeriod = "fy" | "q1" | "q2" | "q3" | "q4";

export type SpecialIncentiveTab = "sales-policy" | "annual-target";

export type IncentiveTab =
  "overview" | "client-revenue" | "revenue-breakdown" | "client-acquisition";

export type PolicyTab = "policy-summary" | "incentive-calculator";

export interface PeriodItem {
  id: IncentivePeriod | SpecialIncentiveTab | any;
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

export interface PerformanceSectionData {
  id: string;
  icon: "self" | "team";
  title: string;
  criteria: {
    actual: string; // "1.4x"
    required: string; // "1.0x of total CTC"
  };
  metrics: MetricCardData[];
}

export interface DeferredIncentiveRow {
  id: string;

  period: string;

  amount: string;

  status: string;

  statusColor?: string;
}

export interface OverviewTLData {
  selfPerformance: PerformanceSectionData;
  teamPerformance: PerformanceSectionData;
  deferred: DeferredIncentiveData;
}

export interface DeferredIncentiveData {
  title: string;
  info: string;
  rows: DeferredIncentiveRow[];
  total?: {
    label: string;
    amount: string;
    color?: string;
  };
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
  accounts: EligibilityAccount[];
  requirements?: EligibilityRequirement[];
}

export interface EligibilityAccount {
  label: string;
  required: string;
  actual: string;
  eligible: boolean;
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

export interface EmployeeIncentiveData {
  empCode: string;
  employeeType: string;
  policyId: number;

  empCTC: number;
  empQuarterCTC: number;

  brokingRevenue?: number;
  brokingCredits: number;
  nonBrokingRevenue?: number;
  nonBrokingCredits: number;
  totalRevenue: number;

  revenueMultiple: number;
  reqRevenueMultiple: number;
  brokRevMultiple: number;
  reqBrokRevMultiple: number | null;

  nonBrokRevMultiple: number;
  reqNonBrokRevMultiple: number | null;

  cadEligibleAccounts: number;
  totalNewAccounts: number;
  requiredAccounts: number;
  accountStatus: boolean;

  actualMarginCount: number;
  reqMarginCount: number;
  marginStatus: boolean;

  actualBrokCount: number;
  reqBrokCount: number;
  brokStatus: boolean;

  selfMultiple: number;
  reqSelfMultiple: number;

  mpc: number | null;

  teamCTC: number;
  teamQuarterCTC: number;
  teamBrokingRevenue: number;
  teamNonBrokingRevenue: number;
  teamRevenue: number;

  teamRevMultiple: number;
  reqTeamRevMultiple: number;

  teamBrokRevMultiple: number;
  reqTeamBrokRevMultiple: number;

  teamNonBrokRevMultiple: number;
  reqTeamNonBrokRevMultiple: number;

  teamMembers: number;

  revenueMixStatus: boolean;
  newClientStatus: boolean;
  teamStatus: boolean;

  nismStatus: boolean | null;
  slabId: number | null;

  brokingPercent: number;
  nonBrokingPercent: number;
  boosterPercent: number;

  brokingIncentive: number;
  nonBrokingIncentive: number;
  boosterAmount: number;
  newAccountsIncentive: number;
  finalIncentive: number;

  eligibleMembers: number;
  totalMembers: number;

  boosterEligible: boolean;
  teamBonus: number;
  perAccountRate: number;
  brokingCredit: any;
  nonBrokingCredit: any;
  totalNonBrokingRevenue: any;
  totalBrokingRevenue: any;
}

export interface GetclientwiseRevenuePayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}

export interface ClientRevenueDetail {
  clientCode: string;
  clientName: string;
  brokingRevenue?: number;
  brokingCredits: number;
  totalBrokingCredits?: number;
  totalBrokingRevenue: number;
  nonBrokingRevenue: number;
  totalNonBrokingCredits?: number;
  totalNonBrokingRevenue: number;
  totalRevenue: number;
  revenuePercentage: number;
  nonBrokingCredits: number;
}

export interface ClientRevenueApiTotal {
  totalCount: string;
  brokingRevenue?: number;
  brokingCredits: number;
  totalBrokingCredits: number;
  nonBrokingCredits: number;
  totalBrokingRevenue: number;
  nonBrokingRevenue: number;
  totalNonBrokingCredits?: number;
  totalNonBrokingRevenue: number;
  totalRevenue: number;
}

export interface ClientRevenueApiData {
  clientDetails: ClientRevenueDetail[];
  total: ClientRevenueApiTotal;
}

export interface ClientRevenueApiResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: ClientRevenueApiData;
  message: string;
}

export interface ClientwiseDetailRevenueResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: ClientwiseDetailRevenueData;
  message: string;
}

export interface ClientwiseDetailRevenueData {
  brokRevenueDetails: BrokingRevenueDetails;
  nonBrokRevenueDetails: NonBrokingRevenueDetails;
}

export interface BrokingRevenueDetails {
  clientCode: string;
  equity: number;
  futures: number;
  options: number;
  commFut: number;
  commOpt: number;
  currFut: number;
  currOpt: number;
  slbm: number;
  mtf: number;
  totalBrokingRevenue: number;
}

export interface NonBrokingRevenueDetails {
  clientCode: string;
  researchAdvisoryLKP: number;
  researchAdvisoryThirdParty: number;
  pmsThirdParty: number;
  aifThirdParty: number;
  mututalFunds: number;
  insurance: number;
  curFixedIncomerOpt: number;
  unlistedShares: number;
  totalNonBrokingRevenue: number;
}

export interface EmpwiseDetailsRevenuePayload {
  empCode: string;
  financialYear: string;
  quarterName: string;
}

export interface EmpwiseBrokingRevenueDetails {
  empCode: string;
  equity: number;
  futures: number;
  options: number;
  commFut: number;
  commOpt: number;
  currFut: number;
  currOpt: number;
  slbm: number;
  mtf: number;
  totalBrokingRevenue: number;
  brokingSharePercentage: number;
}

export interface EmpwiseNonBrokingRevenueDetails {
  empCode: string;
  researchAdvisoryLKP: number;
  researchAdvisoryThirdParty: number;
  pmsThirdParty: number;
  aifThirdParty: number;
  mututalFunds: number;
  insurance: number;
  curFixedIncomerOpt: number;
  unlistedShares: number;
  totalNonBrokingRevenue: number;
  nonBrokingSharePercentage: number;
}

export interface EmpwiseMonthWiseRevenue {
  empCode: string;
  revenueYear: string;
  monthName: string;
  brokingRevenue: number;
  nonBrokingRevenue: number;
}

export interface EmpwiseDetailsRevenueData {
  brokRevenueDetails: EmpwiseBrokingRevenueDetails;
  nonBrokRevenueDetails: EmpwiseNonBrokingRevenueDetails;
  monthWiseRevenues: EmpwiseMonthWiseRevenue[];
}

export interface EmpwiseDetailsRevenueResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: EmpwiseDetailsRevenueData;
  message: string;
}

export interface EmpwiseDetailsRevenueResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: EmpwiseDetailsRevenueData;
  message: string;
}
// GetClientAcquisitionResponse;
export interface ClientAcquisitionCounts {
  empCode: string;
  totalNewAccounts: number;
  eligibleAccounts: number;
  requiredAccounts: number;
  actualMarginCount: number;
  actualBrokCount: number;
  finalStatus: string;
}

export interface ClientAcquisitionDetail {
  clientCode: string;
  clientName: string;
  brokerage: number;
  eligibleMargin: number;
  eligibleBrokerage: number;
  eligible: number;
  accountStatus: string;
}

export interface GetClientAcquisitionResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: {
    clientAcqCounts: ClientAcquisitionCounts;
    clientAcqDetails: ClientAcquisitionDetail[];
  };
  message: string;
}

export interface GetRevenueEmployeeTypeResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: {
    employeeType: string;
  };
  message: string;
}
