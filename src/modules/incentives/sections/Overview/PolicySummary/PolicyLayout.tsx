import { Box } from "@mui/material";

import MPCRoleCard from "./MPCRoleCard";
import ComplianceCard from "./ComplianceCard";
import PayoutCard from "./PayoutCard";
import MTFRulesCard from "./MTFRulesCard";

const PolicyLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "520px 1fr",
        },
        gap: 3,
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <MPCRoleCard />

        <ComplianceCard />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <PayoutCard />

        <MTFRulesCard />
      </Box>
    </Box>
  );
};

export default PolicyLayout;
