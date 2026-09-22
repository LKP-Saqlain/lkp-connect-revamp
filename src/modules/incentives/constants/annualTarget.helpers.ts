import type { AnnualRevenueMonth } from "../types/annualTarget.types";

const MONTH_ORDER: Record<string, number> = {
  April: 1,
  May: 2,
  June: 3,
  July: 4,
  August: 5,
  September: 6,
  October: 7,
  November: 8,
  December: 9,
  January: 10,
  February: 11,
  March: 12,
};

const MONTH_SHORT: Record<string, string> = {
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
  January: "Jan",
  February: "Feb",
  March: "Mar",
};

export const sortMonthlyRevenue = (months: AnnualRevenueMonth[]) => {
  return [...months].sort(
    (a, b) => (MONTH_ORDER[a.monthName] ?? 0) - (MONTH_ORDER[b.monthName] ?? 0),
  );
};

export const getMonthShort = (monthName: string) =>
  MONTH_SHORT[monthName] ?? monthName.substring(0, 3);

export const formatINR = (value: number) =>
  `₹${Math.round(value).toLocaleString("en-IN")}`;

export const getProgressPercent = (achieved: number, target: number) => {
  if (!target) return 0;
  return Math.min(Math.round((achieved / target) * 100), 100);
};

export const CAD_QUARTER_LABELS: Record<string, string> = {
  Q1: "Q1 · Apr–Jun",
  Q2: "Q2 · Jul–Sep",
  Q3: "Q3 · Oct–Dec",
  Q4: "Q4 · Jan–Mar",
};

export const getAnnualAchievedPercent = (
  achieved: number,
  target: number,
): number => {
  if (!target) return 0;
  return Math.round((achieved / target) * 100);
};
