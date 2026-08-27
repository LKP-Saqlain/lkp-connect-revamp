import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import DeferredRow from "./DeferredRow";
import { deferredStyles as styles } from "./deferred.styles";
import ClockIcon from "@/assets/images/clock.svg";
import type { DeferredIncentiveData } from "../../types/incentive.types";

interface DeferredIncentiveProps {
  data: DeferredIncentiveData;
  centerAmount?: boolean;
}

const DeferredIncentive = ({
  data,
  centerAmount = false,
}: DeferredIncentiveProps) => {
  return (
    <Box sx={styles.card}>
      <Typography
        sx={{
          ...styles.title,
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Box component="img" src={ClockIcon} alt="progress-icon" />
        {data.title}
      </Typography>
      <Box sx={styles.infoBox}>
        <InfoOutlinedIcon sx={styles.infoIcon} />

        <Typography sx={styles.infoText}>{data.info}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        {data.rows.map((row) => (
          <DeferredRow key={row.id} row={row} centerAmount={centerAmount} />
        ))}

        {data.total && (
          <Box sx={styles.totalRow}>
            <Typography sx={styles.totalLabel}>{data.total.label}</Typography>
            <Typography
              sx={{
                ...styles.totalAmount,
                color: data.total.color ?? "#12B76A",
                ...(centerAmount && { width: "100%", textAlign: "center" }),
              }}
            >
              {data.total.amount}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DeferredIncentive;
