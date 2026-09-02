import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { getMemberChip } from "../../constants/teamSummary.helpers";
import {
  formatINR,
  formatMultiple,
  getMultipleColor,
} from "@/utils/formatIndian";
import type {
  TeamSummaryMember,
  TeamSummaryData,
} from "../../types/teamSummary.types";

interface Props {
  members: TeamSummaryMember[];
  summary: TeamSummaryData;
}

const HEADER_COLS = [
  { label: "Member", flex: "2fr" },
  { label: "Broking Revenue (Credit)", flex: "1.5fr" },
  { label: "Non Broking Revenue (Credit)", flex: "1.5fr" },
  { label: "Total Revenue (Credit)", flex: "1.5fr" },
  { label: "Broking Multiple", flex: "1fr" },
  { label: "Non Broking Multiple", flex: "1fr" },
  { label: "Total Multiple", flex: "1fr" },
];

const gridCols = HEADER_COLS.map((c) => c.flex).join(" ");

const RevenueCell = ({
  revenue,
  credit,
  color,
}: {
  revenue: number;
  credit: number;
  color: string;
}) => (
  <Box>
    <Typography
      sx={{
        fontSize: 12.5,
        fontWeight: 600,
        color,
        textAlign: "center",
      }}
    >
      {formatINR(revenue)}
    </Typography>
    <Typography sx={{ fontSize: 11, color: "#667085", textAlign: "center" }}>
      ({formatINR(credit)})
    </Typography>
  </Box>
);

const MultipleCell = ({ value }: { value: number }) => (
  <Typography
    sx={{
      fontSize: 12.5,
      fontWeight: 500,
      color: getMultipleColor(value),
      textAlign: "center",
    }}
  >
    {formatMultiple(value)}
  </Typography>
);

const TeamMemberSummaryTable = ({ members, summary }: Props) => {
  const rootEmpCode = members[0]?.empCode;

  return (
    <Box
      sx={{
        background: "#FFFFFF",
        border: "1px solid #E4E7EC",
        borderRadius: "8px",
      }}
    >
      {/* Table header row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.5,
          borderBottom: "1px solid #EAECF0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
          <GroupsOutlinedIcon sx={{ fontSize: 16, color: "#185FA5" }} />
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#101828" }}>
            Team member summary
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "2px",
                backgroundColor: "#185FA5",
              }}
            />
            <Typography sx={{ fontSize: 11, color: "#667085" }}>
              Broking
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "2px",
                backgroundColor: "#12B76A",
              }}
            />
            <Typography sx={{ fontSize: 11, color: "#667085" }}>
              Non-broking
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Subtitle */}
      <Box sx={{ px: 2, py: 1, borderBottom: "1px solid #EAECF0" }}>
        <Typography sx={{ fontSize: 11, color: "#667085" }}>
          Amounts shown as revenue ₹ with revenue credit in brackets · multiples
          are revenue credit ÷ CTC. Rows follow the reporting line
          {/* — click the ▼
          next to a manager to show the members reporting to them. */}
        </Typography>
      </Box>

      {/* Column headers */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: gridCols,
          px: 2,
          py: 1,
          borderBottom: "1px solid #EAECF0",
        }}
      >
        {HEADER_COLS.map((col) => (
          <Typography
            key={col.label}
            sx={{
              fontSize: 11,
              color: "#667085",
              fontWeight: 500,
              textAlign: col?.label === "Member" ? "left" : "center",
            }}
          >
            {col.label}
          </Typography>
        ))}
      </Box>

      {/* Member rows */}
      <Box sx={{ maxHeight: 420, overflowY: "auto" }}>
        {members.map((member) => {
          const isRoot = member.empCode === rootEmpCode;
          const chip = getMemberChip(member.empCategory, isRoot);

          return (
            <Box
              key={member.empCode}
              sx={{
                display: "grid",
                gridTemplateColumns: gridCols,
                alignItems: "center",
                px: 2,
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

              <RevenueCell
                revenue={member.brokingRevenue}
                credit={member.brokingCredit}
                color="#185FA5"
              />

              <RevenueCell
                revenue={member.nonBrokingRevenue}
                credit={member.nonBrokingCredit}
                color="#12B76A"
              />

              <RevenueCell
                revenue={member.totalRevenue}
                credit={member.totalCredit}
                color="#101828"
              />

              <MultipleCell value={member.brokingMultiple} />
              <MultipleCell value={member.nonBrokingMultiple} />
              <MultipleCell value={member.totalMultiple} />
            </Box>
          );
        })}
      </Box>

      {/* Total row */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: gridCols,
          alignItems: "center",
          px: 2,
          py: 1.4,
          backgroundColor: "#F8FAFC",
          borderTop: "1px solid #EAECF0",
        }}
      >
        <Typography sx={{ fontSize: 12.5, fontWeight: 700, color: "#101828" }}>
          Total (incl. Team Leader)
        </Typography>

        <RevenueCell
          revenue={summary.totalBrokingRevenue}
          credit={summary.totalBrokingCredit}
          color="#185FA5"
        />

        <RevenueCell
          revenue={summary.totalNonBrokingRevenue}
          credit={summary.totalNonBrokingCredit}
          color="#12B76A"
        />

        <RevenueCell
          revenue={summary.totalRevenue}
          credit={summary.totalCredit}
          color="#101828"
        />

        <MultipleCell value={summary.brokingMultiple} />
        <MultipleCell value={summary.nonBrokingMultiple} />
        <MultipleCell value={summary.teamMultiple} />
      </Box>

      {/* Footer note */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 0.8,
          px: 2,
          py: 1.5,
        }}
      >
        <InfoOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3", mt: "1px" }} />
        <Typography sx={{ fontSize: 11, color: "#667085" }}>
          Click any member to open their full dashboard.
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamMemberSummaryTable;
