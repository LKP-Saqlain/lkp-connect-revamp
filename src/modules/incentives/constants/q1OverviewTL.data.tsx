import type {
  MetricCardData,
  PayoutBreakdownData,
  TeamEligibilityChecklistData,
  TeamRoleData,
} from "../types/incentive.types";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// Top summary strip (4 cards)
export const Q1_TL_SUMMARY: MetricCardData[] = [
  {
    id: "my-revenue-multiple",
    title: "My revenue multiple",
    value: "1.8x",
    subtitle: "Min 1x self CTC required",
    icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
    color: "#185FA5",
  },
  {
    id: "team-revenue-multiple",
    title: "Team revenue multiple",
    value: "5.1x",
    subtitle: "Min 3.0x team CTC required",
    icon: <GroupsOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
    color: "#185FA5",
  },
  {
    id: "booster-incentive",
    title: "Booster incentive",
    value: "N/A",
    subtitle: "5 of 6 qualified",
    icon: <BoltOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
    color: "#98A2B3",
  },
  {
    id: "est-incentive",
    title: "Est. incentive",
    value: "₹4,67,580",
    subtitle: "Incl. ₹1,900 acquisition bonus",
    icon: <PaidOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
    color: "#5F7F38",
  },
];

// My performance (self book)
export const Q1_TL_SELF_METRICS: MetricCardData[] = [
  {
    id: "self-broking",
    title: "Broking Revenue Credit",
    value: "₹1,62,300",
    subtitle: "30% of ₹5,41,000",
    icon: TrendingUp,
  },
  {
    id: "self-non-broking",
    title: "Non Broking Revenue Credit",
    value: "₹2,07,200",
    subtitle: "70% of ₹2,96,000",
    icon: BankImg,
  },
  {
    id: "self-total",
    title: "Total revenue credit",
    value: "₹3,69,500",
    icon: <InfoOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
  },
];

export const Q1_TL_SELF_CRITERIA = {
  title: "My performance (self book)",
  actual: "1.8x",
  required: "1.0x of total CTC",
};

// Team performance (excl. self)
export const Q1_TL_TEAM_METRICS: MetricCardData[] = [
  {
    id: "team-broking",
    title: "Broking Revenue Credit",
    value: "₹16,08,000",
    subtitle: "30% of ₹53,60,000",
    icon: TrendingUp,
  },
  {
    id: "team-non-broking",
    title: "Non Broking Revenue Credit",
    value: "₹19,76,800",
    subtitle: "70% of ₹28,24,000",
    icon: BankImg,
  },
  {
    id: "team-total",
    title: "Total revenue credit",
    value: "₹35,84,800",
    icon: <InfoOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
  },
];

export const Q1_TL_TEAM_CRITERIA = {
  title: "Team performance (excl. self · 6 members)",
  actual: "5.1x",
  required: "3.0x of total CTC",
};

export const Q1_TL_ELIGIBILITY: TeamEligibilityChecklistData = {
  title: "Eligibility checklist",
  items: [
    {
      id: "1",
      label: "Self min 1x CTC (mandatory)",
      value: "1.8x",
      status: "completed",
    },
    { id: "2", label: "Team min 3.0x CTC", value: "5.1x", status: "completed" },
    {
      id: "3",
      label: "Team min 2x from Broking",
      value: "2.8x",
      status: "completed",
    },
    {
      id: "4",
      label: "Team min 1x from Non-broking",
      value: "2.3x",
      status: "completed",
    },
    {
      id: "5",
      label: "Min 5 team members",
      value: "6 members",
      status: "completed",
    },
    {
      id: "6",
      label: "All members qualify (for booster)",
      value: "5/6",
      status: "pending",
    },
    {
      id: "7",
      label: "New accounts (self) — no minimum applicable",
      value: "Not applicable",
      status: "completed",
    },
    {
      id: "8",
      label: "Team members' new-account criteria (3/5 as per own criteria)",
      value: "6/6 met",
      status: "completed",
    },
    {
      id: "9",
      label:
        "Additional incentive — self accounts (₹1L margin + ₹100 brokerage)",
      value: "6 of 6 eligible",
      status: "completed",
    },
    {
      id: "10",
      label:
        "Additional incentive — team accounts (₹1L margin + ₹100 brokerage)",
      value: "7 of 32 eligible",
      status: "completed",
    },
    {
      id: "11",
      label: "NISM VII, VIII & XVI",
      value: "Valid",
      status: "completed",
    },
  ],
};

// Payout breakdown (on team revenue)
export const Q1_TL_PAYOUT: PayoutBreakdownData = {
  title: "Payout breakdown (on team revenue)",
  rows: [
    {
      component: "Team broking incentive",
      basis: "₹53,60,000",
      rate: "5%",
      amount: "₹2,68,000",
      amountColor: "#378ADD",
    },
    {
      component: "Team non-broking incentive",
      basis: "₹28,24,000",
      rate: "7%",
      amount: "₹1,97,680",
      amountColor: "#16A34A",
    },
    {
      component: "Additional incentive — self accounts",
      basis: "6 eligible new accounts",
      rate: "₹200/account",
      amount: "₹1,200",
      amountColor: "#D97706",
    },
    {
      component: "Additional incentive — team accounts",
      basis: "7 eligible new accounts",
      rate: "₹100/account",
      amount: "₹700",
      amountColor: "#D97706",
    },
    {
      component: "Total incentive",
      basis: "",
      rate: "",
      amount: "₹4,67,580",
      amountColor: "#5F7F38",
      highlight: true,
    },
    {
      component: "Upfront (80%)",
      basis: "2nd month of next quarter",
      rate: "",
      amount: "₹3,74,064",
    },
    {
      component: "Deferred (20%)",
      basis: "May/Jun subject to annual MPC",
      rate: "",
      amount: "₹93,516",
    },
  ],
};

export const Q1_TL_PAYOUT_NOTE =
  "Additional incentive (acquisition bonus) is paid per eligible new account — each account must have ₹1,00,000 margin/funding and ₹100 brokerage. No minimum account count applies to the Team Leader.";

export const Q1_TL_ROLE: TeamRoleData = {
  title: "Team Leader",
  description:
    "Self min 1x CTC (mandatory) · Team min 3x CTC (excl. TL) · Slab on team revenue · Booster if all members qualify · Min 5 team members · NISM VII, VIII & XVI",
};
