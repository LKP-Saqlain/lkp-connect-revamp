import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface SectionHeaderProps {
  title: string;
  actual: string;
  required: string;
}

const SectionHeader = ({ title, actual, required }: SectionHeaderProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Typography sx={{ fontSize: 13, fontWeight: 500, color: "#111111" }}>
      {title}
    </Typography>

    <Typography sx={{ fontSize: 12, fontWeight: 400, color: "#667085" }}>
      Minimum performance criteria:{" "}
      <Box component="span" sx={{ fontWeight: 700, color: "#101828" }}>
        {actual}
      </Box>{" "}
      / {required}
    </Typography>
  </Box>
);

export default SectionHeader;
