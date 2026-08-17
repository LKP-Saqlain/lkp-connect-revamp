import { Fragment, useState } from "react";
import { Box } from "@mui/material";

import ClientRevenueHeader from "./ClientRevenueHeader";
import ClientRevenueRow from "./ClientRevenueRow";
import ClientRevenueExpanded from "./ClientRevenueExpanded";

import { clientRevenueTableStyles as styles } from "./clientRevenueTable.styles";

// import { CLIENT_REVENUE_TABLE } from "../../../constants/clientRevenue.data";
import type { IncentivePeriod } from "@/modules/incentives/types/incentive.types";

interface Props {
  rows: any[];
  total: any;
  period: IncentivePeriod;
}

const ClientRevenueTable = ({ rows, total, period }: Props) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  return (
    <Box sx={styles.card}>
      <ClientRevenueHeader showPercentage={period !== "fy"} />

      <Box sx={styles.rows}>
        {rows.map((client) => (
          <Fragment key={client.id}>
            <ClientRevenueRow
              client={client.client}
              clientCode={client.clientCode}
              broking={client.broking}
              brokingCredit={client.brokingCredit}
              nonBroking={client.nonBroking}
              nonBrokingCredit={client.nonBrokingCredit}
              totalRevenue={client.totalRevenue}
              totalCredit={client.totalCredit}

              percentage={client.percentage}
              capped={client.isCap}

              showPercentage={period !== "fy"}

              expanded={expandedRow === client.id}
              onToggle={() => handleToggle(client.id)}
            />

            {expandedRow === client.id && (
              <ClientRevenueExpanded
                broking={client.broking}
                nonBroking={client.nonBroking}
                brokingItems={total.brokingItems}
                nonBrokingItems={total.nonBrokingItems}
              />
            )}
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default ClientRevenueTable;
