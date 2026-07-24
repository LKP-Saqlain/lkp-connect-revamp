import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import IncentivesPage from "@/modules/incentives/pages/IncentivePage";
import MyClientPage from "@/modules/myClients/pages/MyClientPage";
import TargetPage from "@/modules/targets/pages/TargetPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/incentives" element={<IncentivesPage />} />
          <Route path="/clients" element={<MyClientPage />} />
          <Route path="/targets" element={<TargetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
