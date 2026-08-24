import { Box, Typography } from "@mui/material";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
// import type { AcquisitionRole } from "../types/clientAcquisition.types";

// interface Props {
//   rules: AcquisitionRole;
// }

const AcquisitionRules = ({ rules }: any) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E4E7EC",
        borderRadius: "8px",
        overflow: "hidden",
        // border: "1px solid black",
      }}
    >
      {/* Header */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.8,

          px: 2,
          py: 1,

          borderBottom: "1px solid #EAECF0",
        }}
      >
        <WarningAmberOutlinedIcon
          sx={{
            color: "#A86D00",
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
          Acquisition rules
        </Typography>
      </Box>

      {/* Rules */}

      <Box>
        {rules.map((rule, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,

              px: 2,
              py: 1,

              borderBottom:
                index !== rules.length - 1 ? "1px solid #EAECF0" : "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                lineHeight: 1.5,
                color: "#185FA5",
              }}
            >
              ○
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                lineHeight: 1.5,
                color: "#344054",
              }}
            >
              {rule}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AcquisitionRules;
