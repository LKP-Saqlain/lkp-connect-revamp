import { Box, Divider, Typography } from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import PolicyBullet from "./PolicyBullet";
import { policyInfoStyles as styles } from "./policyInfo.styles";

interface Props {
  data: {
    title: string;
    color: string;
    items: string[];
  };
}

const PolicyInfoCard = ({ data }: Props) => {
  const renderIcon = () => {
    switch (data.title) {
      case "Payout schedule":
        return (
          <CalendarTodayOutlinedIcon
            sx={{
              color: data.color,
              fontSize: 18,
            }}
          />
        );

      case "Shortfall carry-forward":
        return (
          <AutorenewOutlinedIcon
            sx={{
              color: data.color,
              fontSize: 18,
            }}
          />
        );

      default:
        return (
          <InfoOutlinedIcon
            sx={{
              color: data.color,
              fontSize: 18,
            }}
          />
        );
    }
  };

  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        {renderIcon()}

        <Typography sx={styles.title}>{data.title}</Typography>
      </Box>

      <Divider sx={styles.divider} />

      <Box sx={styles.list}>
        {data.items.map((item) => (
          <PolicyBullet key={item} text={item} />
        ))}
      </Box>
    </Box>
  );
};

export default PolicyInfoCard;
