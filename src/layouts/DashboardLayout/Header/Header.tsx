import { Box } from "@mui/material";

import { headerData } from "./header.data";
import { headerStyles } from "./header.styles";

import HeaderActions from "./HeaderActions";
import UserProfile from "./UserProfile";
// import { usePageTitle } from "@/hooks/usePageTitle";

const Header = () => {
  // const title = usePageTitle();
  return (
    <Box sx={headerStyles.root}>
      <Box sx={headerStyles.leftContainer}>
        {/* <Typography sx={headerStyles.title}> {title}</Typography> */}
      </Box>
      <Box sx={headerStyles.rightContainer}>
        <HeaderActions actions={headerData.actions} />
        <UserProfile user={headerData.user} />
      </Box>
    </Box>
  );
};

export default Header;
