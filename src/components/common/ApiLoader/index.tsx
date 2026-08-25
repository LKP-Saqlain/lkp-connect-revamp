// src/components/common/ApiLoader/GlobalApiLoader.tsx

import { useAppSelector } from "@/redux/hooks";
import ApiLoader from "./ApiLoader";

const GlobalApiLoader = () => {
  const loadingCount = useAppSelector((state) => state.loader.count);

  return <ApiLoader open={loadingCount > 0} />;
};

export default GlobalApiLoader;
