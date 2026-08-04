import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

interface Props {
  title: string;
  actual: string;
  required: string;
  status: "completed" | "failed";
}

const QualificationCard = ({ title, actual, required, status }: Props) => {
  const isCompleted = status === "completed";
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: "#F8FAFC",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.75,
          mb: 1.5,
        }}
      >
        {isCompleted ? (
          <CheckCircleIcon
            sx={{
              color: "#5F7F38",
              fontSize: 18,
            }}
          />
        ) : (
          <CancelIcon
            sx={{
              color: "#B42318",
              fontSize: 18,
            }}
          />
        )}

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            color: "#667085",
          }}
        >
          Actual:
          <Box
            component="span"
            sx={{
              ml: 0.4,
              color: isCompleted ? "#5F7F38" : "#B42318",
              fontWeight: 600,
            }}
          >
            {actual}
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            color: "#667085",
          }}
        >
          Required:
          <Box
            component="span"
            sx={{
              ml: 0.4,
              color: "#111827",
            }}
          >
            {required}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default QualificationCard;
