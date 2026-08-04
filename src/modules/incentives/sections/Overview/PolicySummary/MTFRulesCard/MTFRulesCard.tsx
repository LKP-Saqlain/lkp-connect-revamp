import { Box, Divider, Typography } from "@mui/material";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import { mtfStyles as styles } from "./mtf.styles";

import { MTF_RULES_CARD } from "@/modules/incentives/constants/policyTabs.data";

const MTFRulesCard = () => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Box sx={styles.iconWrapper}>
          <AccountBalanceOutlinedIcon sx={styles.icon} />
        </Box>

        <Typography sx={styles.title}>{MTF_RULES_CARD.title}</Typography>
      </Box>

      <Divider sx={styles.divider} />

      <Box sx={styles.body}>
        {MTF_RULES_CARD.items.map((item) => (
          <Box key={item} sx={styles.row}>
            <Box sx={styles.bullet} />

            <Typography sx={styles.text}>{item}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MTFRulesCard;
