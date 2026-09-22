import { useEffect } from "react";
import ClientRevenueLayout from "./ClientRevenueLayout";
import type { IncentivePeriod } from "../../types/incentive.types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchClientwiseRevenue,
  fetchYearlyClientwiseRevenue,
} from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import { getQuarterName } from "../../constants/overall";

interface Props {
  period: IncentivePeriod;
  empCode?: any;
}

const ClientRevenue = ({ period, empCode }: Props) => {
  const dispatch = useAppDispatch();

  const { clientwiseRevenue, yearlyClientwiseRevenue } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  const quarterName = getQuarterName(period);
  const isFY = period === "fy";

  useEffect(() => {
    if (!empCode) return;

    if (isFY) {
      dispatch(
        fetchYearlyClientwiseRevenue({ empCode, financialYear: "2026-27" }),
      );
      return;
    }

    if (!quarterName) return;

    dispatch(
      fetchClientwiseRevenue({
        empCode,
        financialYear: "2026-27",
        quarterName,
      }),
    );
  }, [dispatch, quarterName, isFY, empCode]);

  const apiData = isFY
    ? yearlyClientwiseRevenue?.data
    : clientwiseRevenue?.data;

  if (apiData?.total && apiData?.clientDetails) {
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
      totalCredit: `₹${(client.totalBrokingRevenue + client.totalNonBrokingRevenue).toLocaleString("en-IN")}`,
      percentage: `${client.revenuePercentage}%`,
      isCap: client.revenuePercentage >= 25,
    }));

    const apiTotal = {
      brokingCredits: `₹${apiData.total.brokingCredits.toLocaleString("en-IN")}`,
      brokingCredit: `₹${apiData.total.totalBrokingRevenue.toLocaleString("en-IN")}`,
      nonBrokingRevenue: `₹${apiData.total.nonBrokingCredits.toLocaleString("en-IN")}`,
      nonBrokingCredit: `₹${apiData.total.totalNonBrokingRevenue.toLocaleString("en-IN")}`,
      totalRevenue: `₹${apiData.total.totalRevenue.toLocaleString("en-IN")}`,
      totalCredit: `₹${(apiData.total.totalBrokingRevenue + apiData.total.totalNonBrokingRevenue).toLocaleString("en-IN")}`,
      totalClients: apiData.total.totalCount,
      brokingItems: [],
      nonBrokingItems: [],
    };

    return (
      <ClientRevenueLayout
        period={period}
        summary={apiSummary}
        rows={apiRows}
        total={apiTotal}
        isFY={isFY}
        empCode={empCode}
      />
    );
  }

  // Loading / no-data state (no static fallback anymore, per your earlier request)
  return (
    <ClientRevenueLayout
      period={period}
      summary={[]}
      rows={[]}
      total={{
        brokingCredits: "₹0",
        brokingCredit: "₹0",
        nonBrokingRevenue: "₹0",
        nonBrokingCredit: "₹0",
        totalRevenue: "₹0",
        totalCredit: "₹0",
        totalClients: 0,
        brokingItems: [],
        nonBrokingItems: [],
      }}
    />
  );
};

export default ClientRevenue;
