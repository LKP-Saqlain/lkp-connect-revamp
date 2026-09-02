import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

interface SectionLabelProps {
  icon: ReactNode;
  title: string;
}

const SectionLabel = ({ icon, title }: SectionLabelProps) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
    {icon}
    <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#101828" }}>
      {title}
    </Typography>
  </Box>
);

export default SectionLabel;
