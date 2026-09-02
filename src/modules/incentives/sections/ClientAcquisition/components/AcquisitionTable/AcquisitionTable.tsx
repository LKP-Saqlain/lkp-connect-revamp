import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

import type { AcquisitionClient } from "../../types/clientAcquisition.types";

const AcquisitionTable = ({ clients }: { clients: AcquisitionClient[] }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E4E7EC",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Header */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.8,
          px: 2,
          py: 1.5,
          borderBottom: "1px solid #EAECF0",
        }}
      >
        <PersonAddAltOutlinedIcon
          sx={{
            color: "#185FA5",
            fontSize: 16,
          }}
        />

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#101828",
          }}
        >
          Account qualification status
        </Typography>
      </Box>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          maxHeight: 360, // adjust to taste — this is roughly 6-7 rows visible before scrolling
          overflowY: "auto",
        }}
      >
        <Table
          sx={{
            width: "100%",
            tableLayout: "fixed",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  width: "3%",
                  fontSize: "10px",
                  color: "#667085",
                  fontWeight: 500,
                  py: 1,
                  px: 1.5,
                }}
              >
                #
              </TableCell>

              <TableCell
                sx={{
                  width: "25%",
                  fontSize: "11px",
                  color: "#667085",
                  fontWeight: 500,
                  py: 1,
                  px: 1.5,
                }}
              >
                Account
              </TableCell>

              <TableCell
                sx={{
                  width: "25%",
                  fontSize: "11px",
                  color: "#667085",
                  fontWeight: 500,
                  py: 1,
                  px: 1.5,
                }}
              >
                Margin / funding
              </TableCell>

              <TableCell
                sx={{
                  width: "25%",
                  fontSize: "11px",
                  color: "#667085",
                  fontWeight: 500,
                  py: 1,
                  px: 1.5,
                }}
              >
                Brokerage
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  width: "22%",
                  fontSize: "11px",
                  color: "#667085",
                  fontWeight: 500,
                  py: 1,
                  px: 1.5,
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {clients.map((client, index) => (
              <TableRow key={client.id}>
                <TableCell
                  sx={{
                    fontSize: "10px",
                    color: "#98A2B3",
                    py: 0.8,
                    px: 1.5,
                  }}
                >
                  {index + 1}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#101828",
                    py: 0.8,
                    px: 1.5,
                  }}
                >
                  {client.name}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    py: 0.8,
                    px: 1.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: client.margin >= 100000 ? "#12B76A" : "#D64545",
                      fontWeight: 500,
                    }}
                  >
                    ₹{client.margin.toLocaleString("en-IN")}{" "}
                    {client.margin >= 100000 ? "✓" : "✕"}
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    py: 0.8,
                    px: 1.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: client.brokerage >= 100 ? "#12B76A" : "#D64545",
                      fontWeight: 500,
                    }}
                  >
                    ₹{client.brokerage.toLocaleString("en-IN")}{" "}
                    {client.brokerage >= 100 ? "✓" : "✕"}
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    py: 0.8,
                    px: 1.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",

                      px: 1,
                      py: 0.35,

                      borderRadius: "12px",

                      backgroundColor:
                        client.status === "Eligible" ||
                        client.status === "Qualified"
                          ? "#EAF3DE"
                          : "#FFF3D6",

                      color:
                        client.status === "Eligible" ||
                        client.status === "Qualified"
                          ? "#27500A"
                          : "#9A6700",

                      fontSize: "10px",
                      fontWeight: 500,
                    }}
                  >
                    {client.status}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AcquisitionTable;
