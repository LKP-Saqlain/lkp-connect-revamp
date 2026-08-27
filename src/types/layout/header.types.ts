// import type { iconMapper } from "@/layouts/DashboardLayout/Sidebar/iconMapper";

export interface HeaderAction {
  id: string;
  icon: any;
  tooltip: string;
  badgeCount?: number;
  hidden?: boolean;
}

export interface UserInfo {
  id: string;
  name: string;
  designation: string;
  avatar?: string;
  initials?: string;
}

export interface HeaderData {
  title: string;
  actions: HeaderAction[];
  user: UserInfo;
}

export interface NotificationProps {
  badgeCount?: number;
}

export interface UserProfileProps {
  user: UserInfo;
}

export interface HeaderActionsProps {
  actions: HeaderAction[];
}
