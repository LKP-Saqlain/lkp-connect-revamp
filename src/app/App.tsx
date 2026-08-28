import GlobalApiLoader from "@/components/common/ApiLoader";
import AppProviders from "./providers";
import AppRoutes from "@/routes/AppRoutes";
import AuthBridge from "@/auth/AuthBridge";

const App = () => {
  return (
    // <AuthBridge>
    <AppProviders>
      <GlobalApiLoader />
      <AppRoutes />
    </AppProviders>
    // </AuthBridge>
  );
};

export default App;
