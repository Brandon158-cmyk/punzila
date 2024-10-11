import React from "react";
import Image from "next/image";
import { sidebarRoutes } from "@/constants/sidebar-routes";

export function NavLogo() {
  return (
    <div className="flex">
      <Image
        src={sidebarRoutes.logo.image}
        alt={sidebarRoutes.logo.name}
        width={82}
        height={40}
        className="py-2"
      />
    </div>
  );
}
