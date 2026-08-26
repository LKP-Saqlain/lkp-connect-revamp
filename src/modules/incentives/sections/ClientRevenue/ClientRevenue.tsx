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

interface Props {
  period: IncentivePeriod;
}

const ClientRevenue = ({ period }: Props) => {
  const dispatch = useAppDispatch();

  const { clientwiseRevenue, clientwiseDetailRevenue } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  useEffect(() => {
    if (period !== "q2") {
      return;
    }

    dispatch(
      fetchClientwiseRevenue({
        empCode: "5293",
        financialYear: "2026-27",
        quarterName: "Q2",
      }),
    );
  }, [dispatch, period]);

  useEffect(() => {
    console.log(
      "clientwiseRevenueResponse",
      clientwiseRevenue,
      "clientwiseRevenueDetailResponse",
      clientwiseDetailRevenue,
    );
  }, [clientwiseRevenue]);

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

  const apiData = clientwiseRevenue?.data;
  if (period === "q2" && apiData?.total && apiData?.clientDetails) {
    // const apiData = clientwiseRevenue.data;

    const q2Summary = [
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
        value: `₹${apiData.total.totalBrokingRevenue.toLocaleString("en-IN")}`,
        subtitle: `30% of ₹${apiData.total.brokingCredits.toLocaleString(
          "en-IN",
        )}`,
        color: "#2F80ED",
      },
      {
        id: "non-broking",
        title: "Non-Broking Revenue Credit",
        value: `₹${apiData.total.nonBrokingCredits.toLocaleString("en-IN")}`,
        subtitle: `70% of ₹${apiData.total.totalNonBrokingRevenue.toLocaleString(
          "en-IN",
        )}`,
        color: "#27AE60",
      },
    ];

    const q2Rows = apiData.clientDetails.map((client, index) => ({
      id: index + 1,
      client: client.clientName,
      clientCode: client.clientCode,
      broking: `₹${client.brokingCredits.toLocaleString("en-IN")}`,
      brokingCredit: `₹${client.totalBrokingRevenue.toLocaleString("en-IN")}`,

      nonBroking: `₹${client.nonBrokingCredits.toLocaleString("en-IN")}`,
      nonBrokingCredit: `₹${client.totalNonBrokingRevenue.toLocaleString(
        "en-IN",
      )}`,
      totalRevenue: `₹${client.totalRevenue.toLocaleString("en-IN")}`,
      totalCredit: `₹${(
        client.totalBrokingRevenue + client.totalNonBrokingRevenue
      ).toLocaleString("en-IN")}`,
      percentage: `${client.revenuePercentage}%`,
      isCap: client.revenuePercentage >= 25,
    }));

    const q2Total = {
      brokingCredits: `₹${apiData.total.brokingCredits.toLocaleString(
        "en-IN",
      )}`,
      brokingCredit: `₹${apiData.total.totalBrokingRevenue.toLocaleString(
        "en-IN",
      )}`,
      nonBrokingRevenue: `₹${apiData.total.nonBrokingCredits.toLocaleString(
        "en-IN",
      )}`,
      nonBrokingCredit: `₹${apiData.total.totalNonBrokingRevenue.toLocaleString(
        "en-IN",
      )}`,
      totalRevenue: `₹${apiData.total.totalRevenue.toLocaleString("en-IN")}`,
      totalCredit: `₹${(
        apiData.total.totalBrokingRevenue + apiData.total.totalNonBrokingRevenue
      ).toLocaleString("en-IN")}`,
      totalClients: apiData.total.totalCount,
      brokingItems: Q2_CLIENT_REVENUE.total.brokingItems,
      nonBrokingItems: Q2_CLIENT_REVENUE.total.nonBrokingItems,
    };

    return (
      <ClientRevenueLayout
        period={period}
        summary={q2Summary}
        rows={q2Rows}
        total={q2Total}
      />
    );
  }

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
