import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Notification from "./Notification";
import { iconMapper } from "./iconMapper";
import type { HeaderActionsProps } from "@/types/layout";

const HeaderActions = ({ actions }: HeaderActionsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {actions.map((action) => {
        if (action.id === "notification") {
          return (
            <Notification key={action.id} badgeCount={action.badgeCount} />
          );
        }

        const Icon = iconMapper[action.icon];

        return (
          <Tooltip key={action.id} title={action.tooltip}>
            <IconButton>
              <Icon />
            </IconButton>
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default HeaderActions;
