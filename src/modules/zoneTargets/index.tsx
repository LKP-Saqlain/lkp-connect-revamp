import { Box, Typography, Chip } from "@mui/material";
import { zoneOverviewData } from "./constants/data";
import ProgressBar from "./components/progressBar/progressBar";
import RevenueCard from "./components/RevenueCard/RevenueCard";

const zoneTargets = () => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "16px",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.04)",
        p: 3,
        m: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: 12,
                md: 18,
              },
              fontWeight: 700,
              color: "#111827",
            }}
          >
            {zoneOverviewData.title}
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: "#8B8B8B",
              mt: 0.5,
            }}
          >
            {zoneOverviewData.subtitle}
          </Typography>
        </Box>

        <Chip
          label={zoneOverviewData.zoneName}
          variant="outlined"
          sx={{
            borderColor: "#185FA5",
            color: "#185FA5",
            fontWeight: 600,
            borderRadius: "999px",
            background: "#F8FBFF",
          }}
        />
      </Box>

      {/* Revenue Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            lg: "repeat(5,1fr)",
          },
          gap: 2,
          mb: 4,
        }}
      >
        {zoneOverviewData.metrics.map((card) => (
          <RevenueCard
            key={card.title}
            title={card.title}
            value={card.value}
            subtitle={card.subtitle}
            color={card.color}
            background={card.background}
          />
        ))}
      </Box>

      {/* Top Progress Bars */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 2,
          mb: 3,
        }}
      >
        <ProgressBar
          label={zoneOverviewData.progress.broking.label}
          percentage={zoneOverviewData.progress.broking.percentage}
          color={zoneOverviewData.progress.broking.color}
          achieved={zoneOverviewData.progress.broking.achieved}
          target={zoneOverviewData.progress.broking.target}
        />

        <ProgressBar
          label={zoneOverviewData.progress.nonBroking.label}
          percentage={zoneOverviewData.progress.nonBroking.percentage}
          color={zoneOverviewData.progress.nonBroking.color}
          achieved={zoneOverviewData.progress.nonBroking.achieved}
          target={zoneOverviewData.progress.nonBroking.target}
        />
      </Box>

      {/* Overall Progress */}
      <ProgressBar
        label={zoneOverviewData.progress.overall.label}
        percentage={zoneOverviewData.progress.overall.percentage}
        color={zoneOverviewData.progress.overall.color}
        achieved={zoneOverviewData.progress.overall.achieved}
        target={zoneOverviewData.progress.overall.target}
      />
    </Box>
  );
};

export default zoneTargets;
