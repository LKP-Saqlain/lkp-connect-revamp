import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import MetricGrid from "../MetricCard";
import { performanceSectionStyles as styles } from "./performanceSection.styles";
import type { PerformanceSectionData } from "../../types/incentive.types";

interface Props {
  data: PerformanceSectionData;
}

const PerformanceSection = ({ data }: Props) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.headerRow}>
        <Box sx={styles.titleRow}>
          {data.icon === "team" ? (
            <GroupsOutlinedIcon sx={styles.titleIcon} />
          ) : (
            <PersonOutlineOutlinedIcon sx={styles.titleIcon} />
          )}
          <Typography sx={styles.title}>{data.title}</Typography>
        </Box>

        <Typography sx={styles.criteria}>
          Minimum performance criteria:{" "}
          <Box component="span" sx={styles.criteriaStrong}>
            {data.criteria.actual}
          </Box>{" "}
          / {data.criteria.required}
        </Typography>
      </Box>

      <MetricGrid metrics={data.metrics} />
    </Box>
  );
};

export default PerformanceSection;
