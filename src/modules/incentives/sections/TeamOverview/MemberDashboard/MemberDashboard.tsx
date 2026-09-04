import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Overview from "../../Overview/Overview";
import ClientRevenue from "../../ClientRevenue";
import RevenueBreakdown from "../../RevenueBreakdown";
import ClientAcquisition from "../../ClientAcquisition";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { fetchTeamMemberIncentive } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
// import { clearTeamMemberIncentive } from "@/redux/slices/incentivePeriod/incentivePeriod.slice";
import type { TeamDistDetail } from "../../../types/teamDistribution.types";
import type {
  IncentivePeriod,
  IncentiveTab,
} from "../../../types/incentive.types";
import { memberDashboardStyles as styles } from "./memberDashboard.styles";
import { fetchEmployeeIncentive } from "@/redux/slices";

interface Props {
  member: TeamDistDetail;
  onBack: () => void;
}

const ROLE_FULL_LABELS: Record<string, string> = {
  TL: "Team Leader",
  RM: "Relationship Manager",
  BM: "Branch Manager",
  Dealer: "Advisor – Dealing",
  BDM: "Business Development Manager",
  CAD: "CAD",
};

const PERIOD_TABS: {
  value: IncentivePeriod;
  label: string;
  quarterName: string;
}[] = [
  { value: "fy", label: "Full Year", quarterName: "FY" },
  { value: "q1", label: "Q1", quarterName: "Q1" },
  { value: "q2", label: "Q2", quarterName: "Q2" },
  { value: "q3", label: "Q3", quarterName: "Q3" },
  { value: "q4", label: "Q4", quarterName: "Q4" },
];

const MEMBER_TABS: { value: IncentiveTab; label: string }[] = [
  { value: "overview", label: "Overview" },
  { value: "client-revenue", label: "Client revenue" },
  { value: "revenue-breakdown", label: "Revenue breakdown" },
  { value: "client-acquisition", label: "New Client Business" },
];

const MemberDashboard = ({ member, onBack }: Props) => {
  const [period, setPeriod] = useState<IncentivePeriod>("fy");
  const [tab, setTab] = useState<IncentiveTab>("overview");

  const dispatch = useAppDispatch();
  const { employeeIncentive } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  // Reset local UI + cached data whenever a different member is opened
  useEffect(() => {
    setPeriod("fy");
    setTab("overview");
    // dispatch(clearTeamMemberIncentive());
  }, [dispatch, member.empCode]);

  useEffect(() => {
    const periodConfig = PERIOD_TABS.find((p) => p.value === period);
    if (!periodConfig) return;

    dispatch(
      fetchEmployeeIncentive({
        empCode: member.empCode,
        financialYear: "2026-27",
        quarterName: periodConfig.quarterName,
      }),
    );
  }, [dispatch, member.empCode, period]);

  const roleLabel =
    ROLE_FULL_LABELS[member.employeeType] ?? member.employeeType;

  const renderContent = () => {
    switch (tab) {
      case "overview":
        return (
          <Overview
            period={period}
            employeeIncentive={employeeIncentive}
            employeeType={member.employeeType}
            empCode={member.empCode}
          />
        );
      case "client-revenue":
        // NOTE: ClientRevenue must accept an optional empCode prop — see below
        return <ClientRevenue period={period} empCode={member.empCode} />;
      case "revenue-breakdown":
        // NOTE: RevenueBreakdown must accept an optional empCode prop — see below
        return <RevenueBreakdown period={period} empCode={member.empCode} />;
      case "client-acquisition":
        // NOTE: ClientAcquisition must accept an optional empCode prop — see below
        return (
          <ClientAcquisition
            period={period}
            employeeType={member.employeeType}
            empCode={member.empCode}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.headerRow}>
        <Box>
          <Box sx={styles.nameRow}>
            <Typography sx={styles.name}>{member.empName}</Typography>
            <Box sx={styles.roleChip}>{member.employeeType}</Box>
          </Box>
          <Typography sx={styles.subtitle}>
            {roleLabel} · same dashboard the member sees
          </Typography>
        </Box>

        <Button
          onClick={onBack}
          startIcon={<ArrowBackIcon sx={{ fontSize: "1px" }} />}
          sx={styles.backButton}
        >
          Back to Team overview
        </Button>
      </Box>

      <Box sx={styles.periodRow}>
        {PERIOD_TABS.map((p) => (
          <Box
            key={p.value}
            onClick={() => setPeriod(p.value)}
            sx={{
              ...styles.periodPill,
              ...(period === p.value ? styles.periodPillActive : {}),
            }}
          >
            {p.label}
          </Box>
        ))}
      </Box>

      <Box sx={styles.tabsRow}>
        {MEMBER_TABS.map((t) => (
          <Box
            key={t.value}
            onClick={() => setTab(t.value)}
            sx={{
              ...styles.tabItem,
              ...(tab === t.value ? styles.tabItemActive : {}),
            }}
          >
            {t.label}
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 2 }}>{renderContent()}</Box>
    </Box>
  );
};

export default MemberDashboard;
