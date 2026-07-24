export interface SidebarMenuItem {
  id: string;
  title: string;
  path: string;
  icon: SidebarIcon;
  section: SidebarSection;

  badge?: string;
  disabled?: boolean;
  hidden?: boolean;

  children?: SidebarMenuItem[];
}

export type SidebarSection = "MAIN" | "PERFORMANCE" | "TOOLS";

export type SidebarIcon =
  | "dashboard"
  | "people"
  | "payments"
  | "inventory"
  | "description"
  | "track_changes"
  | "settings";

export interface SidebarSectionProps {
  title: string;
  items: SidebarMenuItem[];
}

export interface SidebarItemProps {
  item: SidebarMenuItem;
}

export interface SidebarProps {
  collapsed: boolean;
}
