import { TableRow, TableCell, Box, Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import type { AcquisitionClient } from "../../types/clientAcquisition.types";
import { acquisitionTableStyles as styles } from "./acquisitionTable.styles";
import Collapse from "@mui/material/Collapse";
import AcquisitionExpanded from "./AcquisitionExpanded";

interface Props {
  client: AcquisitionClient;

  expanded?: boolean;

  onToggle?: () => void;
}

const AcquisitionTableRow = ({ client, expanded = false, onToggle }: Props) => {
  return (
    <>
      {/* Main Row */}
      <TableRow sx={styles.bodyRow}>
        <TableCell sx={styles.cell}>{client.id}</TableCell>

        <TableCell sx={styles.cell}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 14,
              color: "#101828",
            }}
          >
            {client.client}
          </Typography>
        </TableCell>

        <TableCell sx={styles.cell}>
          <Typography
            sx={{
              fontSize: 14,
              color: "#667085",
              fontWeight: 500,
            }}
          >
            {client.clientCode}
          </Typography>
        </TableCell>

        <TableCell sx={styles.cell}>
          <Typography
            sx={{
              fontSize: 14,
              color: "#667085",
              fontWeight: 500,
            }}
          >
            {client.accountOpening}
          </Typography>
        </TableCell>

        <TableCell sx={styles.cell}>
          <Typography sx={styles.revenueBlue}>
            {client.brokingRevenue}
          </Typography>
        </TableCell>

        <TableCell sx={styles.cell}>
          <Typography sx={styles.revenueGreen}>
            {client.nonBrokingRevenue}
          </Typography>
        </TableCell>

        <TableCell sx={styles.cell}>
          <Typography sx={styles.revenueBlack}>
            {client.totalRevenue}
          </Typography>
        </TableCell>

        <TableCell sx={styles.actionCell}>
          <Box
            onClick={onToggle}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 600,
                color: "#185FA5",
              }}
            >
              {expanded ? "Hide" : "View"}
            </Typography>

            {expanded ? (
              <KeyboardArrowDownRoundedIcon
                sx={{
                  fontSize: 20,
                  color: "#185FA5",
                }}
              />
            ) : (
              <KeyboardArrowRightRoundedIcon
                sx={{
                  fontSize: 20,
                  color: "#185FA5",
                }}
              />
            )}
          </Box>
        </TableCell>
      </TableRow>

      {/* Expanded Row */}
      <TableRow>
        <TableCell
          colSpan={8}
          sx={{
            padding: 0,
            border: 0,
          }}
        >
          <Collapse in={expanded} timeout={300} unmountOnExit>
            <AcquisitionExpanded details={client.details} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default AcquisitionTableRow;
