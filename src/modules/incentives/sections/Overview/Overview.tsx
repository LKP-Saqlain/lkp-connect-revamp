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
}

const Overview = ({ period, employeeType }: Props) => {
  switch (period) {
    case "q1":
      return <OverviewQ1 period={period} />;

    case "q2":
      return <OverviewQ2 />;

    case "q3":
      return <OverviewQ3 />;

    case "q4":
      return <OverviewQ4 period={period} />;

    default:
      return <OverviewFY period={period} employeeType={employeeType} />;
  }
};

export default Overview;
