import type { HeaderData } from "@/types/layout";

export const headerData: HeaderData = {
  title: "LKP Connect",

  actions: [
    {
      id: "notification",
      icon: "notifications",
      tooltip: "Notifications",
      badgeCount: 3,
    },

    {
      id: "settings",
      icon: "settings",
      tooltip: "Settings",
    },
  ],

  user: {
    id: "1",
    name: "Rahul Sharma",
    designation: "Relationship Manager",
    initials: "RS",
  },
};
