import { Box, Typography } from "@mui/material";

interface Props {
  text: string;
}

const PolicyBullet = ({ text }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          bgcolor: "#98A2B3",
          mt: "8px",
          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          fontSize: 14,
          color: "#475467",
          lineHeight: "22px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default PolicyBullet;
