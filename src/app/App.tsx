import GlobalApiLoader from "@/components/common/ApiLoader";
import AppProviders from "./providers";
import AppRoutes from "@/routes/AppRoutes";

const App = () => {
  return (
    <AppProviders>
      <GlobalApiLoader />
      <AppRoutes />
    </AppProviders>
  );
};

export default App;
