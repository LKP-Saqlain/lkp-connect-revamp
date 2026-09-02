import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type TeamOverviewTab =
  | "team-distribution"
  | "multiple-summary"
  | "incentive-summary"
  | "team-details";

const TABS: { id: TeamOverviewTab; label: string }[] = [
  { id: "team-distribution", label: "Team distribution" },
  { id: "multiple-summary", label: "Multiple summary" },
  { id: "incentive-summary", label: "Incentive summary" },
  { id: "team-details", label: "Team details" },
];

interface Props {
  value: TeamOverviewTab;
  onChange: (value: TeamOverviewTab) => void;
}

const TeamOverviewTabs = ({ value, onChange }: Props) => {
  return (
    <Box
      sx={{ display: "flex", gap: 3, borderBottom: "1px solid #EAECF0", mb: 2 }}
    >
      {TABS.map((tab) => {
        const isActive = tab.id === value;
        return (
          <Box
            key={tab.id}
            onClick={() => onChange(tab.id)}
            sx={{
              pb: 1.2,
              cursor: "pointer",
              borderBottom: isActive
                ? "2px solid #185FA5"
                : "2px solid transparent",
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#185FA5" : "#667085",
              }}
            >
              {tab.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default TeamOverviewTabs;
