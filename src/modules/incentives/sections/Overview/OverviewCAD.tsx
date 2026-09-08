import Box from "@mui/material/Box";

import MetricGrid from "../../components/MetricCard";
import IncentiveSlabsCard from "../../components/IncentiveSlabsCard/IncentiveSlabsCard";
import TeamEligibilityChecklist from "../../components/TeamEligibilityChecklist";
import PayoutBreakdown from "../../components/PayoutBreakdown";
import RoleSummary from "../ClientAcquisition/components/RoleSummary";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

import {
  buildCADSlabs,
  buildCADSummary,
  buildCADProgress,
  buildCADEligibility,
  buildCADPayout,
  CAD_ELIGIBILITY_FOOTER_NOTE,
  CAD_ROLE,
} from "../../constants/cadOverview.data";

interface Props {
  employeeIncentive?: any;
}

const OverviewCAD = ({ employeeIncentive }: Props) => {
  const data = employeeIncentive?.data;

  const summary = buildCADSummary(data);
  const slabs = buildCADSlabs(data);
  const progress = buildCADProgress(data);
  const eligibility = buildCADEligibility(data);
  const payout = buildCADPayout(data);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
      <MetricGrid metrics={summary} />

      <IncentiveSlabsCard
        slabs={slabs}
        progressLabel={progress.progressLabel}
        progressPercent={progress.progressPercent}
        progressCurrentText={progress.progressCurrentText}
      />

      <TeamEligibilityChecklist
        data={eligibility}
        footerNote={CAD_ELIGIBILITY_FOOTER_NOTE}
      />

      <PayoutBreakdown data={payout} />

      <RoleSummary
        title={CAD_ROLE.title}
        description={CAD_ROLE.description}
        icon={
          <PhoneOutlinedIcon
            sx={{ color: "#185FA5", fontSize: 28, flexShrink: 0 }}
          />
        }
      />
    </Box>
  );
};

export default OverviewCAD;
