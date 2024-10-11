"use client";

import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar";
import { sidebarRoutes } from "@/constants/sidebar-routes";
import { NavLogo } from "./nav-logo";
import { NavItems } from "@/components/nav-items";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <NavLogo />
      </SidebarHeader>
      <SidebarContent className="overflow-y-hidden">
        <SidebarItem>
          <SidebarLabel>Students</SidebarLabel>
          <NavItems items={sidebarRoutes.students} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel>Teachers</SidebarLabel>
          <NavItems items={sidebarRoutes.teachers} />
        </SidebarItem>
        <SidebarItem className="mt-auto">
          <SidebarLabel>Settings</SidebarLabel>
          <NavSecondary items={sidebarRoutes.navSecondary} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
