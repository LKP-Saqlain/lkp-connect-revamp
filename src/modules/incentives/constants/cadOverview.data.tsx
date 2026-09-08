import type {
  MetricCardData,
  CADSlab,
  TeamEligibilityChecklistData,
  PayoutBreakdownData,
  EmployeeIncentiveData,
} from "../types/incentive.types";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

const SLAB_THRESHOLDS = [
  { id: "1", range: "1 – 25 accounts", rate: 200, min: 1, max: 25 },
  { id: "2", range: "26 – 50 accounts", rate: 300, min: 26, max: 50 },
  { id: "3", range: "Above 50 accounts", rate: 400, min: 51, max: Infinity },
];

export const buildCADSlabs = (
  data?: EmployeeIncentiveData | null,
): CADSlab[] => {
  const accounts = data?.totalNewAccounts ?? 0;
  return SLAB_THRESHOLDS.map((slab) => ({
    id: slab.id,
    range: slab.range,
    rate: slab.rate,
    active: accounts >= slab.min && accounts <= slab.max,
  }));
};

const getActiveSlabLabel = (accounts: number): string => {
  const slab = SLAB_THRESHOLDS.find(
    (s) => accounts >= s.min && accounts <= s.max,
  );
  return slab ? `${slab.range} slab` : "—";
};

export const buildCADSummary = (
  data?: EmployeeIncentiveData | null,
): MetricCardData[] => {
  const accounts = data?.totalNewAccounts ?? 0;
  const required = data?.requiredAccounts ?? 6;
  const isEligible = accounts >= required;
  //   const activeSlab = SLAB_THRESHOLDS.find(
  //     (s) => accounts >= s.min && accounts <= s.max,
  //   );

  return [
    {
      id: "accounts-activated",
      title: "Accounts activated",
      value: String(accounts),
      subtitle: `Min ${required} to qualify · ${isEligible ? "Eligible" : "Not eligible"}`,
      icon: (
        <PersonAddAltOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />
      ),
      color: isEligible ? "#185FA5" : "#D64545",
    },
    {
      id: "fully-qualified",
      title: "Fully qualified",
      value: String(data?.cadEligibleAccounts ?? 0),
      subtitle: `₹${(data?.reqMarginValue ?? 0) / 1000}K margin + ₹${data?.reqBrokValue ?? 0} brokerage`,
      icon: <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
    },
    {
      id: "current-slab",
      title: "Current slab",
      value: `₹${data?.cadEligibleAccountRate ?? 0}/acc`,
      subtitle: getActiveSlabLabel(accounts),
      icon: <GridViewOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
      color: "#185FA5",
    },
    {
      id: "est-incentive",
      title: "Est. incentive",
      value: `₹${(data?.finalIncentive ?? 0).toLocaleString("en-IN")}`,
      subtitle: `On ${accounts} accounts`,
      icon: <PaidOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
      color: "#5F7F38",
    },
  ];
};

export const buildCADProgress = (data?: EmployeeIncentiveData | null) => {
  const accounts = data?.totalNewAccounts ?? 0;
  const percent = Math.min((accounts / 50) * 100, 100);
  return {
    progressLabel: "Accounts progress vs slab target",
    progressPercent: percent,
    progressCurrentText: `${accounts} / 50+`,
  };
};

export const buildCADEligibility = (
  data?: EmployeeIncentiveData | null,
): TeamEligibilityChecklistData => {
  const accounts = data?.totalNewAccounts ?? 0;
  const required = data?.requiredAccounts ?? 6;
  const eligibleAccounts = data?.eligibleAccounts ?? 0;

  return {
    title: "Eligibility checklist",
    items: [
      {
        id: "1",
        label: `Min ${required} accounts activated`,
        value: `${accounts}/${required}`,
        status: accounts >= required ? "completed" : "pending",
      },
      {
        id: "2",
        label: `All accounts: ₹${(data?.reqMarginValue ?? 0) / 1000}K margin + ₹${
          data?.reqBrokValue ?? 0
        } brokerage`,
        value: `${eligibleAccounts} qualified`,
        status: eligibleAccounts > 0 ? "completed" : "pending",
      },
      {
        id: "3",
        label: "NISM VII, VIII & XVI",
        value:
          data?.nismStatus === true
            ? "Valid"
            : data?.nismStatus === false
              ? "Invalid"
              : "Pending",
        status: data?.nismStatus === true ? "completed" : "pending",
      },
    ],
  };
};

export const buildCADPayout = (
  data?: EmployeeIncentiveData | null,
): PayoutBreakdownData => {
  const accounts = data?.totalNewAccounts ?? 0;
  const rate = data?.cadEligibleAccountRate ?? 0;
  const finalIncentive = data?.finalIncentive ?? 0;

  return {
    title: "Payout breakdown",
    basisLabel: "Accounts",
    rows: [
      {
        component: "Activation incentive",
        basis: `${accounts} accounts`,
        rate: `₹${rate}/account`,
        amount: `₹${finalIncentive.toLocaleString("en-IN")}`,
        amountColor: "#378ADD",
      },
      {
        component: "Total incentive",
        basis: "",
        rate: "",
        amount: `₹${finalIncentive.toLocaleString("en-IN")}`,
        amountColor: "#5F7F38",
        highlight: true,
      },
      {
        component: "Upfront (80%)",
        basis: "2nd month of next quarter",
        rate: "",
        amount: `₹${Math.round(finalIncentive * 0.8).toLocaleString("en-IN")}`,
      },
      {
        component: "Deferred (20%)",
        basis: "May/Jun subject to annual MPC",
        rate: "",
        amount: `₹${Math.round(finalIncentive * 0.2).toLocaleString("en-IN")}`,
      },
    ],
  };
};

export const CAD_ELIGIBILITY_FOOTER_NOTE =
  "Each account must have min ₹50,000 margin/funding AND min ₹100 brokerage to count as activated.";

export const CAD_ROLE = {
  title: "CAD / Advisory Desk",
  description:
    "Incentive based on accounts activated/reactivated · Min ₹50K margin + ₹100 brokerage per account · NISM VII, VIII, XVI required",
};
