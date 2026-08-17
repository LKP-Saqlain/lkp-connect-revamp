import { Backdrop, CircularProgress } from "@mui/material";
import { apiLoaderStyles } from "./apiLoader.styles";

interface ApiLoaderProps {
  open: boolean;
}

const ApiLoader = ({ open }: ApiLoaderProps) => {
  return (
    <Backdrop open={open} sx={apiLoaderStyles.backdrop}>
      <CircularProgress size={42} thickness={4} sx={apiLoaderStyles.spinner} />
    </Backdrop>
  );
};

export default ApiLoader;
