import { Box, Typography } from "@mui/material";

interface Props {
  label: string;
  value: string;
  color?: string;
  highlight?: boolean;
  bold?: boolean;
}

const BreakdownRow = ({ label, value, color, highlight, bold }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: 13,
          fontWeight: 400,
          color: "#667085",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: highlight ? 18 : 14,
          fontWeight: bold || highlight ? 700 : 600,
          color: color || (highlight ? "#185FA5" : "#111827"),
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default BreakdownRow;
