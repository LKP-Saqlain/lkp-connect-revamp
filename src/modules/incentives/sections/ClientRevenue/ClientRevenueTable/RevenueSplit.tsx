import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

interface Props {
  broking: string;
  nonBroking: string;
}

const RevenueSplit = ({ broking, nonBroking }: Props) => {
  useEffect(() => {
    console.log("====================================");
    console.log("Test", broking, nonBroking);
    console.log("====================================");
  }, [broking, nonBroking]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        mt: 2,
        pt: 2,
        borderTop: "1px solid #EAECF0",
        flexWrap: "wrap",
      }}
    >
      <Typography
        sx={{
          fontSize: 13,
          color: "#667085",
        }}
      >
        Broking credit (30%):{" "}
        <Box
          component="span"
          sx={{
            color: "#2F80ED",
            fontWeight: 600,
          }}
        >
          ₹6,05,070
        </Box>
      </Typography>

      <Typography
        sx={{
          fontSize: 13,
          color: "#667085",
        }}
      >
        Non-broking credit (70%):{" "}
        <Box
          component="span"
          sx={{
            color: "#27AE60",
            fontWeight: 600,
          }}
        >
          ₹4,24,060
        </Box>
      </Typography>

      <Typography
        sx={{
          fontSize: 13,
          color: "#667085",
        }}
      >
        Net credit:{" "}
        <Box
          component="span"
          sx={{
            color: "#101828",
            fontWeight: 700,
          }}
        >
          ₹10,29,130
        </Box>
      </Typography>
    </Box>
  );
};

export default RevenueSplit;
