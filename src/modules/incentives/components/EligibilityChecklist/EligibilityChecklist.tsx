import { Box, Typography } from "@mui/material";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

import { eligibilityStyles as styles } from "./eligibility.styles";

import SuccessBanner from "./SuccessBanner";
import QualificationCard from "./QualificationCard";
import AccountsTable from "./AccountsTable";
import AlertBanner from "../AlertBanner";
import type { EligibilityChecklistData } from "../../types/incentive.types";

interface Props {
  data: EligibilityChecklistData;
}
const EligibilityChecklist = ({ data }: Props) => {
  console.log("testss", data.banner.type);

  return (
    <Box sx={styles.card}>
      <Box sx={styles.titleRow}>
        <AssignmentOutlinedIcon
          sx={{
            fontSize: 18,
            color: "#185FA5",
          }}
        />

        <Typography sx={styles.title}>{data.title}</Typography>
      </Box>

      {/* <SuccessBanner {...data.banner} /> */}

      {data.banner.type === "success" ? (
        <SuccessBanner
          title={data.banner.title}
          description={data.banner.description}
        />
      ) : (
        <AlertBanner
          title={data.banner.title}
          description={data.banner.description}
        />
      )}

      <Typography sx={styles.slab}>
        Current slab:
        <Box
          component="span"
          sx={{
            ml: 0.5,
            color: data.banner.type === "error" ? "#B42318" : "#185FA5",
            fontWeight: 600,
          }}
        >
          {data.currentSlab}
        </Box>
      </Typography>

      <Box sx={styles.qualificationGrid}>
        {data.qualifications.map((item: any) => (
          <QualificationCard key={item.title} {...item} />
        ))}
      </Box>

      <AccountsTable rows={data.accounts} />
    </Box>
  );
};

export default EligibilityChecklist;
