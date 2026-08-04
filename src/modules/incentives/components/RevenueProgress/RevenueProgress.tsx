import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProgressIcon from "@/assets/images/progressIcon.svg";
import { revenueProgressStyles as styles } from "./revenue.styles";

import type { RevenueProgressProps } from "@/modules/incentives/types/incentive.types";
import { Divider } from "@mui/material";
import SlabRow from "./SlabRow";

const RevenueProgress = ({ data }: RevenueProgressProps) => {
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
            <Box
              component="img"
              src={ProgressIcon}
              alt="progress-icon"
              sx={{}}
            />
            Revenue progress
          </Typography>

          <Typography sx={styles.mpc}>
            MPC: <Box component="span">3x CTC</Box>
          </Typography>
        </Box>

        {/* Row 2 */}
        <Box sx={styles.bottomRow}>
          {/* <Typography sx={styles.multiplier}>{data.multiplier}</Typography> */}
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
                3x CTC
              </Box>

              <Box component="span" sx={styles.targetAmount}>
                {" "}
                = ₹18,00,000
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
        {/* Labels */}
        <Box sx={styles.progressLabels}>
          <Typography sx={styles.progressLabel}>0x</Typography>

          <Typography sx={styles.progressLabelCenter}>MPC 3x</Typography>

          <Typography sx={styles.progressLabelEnd}>3x</Typography>
        </Box>

        {/* Progress Bar */}
        <Box sx={styles.progressTrack}>
          <Box
            sx={{
              ...styles.progressFill,
              width: `${data.progressPercent ?? 100}%`,
            }}
          />
        </Box>
      </Box>

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
      {data.slabs && (
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
  item: any;
}) => (
  <Box sx={styles.legendRow}>
    <Box sx={styles.left}>
      <Box sx={colorStyle} />

      <Typography sx={styles.legendLabel}>{item.label}</Typography>
    </Box>

    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
