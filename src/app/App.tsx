import AppProviders from "./providers";
import AppRoutes from "@/routes/AppRoutes";

const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};

export default App;
