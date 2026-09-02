import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { getMemberChip } from "../../constants/teamSummary.helpers";
import type { TeamSummaryMember } from "../../types/teamSummary.types";

interface Props {
  members: TeamSummaryMember[];
}

const MPC_THRESHOLD = 3;

const formatMultiple = (value: number) =>
  value === 0 ? "—" : `${value.toFixed(1)}x`;

const getMultipleColor = (value: number) => {
  if (value === 0) return "#98A2B3"; // neutral for no data / "—"
  return value >= MPC_THRESHOLD ? "#185FA5" : "#D64545";
};

const TeamMultipleSummaryTable = ({ members }: Props) => {
  const rootEmpCode = members[0]?.empCode;

  return (
    <Box
      sx={{
        background: "#FFFFFF",
        border: "1px solid #E4E7EC",
        borderRadius: "8px",
        p: 2.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
          <GridViewOutlinedIcon sx={{ fontSize: 16, color: "#185FA5" }} />
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#101828" }}>
            Multiple summary — revenue multiple (x CTC)
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 11, color: "#667085" }}>
          Blue = meets own MPC · red = below
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr repeat(5, 1fr)",
          py: 1,
          borderBottom: "1px solid #EAECF0",
        }}
      >
        <Typography sx={{ fontSize: 11, color: "#667085" }}>Member</Typography>
        {["Q1", "Q2", "Q3", "Q4", "FY"].map((label) => (
          <Typography
            key={label}
            sx={{ fontSize: 11, color: "#667085", textAlign: "right" }}
          >
            {label}
          </Typography>
        ))}
      </Box>

      {members.map((member) => {
        const isRoot = member.empCode === rootEmpCode;
        const chip = getMemberChip(member.empType, isRoot);

        const fyValue = (member.q1 + member.q2 + member.q3 + member.q4) / 4;

        return (
          <Box
            key={member.empCode}
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr repeat(5, 1fr)",
              alignItems: "center",
              py: 1.2,
              borderBottom: "1px solid #F2F4F7",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#F8FAFC" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                sx={{ fontSize: 12.5, fontWeight: 500, color: "#101828" }}
              >
                {member.empName}
              </Typography>
              <Box
                sx={{
                  display: "inline-flex",
                  px: 1,
                  py: 0.2,
                  borderRadius: "6px",
                  fontSize: 10,
                  fontWeight: 600,
                  backgroundColor: chip.bg,
                  color: chip.color,
                }}
              >
                {chip.label}
              </Box>
            </Box>

            {[member.q1, member.q2, member.q3, member.q4].map((value, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: 12.5,
                  fontWeight: 500,
                  textAlign: "right",
                  color: getMultipleColor(value),
                }}
              >
                {formatMultiple(value)}
              </Typography>
            ))}

            <Typography
              sx={{
                fontSize: 12.5,
                fontWeight: 500,
                textAlign: "right",
                color: getMultipleColor(fyValue),
              }}
            >
              {formatMultiple(fyValue)}
            </Typography>
          </Box>
        );
      })}

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.8, mt: 2 }}>
        <InfoOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3", mt: "1px" }} />
        <Typography sx={{ fontSize: 11, color: "#667085" }}>
          Click any member to open their full dashboard.
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamMultipleSummaryTable;
