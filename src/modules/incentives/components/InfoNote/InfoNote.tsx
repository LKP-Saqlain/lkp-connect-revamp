import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface InfoNoteProps {
  text: string;
}

const InfoNote = ({ text }: InfoNoteProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      gap: 1,
      background: "#EBF3FC",
      borderRadius: "12px",
      border: "1px solid #E4E7EC",
      p: 1.5,
    }}
  >
    <InfoOutlinedIcon sx={{ fontSize: 18, color: "#185FA5", mt: "1px" }} />
    <Typography sx={{ fontSize: 12.5, lineHeight: 1.6, color: "#667085" }}>
      {text}
    </Typography>
  </Box>
);

export default InfoNote;
