import { Box } from "@mui/material";
import AlertBanner from "../../components/AlertBanner";
import {
  Q2_ALERT,
  Q2_ELIGIBILITY,
  Q2_METRICS,
  Q2_NO_INCENTIVE,
  Q2_REVENUE_PROGRESS,
} from "../../constants/q2Overview.data";
import PolicyCard from "../../components/PolicyCard";
import { OVERVIEW_DATA } from "../../constants/overview.data";
import RevenueProgress from "../../components/RevenueProgress";
import MetricGrid from "../../components/MetricCard";
import EligibilityChecklist from "../../components/EligibilityChecklist";
import NoIncentiveCard from "../../components/NoIncentiveCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type {
  EligibilityChecklistData,
  EmployeeIncentiveData,
} from "../../types/incentive.types";
import { useEffect } from "react";

export interface EmployeeIncentiveResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: EmployeeIncentiveData;
  message: string;
}

const OverviewQ2 = () => {
  const { employeeIncentive, incentiveSlabs, incentiveSlabsLoading } =
    useAppSelector((state) => state.incentivePeriod);
  const dispatch = useAppDispatch();

  const employeeData = employeeIncentive?.data;
  console.log("tes11111t", employeeData);

  useEffect(() => {
    if (!employeeData?.empCode) return;

    // dispatch(
    //   fetchIncentiveSlabs({
    //     empCode: "0040",
    //     financialYear: "2026-27",
    //   }),
    // );
  }, [dispatch, employeeData?.empCode]);

  const q2Metrics = Q2_METRICS.map((metric) => {
    switch (metric.id) {
      case "revenue-multiple":
        return {
          ...metric,
          value:
            employeeData?.brokRevMultiple != null
              ? `${employeeData.brokRevMultiple}x`
              : metric.value,
        };

      case "broking-credit":
        return {
          ...metric,
          value:
            employeeData?.brokingRevenue != null
              ? `₹${employeeData.brokingRevenue.toLocaleString("en-IN")}`
              : metric.value,
        };

      case "non-broking-credit":
        return {
          ...metric,
          value:
            employeeData?.nonBrokingRevenue != null
              ? `₹${employeeData.nonBrokingRevenue.toLocaleString("en-IN")}`
              : metric.value,
        };

      case "estimated-incentive":
        return {
          ...metric,
          value:
            employeeData?.finalIncentive != null
              ? `₹${employeeData.finalIncentive.toLocaleString("en-IN")}`
              : metric.value,
        };

      default:
        return metric;
    }
  });

  const q2Eligibility: EligibilityChecklistData = {
    ...Q2_ELIGIBILITY,

    qualifications: [
      {
        title: "Min Revenue",
        actual:
          employeeData != null
            ? `${employeeData.revenueMultiple}x (₹${employeeData.totalRevenue.toLocaleString("en-IN")})`
            : Q2_ELIGIBILITY.qualifications[0].actual,
        required: Q2_ELIGIBILITY.qualifications[0].required,
        status:
          employeeData?.revenueMultiple != null
            ? employeeData.revenueMultiple >= 3
              ? "completed"
              : "failed"
            : Q2_ELIGIBILITY.qualifications[0].status,
      },
      {
        title: "Non Broking",
        actual:
          employeeData != null
            ? `${employeeData.nonBrokRevMultiple}x`
            : Q2_ELIGIBILITY.qualifications[1].actual,
        required: Q2_ELIGIBILITY.qualifications[1].required,
        status:
          employeeData?.nonBrokRevMultiple != null
            ? employeeData.nonBrokRevMultiple >= 1
              ? "completed"
              : "failed"
            : Q2_ELIGIBILITY.qualifications[1].status,
      },
    ],

    accounts: [
      {
        label: "New accounts",
        required: `${employeeData?.requiredAccounts ?? 0} accounts`,
        actual: `${employeeData?.totalNewAccounts ?? 0} accounts`,
        eligible: employeeData?.accountStatus ?? false,
      },
      {
        label: "₹1 Lac margin",
        required: `${employeeData?.requiredAccounts ?? 0} accounts`,
        actual: `${employeeData?.actualMarginCount ?? 0} accounts`,
        eligible: employeeData?.marginStatus ?? false,
      },
      {
        label: "₹100 brokerage",
        required: `${employeeData?.requiredAccounts ?? 0} accounts`,
        actual: `${employeeData?.actualBrokCount ?? 0} accounts`,
        eligible: employeeData?.brokStatus ?? false,
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <AlertBanner title={Q2_ALERT.title} description={Q2_ALERT.description} />
      <MetricGrid metrics={q2Metrics} period="q2" />
      <RevenueProgress data={Q2_REVENUE_PROGRESS} />
      <EligibilityChecklist data={q2Eligibility} />
      <NoIncentiveCard data={Q2_NO_INCENTIVE} />
      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewQ2;
