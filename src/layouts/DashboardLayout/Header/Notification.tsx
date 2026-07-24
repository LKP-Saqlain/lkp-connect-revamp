import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { iconMapper } from "./iconMapper";

import type { NotificationProps } from "@/types/layout";

const Notification = ({ badgeCount = 0 }: NotificationProps) => {
  const Icon = iconMapper.notifications;

  return (
    <Tooltip title="Notifications">
      <IconButton>
        <Badge badgeContent={badgeCount} color="error" overlap="circular">
          <Icon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default Notification;
