import type { PeriodItem } from "../types/incentive.types";

export const PERIODS: PeriodItem[] = [
  {
    id: "fy",
    label: "Full year",
  },
  {
    id: "q1",
    label: "Q1 · Apr–Jun",
  },
  {
    id: "q2",
    label: "Q2 · Jul–Sep",
    notification: true,
  },
  {
    id: "q3",
    label: "Q3 · Oct–Dec",
    notification: true,
  },
  {
    id: "q4",
    label: "Q4 · Jan–Mar",
  },
  {
    id: "sales-policy",
    label: "Sales Policy",
  },
  {
    id: "annual-target",
    label: "Annual Target",
  },
];
