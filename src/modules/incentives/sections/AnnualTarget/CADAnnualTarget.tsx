import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchCADAnnualTargetDetails } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import {
  CAD_QUARTER_LABELS,
  getAnnualAchievedPercent,
} from "@/modules/incentives/constants/annualTarget.helpers";
import RoleSummary from "@/modules/incentives/sections/ClientAcquisition/components/RoleSummary";

interface Props {
  empCode: string;
}

const CADAnnualTarget = ({ empCode }: Props) => {
  const dispatch = useAppDispatch();
  const { cadAnnualTargetDetails } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  useEffect(() => {
    if (!empCode) return;
    dispatch(fetchCADAnnualTargetDetails({ empcode: empCode }));
  }, [dispatch, empCode]);

  const annualTarget = cadAnnualTargetDetails?.data?.cadAnnualTarget;
  const quarters = cadAnnualTargetDetails?.data?.cadQuarterWiseTarget ?? [];

  const target = annualTarget?.annualAccountTarget ?? 0;
  const achieved = annualTarget?.annualAchievedTarget ?? 0;
  const achievedPercent = getAnnualAchievedPercent(achieved, target);
  const quarterlyTarget = quarters[0]?.targetAccounts ?? Math.round(target / 4);

  return (
    <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}>
      {/* Top 2 summary cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: 2,
        }}
      >
        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #E4E7EC",
            borderRadius: "12px",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 1 }}>
            <TrackChangesOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3" }} />
            <Typography sx={{ fontSize: 12, color: "#667085" }}>
              Annual target
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 24, fontWeight: 700, color: "#101828" }}>
            {target} accounts
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#667085", mt: 0.3 }}>
            {quarterlyTarget} accounts × 4 quarters
          </Typography>
        </Box>

        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #E4E7EC",
            borderRadius: "12px",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 1 }}>
            <AssignmentOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3" }} />
            <Typography sx={{ fontSize: 12, color: "#667085" }}>
              Achieved so far
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 24, fontWeight: 700, color: "#5F7F38" }}>
            {achieved} accounts
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#667085", mt: 0.3 }}>
            {achievedPercent}% of annual target
          </Typography>
        </Box>
      </Box>

      {/* Quarter-wise table */}
      <Box
        sx={{
          background: "#FFFFFF",
          border: "1px solid #E4E7EC",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.8,
            px: 2.5,
            py: 2,
            borderBottom: "1px solid #EAECF0",
          }}
        >
          <GridViewOutlinedIcon sx={{ fontSize: 16, color: "#185FA5" }} />
          <Typography
            sx={{ fontSize: 13.5, fontWeight: 600, color: "#101828" }}
          >
            Quarter-wise target vs achieved
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            px: 2.5,
            py: 1,
            borderBottom: "1px solid #EAECF0",
          }}
        >
          <Typography sx={{ fontSize: 11.5, color: "#667085" }}>
            Quarter
          </Typography>
          <Typography
            sx={{ fontSize: 11.5, color: "#667085", textAlign: "center" }}
          >
            Target
          </Typography>
          <Typography
            sx={{ fontSize: 11.5, color: "#667085", textAlign: "center" }}
          >
            Achieved
          </Typography>
          <Typography
            sx={{ fontSize: 11.5, color: "#667085", textAlign: "right" }}
          >
            Status
          </Typography>
        </Box>

        {quarters.map((q) => {
          const isMet = q.status.toLowerCase() === "met";

          return (
            <Box
              key={q.quarter}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                alignItems: "center",
                px: 2.5,
                py: 1.4,
                borderBottom: "1px solid #F2F4F7",
              }}
            >
              <Typography
                sx={{ fontSize: 13, fontWeight: 500, color: "#101828" }}
              >
                {CAD_QUARTER_LABELS[q.quarter] ?? q.quarter}
              </Typography>
              <Typography
                sx={{ fontSize: 13, color: "#344054", textAlign: "center" }}
              >
                {q.targetAccounts} accounts
              </Typography>
              <Typography
                sx={{ fontSize: 13, color: "#344054", textAlign: "center" }}
              >
                {q.achieved} accounts
              </Typography>
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  textAlign: "right",
                  color: isMet ? "#12B76A" : "#D64545",
                }}
              >
                {q.status}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <RoleSummary
        title="CAD / Advisory Desk"
        description="Incentive based on accounts activated/reactivated · Min ₹50K margin + ₹100 brokerage per account · NISM VII, VIII, XVI required"
        icon={
          <PhoneOutlinedIcon
            sx={{ color: "#185FA5", fontSize: 28, flexShrink: 0 }}
          />
        }
      />
    </Box>
  );
};

export default CADAnnualTarget;
