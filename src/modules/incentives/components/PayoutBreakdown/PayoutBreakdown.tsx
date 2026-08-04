import { Box, Typography } from "@mui/material";

import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import { payoutStyles as styles } from "./payout.styles";

interface Props {
  data: any;
}

const PayoutBreakdown = ({ data }: Props) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <ReceiptLongOutlinedIcon
          sx={{
            fontSize: 16,
            color: "#185FA5",
          }}
        />

        <Typography sx={styles.title}>{data.title}</Typography>
      </Box>

      <Box sx={styles.tableHeader}>
        <Typography>Component</Typography>

        <Typography>Basis</Typography>

        <Typography>Rate</Typography>

        <Typography sx={{ textAlign: "right" }}>Amount</Typography>
      </Box>

      {data.rows.map((row: any) => (
        <Box
          key={row.component}
          sx={[styles.row, row.highlight && styles.highlightRow]}
        >
          <Typography sx={{ fontWeight: row?.highlight ? 600 : 400 }}>
            {row.component}
          </Typography>

          <Typography sx={styles.basis}>{row.basis}</Typography>

          <Typography sx={styles.rate}>{row.rate}</Typography>

          <Typography
            sx={{
              ...styles.amount,
              color: row.amountColor || "#111827",
            }}
          >
            {row.amount}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PayoutBreakdown;
