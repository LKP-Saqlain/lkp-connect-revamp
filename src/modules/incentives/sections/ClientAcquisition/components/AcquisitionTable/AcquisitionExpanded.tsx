import { Box, Divider } from "@mui/material";

import CreditFooter from "../CreditFooter/CreditFooter";

import type { AcquisitionDetails } from "../../types/clientAcquisition.types";

import { acquisitionTableStyles as styles } from "./acquisitionTable.styles";

interface Props {
  details: AcquisitionDetails;
}

const renderColumn = (
  title: string,
  total: string,
  color: string,
  items: AcquisitionDetails["broking"]["items"],
) => (
  <Box sx={styles.expandedColumn}>
    {/* Heading */}
    <Box sx={styles.headingRow}>
      <Box sx={styles.headingTitle}>{title}</Box>

      <Box
        sx={{
          ...styles.headingValue,
          color,
        }}
      >
        {total}
      </Box>
    </Box>

    {/* Colored divider */}
    <Box
      sx={{
        ...styles.headingDivider,
        bgcolor: color,
      }}
    />

    {/* Items */}
    <Box sx={styles.itemList}>
      {items.map((item) => (
        <Box key={item.id} sx={styles.itemRow}>
          <Box sx={styles.itemName}>{item.name}</Box>

          <Box
            sx={{
              ...styles.itemValue,
              color,
            }}
          >
            {item.value}
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

const AcquisitionExpanded = ({ details }: Props) => {
  return (
    <Box sx={styles.expandedWrapper}>
      <Box sx={styles.expandedContent}>
        {renderColumn(
          "Broking",
          details.broking.total,
          "#2F80ED",
          details.broking.items,
        )}

        <Divider orientation="vertical" flexItem />

        {renderColumn(
          "Non-broking",
          details.nonBroking.total,
          "#27AE60",
          details.nonBroking.items,
        )}
      </Box>

      <CreditFooter credits={details.credits} />
    </Box>
  );
};

export default AcquisitionExpanded;
