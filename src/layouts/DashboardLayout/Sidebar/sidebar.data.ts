import type { SidebarMenuItem } from "@/types/layout";

export const sidebarMenu: SidebarMenuItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    icon: "dashboard",
    section: "MAIN",
  },

  {
    id: "clients",
    title: "My Clients",
    path: "/clients",
    icon: "people",
    section: "MAIN",
  },

  {
    id: "incentives",
    title: "Incentives",
    path: "/incentives",
    icon: "payments",
    section: "PERFORMANCE",
  },

  {
    id: "targets",
    title: "My Targets",
    path: "/my-targets",
    icon: "track_changes",
    section: "PERFORMANCE",
  },
  {
    id: "zone-targets",
    title: "Zone Targets",
    path: "/zone-targets",
    icon: "group",
    section: "PERFORMANCE",
  },

  {
    id: "products",
    title: "Products",
    path: "/products",
    icon: "inventory",
    section: "TOOLS",
  },

  {
    id: "reports",
    title: "Reports",
    path: "/reports",
    icon: "description",
    section: "TOOLS",
  },

  {
    id: "settings",
    title: "Settings",
    path: "/settings",
    icon: "settings",
    section: "TOOLS",
  },
];
