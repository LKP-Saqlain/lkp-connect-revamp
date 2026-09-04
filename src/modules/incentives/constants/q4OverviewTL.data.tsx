import type {
  MetricCardData,
  TeamEligibilityChecklistData,
  TeamRoleData,
  PayoutBreakdownData,
  EmployeeIncentiveData,
} from "../types/incentive.types";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// -----------------------------------------
// Carry-forward banner text
// -----------------------------------------

export const buildQ4TLCarryForward = (data?: EmployeeIncentiveData | null) => ({
  title: "Q4 · Shortfall carry-forward active",
  description: `Q3 shortfall of ${data?.carryForwardMultiple ?? 0}x carried forward. Required: ${
    data?.reqTeamRevMultiple ?? 3
  }.0x current + ${data?.carryForwardMultiple ?? 0}x shortfall = ${
    data?.reqTeamRevMultipleWithCarry ?? "—"
  }x total. Achieved: ${data?.teamRevMultiple ?? 0}x.`,
  q4Minimum: `${data?.reqTeamRevMultiple ?? 3}.0x`,
  q3Shortfall: `${data?.carryForwardMultiple ?? 0}x`,
  required: `${data?.reqTeamRevMultipleWithCarry ?? "—"}x`,
});

// -----------------------------------------
// Top summary strip
// -----------------------------------------

export const buildQ4TLSummary = (
  data?: EmployeeIncentiveData | null,
): MetricCardData[] => {
  const selfMet =
    data?.selfMultiple != null && data?.reqSelfMultiple != null
      ? data.selfMultiple >= data.reqSelfMultiple
      : null;

  const teamMet =
    data?.teamRevMultiple != null && data?.reqTeamRevMultipleWithCarry != null
      ? data.teamRevMultiple >= data.reqTeamRevMultipleWithCarry
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
        data?.reqTeamRevMultipleWithCarry != null
          ? `Min ${data.reqTeamRevMultipleWithCarry}x team CTC required (incl. ${
              data?.carryForwardMultiple ?? 0
            }x carried)`
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
// My performance (self book)
// -----------------------------------------

export const buildQ4TLSelfMetrics = (
  data?: EmployeeIncentiveData | null,
): MetricCardData[] => {
  return [
    {
      id: "self-broking",
      title: "Broking Revenue Credit",
      value:
        data?.brokingCredits != null
          ? `₹${data.brokingCredits.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
          : "₹0",
      subtitle:
        data?.brokingPercent != null && data?.totalBrokingRevenue != null
          ? `${data.brokingPercent}% of ₹${data.totalBrokingRevenue.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 0,
              },
            )}`
          : undefined,
      icon: TrendingUp,
    },
    {
      id: "self-non-broking",
      title: "Non Broking Revenue Credit",
      value:
        data?.nonBrokingCredits != null
          ? `₹${data.nonBrokingCredits.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
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
          ? `₹${data.totalRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
          : "₹0",
      icon: <InfoOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
    },
  ];
};

export const buildQ4TLSelfCriteria = (data?: EmployeeIncentiveData | null) => ({
  title: "My performance (self book)",
  actual: data?.selfMultiple != null ? `${data.selfMultiple}x` : "—",
  required:
    data?.reqSelfMultiple != null
      ? `${data.reqSelfMultiple}.0x of total CTC`
      : "1.0x of total CTC",
});

// -----------------------------------------
// Team performance (excl. self)
// -----------------------------------------

export const buildQ4TLTeamMetrics = (
  data?: EmployeeIncentiveData | null,
): MetricCardData[] => {
  return [
    {
      id: "team-broking",
      title: "Broking Revenue Credit",
      value:
        data?.teamBrokingCredits != null
          ? `₹${data.teamBrokingCredits.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
          : "₹0",
      subtitle:
        data?.brokingPercent != null && data?.teamBrokingRevenue != null
          ? `${data.brokingPercent}% of ₹${data.teamBrokingRevenue.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 0,
              },
            )}`
          : undefined,
      icon: TrendingUp,
    },
    {
      id: "team-non-broking",
      title: "Non Broking Revenue Credit",
      value:
        data?.teamNonBrokingCredits != null
          ? `₹${data.teamNonBrokingCredits.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
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
          ? `₹${data.teamRevenueCredits.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
          : "₹0",
      icon: <InfoOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
    },
  ];
};

export const buildQ4TLTeamCriteria = (data?: EmployeeIncentiveData | null) => ({
  title: `Team performance (excl. self · ${data?.teamMembers ?? "—"} members)`,
  actual: data?.teamRevMultiple != null ? `${data.teamRevMultiple}x` : "—",
  required:
    data?.reqTeamRevMultipleWithCarry != null
      ? `${data.reqTeamRevMultipleWithCarry}x of total CTC (incl. carry-forward)`
      : "3.0x of total CTC",
});

// -----------------------------------------
// Eligibility checklist
// -----------------------------------------

export const buildQ4TLEligibility = (
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
      label: `Team min ${data?.reqTeamRevMultipleWithCarry ?? 3}x CTC (${
        data?.reqTeamRevMultiple ?? 3
      }x + ${data?.carryForwardMultiple ?? 0}x carried)`,
      value: data?.teamRevMultiple != null ? `${data.teamRevMultiple}x` : "—",
      status:
        data?.teamRevMultiple != null &&
        data?.reqTeamRevMultipleWithCarry != null
          ? data.teamRevMultiple >= data.reqTeamRevMultipleWithCarry
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

  return { title: "Eligibility checklist", items };
};

// -----------------------------------------
// Payout breakdown (on team revenue) — same pattern as Q2
// -----------------------------------------

export const buildQ4TLPayout = (
  data?: EmployeeIncentiveData | null,
): PayoutBreakdownData => {
  return {
    title: "Payout breakdown (on team revenue)",
    rows: [
      {
        component: "Team broking incentive",
        basis:
          data?.teamBrokingCredits != null
            ? `₹${data.teamBrokingCredits.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
            : "—",
        rate: data?.brokIncPercent != null ? `${data.brokIncPercent}%` : "—",
        amount:
          data?.brokingIncentive != null
            ? `₹${data.brokingIncentive.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
            : "₹0",
        amountColor: "#378ADD",
      },
      {
        component: "Team non-broking incentive",
        basis:
          data?.teamNonBrokingCredits != null
            ? `₹${data.teamNonBrokingCredits.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
            : "—",
        rate:
          data?.nonBrokIncPercent != null ? `${data.nonBrokIncPercent}%` : "—",
        amount:
          data?.nonBrokingIncentive != null
            ? `₹${data.nonBrokingIncentive.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
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
        amount:
          data?.eligibleAccounts != null && data?.selfNewAccountRate != null
            ? `₹${(
                data.eligibleAccounts * data.selfNewAccountRate
              ).toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}`
            : "₹0",
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
        amount:
          data?.teamEligibleNewAccounts != null &&
          data?.teamNewAccountRate != null
            ? `₹${(
                data.teamEligibleNewAccounts * data.teamNewAccountRate
              ).toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
            : "₹0",
        amountColor: "#D97706",
      },
      {
        component: "Total incentive",
        basis: "",
        rate: "",
        amount:
          data?.finalIncentive != null
            ? `₹${data.finalIncentive.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
            : "₹0",
        amountColor: "#5F7F38",
        highlight: true,
      },
    ],
  };
};

export const Q4_TL_ROLE: TeamRoleData = {
  title: "Team Leader",
  description:
    "Self min 1x CTC (mandatory) · Team min 3x CTC (excl. TL) · Slab on team revenue · Booster if all members qualify · Min 5 team members · NISM VII, VIII & XVI",
};
