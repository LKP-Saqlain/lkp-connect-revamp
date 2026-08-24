import { Box, Typography } from "@mui/material";

interface Props {
  label: string;
  revenue: string;
}

const NonBrokingRow = ({ label, revenue }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        py: 0.5,
        // border: "1px solid red",
        borderBottom: "1px solid #F2F4F7",

        "&:last-child": {
          borderBottom: "none",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 400,
          color: "#344054",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 400,
          color: "#27AE60",
        }}
      >
        {revenue}
      </Typography>
    </Box>
  );
};

export default NonBrokingRow;
