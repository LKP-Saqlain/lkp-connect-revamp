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

  // Convert "₹195,025.48" -> 195025.48
  const brokingAmount = Number(broking.replace(/[₹,]/g, "")) || 0;
  const nonBrokingAmount = Number(nonBroking.replace(/[₹,]/g, "")) || 0;

  // Add both credits
  const totalCredit = brokingAmount + nonBrokingAmount;

  // Format back to ₹
  const formattedTotalCredit = `₹${totalCredit.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        mt: 1,
        pt: 1,
        borderTop: "1px solid #EAECF0",
        flexWrap: "wrap",
      }}
    >
      <Typography
        sx={{
          fontSize: 12,
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
          {broking}
        </Box>
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
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
          {nonBroking}
        </Box>
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
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
          {formattedTotalCredit}
        </Box>
      </Typography>
    </Box>
  );
};

export default RevenueSplit;
