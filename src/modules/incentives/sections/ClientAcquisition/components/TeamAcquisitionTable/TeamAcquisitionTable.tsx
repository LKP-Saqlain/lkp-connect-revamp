import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { teamAcquisitionStyles as styles } from "./teamAcquisition.styles";
import { getRoleChipStyle } from "./roleChipColors";
import type { TeamMemberAcquisition } from "../../types/clientAcquisition.types";

interface Props {
  title: string;
  subtitle: string;
  footerNote: string;
  members: TeamMemberAcquisition[];
}

const TeamAcquisitionTable = ({
  title,
  subtitle,
  footerNote,
  members,
}: Props) => {
  const totalNewAccounts = members.reduce(
    (sum, m) => sum + m.newAccountsAcquired,
    0,
  );
  const totalMarginQualified = members.reduce(
    (sum, m) => sum + m.marginQualified,
    0,
  );
  const totalBrokerageQualified = members.reduce(
    (sum, m) => sum + m.brokerageQualified,
    0,
  );
  const metCount = members.filter(
    (m) => m.status === "Met" || m.status === "Qualified",
  ).length;

  return (
    <Box sx={styles.card}>
      <Box sx={styles.headerRow}>
        <Box sx={styles.titleRow}>
          <PersonOutlineOutlinedIcon sx={{ color: "#185FA5", fontSize: 16 }} />
          <Typography sx={styles.title}>{title}</Typography>
        </Box>
        <Typography sx={styles.memberCount}>
          {members.length} members
        </Typography>
      </Box>

      <Typography sx={styles.subtitle}>{subtitle}</Typography>

      <Box sx={styles.tableHeader}>
        <Typography sx={{ fontSize: "12px" }}>Employee Name</Typography>
        <Typography sx={{ fontSize: "12px" }}>New Account Acquired</Typography>
        <Typography sx={{ fontSize: "12px" }}>Required</Typography>
        <Typography sx={{ fontSize: "12px" }}>
          1 Lac Margin qualified
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>
          ₹100 brokerage qualified
        </Typography>
        <Typography sx={{ textAlign: "right", fontSize: "12px" }}>
          Status
        </Typography>
      </Box>

      {members.map((member) => {
        const met = member.status === "Met" || member.status === "Qualified";
        const chip = getRoleChipStyle(member.employeeType);

        return (
          <Box key={member.empCode} sx={styles.row}>
            <Box sx={styles.nameCell}>
              <Typography
                sx={{ fontWeight: 500, color: "#101828", fontSize: "12px" }}
              >
                {member.employeeName}
              </Typography>
              <Box
                sx={{
                  ...styles.roleChip,
                  backgroundColor: chip.bg,
                  color: chip.color,
                }}
              >
                {member.employeeType}
              </Box>
            </Box>

            <Typography sx={{ ...styles.numCell, fontSize: "12px" }}>
              {member.newAccountsAcquired}
            </Typography>
            <Typography sx={{ color: "#667085", fontSize: "12px" }}>
              {member.requiredAccounts}
            </Typography>

            <Typography sx={styles.numCell}>
              {member.marginQualified} / {member.newAccountsAcquired}
            </Typography>

            <Typography sx={{ color: "#D97706", fontSize: "12px" }}>
              {member.brokerageQualified} / {member.newAccountsAcquired}
            </Typography>

            <Box sx={{ textAlign: "right" }}>
              <Box sx={[styles.statusBadge, met && styles.statusBadgeMet]}>
                {member.status}
              </Box>
            </Box>
          </Box>
        );
      })}

      <Box sx={[styles.row, styles.totalRow]}>
        <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
          Team total
        </Typography>
        <Typography
          sx={{ ...styles.numCell, fontWeight: 600, fontSize: "12px" }}
        >
          {totalNewAccounts}
        </Typography>
        <Typography />
        <Typography
          sx={{ ...styles.numCell, fontWeight: 600, fontSize: "12px" }}
        >
          {totalMarginQualified}
        </Typography>
        <Typography
          sx={{ color: "#D97706", fontWeight: 600, fontSize: "12px" }}
        >
          {totalBrokerageQualified}
        </Typography>
        <Typography
          sx={{ textAlign: "right", fontWeight: 600, fontSize: "12px" }}
        >
          {metCount}/{members.length} met
        </Typography>
      </Box>

      <Box sx={styles.footerNote}>
        <InfoOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3", mt: "1px" }} />
        <Typography sx={{ fontSize: 11, color: "#667085" }}>
          {footerNote}
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamAcquisitionTable;
