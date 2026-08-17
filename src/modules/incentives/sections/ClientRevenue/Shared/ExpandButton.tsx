import { Box, Typography } from "@mui/material";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

interface Props {
  expanded: boolean;
  onClick?: () => void;
}

const ExpandButton = ({ expanded, onClick }: Props) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.25,

        cursor: "pointer",
        userSelect: "none",

        color: "#185FA5",

        fontWeight: 600,
        fontSize: 13,
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
        <KeyboardArrowDownRoundedIcon fontSize="small" />
      ) : (
        <KeyboardArrowRightRoundedIcon fontSize="small" />
      )}
    </Box>
  );
};

export default ExpandButton;
