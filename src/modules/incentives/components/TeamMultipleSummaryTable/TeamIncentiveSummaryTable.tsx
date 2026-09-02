import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { getMemberChip } from "../../constants/teamSummary.helpers";
import type { TeamSummaryMember } from "../../types/teamSummary.types";

interface Props {
  members: TeamSummaryMember[];
}

const formatAmount = (value: number, dashIfZero = true) =>
  value === 0 && dashIfZero ? "—" : `₹${value.toLocaleString("en-IN")}`;

const TeamIncentiveSummaryTable = ({ members }: Props) => {
  const rootEmpCode = members[0]?.empCode;

  const totals = members.reduce(
    (acc, m) => ({
      q1: acc.q1 + m.q1,
      q2: acc.q2 + m.q2,
      q3: acc.q3 + m.q3,
      q4: acc.q4 + m.q4,
    }),
    { q1: 0, q2: 0, q3: 0, q4: 0 },
  );
  const grandTotal = totals.q1 + totals.q2 + totals.q3 + totals.q4;

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
          <CurrencyRupeeOutlinedIcon sx={{ fontSize: 16, color: "#185FA5" }} />
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#101828" }}>
            Incentive summary (₹)
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 11, color: "#667085" }}>
          Incentive earned each quarter · till date
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
        {["Q1 (₹)", "Q2 (₹)", "Q3 (₹)", "Q4 (₹)", "Till date (₹)"].map(
          (label) => (
            <Typography
              key={label}
              sx={{ fontSize: 11, color: "#667085", textAlign: "right" }}
            >
              {label}
            </Typography>
          ),
        )}
      </Box>

      {members.map((member) => {
        const isRoot = member.empCode === rootEmpCode;
        const chip = getMemberChip(member.empType, isRoot);
        const tillDate = member.q1 + member.q2 + member.q3 + member.q4;

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
                sx={{ fontSize: 12.5, textAlign: "right", color: "#101828" }}
              >
                {formatAmount(value)}
              </Typography>
            ))}

            <Typography
              sx={{
                fontSize: 12.5,
                fontWeight: 600,
                textAlign: "right",
                color: "#185FA5",
              }}
            >
              {formatAmount(tillDate, false)}
            </Typography>
          </Box>
        );
      })}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr repeat(5, 1fr)",
          alignItems: "center",
          py: 1.2,
          backgroundColor: "#F8FAFC",
          fontWeight: 600,
        }}
      >
        <Typography sx={{ fontSize: 12.5, fontWeight: 600, color: "#101828" }}>
          Team total
        </Typography>
        {[totals.q1, totals.q2, totals.q3, totals.q4].map((value, i) => (
          <Typography
            key={i}
            sx={{
              fontSize: 12.5,
              fontWeight: 600,
              textAlign: "right",
              color: "#101828",
            }}
          >
            {formatAmount(value, false)}
          </Typography>
        ))}
        <Typography
          sx={{
            fontSize: 12.5,
            fontWeight: 700,
            textAlign: "right",
            color: "#185FA5",
          }}
        >
          {formatAmount(grandTotal, false)}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.8, mt: 2 }}>
        <InfoOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3", mt: "1px" }} />
        <Typography sx={{ fontSize: 11, color: "#667085" }}>
          A quarter shows an amount only when the member qualifies that quarter.
          Click any member to open their full dashboard.
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamIncentiveSummaryTable;
