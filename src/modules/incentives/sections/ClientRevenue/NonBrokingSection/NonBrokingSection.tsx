import { Box, Typography } from "@mui/material";

import NonBrokingRow from "./NonBrokingRow";

interface NonBrokingItem {
  label: string;
  value: string;
}

interface Props {
  items: NonBrokingItem[];
}
const NonBrokingSection = ({ items }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          borderBottom: "2px solid #1D9E75",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            fontSize: 16,
            fontWeight: 700,
            color: "#101828",
            // border: "1px solid black",
            pb: 1,

            // borderBottom: "2px solid #1D9E75",
          }}
        >
          Non-Broking Revenue
        </Typography>
      </Box>

      <Box>
        {items.map((row) => (
          <NonBrokingRow
            key={row.label}
            label={row.label}
            revenue={row.value}
            // credits={row.credits}
          />
        ))}
      </Box>
    </Box>
  );
};

export default NonBrokingSection;
