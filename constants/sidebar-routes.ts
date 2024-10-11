import {
  Book,
  PieChart,
  Play,
  Trophy,
  Settings,
  User,
  LayoutDashboard,
  Plus,
} from "lucide-react";

import Logo from "@/assets/images/logo-two.svg";

export const sidebarRoutes = {
  logo: {
    name: "Logo",
    image: Logo,
  },
  students: [
    {
      name: "My Learning",
      url: "/student-dashboard",
      icon: Book,
      isActive: true,
    },
    {
      name: "Explore Courses",
      url: "/explore-courses",
      icon: Play,
    },
    {
      name: "Leaderboard",
      url: "/leaderboard",
      icon: Trophy,
    },
  ],
  teachers: [
    {
      name: "Dashboard",
      url: "/teacher-dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Sales & Marketing",
      url: "/teacher-analytics",
      icon: PieChart,
    },
    {
      name: "Publish",
      url: "/create-course",
      icon: Plus,
    },
  ],
  navSecondary: [
    {
      title: "Profile",
      url: "/profile",
      icon: User,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};
