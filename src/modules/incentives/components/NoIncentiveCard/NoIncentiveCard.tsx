import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { noIncentiveStyles as styles } from "./noIncentive.styles";

interface Props {
  data: {
    title: string;
    description: string;
  };
}

const NoIncentiveCard = ({ data }: Props) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.iconWrapper}>
        <InfoOutlinedIcon sx={styles.icon} />
      </Box>

      <Box sx={styles.content}>
        <Typography sx={styles.title}>{data.title}</Typography>

        <Typography sx={styles.description}>{data.description}</Typography>
      </Box>
    </Box>
  );
};

export default NoIncentiveCard;
