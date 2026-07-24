import { useLocation } from "react-router-dom";

const pageTitleMap: Record<string, string> = {
  "/dashboard": "Dashboard",

  "/clients": "My Clients",

  "/incentives": "Incentives",

  "/targets": "Targets",

  "/products": "Products",

  "/reports": "Reports",

  "/settings": "Settings",
};

export const usePageTitle = () => {
  const { pathname } = useLocation();

  return pageTitleMap[pathname] ?? "LKP Connect";
};
