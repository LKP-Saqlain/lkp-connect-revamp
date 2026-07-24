import MetricGrid from "../../components/MetricCard";
import { FY_METRICS } from "../../constants/overview.data";

const OverviewFY = () => {
  return <MetricGrid metrics={FY_METRICS} />;
};

export default OverviewFY;
