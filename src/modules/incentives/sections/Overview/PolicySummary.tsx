import { useEffect } from "react";
import { Box } from "@mui/material";

import PolicyMetricCard from "../../components/PolicyMetricCard";
import PolicyLayout from "./PolicySummary/PolicyLayout";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchSalesSummary } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import {
  formatMPCThreshold,
  // getRoleLabel,
} from "../../constants/policyTabs.data";

interface Props {
  employeeType: string;
}

const PolicySummary = ({ employeeType }: Props) => {
  const dispatch = useAppDispatch();
  const { salesSummary } = useAppSelector((state) => state.incentivePeriod);

  useEffect(() => {
    if (!employeeType) return;
    dispatch(fetchSalesSummary({ employeeType }));
  }, [dispatch, employeeType]);

  const mpc = salesSummary?.data?.mpcResponse;
  const modules = salesSummary?.data?.summarydetails ?? [];

  const metrics = [
    {
      title: "MPC threshold",
      value: formatMPCThreshold(mpc?.criteriaValue),
      helper: "Quarterly minimum for incentive eligibility.",
      color: "#185FA5",
    },
    {
      title: "Max incentive cap",
      value: `${mpc?.maxCTCCap ?? "—"} CTC`,
      helper: "Waived if self-sourced ₹50L margin + non-broking target met.",
      color: "#5F7F38",
    },
    {
      title: "Per-client revenue cap",
      value: `${mpc?.clientRevenueCap ?? "—"} / client`,
      helper:
        "No single client may contribute more than 25% of total revenue credit.",
      color: "#B54708",
    },
  ];

  const payoutModule = modules.find(
    (m) => m.moduleHeader === "Payout schedule",
  );
  const shortfallModule = modules.find(
    (m) => m.moduleHeader === "Shortfall carry-forward",
  );
  const complianceModule = modules.find(
    (m) => m.moduleHeader === "Compliance & deductions",
  );
  const mtfModule = modules.find((m) => m.moduleHeader === "MTF income rules");

  return (
    <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {metrics.map((item) => (
          <PolicyMetricCard
            key={item.title}
            title={item.title}
            value={item.value}
            helper={item.helper}
            color={item.color}
          />
        ))}
      </Box>

      <PolicyLayout
        employeeType={employeeType}
        payoutModule={payoutModule}
        shortfallModule={shortfallModule}
        complianceModule={complianceModule}
        mtfModule={mtfModule}
      />
    </Box>
  );
};

export default PolicySummary;
