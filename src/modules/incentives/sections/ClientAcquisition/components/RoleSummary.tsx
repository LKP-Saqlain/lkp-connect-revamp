import { Box, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

interface Props {
  title: string;
  description: string;
}

const RoleSummary = ({ title, description }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",

        border: "1px solid #E4E7EC",
        borderRadius: "8px",

        borderLeft: "3px solid #2F80ED",

        px: 2,
        py: 1.25,

        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <AccountCircleOutlinedIcon
        sx={{
          color: "#185FA5",
          fontSize: 28,
          flexShrink: 0,
        }}
      />

      <Box>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#101828",
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            color: "#667085",
            mt: 0.25,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default RoleSummary;
