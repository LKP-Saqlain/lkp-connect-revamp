import { Box } from "@mui/material";

import SummaryCards from "./components/SummaryCards";
import AcquisitionTable from "./components/AcquisitionTable";
import AcquisitionRules from "../ClientAcquisition/components/AcquisitionRules";
import RoleSummary from "../ClientAcquisition/components/RoleSummary";

import type {
  AcquisitionClient,
  AcquisitionRole,
  AcquisitionRule,
  AcquisitionSummaryCard,
} from "./types/clientAcquisition.types";

interface Props {
  summary: AcquisitionSummaryCard[];
  clients: AcquisitionClient[];
  rules: AcquisitionRule[];
  role: AcquisitionRole;
}

const ClientAcquisitionLayout = ({ summary, clients, rules, role }: Props) => {
  return (
    <Box
      sx={{
        mt: 3,
        mb: 2,

        display: "flex",
        flexDirection: "column",

        gap: 2,
      }}
    >
      <SummaryCards summary={summary} />

      <AcquisitionTable clients={clients} />

      <AcquisitionRules rules={rules} />

      <RoleSummary title={role.title} description={role.description} />
    </Box>
  );
};

export default ClientAcquisitionLayout;
