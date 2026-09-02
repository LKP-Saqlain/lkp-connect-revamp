import { Box, Typography } from "@mui/material";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { eligibilityStyles as styles } from "./eligibility.styles";

import SuccessBanner from "./SuccessBanner";
import AlertBanner from "../AlertBanner";

import type { EligibilityChecklistData } from "../../types/incentive.types";
import { useEffect } from "react";

interface Props {
  data: EligibilityChecklistData;
}

const EligibilityChecklist = ({ data }: Props) => {
  const qualificationItems = [
    ...data.qualifications,
    ...data.accounts.map((account) => ({
      title: account.label,
      actual: account.actual,
      required: account.required,
      status: account.eligible ? "completed" : "failed",
    })),
  ];

  const isEligible = qualificationItems.every(
    (item) => item.status === "completed",
  );

  useEffect(() => {
    console.log("Test1111", qualificationItems, data);
  }, [qualificationItems, data]);

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
      {isEligible ? (
        <SuccessBanner
          title="Eligible for incentive"
          description={`Revenue multiple ${data.currentSlab} meets all required conditions.`}
        />
      ) : (
        <AlertBanner
          title="Not eligible for incentive"
          description="One or more eligibility conditions are not fulfilled."
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

      {/* New Figma Qualification Grid */}
      <Box sx={styles.qualificationGrid}>
        {qualificationItems.map((item, index) => (
          <QualificationItem
            key={`${item.title}-${index}`}
            title={item.title}
            actual={item.actual}
            required={item.required}
            status={item.status}
            isSecondRow={index >= 2}
          />
        ))}
      </Box>
    </Box>
  );
};

interface QualificationItemProps {
  title: string;
  actual: string;
  required: string;
  status: "completed" | "failed" | string;
  isSecondRow: boolean;
}

const QualificationItem = ({
  title,
  actual,
  required,
  status,
  isSecondRow,
}: QualificationItemProps) => {
  const isCompleted = status === "completed";

  return (
    <Box
      sx={{
        ...styles.qualificationItem,
        ...(isSecondRow ? styles.qualificationItemSecondRow : {}),
      }}
    >
      <Box sx={styles.qualificationHeader}>
        <Box
          sx={{
            ...styles.statusIcon,
            ...(isCompleted
              ? styles.statusIconSuccess
              : styles.statusIconError),
          }}
        >
          {isCompleted ? (
            <CheckIcon sx={{ fontSize: 13 }} />
          ) : (
            <CloseIcon sx={{ fontSize: 13 }} />
          )}
        </Box>

        <Typography sx={styles.qualificationTitle}>{title}</Typography>
      </Box>

      {/* Actual */}
      <Box sx={styles.qualificationValueRow}>
        <Typography sx={styles.actualLabel}>Actual:</Typography>

        <Typography
          sx={{
            ...styles.actualValue,
            color: isCompleted ? "#027A48" : "#B42318",
          }}
        >
          {actual}
        </Typography>
      </Box>

      {/* Required */}
      <Box sx={styles.qualificationValueRow}>
        <Typography sx={styles.requiredLabel}>Required:</Typography>

        <Typography sx={styles.requiredValue}>{required}</Typography>
      </Box>
    </Box>
  );
};

export default EligibilityChecklist;
