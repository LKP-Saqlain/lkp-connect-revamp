// import { Box, Typography } from "@mui/material";
import type { IncentivePeriod } from "../../types/incentive.types";
import OverviewFY from "./OverviewFY";
import OverviewQ1 from "./OverviewQ1";
import OverviewQ2 from "./OverviewQ2";
import OverviewQ3 from "./OverviewQ3";
import OverviewQ4 from "./OverviewQ4";

interface Props {
  period: IncentivePeriod;
  teamMemberDetails?: any;
  employeeIncentive?: any;
  employeeType?: string;
  empCode?: string;
}

const Overview = ({
  period,
  employeeType,
  employeeIncentive,
  empCode,
}: Props) => {
  // if (!employeeIncentive?.data) {
  //   return (
  //     <Box sx={{ p: 4, textAlign: "center" }}>
  //       <Typography sx={{ fontSize: 13, color: "#667085" }}>
  //         No incentive data available for this period.
  //       </Typography>
  //     </Box>
  //   );
  // }
  switch (period) {
    case "q1":
      return (
        <OverviewQ1
          period={period}
          employeeType={employeeType}
          empCode={empCode}
        />
      );

    case "q2":
      return (
        <OverviewQ2
          employeeType={employeeType}
          period={period}
          empCode={empCode}
        />
      );

    case "q3":
      return (
        <OverviewQ3
          period={period}
          employeeIncentive={employeeIncentive}
          employeeType={employeeType}
        />
      );

    case "q4":
      return (
        <OverviewQ4
          period={period}
          employeeIncentive={employeeIncentive}
          employeeType={employeeType}
        />
      );

    default:
      return <OverviewFY period={period} employeeType={employeeType} />;
  }
};

export default Overview;
