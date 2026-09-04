import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { teamDistStyles as styles } from "./teamDistribution.styles";
import {
  groupTeamMembers,
  ROLE_CHIP_COLORS,
  ROOT_ROLE_LABELS,
} from "../../constants/teamDistribution.helpers";
import type {
  TeamDistDetail,
  TeamDistributionData,
} from "../../types/teamDistribution.types";

interface Props {
  data?: TeamDistributionData | null;
  onSelectMember?: (member: TeamDistDetail) => void;
}

const TeamDistributionTree = ({ data, onSelectMember }: Props) => {
  const root = data?.teamDistDetails?.find((d) => d.hierarchyLevel === 0);
  const groups = data ? groupTeamMembers(data.teamDistDetails) : [];
  const summary = data?.teamdistSummary;

  const summaryParts: string[] = [];
  if (summary) {
    summaryParts.push(`${summary.totalReporting} reporting`);
    if (summary.totalRM > 0)
      summaryParts.push(
        `${summary.totalRM} RM${summary.totalRM > 1 ? "s" : ""}`,
      );
    if (summary.totalDealer > 0)
      summaryParts.push(
        `${summary.totalDealer} Dealer${summary.totalDealer > 1 ? "s" : ""}`,
      );
    if (summary.totalBDM > 0)
      summaryParts.push(
        `${summary.totalBDM} BDM${summary.totalBDM > 1 ? "s" : ""}`,
      );
    if (summary.totalTL > 0)
      summaryParts.push(
        `${summary.totalTL} TL${summary.totalTL > 1 ? "s" : ""}`,
      );
    if (summary.totalCAD > 0) summaryParts.push(`${summary.totalCAD} CAD`);
  }

  const rootLabel = root
    ? (ROOT_ROLE_LABELS[root.employeeType] ?? root.employeeType)
    : "";

  return (
    <Box sx={styles.card}>
      <Box sx={styles.headerRow}>
        <Box sx={styles.titleRow}>
          <AccountTreeOutlinedIcon sx={{ fontSize: 16, color: "#185FA5" }} />
          <Typography sx={styles.title}>Team distribution</Typography>
        </Box>

        {summaryParts.length > 0 && (
          <Typography sx={styles.summaryText}>
            {summaryParts.join(" · ")}
          </Typography>
        )}
      </Box>

      <Box sx={styles.treeWrapper}>
        {root && (
          <Box sx={styles.rootChip}>
            <EmojiEventsOutlinedIcon sx={{ fontSize: 16 }} />
            {root.empName} · {rootLabel}
          </Box>
        )}

        <Box sx={styles.connectorVertical} />

        {groups.length > 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(${groups.length}, minmax(150px, 1fr))`,
              columnGap: 4,
              width: "100%",
              maxWidth: Math.min(groups.length * 220, 900),
            }}
          >
            {/* Row 1: connector cells — one per group, same grid columns as Row 2 */}
            {groups.map((group, index) => (
              <Box
                key={`${group.role}-connector`}
                sx={{ position: "relative", height: 20, gridRow: 1 }}
              >
                {/* vertical stem down into this group's column */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    width: "1px",
                    height: "100%",
                    backgroundColor: "#D0D5DD",
                  }}
                />
                {/* horizontal segment to the left neighbor */}
                {index > 0 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "50%",
                      height: "1px",
                      backgroundColor: "#D0D5DD",
                    }}
                  />
                )}
                {/* horizontal segment to the right neighbor */}
                {index < groups.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      width: "50%",
                      height: "1px",
                      backgroundColor: "#D0D5DD",
                    }}
                  />
                )}
              </Box>
            ))}

            {/* Row 2: actual group columns — same grid columns, guaranteed alignment */}
            {groups.map((group) => (
              <Box
                key={group.role}
                sx={{ ...styles.groupColumn, gridRow: 2, minWidth: 0 }}
              >
                <Box sx={styles.groupHeader}>
                  {group.label} ({group.members.length})
                </Box>

                {group.members.map((member) => {
                  const chip = ROLE_CHIP_COLORS[member.employeeType] ?? {
                    bg: "#EEF1F5",
                    color: "#475467",
                  };

                  return (
                    <Box
                      key={member.empCode}
                      sx={styles.memberRow}
                      onClick={() => onSelectMember?.(member)}
                    >
                      <Typography sx={{ fontSize: 12.5, fontWeight: 500 }}>
                        {member.empName}
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
                  );
                })}
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Box sx={styles.footerNote}>
        <InfoOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3", mt: "1px" }} />
        <Typography sx={{ fontSize: 11, color: "#667085" }}>
          Click any name to open their full dashboard. CAD reports to the Branch
          Manager, not to a Team Leader.
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamDistributionTree;
