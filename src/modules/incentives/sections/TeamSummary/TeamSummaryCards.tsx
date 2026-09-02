import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { TeamSummaryData } from "../../types/teamSummary.types";
import { formatINR, formatMultiple } from "@/utils/formatIndian";

interface Props {
  summary: TeamSummaryData;
}

const TeamSummaryCards = ({ summary }: Props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 0,
        backgroundColor: "#FFFFFF",
        border: "1px solid #E4E7EC",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Card 1 */}
      <Box sx={{ px: 2.5, py: 2, borderRight: "1px solid #E4E7EC" }}>
        <Typography sx={{ fontSize: 12, color: "#667085", mb: 0.5 }}>
          Members (incl. Team Leader)
        </Typography>
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 700,
            color: "#101828",
            lineHeight: 1.2,
          }}
        >
          {summary.totalMembers}
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#667085", mt: 0.5 }}>
          {summary.qualifiedMembers} qualified this period
        </Typography>
      </Box>

      {/* Card 2 */}
      <Box sx={{ px: 2.5, py: 2, borderRight: "1px solid #E4E7EC" }}>
        <Typography sx={{ fontSize: 12, color: "#667085", mb: 0.5 }}>
          Total revenue
        </Typography>
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 700,
            color: "#101828",
            lineHeight: 1.2,
          }}
        >
          {formatINR(summary.totalRevenue)}
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#667085", mt: 0.5 }}>
          Credit: {formatINR(summary.totalCredit)}
        </Typography>
      </Box>

      {/* Card 3 */}
      <Box sx={{ px: 2.5, py: 2 }}>
        <Typography sx={{ fontSize: 12, color: "#667085", mb: 0.5 }}>
          Team multiple
        </Typography>
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 700,
            color: "#185FA5",
            lineHeight: 1.2,
          }}
        >
          {formatMultiple(summary.teamMultiple)}
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#667085", mt: 0.5 }}>
          of {formatINR(summary.teamCTC)} total CTC (incl. Team Leader)
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamSummaryCards;
