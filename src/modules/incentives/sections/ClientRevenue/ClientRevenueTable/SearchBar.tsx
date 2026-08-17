import { Box, InputBase } from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = () => {
  return (
    <Box
      sx={{
        width: 190,
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
      />
    </Box>
  );
};

export default SearchBar;
