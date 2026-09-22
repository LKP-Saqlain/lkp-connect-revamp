import { Box } from "@mui/material";

import MPCRoleCard from "./MPCRoleCard";
import PayoutCard from "./PayoutCard";
import ComplianceCard from "./ComplianceCard";
import MTFRulesCard from "./MTFRulesCard";

import type { SummaryModule } from "@/modules/incentives/types/salesSummary.types";

interface Props {
  employeeType: string;
  payoutModule?: SummaryModule;
  shortfallModule?: SummaryModule;
  complianceModule?: SummaryModule;
  mtfModule?: SummaryModule;
}

const PolicyLayout = ({
  employeeType,
  payoutModule,
  shortfallModule,
  complianceModule,
  mtfModule,
}: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* Row 1: MPC by role | Payout schedule + Shortfall */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: 3,
          alignItems: "start",
        }}
      >
        <MPCRoleCard employeeType={employeeType} />
        <PayoutCard
          payoutModule={payoutModule}
          shortfallModule={shortfallModule}
        />
      </Box>

      {/* Row 2: Compliance | MTF rules */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: 3,
          alignItems: "start",
        }}
      >
        <ComplianceCard complianceModule={complianceModule} />
        <MTFRulesCard mtfModule={mtfModule} />
      </Box>
    </Box>
  );
};

export default PolicyLayout;
