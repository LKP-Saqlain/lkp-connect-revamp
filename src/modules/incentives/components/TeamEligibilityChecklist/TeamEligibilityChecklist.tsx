import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { teamEligibilityStyles as styles } from "./teamEligibility.styles";
import type { TeamEligibilityChecklistData } from "../../types/incentive.types";

interface Props {
  data: TeamEligibilityChecklistData;
  footerNote?: string;
}

const TeamEligibilityChecklist = ({ data, footerNote }: Props) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.titleRow}>
        <AssignmentOutlinedIcon sx={{ fontSize: 18, color: "#185FA5" }} />
        <Typography sx={styles.title}>{data.title}</Typography>
      </Box>

      <Box>
        {data.items.map((item) => {
          const isCompleted = item.status === "completed";

          return (
            <Box key={item.id} sx={styles.row}>
              <Box sx={styles.labelGroup}>
                {isCompleted ? (
                  <CheckIcon sx={styles.iconCompleted} />
                ) : (
                  <CloseIcon sx={styles.iconPending} />
                )}

                <Typography
                  sx={isCompleted ? styles.labelCompleted : styles.labelPending}
                >
                  {item.label}
                </Typography>
              </Box>

              <Box
                sx={[
                  styles.badge,
                  isCompleted ? styles.badgeCompleted : styles.badgePending,
                ]}
              >
                {item.value}
              </Box>
            </Box>
          );
        })}

        {footerNote && (
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              background: "#EBF3FC",
              borderRadius: "8px",
              p: 1.2,
              mt: 1.5,
            }}
          >
            <InfoOutlinedIcon
              sx={{ fontSize: 16, color: "#185FA5", mt: "1px" }}
            />
            <Typography
              sx={{ fontSize: 12, color: "#667085", lineHeight: 1.6 }}
            >
              {footerNote}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TeamEligibilityChecklist;
