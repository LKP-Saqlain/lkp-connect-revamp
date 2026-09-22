import { Box, Divider, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { complianceStyles as styles } from "../ComplianceCard/compliance.styles";
import type { SummaryModule } from "@/modules/incentives/types/salesSummary.types";
import { getModuleItems } from "@/modules/incentives/constants/policyTabs.data";

interface Props {
  mtfModule?: SummaryModule;
}

const MTFRulesCard = ({ mtfModule }: Props) => {
  const items = getModuleItems(mtfModule);

  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Box sx={styles.iconWrapper}>
          <InfoOutlinedIcon sx={styles.icon} />
        </Box>
        <Typography sx={styles.title}>
          {mtfModule?.moduleHeader ?? "MTF income rules"}
        </Typography>
      </Box>

      <Divider sx={styles.divider} />

      <Box sx={styles.body}>
        {items.map((item) => (
          <Box key={item} sx={styles.bulletRow}>
            <Box sx={styles.bullet} />
            <Typography sx={styles.text}>{item}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MTFRulesCard;
