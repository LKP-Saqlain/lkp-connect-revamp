import type {
  MetricCardData,
  TeamEligibilityChecklistData,
  TeamRoleData,
  EmployeeIncentiveData,
  PayoutBreakdownData,
} from "../types/incentive.types";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// -----------------------------------------
// 1) Top summary strip — NOW API-DRIVEN
// -----------------------------------------

export const buildQ2TLSummary = (
  data?: EmployeeIncentiveData | null,
): MetricCardData[] => {
  const selfMet =
    data?.selfMultiple != null && data?.reqSelfMultiple != null
      ? data.selfMultiple >= data.reqSelfMultiple
      : null;

  const teamMet =
    data?.teamRevMultiple != null && data?.reqTeamRevMultiple != null
      ? data.teamRevMultiple >= data.reqTeamRevMultiple
      : null;

  return [
    {
      id: "my-revenue-multiple",
      title: "My revenue multiple",
      value: data?.selfMultiple != null ? `${data.selfMultiple}x` : "—",
      subtitle:
        data?.reqSelfMultiple != null
          ? `Min ${data.reqSelfMultiple}x self CTC required`
          : "Min self CTC required",
      icon: (
        <PersonOutlineOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />
      ),
      color:
        selfMet === false
          ? "#D64545"
          : selfMet === true
            ? "#185FA5"
            : "#98A2B3",
    },
    {
      id: "team-revenue-multiple",
      title: "Team revenue multiple",
      value: data?.teamRevMultiple != null ? `${data.teamRevMultiple}x` : "—",
      subtitle:
        data?.reqTeamRevMultiple != null
          ? `Min ${data.reqTeamRevMultiple}.0x team CTC required`
          : "Min team CTC required",
      icon: <GroupsOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
      color:
        teamMet === false
          ? "#D64545"
          : teamMet === true
            ? "#185FA5"
            : "#98A2B3",
    },
    {
      id: "booster-incentive",
      title: "Booster incentive",
      value:
        data?.boosterAmount != null && data.boosterAmount > 0
          ? `₹${data.boosterAmount.toLocaleString("en-IN")}`
          : "N/A",
      subtitle:
        data?.eligibleMembers != null && data?.teamMembers != null
          ? `${data.eligibleMembers} of ${data.teamMembers} qualified`
          : "Not eligible this quarter",
      icon: <BoltOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
      color: "#98A2B3",
    },
    {
      id: "est-incentive",
      title: "Est. incentive",
      value:
        data?.finalIncentive != null
          ? `₹${data.finalIncentive.toLocaleString("en-IN")}`
          : "₹0",
      subtitle:
        data?.newAccountsIncentive != null && data.newAccountsIncentive > 0
          ? `Incl. ₹${data.newAccountsIncentive.toLocaleString("en-IN")} acquisition bonus`
          : "Minimum criteria not met",
      icon: <PaidOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
      color:
        data?.finalIncentive != null && data.finalIncentive > 0
          ? "#5F7F38"
          : "#D64545",
    },
  ];
};

// -----------------------------------------
// 2) My performance (self book) — structure ready, static for now
// -----------------------------------------

export const buildQ2TLSelfMetrics = (
  data?: EmployeeIncentiveData | null,
): MetricCardData[] => {
  return [
    {
      id: "self-broking",
      title: "Broking Revenue Credit",
      value:
        data?.brokingCredits != null
          ? `₹${data.brokingCredits.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}`
          : "₹0",
      subtitle:
        data?.brokingPercent != null && data?.totalBrokingRevenue != null
          ? `${data.brokingPercent}% of ₹${data.totalBrokingRevenue.toLocaleString(
              "en-IN",
              { maximumFractionDigits: 0 },
            )}`
          : undefined,
      icon: TrendingUp,
    },
    {
      id: "self-non-broking",
      title: "Non Broking Revenue Credit",
      value:
        data?.nonBrokingCredits != null
          ? `₹${data.nonBrokingCredits.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}`
          : "₹0",
      subtitle:
        data?.nonBrokingPercent != null && data?.totalNonBrokingRevenue != null
          ? `${data.nonBrokingPercent}% of ₹${data.totalNonBrokingRevenue.toLocaleString(
              "en-IN",
              { maximumFractionDigits: 0 },
            )}`
          : undefined,
      icon: BankImg,
    },
    {
      id: "self-total",
      title: "Total revenue credit",
      value:
        data?.totalRevenue != null
          ? `₹${data.totalRevenue.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}`
          : "₹0",
      icon: <InfoOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
    },
  ];
};
export const buildQ2TLSelfCriteria = (data?: EmployeeIncentiveData | null) => ({
  title: "My performance (self book)",
  actual: data?.selfMultiple != null ? `${data.selfMultiple}x` : "0.9x",
  required:
    data?.reqSelfMultiple != null
      ? `${data.reqSelfMultiple}.0x of total CTC`
      : "1.0x of total CTC",
});

// -----------------------------------------
// 3) Team performance (excl. self) — structure ready, static for now
// -----------------------------------------

export const buildQ2TLTeamMetrics = (
  data?: EmployeeIncentiveData | null,
): MetricCardData[] => {
  return [
    {
      id: "team-broking",
      title: "Broking Revenue Credit",
      value:
        data?.teamBrokingCredits != null
          ? `₹${data.teamBrokingCredits.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}`
          : "₹0",
      subtitle:
        data?.brokingPercent != null && data?.teamBrokingRevenue != null
          ? `${data.brokingPercent}% of ₹${data.teamBrokingRevenue.toLocaleString(
              "en-IN",
              { maximumFractionDigits: 0 },
            )}`
          : undefined,
      icon: TrendingUp,
    },
    {
      id: "team-non-broking",
      title: "Non Broking Revenue Credit",
      value:
        data?.teamNonBrokingCredits != null
          ? `₹${data.teamNonBrokingCredits.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}`
          : "₹0",
      subtitle:
        data?.nonBrokingPercent != null && data?.teamNonBrokingRevenue != null
          ? `${data.nonBrokingPercent}% of ₹${data.teamNonBrokingRevenue.toLocaleString(
              "en-IN",
              { maximumFractionDigits: 0 },
            )}`
          : undefined,
      icon: BankImg,
    },
    {
      id: "team-total",
      title: "Total revenue credit",
      value:
        data?.teamRevenueCredits != null
          ? `₹${data.teamRevenueCredits.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}`
          : "₹0",
      icon: <InfoOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
    },
  ];
};

export const buildQ2TLTeamCriteria = (data?: EmployeeIncentiveData | null) => ({
  title: `Team performance (excl. self · ${data?.teamMembers ?? "—"} members)`,
  actual: data?.teamRevMultiple != null ? `${data.teamRevMultiple}x` : "2.4x",
  required:
    data?.reqTeamRevMultiple != null
      ? `${data.reqTeamRevMultiple}.0x of total CTC`
      : "3.0x of total CTC",
});

// -----------------------------------------
// 4) Eligibility checklist — structure ready, static for now
// -----------------------------------------

export const buildQ2TLEligibility = (
  data?: EmployeeIncentiveData | null,
): TeamEligibilityChecklistData => {
  const items: TeamEligibilityChecklistData["items"] = [
    {
      id: "1",
      label: `Self min ${data?.reqSelfMultiple ?? 1}x CTC (mandatory)`,
      value: data?.selfMultiple != null ? `${data.selfMultiple}x` : "—",
      status:
        data?.selfMultiple != null && data?.reqSelfMultiple != null
          ? data.selfMultiple >= data.reqSelfMultiple
            ? "completed"
            : "pending"
          : "pending",
    },
    {
      id: "2",
      label: `Team min ${data?.reqTeamRevMultiple ?? 3}.0x CTC`,
      value: data?.teamRevMultiple != null ? `${data.teamRevMultiple}x` : "—",
      status:
        data?.teamRevMultiple != null && data?.reqTeamRevMultiple != null
          ? data.teamRevMultiple >= data.reqTeamRevMultiple
            ? "completed"
            : "pending"
          : "pending",
    },
    {
      id: "3",
      label: `Team min ${data?.reqTeamBrokRevMultiple ?? 2}x from Broking`,
      value:
        data?.teamBrokRevMultiple != null
          ? `${data.teamBrokRevMultiple}x`
          : "—",
      status:
        data?.teamBrokRevMultiple != null &&
        data?.reqTeamBrokRevMultiple != null
          ? data.teamBrokRevMultiple >= data.reqTeamBrokRevMultiple
            ? "completed"
            : "pending"
          : "pending",
    },
    {
      id: "4",
      label: `Team min ${data?.reqTeamNonBrokRevMultiple ?? 1}x from Non-broking`,
      value:
        data?.teamNonBrokRevMultiple != null
          ? `${data.teamNonBrokRevMultiple}x`
          : "—",
      status:
        data?.teamNonBrokRevMultiple != null &&
        data?.reqTeamNonBrokRevMultiple != null
          ? data.teamNonBrokRevMultiple >= data.reqTeamNonBrokRevMultiple
            ? "completed"
            : "pending"
          : "pending",
    },
    {
      id: "5",
      label: "Min 5 team members",
      value: data?.teamMembers != null ? `${data.teamMembers} members` : "—",
      status:
        data?.teamMembers != null && data.teamMembers >= 5
          ? "completed"
          : "pending",
    },
    {
      id: "6",
      label: "All members qualify (for booster)",
      value:
        data?.eligibleMembers != null && data?.teamMembers != null
          ? `${data.eligibleMembers}/${data.teamMembers}`
          : "—",
      status: data?.boosterEligible ? "completed" : "pending",
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
      value:
        data?.eligibleMembers != null && data?.teamMembers != null
          ? `${data.eligibleMembers}/${data.teamMembers} met`
          : "—",
      status: data?.teamStatus ? "completed" : "pending",
    },
    {
      id: "9",
      label:
        "Additional incentive — self accounts (₹1L margin + ₹100 brokerage)",
      value:
        data?.eligibleAccounts != null && data?.totalNewAccounts != null
          ? `${data.eligibleAccounts} of ${data.totalNewAccounts} eligible`
          : "—",
      status: data?.newClientStatus ? "completed" : "pending",
    },
    {
      id: "10",
      label:
        "Additional incentive — team accounts (₹1L margin + ₹100 brokerage)",
      value:
        data?.teamEligibleNewAccounts != null && data?.teamNewAccounts != null
          ? `${data.teamEligibleNewAccounts} of ${data.teamNewAccounts} eligible`
          : "—",
      status:
        data?.teamEligibleNewAccounts != null &&
        data.teamEligibleNewAccounts > 0
          ? "completed"
          : "pending",
    },
    {
      id: "11",
      label: "NISM VII, VIII & XVI",
      value:
        data?.nismStatus === true
          ? "Valid"
          : data?.nismStatus === false
            ? "Invalid"
            : "Pending",
      status: data?.nismStatus === true ? "completed" : "pending",
    },
  ];

  return {
    title: "Eligibility checklist",
    items,
  };
};

// -----------------------------------------
// 5) Role card — static, unlikely to be API-driven
// -----------------------------------------

export const Q2_TL_ROLE: TeamRoleData = {
  title: "Team Leader",
  description:
    "Self min 1x CTC (mandatory) · Team min 3x CTC (excl. TL) · Slab on team revenue · Booster if all members qualify · Min 5 team members · NISM VII, VIII & XVI",
};

// -----------------------------------------
// 6) Payout breakdown (on team revenue)
// -----------------------------------------

export const buildQ2TLPayout = (
  data?: EmployeeIncentiveData | null,
): PayoutBreakdownData => {
  const selfAdditionalAmount =
    data?.eligibleAccounts != null && data?.selfNewAccountRate != null
      ? data.eligibleAccounts * data.selfNewAccountRate
      : 0;

  const teamAdditionalAmount =
    data?.teamEligibleNewAccounts != null && data?.teamNewAccountRate != null
      ? data.teamEligibleNewAccounts * data.teamNewAccountRate
      : 0;

  return {
    title: "Payout breakdown (on team revenue)",
    rows: [
      {
        component: "Team broking incentive",
        basis:
          data?.teamBrokingCredits != null
            ? `₹${data.teamBrokingCredits.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}`
            : "—",
        rate: data?.brokIncPercent != null ? `${data.brokIncPercent}%` : "—",
        amount:
          data?.brokingIncentive != null
            ? `₹${data.brokingIncentive.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}`
            : "₹0",
        amountColor: "#378ADD",
      },
      {
        component: "Team non-broking incentive",
        basis:
          data?.teamNonBrokingCredits != null
            ? `₹${data.teamNonBrokingCredits.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}`
            : "—",
        rate:
          data?.nonBrokIncPercent != null ? `${data.nonBrokIncPercent}%` : "—",
        amount:
          data?.nonBrokingIncentive != null
            ? `₹${data.nonBrokingIncentive.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}`
            : "₹0",
        amountColor: "#16A34A",
      },
      {
        component: "Additional incentive — self accounts",
        basis:
          data?.eligibleAccounts != null
            ? `${data.eligibleAccounts} eligible new accounts`
            : "—",
        rate:
          data?.selfNewAccountRate != null
            ? `₹${data.selfNewAccountRate}/account`
            : "—",
        amount: `₹${selfAdditionalAmount.toLocaleString("en-IN", {
          maximumFractionDigits: 0,
        })}`,
        amountColor: "#D97706",
      },
      {
        component: "Additional incentive — team accounts",
        basis:
          data?.teamEligibleNewAccounts != null
            ? `${data.teamEligibleNewAccounts} eligible new accounts`
            : "—",
        rate:
          data?.teamNewAccountRate != null
            ? `₹${data.teamNewAccountRate}/account`
            : "—",
        amount: `₹${teamAdditionalAmount.toLocaleString("en-IN", {
          maximumFractionDigits: 0,
        })}`,
        amountColor: "#D97706",
      },
      {
        component: "Total incentive",
        basis: "",
        rate: "",
        amount:
          data?.finalIncentive != null
            ? `₹${data.finalIncentive.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}`
            : "₹0",
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
};
