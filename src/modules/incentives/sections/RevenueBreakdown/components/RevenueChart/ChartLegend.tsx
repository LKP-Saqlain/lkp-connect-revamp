import { Box, Typography } from "@mui/material";

const ChartLegend = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "#2F80ED",
          }}
        />

        <Typography
          sx={{
            fontSize: 13,
            color: "#667085",
            fontWeight: 500,
          }}
        >
          Broking
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "#27AE60",
          }}
        />

        <Typography
          sx={{
            fontSize: 13,
            color: "#667085",
            fontWeight: 500,
          }}
        >
          Non-broking
        </Typography>
      </Box>
    </Box>
  );
};

export default ChartLegend;
