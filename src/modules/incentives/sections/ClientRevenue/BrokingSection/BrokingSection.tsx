import { Box, Typography } from "@mui/material";

import BrokingRow from "./BrokingRow";

interface BrokingItem {
  label: string;
  value: string;
}

interface Props {
  items: BrokingItem[];
}

const BrokingSection = ({ items }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          borderBottom: "2px solid #185FA5",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            fontSize: 15,
            fontWeight: 700,
            color: "#185FA5",

            pb: 1,

            // borderBottom: "2px solid #185FA5",
          }}
        >
          Broking Revenue
        </Typography>
      </Box>

      <Box>
        {items.map((row) => (
          <BrokingRow
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

export default BrokingSection;
