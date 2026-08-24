// import ClientAcquisitionLayout from "./ClientAcquisitionLayout";

// import { FY_CLIENT_ACQUISITION } from "./data/fy.data";
// import { Q1_CLIENT_ACQUISITION } from "./data/q1.data";
// import { Q2_CLIENT_ACQUISITION } from "./data/q2.data";
// import { Q3_CLIENT_ACQUISITION } from "./data/q3.data";
// import { Q4_CLIENT_ACQUISITION } from "./data/q4.data";

// import type { IncentivePeriod } from "../../types/incentive.types";

// interface Props {
//   period: IncentivePeriod;
// }

// const ClientAcquisition = ({ period }: Props) => {
//   const data =
//     period === "q1"
//       ? Q1_CLIENT_ACQUISITION
//       : period === "q2"
//         ? Q2_CLIENT_ACQUISITION
//         : period === "q3"
//           ? Q3_CLIENT_ACQUISITION
//           : period === "q4"
//             ? Q4_CLIENT_ACQUISITION
//             : FY_CLIENT_ACQUISITION;

//   return (
//     <ClientAcquisitionLayout
//       summary={data.summary}
//       clients={data.clients}
//       rules={data.rules}
//       role={data.role}
//     />
//   );
// };

// export default ClientAcquisition;

import ClientAcquisitionLayout from "./ClientAcquisitionLayout";
import { CLIENT_ACQUISITION_DATA } from "./data/clientAcquisition.data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchGetClientAcquisition } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import type { IncentivePeriod } from "../../types/incentive.types";
import { useEffect } from "react";

interface Props {
  period: IncentivePeriod;
}

const ClientAcquisition = ({ period }: Props) => {
  const dispatch = useAppDispatch();

  const {
    GetClientAcquisition,
    GetClientAcquisitionLoading,
    GetClientAcquisitionError,
  } = useAppSelector((state) => state.incentivePeriod);

  useEffect(() => {
    if (period !== "q2") {
      return;
    }

    dispatch(
      fetchGetClientAcquisition({
        empCode: "0040",
        financialYear: "2026-27",
        quarterName: "Q2",
      }),
    );
  }, [dispatch, period]);

  useEffect(() => {
    console.log(
      "GetClientAcq",
      GetClientAcquisition,
      GetClientAcquisitionError,
      GetClientAcquisitionLoading,
    );
  }, [
    GetClientAcquisition,
    GetClientAcquisitionError,
    GetClientAcquisitionLoading,
  ]);

  const counts = GetClientAcquisition?.data?.clientAcqCounts;
  console.log("Testss", counts);

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
