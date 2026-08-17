import { Box, Typography } from "@mui/material";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import CircleIcon from "@mui/icons-material/Circle";
import SearchBar from "./SearchBar";
import { clientRevenueTableStyles as styles } from "./clientRevenueTable.styles";

interface Props {
  showPercentage: boolean;
}

const ClientRevenueHeader = ({ showPercentage }: Props) => {
  return (
    <>
      <Box sx={styles.header}>
        <Box sx={styles.titleWrapper}>
          <Groups2OutlinedIcon
            sx={{
              color: "#185FA5",
              fontSize: 20,
            }}
          />

          <Typography sx={styles.title}>Client-wise revenue</Typography>
        </Box>

        <Box sx={styles.legend}>
          <Box sx={styles.legendItem}>
            <CircleIcon
              sx={{
                fontSize: 12,
                color: "#2F80ED",
              }}
            />

            <Typography sx={styles.legendText}>Broking</Typography>
          </Box>

          <Box sx={styles.legendItem}>
            <CircleIcon
              sx={{
                fontSize: 12,
                color: "#27AE60",
              }}
            />

            <Typography sx={styles.legendText}>Non-broking</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.toolbar}>
        <SearchBar />
      </Box>

      <Box
        sx={{
          ...styles.tableHeader,
          gridTemplateColumns: showPercentage
            ? "2.2fr 1.3fr 1.8fr 1.8fr 1.8fr 1.1fr .8fr"
            : "2.2fr 1.3fr 1.8fr 1.8fr 1.8fr .8fr",
        }}
      >
        <Typography sx={styles.headerCell}>Client</Typography>

        <Typography sx={styles.headerCell}>Client code</Typography>

        <Typography sx={styles.headerCell}>Broking revenue (credit)</Typography>

        <Typography sx={styles.headerCell}>
          Non-broking revenue (credit)
        </Typography>

        <Typography sx={styles.headerCell}>Total revenue (credit)</Typography>

        {showPercentage && (
          <Typography sx={styles.headerCell}>% of Total</Typography>
        )}

        <Typography
          sx={{
            ...styles.headerCell,
            textAlign: "center",
          }}
        >
          Details
        </Typography>
      </Box>
    </>
  );
};

export default ClientRevenueHeader;
