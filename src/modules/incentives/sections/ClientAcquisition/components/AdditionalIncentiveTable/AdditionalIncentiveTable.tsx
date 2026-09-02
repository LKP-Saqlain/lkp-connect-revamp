import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { additionalIncentiveStyles as styles } from "./additionalIncentive.styles";
import type { AdditionalIncentiveRow } from "../../types/clientAcquisition.types";

interface Props {
  title: string;
  headerNote: string;
  footerNote: string;
  rows: AdditionalIncentiveRow[];
}

const AdditionalIncentiveTable = ({
  title,
  headerNote,
  footerNote,
  rows,
}: Props) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.headerRow}>
        <Box sx={styles.titleRow}>
          <CardGiftcardOutlinedIcon sx={{ color: "#185FA5", fontSize: 16 }} />
          <Typography sx={styles.title}>{title}</Typography>
        </Box>
        <Typography sx={styles.headerNote}>{headerNote}</Typography>
      </Box>

      <Box sx={styles.tableHeader}>
        <Typography sx={{ fontSize: "12px" }}>Source</Typography>
        <Typography sx={{ fontSize: "12px" }}>New accounts</Typography>
        <Typography sx={{ fontSize: "12px" }}>Eligible</Typography>
        <Typography sx={{ fontSize: "12px" }}>Rate</Typography>
        <Typography sx={{ textAlign: "right", fontSize: "12px" }}>
          Bonus
        </Typography>
      </Box>

      {rows.map((row, index) => {
        const isTotal = index === rows.length - 1;

        return (
          <Box
            key={row.source}
            sx={[styles.row, isTotal && styles.highlightRow]}
          >
            <Typography
              sx={{ fontWeight: isTotal ? 600 : 400, fontSize: "12px" }}
            >
              {row.source}
            </Typography>
            <Typography sx={styles.numCell}>{row.newAccounts}</Typography>
            <Typography sx={styles.numCell}>{row.eligible}</Typography>
            <Typography sx={styles.rateCell}>
              {row.rate != null ? `₹${row.rate}/account` : "—"}
            </Typography>
            <Typography sx={styles.bonusCell}>
              ₹{row.bonus.toLocaleString("en-IN")}
            </Typography>
          </Box>
        );
      })}

      <Box sx={styles.footerNote}>
        <InfoOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3", mt: "1px" }} />
        <Typography sx={{ fontSize: 12, color: "#667085" }}>
          {footerNote}
        </Typography>
      </Box>
    </Box>
  );
};

export default AdditionalIncentiveTable;
