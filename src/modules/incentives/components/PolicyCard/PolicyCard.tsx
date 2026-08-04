import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { policyStyles as styles } from "./policy.styles";

import type { PolicyCardData } from "../../types/incentive.types";

interface PolicyCardProps {
  data: PolicyCardData;
}

const PolicyCard = ({ data }: PolicyCardProps) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.iconContainer}>
        <PersonOutlineOutlinedIcon sx={styles.icon} />
      </Box>

      <Box sx={styles.content}>
        <Typography sx={styles.title}>{data.title}</Typography>

        <Typography sx={styles.description}>{data.description}</Typography>
      </Box>
    </Box>
  );
};

export default PolicyCard;
