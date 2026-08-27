import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material";

export type HeaderActionIcon =
  "notifications" | "settings" | "expand" | "search";

export interface HeaderAction {
  id: string;
  icon: HeaderActionIcon;
  tooltip: string;
  badgeCount?: number;
}

export const iconMapper: Record<
  any,
  OverridableComponent<SvgIconTypeMap<{}, "svg">>
> = {
  notifications: NotificationsOutlinedIcon,
  settings: SettingsOutlinedIcon,
  expand: KeyboardArrowDownRoundedIcon,
  search: SearchOutlinedIcon,
};
