import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ProgressIcon from "@/assets/images/progressIcon.svg";
import { revenueProgressStyles as styles } from "./revenue.styles";

import type { RevenueProgressProps } from "@/modules/incentives/types/incentive.types";
import SlabRow from "./SlabRow";

const RevenueProgress = ({ data }: RevenueProgressProps) => {
  const currentMultiplier = parseFloat(data.multiplier ?? "0");
  const targetMultiplier = parseFloat(data.mpc ?? "0");

  const progressPercent =
    targetMultiplier > 0
      ? Math.min((currentMultiplier / targetMultiplier) * 100, 100)
      : 0;
  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        {/* Row 1 */}
        <Box sx={styles.topRow}>
          <Typography
            sx={{
              ...styles.title,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Box component="img" src={ProgressIcon} alt="progress-icon" />
            Revenue progress
          </Typography>

          <Typography sx={styles.mpc}>
            MPC: <Box component="span">{`${data.mpc} CTC`}</Box>
          </Typography>
        </Box>

        {/* Row 2 */}
        <Box sx={styles.bottomRow}>
          <Typography
            sx={{
              ...styles.multiplier,
              color: data.multiplierColor ?? "#185FA5",
            }}
          >
            {data.multiplier}
          </Typography>

          <Box sx={styles.targetInfo}>
            <Typography sx={styles.targetLabel}>TARGET</Typography>

            <Typography sx={styles.targetValue}>
              <Box component="span" sx={styles.targetText}>
                {data.target.label}
              </Box>

              <Box component="span" sx={styles.targetAmount}>
                {" "}
                = {data.target.value}
              </Box>
            </Typography>
          </Box>
        </Box>

        {data.slabLabel && (
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: data.subtitleColor ?? "#667085",
              mt: 0.5,
            }}
          >
            {data.slabLabel}
          </Typography>
        )}
      </Box>

      <Box sx={styles.progressWrapper}>
        <Box sx={styles.progressLabels}>
          <Typography sx={styles.progressLabel}>0x</Typography>

          {/* <Typography sx={styles.progressLabelCenter}>
            MPC {targetMultiplier}x
          </Typography> */}

          <Typography sx={styles.progressLabelEnd}>
            {targetMultiplier}x
          </Typography>
        </Box>

        <Box sx={styles.progressTrack}>
          <Box
            sx={{
              ...styles.progressFill,
              width: `${progressPercent}%`,
            }}
          />
        </Box>
      </Box>

      {/* Revenue Legend */}
      <Box sx={styles.legend}>
        <Legend
          colorStyle={styles.dotBlue}
          amountColor="#378ADD"
          item={data.broking}
        />

        <Legend
          colorStyle={styles.dotGreen}
          amountColor="#12B76A"
          item={data.nonBroking}
        />

        <Divider sx={{ my: 1 }} />

        <Legend
          colorStyle={styles.dotBlack}
          amountColor="#101828"
          item={data.netCredit}
        />
      </Box>

      {/* Incentive slabs */}
      {data.slabs && data.slabs.length > 0 && (
        <Box sx={styles.slabContainer}>
          {data.slabs.map((item) => (
            <SlabRow key={item.id} item={item} />
          ))}
        </Box>
      )}
    </Box>
  );
};

const Legend = ({
  colorStyle,
  amountColor,
  item,
}: {
  colorStyle: any;
  amountColor: string;
  item: {
    label: string;
    amount: string;
    percent: string;
  };
}) => (
  <Box sx={styles.legendRow}>
    <Box sx={styles.left}>
      <Box sx={colorStyle} />

      <Typography sx={styles.legendLabel}>{item.label}</Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography
        sx={{
          color: amountColor,
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        {item.amount}
      </Typography>

      <Typography
        sx={{
          color: "#98A2B3",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        {item.percent}
      </Typography>
    </Box>
  </Box>
);

export default RevenueProgress;
