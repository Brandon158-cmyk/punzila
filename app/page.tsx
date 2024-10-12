import { AppNavbar } from "@/components/app-navbar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppBanner } from "@/components/app-banner";
// import Stats from "@/components/stats";
// import { Book, BookOpen, CheckCircle, Clock } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";
import CategoryList from "@/components/CategoryList";
import CourseList from "@/components/CourseList";

export default async function Page() {
  const { cookies } = await import("next/headers");

  const categories = [
    { name: "Web Development", href: "#" },
    { name: "Design", href: "#" },
    { name: "Photography", href: "#" },
    { name: "Music", href: "#" },
    { name: "Business", href: "#" },
    { name: "Writing", href: "#" },
    { name: "Marketing", href: "#" },
    { name: "Data Science", href: "#" },
    { name: "Personal Development", href: "#" },
    { name: "Health & Fitness", href: "#" },
    { name: "Language Learning", href: "#" },
    { name: "Finance", href: "#" },
  ];

  return (
    <SidebarLayout
      defaultOpen={cookies().get("sidebar:state")?.value === "true"}
    >
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out overflow-hidden">
        <div className="h-full p-2 flex flex-col">
          <div className="flex items-center mb-6">
            <SidebarTrigger className="mr-4" />
            <AppNavbar points={1000} />
          </div>

          <CategoryList categories={categories} />

          <div className="flex-grow overflow-y-auto">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-[#0f172a]">
                Continue Learning
              </h3>
              <Link
                href="#"
                className="text-sm text-[#0369a1] font-semibold hover:underline"
              >
                See All
              </Link>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <CourseList />
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
