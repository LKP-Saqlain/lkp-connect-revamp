import type {
  EligibilityChecklistData,
  MetricCardData,
  PayoutBreakdownData,
  RevenueProgressData,
} from "../types/incentive.types";
import PercentageIcon from "@/assets/images/percentage.svg";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";
import Coin from "@/assets/images/coin.svg";

export const Q1_METRICS: MetricCardData[] = [
  {
    id: "revenue-multiple",
    title: "Revenue multiple",
    value: "8.0x",
    subtitle: "Slab: 7x–10x",
    icon: PercentageIcon,
  },
  {
    id: "broking-credit",
    title: "Broking Revenue Credit",
    value: "₹7,48,500",
    subtitle: "30% of ₹24,95,000",
    caption: "5.0x CTC",
    icon: TrendingUp,
  },
  {
    id: "non-broking-credit",
    title: "Non-Broking Revenue Credit",
    value: "₹4,51,500",
    subtitle: "70% of ₹6,45,000",
    caption: "3.0x CTC",
    icon: BankImg,
  },
  {
    id: "estimated-incentive",
    title: "Est. incentive",
    value: "₹2,64,100",
    subtitle: "₹2,11,280 now",
    caption: "₹52,820 deferred",
    icon: Coin,
    color: "#5F7F38",
  },
];

export const Q1_REVENUE_PROGRESS: RevenueProgressData = {
  multiplier: "8.0x",

  slabLabel: "Slab 7x–10x",

  mpc: "3x",

  barMax: 3,

  target: {
    label: "3x CTC",
    value: "₹4,50,000",
  },

  broking: {
    label: "Broking credit (30%)",
    amount: "₹7,48,500",
    percent: "166%",
  },

  nonBroking: {
    label: "Non-broking credit (70%)",
    amount: "₹4,51,500",
    percent: "100%",
  },

  netCredit: {
    label: "Net credit",
    amount: "₹12,00,000",
    percent: "267%",
  },

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

export const Q1_ELIGIBILITY: EligibilityChecklistData = {
  title: "Eligibility checklist",

  banner: {
    type: "success",
    title: "Eligible for incentive",
    description:
      "Revenue multiple 8.0x meets the 3x minimum. Incentive calculable at current slab.",
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
      title: "Non-Broking",
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
      required: "7 / 7",
      actual: "6 / 7",
      eligible: true,
    },
    {
      label: "₹100 brokerage",
      required: "7 / 7",
      actual: "5 / 7",
      eligible: false,
    },
  ],
};

export const Q1_PAYOUT: PayoutBreakdownData = {
  title: "Payout breakdown",

  rows: [
    {
      component: "Broking incentive",
      basis: "₹24,95,000 revenue",
      rate: "8%",
      amount: "₹1,99,600",
      amountColor: "#378ADD",
    },

    {
      component: "Non-broking incentive",
      basis: "₹6,45,000 revenue",
      rate: "10%",
      amount: "₹64,500",
      amountColor: "#16A34A",
    },

    {
      component: "Acquisition bonus",
      basis: "5 qualified accounts",
      rate: "₹200/account",
      amount: "₹1,000",
      amountColor: "#D97706",
    },

    {
      component: "Total incentive",
      basis: "",
      rate: "",
      amount: "₹2,65,100",
      amountColor: "#5F7F38",
      highlight: true,
    },

    {
      component: "Upfront (80%)",
      basis: "2nd month of next quarter",
      rate: "",
      amount: "₹2,12,080",
    },

    {
      component: "Deferred (20%)",
      basis: "May/Jun subject to annual MPC",
      rate: "",
      amount: "₹53,020",
    },
  ],
};
