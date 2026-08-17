export interface RevenueSummaryCard {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  color: string;
}

export interface RevenueItem {
  id: number;
  name: string;
  value: string;
}

export interface RevenueSection {
  title: string;
  total: string;
  color: string;
  items: RevenueItem[];
}

export interface RevenueChartSeries {
  name: string;
  data: number[];
}

export interface RevenueChartData {
  categories: string[];
  series: RevenueChartSeries[];
}

export interface RevenueBreakdownData {
  summary: RevenueSummaryCard[];

  table: {
    broking: RevenueSection;
    nonBroking: RevenueSection;
  };

  chart: RevenueChartData;
}
