import { useEffect } from "react";
import { Box } from "@mui/material";

import TargetMetricCard from "./TargetMetricCard";
import AnnualTargetLayout from "./AnnualTargetLayout";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchAnnualTargetDetails } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import {
  formatINR,
  getProgressPercent,
} from "@/modules/incentives/constants/annualTarget.helpers";

interface Props {
  empCode: any;
}

const AnnualTarget = ({ empCode }: Props) => {
  const dispatch = useAppDispatch();
  const { annualTargetDetails } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  useEffect(() => {
    if (!empCode) return;
    dispatch(fetchAnnualTargetDetails({ empcode: empCode }));
  }, [dispatch, empCode]);

  const summary = annualTargetDetails?.data?.annualtarget;
  const monthlyRevenue =
    annualTargetDetails?.data?.annualRevenueMonthwise ?? [];

  const targetMetrics = [
    {
      id: "broking",
      title: "Broking (Revenue Credit)",
      target: formatINR(summary?.brokingTarget ?? 0),
      achieved: formatINR(summary?.brokingCredits ?? 0),
      progress: getProgressPercent(
        summary?.brokingCredits ?? 0,
        summary?.brokingTarget ?? 0,
      ),
      color: "#2F80ED",
    },
    {
      id: "non-broking",
      title: "Non-broking (Revenue Credit)",
      target: formatINR(summary?.nonBrokingTarget ?? 0),
      achieved: formatINR(summary?.nonBrokingCredits ?? 0),
      progress: getProgressPercent(
        summary?.nonBrokingCredits ?? 0,
        summary?.nonBrokingTarget ?? 0,
      ),
      color: "#21B573",
    },
    {
      id: "total",
      title: "Total (Revenue Credit)",
      target: formatINR(summary?.totalTarget ?? 0),
      achieved: formatINR(summary?.totalCredits ?? 0),
      progress: getProgressPercent(
        summary?.totalCredits ?? 0,
        summary?.totalTarget ?? 0,
      ),
      color: "#185FA5",
    },
  ];

  return (
    <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {targetMetrics.map((item) => (
          <TargetMetricCard
            key={item.id}
            title={item.title}
            target={item.target}
            achieved={item.achieved}
            progress={item.progress}
            color={item.color}
          />
        ))}
      </Box>

      <AnnualTargetLayout monthlyRevenue={monthlyRevenue} />
    </Box>
  );
};

export default AnnualTarget;
