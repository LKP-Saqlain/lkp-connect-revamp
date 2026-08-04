import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { alertBannerStyles as styles } from "./alertBanner.styles";

interface Props {
  title: string;
  description: string;
}

const AlertBanner = ({ title, description }: Props) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.iconWrapper}>
        <InfoOutlinedIcon sx={styles.icon} />
      </Box>

      <Box sx={styles.content}>
        <Typography sx={styles.title}>{title}</Typography>

        <Typography sx={styles.description}>{description}</Typography>
      </Box>
    </Box>
  );
};

export default AlertBanner;
