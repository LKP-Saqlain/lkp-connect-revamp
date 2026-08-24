import { Box, Typography } from "@mui/material";

import type { AcquisitionSummaryCard } from "../../types/clientAcquisition.types";

interface Props {
  summary: AcquisitionSummaryCard[];
}

const SummaryCards = ({ summary }: Props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(3, 1fr)",
        },
        gap: 1.5,
      }}
    >
      {summary.map((item) => (
        <Box
          key={item.id}
          sx={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E4E7EC",
            borderRadius: "8px",
            px: 1.75,
            py: 1.5,
            minHeight: 66,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: 400,
              color: "#667085",
              mb: 0.5,
            }}
          >
            {item.title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              gap: 0.6,
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#185FA5",
              }}
            >
              {item.value}
            </Typography>

            {item.suffix && (
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#667085",
                  fontWeight: 400,
                }}
              >
                {item.suffix}
              </Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SummaryCards;
