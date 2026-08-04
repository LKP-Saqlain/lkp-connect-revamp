import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Props {
  title: string;
  description: string;
}

const SuccessBanner = ({ title, description }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        alignItems: "flex-start",
        background: "#F3FBEF",
        border: "1px solid #D9EAB7",
        borderRadius: "10px",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          backgroundColor: "#D5E8C6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <CheckCircleIcon
          sx={{
            color: "#5F7F38",
            fontSize: 18,
            mt: "2px",
          }}
        />
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 600,
            color: "#5F7F38",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 0.3,
            fontSize: 12,
            color: "#5F7F38",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SuccessBanner;
