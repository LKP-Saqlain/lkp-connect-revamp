import { Box, Typography } from "@mui/material";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

// import { clientRevenueTableStyles as styles } from "./clientRevenueTable.styles";

interface Props {
  client: string;
  clientCode: string;

  broking: string;
  brokingCredit: string;

  nonBroking: string;
  nonBrokingCredit: string;

  totalRevenue: string;
  totalCredit: string;

  expanded?: boolean;
  onToggle?: () => void;
  percentage?: string;
  capped?: boolean;
  showPercentage?: boolean;
}

const ClientRevenueRow = ({
  client,
  clientCode,

  broking,
  brokingCredit,

  nonBroking,
  nonBrokingCredit,

  totalRevenue,
  totalCredit,
  percentage,
  capped,
  showPercentage = false,
  expanded = false,
  onToggle,
}: Props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: showPercentage
          ? "2.2fr 1.3fr 1.8fr 1.8fr 1.8fr 1.1fr .8fr"
          : "2.2fr 1.3fr 1.8fr 1.8fr 1.8fr .8fr",

        alignItems: "center",

        minHeight: 72,

        px: "18px",

        borderBottom: "1px solid #EAECF0",

        "&:hover": {
          background: "#FAFBFC",
        },
      }}
    >
      {/* Client */}

      <Box>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "#101828",
          }}
        >
          {client}
        </Typography>
      </Box>

      {/* Client Code */}

      <Typography
        sx={{
          fontSize: 14,
          color: "#667085",
          fontWeight: 500,
        }}
      >
        {clientCode}
      </Typography>

      {/* Broking */}

      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 14,
            color: "#101828",
          }}
        >
          {broking}
        </Typography>

        <Typography
          sx={{
            mt: 0.3,
            fontSize: 13,
            color: "#2F80ED",
            fontWeight: 600,
          }}
        >
          ({brokingCredit})
        </Typography>
      </Box>

      {/* Non Broking */}

      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 14,
            color: "#101828",
          }}
        >
          {nonBroking}
        </Typography>

        <Typography
          sx={{
            mt: 0.3,
            fontSize: 13,
            color: "#27AE60",
            fontWeight: 600,
          }}
        >
          ({nonBrokingCredit})
        </Typography>
      </Box>

      {/* Total */}

      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 14,
            color: "#101828",
          }}
        >
          {totalRevenue}
        </Typography>

        <Typography
          sx={{
            mt: 0.3,
            fontSize: 13,
            color: "#185FA5",
            fontWeight: 700,
          }}
        >
          ({totalCredit})
        </Typography>
      </Box>

      {showPercentage && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              minWidth: 90, // keeps every row identical
            }}
          >
            <Box
              sx={{
                width: 34,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {capped && (
                <Box
                  sx={{
                    px: 1,
                    py: "2px",
                    borderRadius: "999px",
                    bgcolor: "#FEE4E2",
                    color: "#D92D20",
                    fontSize: 11,
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  Cap
                </Box>
              )}
            </Box>

            <Typography
              sx={{
                width: 48,
                textAlign: "center",
                fontSize: 14,
                fontWeight: 600,
                color: "#101828",
              }}
            >
              {percentage}
            </Typography>
          </Box>
        </Box>
      )}

      {/* Expand */}

      <Box
        onClick={onToggle}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 600,
            color: "#185FA5",
            mr: 0.5,
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
    </Box>
  );
};

export default ClientRevenueRow;
