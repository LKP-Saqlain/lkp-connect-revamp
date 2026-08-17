import { Box } from "@mui/material";
import SummaryCards from "./components/SummaryCards";
import AcquisitionTable from "./components/AcquisitionTable";

import type {
  AcquisitionClient,
  AcquisitionSummaryCard,
} from "./types/clientAcquisition.types";

interface Props {
  summary: AcquisitionSummaryCard[];
  clients: AcquisitionClient[];
}

const ClientAcquisitionLayout = ({ summary, clients }: Props) => {
  return (
    <Box
      sx={{
        mt: 2,
        mb: 2,

        display: "flex",
        flexDirection: "column",

        gap: 3,
      }}
    >
      <SummaryCards summary={summary} />

      <AcquisitionTable clients={clients} />
    </Box>
  );
};

export default ClientAcquisitionLayout;
