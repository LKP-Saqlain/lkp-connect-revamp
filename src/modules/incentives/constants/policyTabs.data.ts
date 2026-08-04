import type { TabItem } from "../types/incentive.types";

export const POLICY_TABS: TabItem[] = [
  {
    id: "policy-summary",
    label: "Policy Summary",
  },
  {
    id: "incentive-calculator",
    label: "Incentive Calculator",
  },
];

export const POLICY_METRICS = [
  {
    title: "MPC Threshold",
    value: "3x CTC",
    helper:
      "Minimum revenue multiple required to qualify for any incentive payout.",
    color: "#185FA5",
  },
  {
    title: "Maximum Incentive Cap",
    value: "200% CTC",
    helper: "Annual incentive payout cannot exceed 2x annual fixed CTC.",
    color: "#5F7F38",
  },
  {
    title: "Per-client Revenue Cap",
    value: "25%",
    helper: "Revenue contribution from a single client is capped at 25%.",
    color: "#B54708",
  },
];

export const MPC_ROLE_ROWS = [
  {
    role: "Relationship Manager",
    mpc: "3x",
    deferred: "20%",
    cap: "12x CTC",
  },
  {
    role: "Team Leader",
    mpc: "4x",
    deferred: "25%",
    cap: "15x CTC",
  },
  {
    role: "Branch Manager",
    mpc: "5x",
    deferred: "30%",
    cap: "18x CTC",
  },
];

export const MPC_ROLE_TABLE = {
  title: "MPC Threshold by Role",

  rows: [
    {
      role: "Relationship Manager",
      mpc: "3x",
      deferred: "20%",
      cap: "12x CTC",
    },
    {
      role: "Team Leader",
      mpc: "4x",
      deferred: "25%",
      cap: "15x CTC",
    },
    {
      role: "Branch Manager",
      mpc: "5x",
      deferred: "30%",
      cap: "18x CTC",
    },
  ],
};

export const COMPLIANCE_CARD = {
  title: "Compliance & deductions",

  items: [
    "NISM Series VII certification mandatory for payout eligibility.",

    "Unauthorized trade complaints may result in 100% incentive withholding until resolved.",

    "Bad debts and operational losses are deducted before payout calculation.",

    "Client ledger debits beyond permissible limits reduce incentive eligibility.",

    "Employees serving notice period or resigned before payout date are not eligible.",
  ],
};

export const PAYOUT_SCHEDULE_CARD = {
  title: "Payout schedule",

  color: "#185FA5",

  items: [
    "Quarters: Jan–Mar · Apr–Jun · Jul–Sep · Oct–Dec",
    "Paid in 2nd month of next quarter",
    "80% upfront · 20% deferred to May/Jun",
  ],
};

export const SHORTFALL_CARD = {
  title: "Shortfall carry-forward",

  color: "#B54708",

  items: [
    "Gap vs minimum threshold carries to next quarter within FY",
    "Must cover current minimum + all prior shortfall to qualify",
    "Partial recovery does not qualify",
    "Resets at FY end — no cross-year carry-forward",
  ],
};

export const MTF_RULES_CARD = {
  title: "MTF Revenue Rules",

  items: [
    "MTF revenue is credited only after interest realization.",

    "Interest reversal due to early closure is adjusted from incentive.",

    "MTF contribution follows the applicable revenue sharing percentage.",

    "Inactive or blocked MTF accounts are excluded from revenue calculation.",
  ],
};

export const PAYOUT_SCHEDULE = {
  title: "Payout schedule",

  items: [
    "Quarterly incentive cycle (Jan–Mar, Apr–Jun, Jul–Sep, Oct–Dec).",

    "Paid during the 2nd month of the following quarter.",

    "80% released immediately, remaining 20% paid after FY closure.",
  ],
};

export const SHORTFALL = {
  title: "Shortfall carry-forward",

  items: [
    "Revenue shortfall carries only within the same financial year.",

    "Current quarter must recover previous shortfall before payout.",

    "Partial recovery does not qualify for incentive.",

    "Shortfall resets at financial year end.",
  ],
};
