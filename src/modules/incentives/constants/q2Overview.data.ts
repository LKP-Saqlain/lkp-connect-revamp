import type {
  MetricCardData,
  RevenueProgressData,
  EligibilityChecklistData,
} from "../types/incentive.types";
import PercentageIcon from "@/assets/images/percentage.svg";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";
import Coin from "@/assets/images/coin.svg";

export const Q2_ALERT = {
  title: "Q2 · Not eligible — shortfall generated",

  description:
    "Revenue achieved: 2.0x CTC · Minimum required: 3x CTC · Shortfall: 2x carried forward to Q3.\nNo incentive payable for Q2.",
};

export const Q2_METRICS: MetricCardData[] = [
  {
    id: "revenue-multiple",
    title: "Revenue multiple",
    value: "2.0x",
    subtitle: "Below minimum",
    color: "#D92D20",
    icon: PercentageIcon,
  },
  {
    id: "broking-credit",
    title: "Broking Revenue Credit",
    value: "₹2,40,000",
    subtitle: "30% of ₹8,00,000",
    caption: "1.6x CTC",
    icon: TrendingUp,
  },
  {
    id: "non-broking-credit",
    title: "Non-Broking Revenue Credit",
    value: "₹60,000",
    subtitle: "70% of ₹85,714",
    caption: "0.4x CTC",
    icon: BankImg,
  },
  {
    id: "estimated-incentive",
    title: "Est. incentive",
    value: "₹0",
    subtitle: "Not eligible",
    caption: "Shortfall carried to Q3",
    color: "#D92D20",
    icon: Coin,
  },
];

export const Q2_REVENUE_PROGRESS: RevenueProgressData = {
  multiplier: "2.0x",

  multiplierColor: "#D92D20",

  subtitle: "Below minimum",

  subtitleColor: "#D92D20",

  mpc: "3x",

  barMax: 3,

  progressPercent: 67,

  target: {
    label: "3x CTC",
    value: "₹4,50,000",
  },

  broking: {
    label: "Broking credit (30%)",
    amount: "₹2,40,000",
    percent: "53%",
  },

  nonBroking: {
    label: "Non-broking credit (70%)",
    amount: "₹60,000",
    percent: "13%",
  },

  netCredit: {
    label: "Net credit",
    amount: "₹3,00,000",
    percent: "67%",
  },

  slabLabel: "Below minimum",

  slabs: [
    {
      id: "1",
      range: "3x – 5x",
      text: "Broking 3% · Non-broking 5%",
    },
    {
      id: "2",
      range: "5x – 7x",
      text: "Broking 5% · Non-broking 7%",
    },
    {
      id: "3",
      range: "7x – 10x",
      text: "Broking 8% · Non-broking 10%",
    },
    {
      id: "4",
      range: "10x & above",
      text: "Broking 10% · Non-broking 15%",
      disabled: true,
    },
  ],
};

export const Q2_ELIGIBILITY: EligibilityChecklistData = {
  title: "Eligibility Checklist",

  banner: {
    type: "error",
    title: "Not eligible — shortfall of 1.0x generated",
    description:
      "No payout for Q2. Shortfall carries to Q3 — must achieve 3x + shortfall there to qualify.",
  },

  currentSlab: "Below minimum Slab",

  qualifications: [
    {
      title: "Min Revenue",
      actual: "2.0x (₹3,00,000)",
      required: "3x (₹4,50,000)",
      status: "failed",
    },
    {
      title: "Non Broking",
      actual: "1.4x (₹2,10,000)",
      required: "1x (₹1,50,000)",
      status: "completed",
    },
  ],

  accounts: [
    {
      label: "New accounts",
      required: "5 accounts",
      actual: "7 accounts",
      eligible: true,
    },
    {
      label: "₹1 Lac margin",
      required: "5 accounts",
      actual: "7 accounts",
      eligible: true,
    },
    {
      label: "₹100 brokerage",
      required: "5 accounts",
      actual: "7 accounts",
      eligible: false,
    },
  ],
};

export const Q2_NO_INCENTIVE = {
  title: "No incentive payable for Q2",

  description: "Below minimum 3x threshold. 2x shortfall carried to Q3.",
};
