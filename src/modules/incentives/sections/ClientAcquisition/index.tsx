import ClientAcquisitionLayout from "./ClientAcquisitionLayout";

import { FY_CLIENT_ACQUISITION } from "./data/fy.data";
import { Q1_CLIENT_ACQUISITION } from "./data/q1.data";
import { Q2_CLIENT_ACQUISITION } from "./data/q2.data";
import { Q3_CLIENT_ACQUISITION } from "./data/q3.data";
import { Q4_CLIENT_ACQUISITION } from "./data/q4.data";

import type { IncentivePeriod } from "../../types/incentive.types";

interface Props {
  period: IncentivePeriod;
}

const ClientAcquisition = ({ period }: Props) => {
  const data =
    period === "q1"
      ? Q1_CLIENT_ACQUISITION
      : period === "q2"
        ? Q2_CLIENT_ACQUISITION
        : period === "q3"
          ? Q3_CLIENT_ACQUISITION
          : period === "q4"
            ? Q4_CLIENT_ACQUISITION
            : FY_CLIENT_ACQUISITION;

  return (
    <ClientAcquisitionLayout summary={data.summary} clients={data.clients} />
  );
};

export default ClientAcquisition;
