import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AcquisitionTableRow from "./AcquisitionTableRow";
import type { AcquisitionClient } from "../../types/clientAcquisition.types";
import { acquisitionTableStyles as styles } from "./acquisitionTable.styles";
import { useState } from "react";

interface Props {
  clients: AcquisitionClient[];
}

const AcquisitionTable = ({ clients }: Props) => {
  const [expandedId, setExpandedId] = useState<number | null>(
    clients.find((item) => item.expanded)?.id ?? null,
  );

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <PersonAddAltOutlinedIcon sx={styles.headerIcon} />

        <Typography sx={styles.headerTitle}>
          Clients acquired during the year
        </Typography>
      </Box>

      <TableContainer component={Paper} elevation={0}>
        <Table sx={styles.table}>
          <TableHead sx={styles.tableHead}>
            <TableRow>
              <TableCell sx={styles.headCell}>#</TableCell>

              <TableCell sx={styles.headCell}>Client</TableCell>

              <TableCell sx={styles.headCell}>Client code</TableCell>

              <TableCell sx={styles.headCell}>
                Date of account opening
              </TableCell>

              <TableCell sx={styles.headCell}>Broking revenue (₹)</TableCell>

              <TableCell sx={styles.headCell}>
                Non-broking revenue (₹)
              </TableCell>

              <TableCell sx={styles.headCell}>Total revenue (₹)</TableCell>

              <TableCell
                sx={{
                  ...styles.headCell,
                  textAlign: "right",
                }}
              >
                Details
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {clients.map((client) => (
              <AcquisitionTableRow
                key={client.id}
                client={client}
                expanded={expandedId === client.id}
                onToggle={() =>
                  setExpandedId((prev) =>
                    prev === client.id ? null : client.id,
                  )
                }
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AcquisitionTable;
