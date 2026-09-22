import { Box, Divider, Typography } from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { complianceStyles as styles } from "./compliance.styles";
import type { SummaryModule } from "@/modules/incentives/types/salesSummary.types";
import { getModuleItems } from "@/modules/incentives/constants/policyTabs.data";

interface Props {
  complianceModule?: SummaryModule;
}

const ComplianceCard = ({ complianceModule }: Props) => {
  const items = getModuleItems(complianceModule);

  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Box sx={styles.iconWrapper}>
          <ShieldOutlinedIcon sx={styles.icon} />
        </Box>
        <Typography sx={styles.title}>
          {complianceModule?.moduleHeader ?? "Compliance & deductions"}
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

export default ComplianceCard;
