import { useEffect } from "react";
import ClientRevenueLayout from "./ClientRevenueLayout";
import { FY_CLIENT_REVENUE } from "./data/fy.data";
import { Q1_CLIENT_REVENUE } from "./data/q1.data";
import { Q2_CLIENT_REVENUE } from "./data/q2.data";
import { Q3_CLIENT_REVENUE } from "./data/q3.data";
import { Q4_CLIENT_REVENUE } from "./data/q4.data";
import type { IncentivePeriod } from "../../types/incentive.types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchClientwiseRevenue } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import { getQuarterName } from "../../constants/overall";

interface Props {
  period: IncentivePeriod;
  empCode?: any;
}

const ClientRevenue = ({ period, empCode }: Props) => {
  const dispatch = useAppDispatch();

  const { clientwiseRevenue } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  const quarterName = getQuarterName(period); // null for "fy", "Q1"/"Q2"/"Q3"/"Q4" otherwise

  useEffect(() => {
    if (!quarterName) return; // skip FY — no quarter API for full year

    dispatch(
      fetchClientwiseRevenue({
        empCode: empCode,
        financialYear: "2026-27",
        quarterName,
      }),
    );
  }, [dispatch, quarterName]);

  const staticData =
    period === "q1"
      ? Q1_CLIENT_REVENUE
      : period === "q2"
        ? Q2_CLIENT_REVENUE
        : period === "q3"
          ? Q3_CLIENT_REVENUE
          : period === "q4"
            ? Q4_CLIENT_REVENUE
            : FY_CLIENT_REVENUE;

  // Use API data for any quarter that has returned a response
  const apiData = clientwiseRevenue?.data;

  if (quarterName && apiData?.total && apiData?.clientDetails) {
    const apiSummary = [
      {
        id: "total",
        title: "Total revenue",
        value: `₹${apiData.total.totalRevenue.toLocaleString("en-IN")}`,
        subtitle: `Credit: ₹${(
          apiData.total.totalBrokingRevenue +
          apiData.total.totalNonBrokingRevenue
        ).toLocaleString("en-IN")}`,
        color: "#101828",
      },
      {
        id: "broking",
        title: "Broking Revenue Credit",
        value: `₹${apiData.total.brokingCredits.toLocaleString("en-IN")}`,
        subtitle: `30% of ₹${apiData.total.totalBrokingRevenue.toLocaleString("en-IN")}`,
        color: "#2F80ED",
      },
      {
        id: "non-broking",
        title: "Non-Broking Revenue Credit",
        value: `₹${apiData.total.nonBrokingCredits.toLocaleString("en-IN")}`,
        subtitle: `70% of ₹${apiData.total.totalNonBrokingRevenue.toLocaleString("en-IN")}`,
        color: "#27AE60",
      },
    ];

    const apiRows = apiData.clientDetails.map((client, index) => ({
      id: index + 1,
      client: client.clientName,
      clientCode: client.clientCode,
      broking: `₹${client.brokingCredits.toLocaleString("en-IN")}`,
      brokingCredit: `₹${client.totalBrokingRevenue.toLocaleString("en-IN")}`,
      nonBroking: `₹${client.nonBrokingCredits.toLocaleString("en-IN")}`,
      nonBrokingCredit: `₹${client.totalNonBrokingRevenue.toLocaleString("en-IN")}`,
      totalRevenue: `₹${client.totalRevenue.toLocaleString("en-IN")}`,
      totalCredit: `₹${(
        client.totalBrokingRevenue + client.totalNonBrokingRevenue
      ).toLocaleString("en-IN")}`,
      percentage: `${client.revenuePercentage}%`,
      isCap: client.revenuePercentage >= 25,
    }));

    const apiTotal = {
      brokingCredits: `₹${apiData.total.brokingCredits.toLocaleString("en-IN")}`,
      brokingCredit: `₹${apiData.total.totalBrokingRevenue.toLocaleString("en-IN")}`,
      nonBrokingRevenue: `₹${apiData.total.nonBrokingCredits.toLocaleString("en-IN")}`,
      nonBrokingCredit: `₹${apiData.total.totalNonBrokingRevenue.toLocaleString("en-IN")}`,
      totalRevenue: `₹${apiData.total.totalRevenue.toLocaleString("en-IN")}`,
      totalCredit: `₹${(
        apiData.total.totalBrokingRevenue + apiData.total.totalNonBrokingRevenue
      ).toLocaleString("en-IN")}`,
      totalClients: apiData.total.totalCount,
      brokingItems: staticData.total.brokingItems,
      nonBrokingItems: staticData.total.nonBrokingItems,
    };

    return (
      <ClientRevenueLayout
        period={period}
        summary={apiSummary}
        rows={apiRows}
        total={apiTotal}
      />
    );
  }

  // Fallback: static data (FY, or while API is loading)
  return (
    <ClientRevenueLayout
      period={period}
      summary={staticData.summary}
      rows={staticData.rows}
      total={staticData.total}
    />
  );
};

export default ClientRevenue;
