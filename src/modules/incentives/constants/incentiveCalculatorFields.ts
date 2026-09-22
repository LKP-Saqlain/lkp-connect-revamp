export interface CalcFieldConfig {
  id: string;
  label: string;
  type: "number" | "select";
  options?: { label: string; value: string }[];
}

export const DEFAULT_FIELDS: CalcFieldConfig[] = [
  { id: "ctc", label: "Monthly fixed CTC (₹)", type: "number" },
  { id: "brokRevenue", label: "Broking revenue (₹)", type: "number" },
  { id: "nonBrokRevenue", label: "Non-broking revenue (₹)", type: "number" },
  { id: "newAccounts", label: "New accounts acquired", type: "number" },
  { id: "brokAccounts", label: "Accounts with ₹100 brokerage", type: "number" },
];

export const CAD_FIELDS: CalcFieldConfig[] = [
  { id: "ctc", label: "Monthly fixed CTC (₹)", type: "number" },
  { id: "brokRevenue", label: "Broking revenue (₹)", type: "number" },
  { id: "nonBrokRevenue", label: "Non-broking revenue (₹)", type: "number" },
  { id: "newAccounts", label: "Accounts activated", type: "number" },
];

export const TL_EXTRA_FIELD: CalcFieldConfig = {
  id: "boosterEligible",
  label: "All team members qualified?",
  type: "select",
  options: [
    { label: "Yes", value: "1" },
    { label: "No", value: "0" },
  ],
};
