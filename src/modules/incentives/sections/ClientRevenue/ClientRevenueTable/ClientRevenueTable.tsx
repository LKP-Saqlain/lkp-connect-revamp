import { Fragment, useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";

import ClientRevenueHeader from "./ClientRevenueHeader";
import ClientRevenueRow from "./ClientRevenueRow";
import ClientRevenueExpanded from "./ClientRevenueExpanded";

import { clientRevenueTableStyles as styles } from "./clientRevenueTable.styles";

// import { CLIENT_REVENUE_TABLE } from "../../../constants/clientRevenue.data";
import type { IncentivePeriod } from "@/modules/incentives/types/incentive.types";
import { parseAmount } from "@/utils/helper";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchClientwiseDetailRevenue } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";

interface Props {
  rows: any[];
  total: any;
  period: IncentivePeriod;
}

type SortKey = "client" | "broking" | "nonBroking" | "totalRevenue";

type SortDirection = "asc" | "desc" | null;

interface SortState {
  key: SortKey | null;
  direction: SortDirection;
}

const ClientRevenueTable = ({ rows, period }: Props) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [sort, setSort] = useState<SortState>({
    key: null,
    direction: null,
  });
  const [selectedClientCode, setSelectedClientCode] = useState<string | null>(
    null,
  );
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();
  const { clientwiseDetailRevenue } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  useEffect(() => {
    console.log("TESTaa", search);
  }, [search]);

  const filteredRows = useMemo(() => {
    const query = search.trim().toLowerCase();
    console.log("asdasdasd", query);
    if (!query) {
      return rows;
    }
    return rows.filter((client) =>
      String(client.client ?? "")
        .toLowerCase()
        .includes(query),
    );
  }, [rows, search]);

  // Only use detail response for currently selected client
  const detailData =
    expandedRow !== null && clientwiseDetailRevenue?.data
      ? clientwiseDetailRevenue.data
      : null;
  console.log("DetailData111111", detailData);

  const brokingItems = detailData
    ? [
        {
          label: "Equity",
          value: `₹${detailData.brokRevenueDetails.equity.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Futures",
          value: `₹${detailData.brokRevenueDetails.futures.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Options",
          value: `₹${detailData.brokRevenueDetails.options.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Commodity Futures",
          value: `₹${detailData.brokRevenueDetails.commFut.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Commodity Options",
          value: `₹${detailData.brokRevenueDetails.commOpt.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Currency Futures",
          value: `₹${detailData.brokRevenueDetails.currFut.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Currency Options",
          value: `₹${detailData.brokRevenueDetails.currOpt.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "SLBM",
          value: `₹${detailData.brokRevenueDetails.slbm.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "MTF",
          value: `₹${detailData.brokRevenueDetails.mtf.toLocaleString(
            "en-IN",
          )}`,
        },
      ]
    : [];

  const nonBrokingItems = detailData
    ? [
        {
          label: "Research Advisory LKP",
          value: `₹${detailData.nonBrokRevenueDetails.researchAdvisoryLKP.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Research Advisory Third Party",
          value: `₹${detailData.nonBrokRevenueDetails.researchAdvisoryThirdParty.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "PMS Third Party",
          value: `₹${detailData.nonBrokRevenueDetails.pmsThirdParty.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "AIF Third Party",
          value: `₹${detailData.nonBrokRevenueDetails.aifThirdParty.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Mutual Funds",
          value: `₹${detailData.nonBrokRevenueDetails.mututalFunds.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Insurance",
          value: `₹${detailData.nonBrokRevenueDetails.insurance.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Currency / Fixed Income",
          value: `₹${detailData.nonBrokRevenueDetails.curFixedIncomerOpt.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Unlisted Shares",
          value: `₹${detailData.nonBrokRevenueDetails.unlistedShares.toLocaleString(
            "en-IN",
          )}`,
        },
      ]
    : [];

  const handleToggle = (id: number, clientCode: string) => {
    // If clicking the already expanded row, collapse it
    if (expandedRow === id) {
      setExpandedRow(null);
      setSelectedClientCode(null);
      return;
    }

    // Set selected row immediately
    setExpandedRow(id);
    setSelectedClientCode(clientCode);
    console.log(selectedClientCode);

    // Call detail API only when View is clicked
    dispatch(
      fetchClientwiseDetailRevenue({
        clientcode: clientCode,
        financialYear: "2026-27",
        quarterName: "Q2",
      }),
    );
  };

  console.log("apiResponse1", clientwiseDetailRevenue);

  const handleSort = (key: SortKey) => {
    setSort((prev) => {
      // First click → ascending
      if (prev.key !== key) {
        return {
          key,
          direction: "asc",
        };
      }

      // Ascending → descending
      if (prev.direction === "asc") {
        return {
          key,
          direction: "desc",
        };
      }

      // Descending → remove sorting
      return {
        key: null,
        direction: null,
      };
    });
  };

  const sortedRows = useMemo(() => {
    if (!sort.key || !sort.direction) {
      return filteredRows;
    }

    const sorted = [...filteredRows];

    sorted.sort((a, b) => {
      let valueA: string | number = "";
      let valueB: string | number = "";

      switch (sort.key) {
        case "client":
          valueA = a.client ?? "";
          valueB = b.client ?? "";
          break;

        case "broking":
          valueA = parseAmount(a.broking);
          valueB = parseAmount(b.broking);
          break;

        case "nonBroking":
          valueA = parseAmount(a.nonBroking);
          valueB = parseAmount(b.nonBroking);
          break;

        case "totalRevenue":
          valueA = parseAmount(a.totalRevenue);
          valueB = parseAmount(b.totalRevenue);
          break;
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sort.direction === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return sort.direction === "asc"
        ? Number(valueA) - Number(valueB)
        : Number(valueB) - Number(valueA);
    });

    return sorted;
  }, [filteredRows, sort]);

  return (
    <Box sx={styles.card}>
      <ClientRevenueHeader
        showPercentage={period !== "fy"}
        sort={sort}
        onSort={handleSort}
        value={search}
        onChange={setSearch}
      />

      <Box
        sx={{
          ...styles.rows,
          maxHeight: "calc(100vh - 360px)",
          overflowY: "auto",

          "&::-webkit-scrollbar": {
            width: 6,
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#D0D5DD",
            borderRadius: 3,
          },

          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        }}
      >
        {sortedRows.map((client) => {
          console.log("ClientDataCheck", client);

          const isExpanded = expandedRow === client.id;

          return (
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
                expanded={isExpanded}
                onToggle={() => handleToggle(client.id, client.clientCode)}
                search={search}
              />

              {isExpanded && (
                <ClientRevenueExpanded
                  broking={client.brokingCredit}
                  nonBroking={client.nonBrokingCredit}
                  totalCredit={client.totalCredit}
                  brokingItems={brokingItems}
                  nonBrokingItems={nonBrokingItems}
                  // loading={clientwiseDetailRevenueLoading}
                />
              )}
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

export default ClientRevenueTable;
