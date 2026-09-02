import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { teamEligibilityStyles as styles } from "./teamEligibility.styles";
import type { TeamEligibilityChecklistData } from "../../types/incentive.types";

interface Props {
  data: TeamEligibilityChecklistData;
}

const TeamEligibilityChecklist = ({ data }: Props) => {
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
      </Box>
    </Box>
  );
};

export default TeamEligibilityChecklist;
