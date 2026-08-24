import { Box, Typography } from "@mui/material";

type SortKey = "client" | "broking" | "nonBroking" | "totalRevenue";
import { clientRevenueTableStyles as styles } from "../../sections/ClientRevenue/ClientRevenueTable/clientRevenueTable.styles";
type SortDirection = "asc" | "desc" | null;

interface SortState {
  key: SortKey | null;
  direction: SortDirection;
}

interface SortableHeaderProps {
  label: string;
  sortKey: SortKey;
  sort: SortState;
  onSort: (key: SortKey) => void;
}

const SortableHeader = ({
  label,
  sortKey,
  sort,
  onSort,
}: SortableHeaderProps) => {
  const active = sort.key === sortKey;

  return (
    <Box
      onClick={() => onSort(sortKey)}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        cursor: "pointer",
        userSelect: "none",
        width: "fit-content",
      }}
    >
      <Typography sx={styles.headerCell}>{label}</Typography>

      <Typography
        component="span"
        sx={{
          fontSize: 13,
          color: active ? "#185FA5" : "#98A2B3",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {active ? (sort.direction === "asc" ? "↑" : "↓") : "↕"}
      </Typography>
    </Box>
  );
};
export default SortableHeader;
