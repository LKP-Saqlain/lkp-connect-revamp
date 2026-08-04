import type {
  MetricCardData,
  RevenueProgressData,
  EligibilityChecklistData,
  PayoutBreakdownData,
} from "../types/incentive.types";

import PercentageIcon from "@/assets/images/percentage.svg";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";
import Coin from "@/assets/images/coin.svg";

export const Q4_METRICS: MetricCardData[] = [
  {
    id: "revenue-multiple",
    title: "Revenue multiple",
    value: "7.0x",
    subtitle: "Slab: 7x–10x",
    icon: PercentageIcon,
  },
  {
    id: "broking-credit",
    title: "Broking Revenue Credit",
    value: "₹6,30,000",
    subtitle: "30% of ₹21,00,000",
    caption: "4.2x CTC",
    icon: TrendingUp,
  },
  {
    id: "non-broking-credit",
    title: "Non-Broking Revenue Credit",
    value: "₹4,20,000",
    subtitle: "70% of ₹6,00,000",
    caption: "2.8x CTC",
    icon: BankImg,
  },
  {
    id: "estimated-incentive",
    title: "Est. incentive",
    value: "₹2,28,000",
    subtitle: "₹1,82,400 now",
    caption: "₹45,600 deferred",
    color: "#5F7F38",
    icon: Coin,
  },
];

export const Q4_REVENUE_PROGRESS: RevenueProgressData = {
  multiplier: "7.0x",

  subtitle: "Slab 7x–10x",

  mpc: "3x",

  barMax: 3,

  progressPercent: 100,

  target: {
    label: "3x CTC",
    value: "₹4,50,000",
  },

  broking: {
    label: "Broking credit (30%)",
    amount: "₹6,30,000",
    percent: "140%",
  },

  nonBroking: {
    label: "Non-broking credit (70%)",
    amount: "₹4,20,000",
    percent: "93%",
  },

  netCredit: {
    label: "Net credit",
    amount: "₹10,50,000",
    percent: "233%",
  },

  slabLabel: "7x–10x",

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
      active: true,
    },
    {
      id: "4",
      range: "10x & above",
      text: "Broking 10% · Non-broking 15%",
      disabled: true,
    },
  ],
};

export const Q4_ELIGIBILITY: EligibilityChecklistData = {
  title: "Eligibility Checklist",

  banner: {
    type: "success",
    title: "Eligible for incentive",
    description:
      "Revenue multiple 7.0x meets the 3x minimum. Incentive calculable at current slab.",
  },

  currentSlab: "7x–10x",

  qualifications: [
    {
      title: "Min Revenue",
      actual: "8.0x (₹12,00,000)",
      required: "3x (₹4,50,000)",
      status: "completed",
    },
    {
      title: "Non-broking",
      actual: "3.0x (₹4,51,500)",
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
      required: "7 / 7 accounts",
      actual: "6 / 7 accounts",
      eligible: true,
    },
    {
      label: "₹100 brokerage",
      required: "7 / 7 accounts",
      actual: "5 / 7 accounts",
      eligible: false,
    },
  ],

  requirements: [],
};

export const Q4_PAYOUT: PayoutBreakdownData = {
  title: "Payout breakdown",

  rows: [
    {
      component: "Broking incentive",
      basis: "₹21,00,000 revenue",
      rate: "8%",
      amount: "₹1,68,000",
      amountColor: "#1570EF",
    },
    {
      component: "Non-broking incentive",
      basis: "₹6,00,000 revenue",
      rate: "10%",
      amount: "₹60,000",
      amountColor: "#12B76A",
    },
    {
      component: "Acquisition bonus",
      basis: "5 qualified accounts",
      rate: "₹200/account",
      amount: "₹1,000",
      amountColor: "#B54708",
    },
    {
      component: "Total incentive",
      basis: "",
      rate: "",
      amount: "₹2,29,000",
      amountColor: "#5F7F38",
      highlight: true,
    },
    {
      component: "Upfront (80%)",
      basis: "2nd month of next quarter",
      rate: "",
      amount: "₹1,83,200",
    },
    {
      component: "Deferred (20%)",
      basis: "May/Jun subject to annual MPC",
      rate: "",
      amount: "₹45,800",
    },
  ],
};
