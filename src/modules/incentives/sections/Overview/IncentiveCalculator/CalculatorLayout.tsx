import { Box } from "@mui/material";

import CalculatorForm from "./CalculatorForm";
import SlabReference from "./SlabReference";

const CalculatorLayout = () => {
  return (
    <Box
      sx={{
        mt: 3,

        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          lg: "540px 1fr",
        },

        gap: 3,

        alignItems: "start",
      }}
    >
      <CalculatorForm />

      <SlabReference />
    </Box>
  );
};

export default CalculatorLayout;
