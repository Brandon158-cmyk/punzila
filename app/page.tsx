import { AppSidebar } from "@/components/app-sidebar";
import { AppNavbar } from "@/components/app-navbar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";

export default async function Page() {
  const { cookies } = await import("next/headers");
  return (
    <SidebarLayout
      defaultOpen={cookies().get("sidebar:state")?.value === "true"}
    >
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        <div className="h-full p-2">
          <div className="flex items-center mb-4">
            <SidebarTrigger className="mr-4" />
            <AppNavbar
              points={1000}
              userProfileImage="/path/to/user/image.jpg"
              username="Brandon Ng'andu"
            />
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
