import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

interface Row {
  label: string;
  required: string;
  actual: string;
  eligible: boolean;
}

interface Props {
  rows: Row[];
}

const AccountsTable = ({ rows }: Props) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Accounts</TableCell>

          <TableCell>Required</TableCell>

          <TableCell>Actual</TableCell>

          <TableCell align="right">Eligible</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.label}>
            <TableCell>{row.label}</TableCell>

            <TableCell>{row.required}</TableCell>

            <TableCell
              sx={{
                color: row.eligible ? "#5F7F38" : "#B54708",
                fontWeight: 500,
              }}
            >
              {row.actual}
            </TableCell>

            <TableCell align="right">
              {row.eligible ? (
                <CheckCircleIcon
                  sx={{
                    color: "#5F7F38",
                    fontSize: 18,
                  }}
                />
              ) : (
                <CancelIcon
                  sx={{
                    color: "#B54708",
                    fontSize: 18,
                  }}
                />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AccountsTable;
