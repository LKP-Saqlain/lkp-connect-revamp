import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  value: string;
  danger?: boolean;
}

const SummaryCard = ({ title, value, danger }: Props) => {
  return (
    <Box
      sx={{
        background: danger ? "#FFF1F3" : "#FFFFFF",
        border: `1px solid ${danger ? "#F7B7C3" : "#E4E7EC"}`,
        borderRadius: "10px",
        py: 1.5,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: 12,
          color: "#667085",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          mt: 0.4,
          fontSize: 22,
          fontWeight: 700,
          color: danger ? "#B42318" : "#344054",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default SummaryCard;
