import { useEffect } from "react";

import ClientAcquisitionLayout from "./ClientAcquisitionLayout";
import ClientAcquisitionTL from "./ClientAcquisitionTL";
import { CLIENT_ACQUISITION_DATA } from "./data/clientAcquisition.data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchGetClientAcquisition,
  fetchGetClientAcquisitionReportingHead,
} from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import type { IncentivePeriod } from "../../types/incentive.types";

const TEAM_ROLE_TYPES = ["TL", "BM", "AH"];

interface Props {
  period: IncentivePeriod;
  employeeType?: string;
}

const ClientAcquisition = ({ period, employeeType }: Props) => {
  const dispatch = useAppDispatch();

  const isTeamRole = employeeType
    ? TEAM_ROLE_TYPES.includes(employeeType)
    : false;

  const { GetClientAcquisition, GetClientAcquisitionReportingHead } =
    useAppSelector((state) => state.incentivePeriod);

  useEffect(() => {
    if (period !== "q2") return;

    if (isTeamRole) {
      dispatch(
        fetchGetClientAcquisitionReportingHead({
          empCode: "0238",
          financialYear: "2026-27",
          quarterName: "Q2",
        }),
      );
    } else {
      dispatch(
        fetchGetClientAcquisition({
          empCode: "0238",
          financialYear: "2026-27",
          quarterName: "Q2",
        }),
      );
    }
  }, [dispatch, period, isTeamRole]);

  if (isTeamRole) {
    return (
      <ClientAcquisitionTL
        data={GetClientAcquisitionReportingHead?.data}
        rules={CLIENT_ACQUISITION_DATA.rules}
      />
    );
  }

  // ---- everything below is your existing RM / BDM / Dealer code, unchanged ----

  const counts = GetClientAcquisition?.data?.clientAcqCounts;

  const summary = counts
    ? [
        {
          id: "newAccounts",
          title: "New accounts acquired",
          value: String(counts.totalNewAccounts),
          suffix: `/ ${counts.requiredAccounts} min`,
          color: "#2F80ED",
        },
        {
          id: "marginQualified",
          title: "₹1L margin qualified",
          value: String(counts.actualMarginCount),
          suffix: `/ ${counts.totalNewAccounts}`,
          color: "#2F80ED",
        },
        {
          id: "brokerageQualified",
          title: "₹100 brokerage qualified",
          value: String(counts.actualBrokCount),
          suffix: `/ ${counts.totalNewAccounts}`,
          color:
            counts.actualBrokCount >= counts.totalNewAccounts
              ? "#2F80ED"
              : "#D64545",
        },
      ]
    : CLIENT_ACQUISITION_DATA.summary;

  const clients =
    GetClientAcquisition?.data?.clientAcqDetails?.map((client: any) => ({
      id: client.clientCode,
      name: client.clientName,
      margin: client.margin,
      brokerage: client.brokerage,
      status: client.accountStatus,
    })) ?? [];

  return (
    <ClientAcquisitionLayout
      summary={summary}
      clients={clients ? clients : []}
      rules={CLIENT_ACQUISITION_DATA.rules}
      role={CLIENT_ACQUISITION_DATA.role}
    />
  );
};

export default ClientAcquisition;
