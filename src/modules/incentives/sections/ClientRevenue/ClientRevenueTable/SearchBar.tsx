import { Box, InputBase } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <Box
      sx={{
        width: 250,
        height: 34,

        border: "1px solid #E4E7EC",
        borderRadius: "8px",

        px: 1.25,

        display: "flex",
        alignItems: "center",
        gap: 1,

        background: "#FFFFFF",
      }}
    >
      <SearchOutlinedIcon
        sx={{
          fontSize: 18,
          color: "#98A2B3",
        }}
      />

      <InputBase
        placeholder="Search client..."
        sx={{
          flex: 1,

          fontSize: 13,

          "& input::placeholder": {
            color: "#98A2B3",
            opacity: 1,
          },
        }}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
