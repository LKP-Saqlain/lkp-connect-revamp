import { Box } from "@mui/material";
import RevenueChart from "./RevenueChart";
import type { AnnualRevenueMonth } from "@/modules/incentives/types/annualTarget.types";

interface Props {
  monthlyRevenue: AnnualRevenueMonth[];
}

const AnnualTargetLayout = ({ monthlyRevenue }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <RevenueChart monthlyRevenue={monthlyRevenue} />
    </Box>
  );
};

export default AnnualTargetLayout;
