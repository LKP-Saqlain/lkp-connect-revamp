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
  search: string;
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
  search,
}: Props) => {
  const highlightText = (text: string, search: string) => {
    if (!search.trim()) {
      return text;
    }

    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const parts = text.split(new RegExp(`(${escapedSearch})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === search.trim().toLowerCase() ? (
        <Box
          key={index}
          component="span"
          sx={{
            backgroundColor: "#FFF1A8",
            borderRadius: "2px",
            px: "1px",
          }}
        >
          {part}
        </Box>
      ) : (
        part
      ),
    );
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: showPercentage
          ? "2.2fr 1.3fr 1.8fr 1.8fr 1.8fr 1.1fr .8fr"
          : "2.2fr 1.3fr 1.8fr 1.8fr 1.8fr .8fr",

        alignItems: "center",
        // border: "1px solid black",
        minHeight: 40,

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
            fontSize: 13,
            fontWeight: 500,
            color: "#101828",
          }}
        >
          {highlightText(client, search)}
        </Typography>
      </Box>

      {/* Client Code */}

      <Typography
        sx={{
          fontSize: 12,
          color: "#667085",
          fontWeight: 400,
        }}
      >
        {clientCode}
      </Typography>

      {/* Broking */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 12,
            color: "#101828",
            whiteSpace: "nowrap",
          }}
        >
          {broking}
        </Typography>

        <Typography
          component="span"
          sx={{
            fontSize: 12,
            color: "#2F80ED",
            fontWeight: 400,
            whiteSpace: "nowrap",
          }}
        >
          ({brokingCredit})
        </Typography>
      </Box>

      {/* Non Broking */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 12,
            color: "#101828",
            whiteSpace: "nowrap",
          }}
        >
          {nonBroking}
        </Typography>

        <Typography
          component="span"
          sx={{
            fontSize: 12,
            color: "#27AE60",
            fontWeight: 400,
            whiteSpace: "nowrap",
          }}
        >
          ({nonBrokingCredit})
        </Typography>
      </Box>

      {/* Total */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 12,
            color: "#101828",
            whiteSpace: "nowrap",
          }}
        >
          {totalRevenue}
        </Typography>

        <Typography
          component="span"
          sx={{
            fontSize: 12,
            color: "#185FA5",
            fontWeight: 400,
            whiteSpace: "nowrap",
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
                fontSize: 12,
                fontWeight: 400,
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
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          onClick={onToggle}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",

            px: 1.8,
            py: 0.3,

            border: "1px solid #D0D5DD",
            borderRadius: "5px",

            cursor: "pointer",
            userSelect: "none",

            "&:hover": {
              backgroundColor: "#F9FAFB",
              borderColor: "#98A2B3",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#185FA5",
              lineHeight: 1.2,
            }}
          >
            {expanded ? "Hide" : "View"}
          </Typography>

          {expanded ? (
            <KeyboardArrowDownRoundedIcon
              sx={{
                fontSize: 15,
                color: "#185FA5",
              }}
            />
          ) : (
            <KeyboardArrowRightRoundedIcon
              sx={{
                fontSize: 15,
                color: "#185FA5",
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientRevenueRow;
