import { Box, Typography } from "@mui/material";
import { revenueProgressStyles as styles } from "./revenue.styles";
import { BsFillCaretLeftSquareFill } from "react-icons/bs";
import type { SlabItem } from "../../types/incentive.types";

interface Props {
  item: SlabItem;
}

const SlabRow = ({ item }: Props) => {
  return (
    <Box sx={styles.slabRow}>
      {/* Left Range */}
      <Typography sx={styles.slabRange}>{item.range}</Typography>

      {/* Right Slab */}
      <Box
        sx={[
          styles.slabContent,
          item.active && styles.activeSlab,
          item.disabled && styles.disabledSlab,
        ]}
      >
        <Typography
          sx={[
            styles.slabText,
            item.active && { color: "#FFFFFF" },
            item.disabled && { color: "#98A2B3" },
          ]}
        >
          {item.text}
        </Typography>

        {item.active && (
          <Typography
            sx={{
              ...styles.youBadge,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <BsFillCaretLeftSquareFill />
            you
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SlabRow;
