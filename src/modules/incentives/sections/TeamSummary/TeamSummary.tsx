import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchTeamSummary } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import { getQuarterName } from "../../constants/overall";
import type { IncentivePeriod } from "../../types/incentive.types";

import TeamSummaryCards from "./TeamSummaryCards";
import TeamMemberSummaryTable from "./TeamMemberSummaryTable";
import RoleSummary from "../ClientAcquisition/components/RoleSummary";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

interface Props {
  period: IncentivePeriod;
  empCode: string;
}

const TeamSummary = ({ period, empCode }: Props) => {
  const dispatch = useAppDispatch();
  const { teamSummary } = useAppSelector((state) => state.incentivePeriod);

  const quarterName = getQuarterName(period);

  useEffect(() => {
    if (!empCode || !quarterName) return;

    dispatch(
      fetchTeamSummary({
        empCode,
        financialYear: "2026-27",
        quarterName,
      }),
    );
  }, [dispatch, empCode, quarterName]);

  const data = teamSummary?.data;

  if (!data) return null;

  return (
    <Box
      sx={{
        mt: 3,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TeamSummaryCards summary={data.summary} />

      <TeamMemberSummaryTable members={data.members} summary={data.summary} />

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 1.2,
          background: "#FFFFFF",
          border: "1px solid #E4E7EC",
          borderLeft: "4px solid #185FA5",
          borderRadius: "12px",
          p: 2,
        }}
      >
        <GroupsOutlinedIcon
          sx={{ fontSize: 20, color: "#185FA5", mt: "2px" }}
        />
        <Box>
          <Typography
            sx={{ fontSize: 13, fontWeight: 700, color: "#111111", mb: 0.3 }}
          >
            Team Leader
          </Typography>
          <Typography
            sx={{ fontSize: 12.5, lineHeight: 1.6, color: "#667085" }}
          >
            Self min 1x CTC (mandatory) · Team min 3x CTC (excl. TL) · Slab on
            team revenue · Booster if all members qualify · Min 5 team members ·
            NISM VII, VIII & XVI
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamSummary;
