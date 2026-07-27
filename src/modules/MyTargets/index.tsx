import { Box, Grid, Typography } from "@mui/material";
import ProgressBar from "../zoneTargets/components/progressBar/progressBar";
import RevenueCard from "../zoneTargets/components/RevenueCard/RevenueCard";
import { progressData, revenueCards } from "../zoneTargets/constants/data";

// import { progressData, revenueCards } from "../../helper/common";

const MyTargets = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        border: "0.5px solid #e8eaed",
        borderRadius: "12px",
        p: 3,
        m: 3,
      }}
    >
      {/* HEADER */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
          Annual Target Breakdown
        </Typography>

        <Typography sx={{ fontSize: 12, color: "#888" }}>
          Assigned by LKP Management · Retail Direct Channel
        </Typography>
      </Box>

      {/* REVENUE CARDS */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {revenueCards.map((card) => (
          <Grid key={card.id} size={{ xs: 12, md: 4 }}>
            <RevenueCard {...card} />
          </Grid>
        ))}
      </Grid>

      {/* PROGRESS SECTION */}
      <Box>
        {progressData.map((progress) => (
          <ProgressBar key={progress.id} {...progress} />
        ))}
      </Box>
    </Box>
  );
};
export default MyTargets;
