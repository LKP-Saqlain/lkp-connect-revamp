import { Box, Divider, Typography } from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { complianceStyles as styles } from "./compliance.styles";
import { COMPLIANCE_CARD } from "@/modules/incentives/constants/policyTabs.data";

const ComplianceCard = () => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Box sx={styles.iconWrapper}>
          <ShieldOutlinedIcon sx={styles.icon} />
        </Box>

        <Typography sx={styles.title}>{COMPLIANCE_CARD.title}</Typography>
      </Box>

      <Divider sx={styles.divider} />

      <Box sx={styles.body}>
        {COMPLIANCE_CARD.items.map((item) => (
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
