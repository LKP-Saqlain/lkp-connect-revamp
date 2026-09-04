import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import TeamOverviewTabs, {
  type TeamOverviewTab,
} from "../../components/TeamOverviewTabs/TeamOverviewTabs";
import TeamDistributionTree from "../../components/TeamDistributionTree/TeamDistributionTree";
import RoleSummary from "../ClientAcquisition/components/RoleSummary";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchGetTeamDistribution,
  fetchTeamMultipleSummary,
  fetchTeamIncentiveSummary,
} from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import TeamMultipleSummaryTable from "../../components/TeamMultipleSummaryTable/TeamMultipleSummaryTable";
import TeamIncentiveSummaryTable from "../../components/TeamMultipleSummaryTable/TeamIncentiveSummaryTable";
import MemberDashboard from "./MemberDashboard/MemberDashboard";
import type { TeamDistDetail } from "../../types/teamDistribution.types";

interface Props {
  empCode: any;
}

const TeamOverview = ({ empCode }: Props) => {
  const [tab, setTab] = useState<TeamOverviewTab>("team-distribution");
  const [selectedMember, setSelectedMember] = useState<TeamDistDetail | null>(
    null,
  );

  const dispatch = useAppDispatch();

  const { GetTeamDistribution, teamMultipleSummary, teamIncentiveSummary } =
    useAppSelector((state) => state.incentivePeriod);

  useEffect(() => {
    if (!empCode || selectedMember) return;

    if (tab === "team-distribution") {
      dispatch(fetchGetTeamDistribution({ empCode, financialYear: "2026-27" }));
    }
    if (tab === "multiple-summary") {
      dispatch(fetchTeamMultipleSummary({ empCode, financialYear: "2026-27" }));
    }
    if (tab === "incentive-summary") {
      dispatch(
        fetchTeamIncentiveSummary({ empCode, financialYear: "2026-27" }),
      );
    }
  }, [dispatch, empCode, tab, selectedMember]);

  if (selectedMember) {
    return (
      <MemberDashboard
        member={selectedMember}
        onBack={() => setSelectedMember(null)}
      />
    );
  }

  return (
    <Box
      sx={{
        mb: 2,
        backgroundColor: "#FFFFFF",
        border: "1px solid #E4E7EC",
        borderRadius: "10px",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
        <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#101828" }}>
          Team overview
        </Typography>
        <Typography sx={{ fontSize: 12.5, color: "#667085", mt: 0.3 }}>
          Distribution, performance and details across all members
        </Typography>
      </Box>

      <TeamOverviewTabs value={tab} onChange={setTab} />

      {tab === "team-distribution" && (
        <TeamDistributionTree
          data={GetTeamDistribution?.data}
          onSelectMember={setSelectedMember}
        />
      )}

      {tab === "multiple-summary" && (
        <TeamMultipleSummaryTable members={teamMultipleSummary?.data ?? []} />
      )}

      {tab === "incentive-summary" && (
        <TeamIncentiveSummaryTable members={teamIncentiveSummary?.data ?? []} />
      )}

      {tab === "team-details" && (
        <Typography sx={{ fontSize: 13, color: "#667085" }}>
          Team details — coming soon.
        </Typography>
      )}

      <RoleSummary
        title="Team Leader"
        description="Self min 1x CTC (mandatory) · Team min 3x CTC (excl. TL) · Slab on team revenue · Booster if all members qualify · Min 5 team members · NISM VII, VIII & XVI"
        icon={
          <GroupsOutlinedIcon
            sx={{ color: "#185FA5", fontSize: 28, flexShrink: 0 }}
          />
        }
      />
    </Box>
  );
};

export default TeamOverview;
