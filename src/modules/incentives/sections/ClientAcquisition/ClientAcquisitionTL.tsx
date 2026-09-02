import { Box } from "@mui/material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import SectionLabel from "./components/SectionLabel";
import SummaryCards from "./components/SummaryCards";
import AcquisitionTable from "./components/AcquisitionTable";
import AdditionalIncentiveTable from "./components/AdditionalIncentiveTable/AdditionalIncentiveTable";
import TeamAcquisitionTable from "./components/TeamAcquisitionTable/TeamAcquisitionTable";
import AcquisitionRules from "../ClientAcquisition/components/AcquisitionRules";
import RoleSummary from "../ClientAcquisition/components/RoleSummary";

// import type { ClientAcquisitionReportingHeadData } from "../../types/incentive.types";
import type {
  AcquisitionSummaryCard,
  ClientAcquisitionReportingHeadData,
} from "./types/clientAcquisition.types";

interface Props {
  data?: ClientAcquisitionReportingHeadData | null;
  rules: string[];
}

const ClientAcquisitionTL = ({ data, rules }: Props) => {
  const selfSummary = data?.selfSummary;
  const selfAccounts = data?.selfAccounts ?? [];
  const teamMembers = data?.teamMembers ?? [];
  const additionalIncentive = data?.additionalIncentive ?? [];

  const summary: AcquisitionSummaryCard[] = [
    {
      id: "newAccounts",
      title: "New accounts acquired",
      value: String(selfSummary?.newAccountsAcquired ?? 0),
      subtitle: "No minimum applicable",
      color: "#2F80ED",
    },
    {
      id: "marginQualified",
      title: "₹1L margin qualified",
      value: String(selfSummary?.marginQualified ?? 0),
      suffix: `/ ${selfSummary?.newAccountsAcquired ?? 0}`,
      color: "#2F80ED",
    },
    {
      id: "brokerageQualified",
      title: "₹100 brokerage qualified",
      value: String(selfSummary?.brokerageQualified ?? 0),
      suffix: `/ ${selfSummary?.newAccountsAcquired ?? 0}`,
      color:
        selfSummary != null &&
        selfSummary.brokerageQualified >= selfSummary.newAccountsAcquired
          ? "#2F80ED"
          : "#D64545",
    },
  ];

  const clients = selfAccounts.map((acc) => ({
    id: acc.srNo,
    name: acc.clientName,
    margin: acc.funding,
    brokerage: acc.brokerage,
    status: acc.accountStatus,
  }));

  const headerNote =
    selfSummary != null
      ? `₹${(selfSummary.requiredFunding / 100000).toFixed(0)}L margin + ₹${selfSummary.requiredBrokerage} brokerage per account`
      : "";

  return (
    <Box
      sx={{ mt: 3, mb: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <SectionLabel
        icon={
          <PersonOutlineOutlinedIcon sx={{ fontSize: 16, color: "#185FA5" }} />
        }
        title="My acquisitions (self book)"
      />

      <SummaryCards summary={summary} />

      <AcquisitionTable clients={clients} />

      <AdditionalIncentiveTable
        title="Additional incentive (acquisition bonus)"
        headerNote={headerNote}
        footerNote="Payable only on successful achievement of all conditions under Section 5(a)."
        rows={additionalIncentive}
      />

      <SectionLabel
        icon={<GroupsOutlinedIcon sx={{ fontSize: 16, color: "#185FA5" }} />}
        title="Team member new client business"
      />

      <TeamAcquisitionTable
        title="Employee-wise acquisition summary"
        subtitle="Each team member must acquire the minimum per their own individual criteria (3/5) · each account needs ₹1,00,000 margin/funding and ₹100 brokerage."
        footerNote="Open a member's full dashboard from the Team Overview button in the period bar."
        members={teamMembers}
      />

      <AcquisitionRules rules={rules} />

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

export default ClientAcquisitionTL;
