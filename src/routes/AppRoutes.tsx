import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import IncentivesPage from "@/modules/incentives/pages/IncentivePage";
import MyClientPage from "@/modules/myClients/pages/MyClientPage";
import ZoneTargets from "@/modules/zoneTargets/index";
import MyTargets from "@/modules/MyTargets";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/incentives" element={<IncentivesPage />} />
          <Route path="/clients" element={<MyClientPage />} />
          <Route path="/my-targets" element={<MyTargets />} />
          <Route path="/zone-targets" element={<ZoneTargets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
