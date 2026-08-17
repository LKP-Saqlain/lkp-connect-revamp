import { Box } from "@mui/material";

import SummaryCards from "./SummaryCards";
import ClientRevenueTable from "./ClientRevenueTable";
import type { IncentivePeriod } from "../../types/incentive.types";

interface Props {
  summary: any;
  rows: any;
  total: any;
  period: IncentivePeriod;
}

const ClientRevenueLayout = ({ summary, rows, total, period }: Props) => {
  return (
    <Box
      sx={{
        mt: 1,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <SummaryCards summary={summary} columns={3} />

      <ClientRevenueTable rows={rows} total={total} period={period} />
    </Box>
  );
};

export default ClientRevenueLayout;
