import { Box } from "@mui/material";

import RevenueSummaryCard from "./RevenueSummaryCard";
import { summaryCardStyles as styles } from "./summaryCard.styles";

interface SummaryCard {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  color: string;
}

interface Props {
  summary: SummaryCard[];
  columns?: number;
}

const SummaryCards = ({ summary, columns = 3 }: Props) => {
  return (
    <Box
      sx={{
        ...styles.grid,
        gridTemplateColumns: {
          xs: "1fr",
          md: `repeat(${columns}, 1fr)`,
        },
      }}
    >
      {summary.map((item) => (
        <RevenueSummaryCard
          key={item.id}
          title={item.title}
          value={item.value}
          subtitle={item.subtitle}
          color={item.color}
        />
      ))}
    </Box>
  );
};

export default SummaryCards;
