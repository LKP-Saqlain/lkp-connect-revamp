import { useState } from "react";
import { Box } from "@mui/material";

import IncentiveTabs from "../../components/Tabs";
import PolicySummary from "./PolicySummary";
import IncentiveCalculator from "./IncentiveCalculator";

import { POLICY_TABS } from "../../constants/policyTabs.data";

const SalesPolicy = ({ employeeType }: any) => {
  const [policyTab, setPolicyTab] = useState("policy-summary");

  const renderContent = ({ employeeType }: any) => {
    switch (policyTab) {
      case "incentive-calculator":
        return <IncentiveCalculator employeeType={employeeType} />;

      case "policy-summary":
      default:
        return <PolicySummary employeeType={employeeType} />;
    }
  };

  return (
    <Box>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          px: 2,
          //   border: "1px solid black",
        }}
      >
        <IncentiveTabs
          items={POLICY_TABS}
          value={policyTab}
          onChange={setPolicyTab}
        />
      </Box>
      {renderContent({ employeeType })}
    </Box>
  );
};

export default SalesPolicy;
