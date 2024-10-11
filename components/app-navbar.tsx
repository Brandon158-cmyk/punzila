import React from "react";
import { Input } from "@/components/ui/input";

import { Search, Trophy } from "lucide-react";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { auth, currentUser } from "@clerk/nextjs/server";
import { cn } from "@/lib/utils";

interface AppNavbarProps {
  points?: number;
}

function formatPoints(points: number): string {
  if (points >= 1000000) {
    return (points / 1000000).toFixed(1) + "M";
  } else if (points >= 1000) {
    return (points / 1000).toFixed(1) + "K";
  } else {
    return points.toString();
  }
}

export async function AppNavbar({ points = 0 }: AppNavbarProps) {
  const userId = auth();
  const user = await currentUser();

  if (!userId) {
    console.log("There is no user");
    return null;
  }

  const formattedPoints = formatPoints(points);

  return (
    <nav className="flex-grow flex items-center justify-between py-2">
      <div className="flex-grow mr-8">
        <div className="relative w-full max-w-3xl">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 rounded-full bg-sky-50 border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-sky-500" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-gradient-to-r from-sky-500/10 to-sky-500/30 text-sky-900 px-4 py-2 rounded-full shadow-sm">
          <Trophy className="w-5 h-5" />
          <span className="text-sm">{formattedPoints} Points</span>
        </div>
        {user ? (
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-sky-900">
              {user?.username || user?.fullName}
            </span>
            <UserButton />
          </div>
        ) : (
          <SignInButton mode="modal">
            <Button
              variant="outline"
              className={cn(
                "bg-[#0369a1] text-white hover:bg-[#0369a1]/80 hover:text-white",
                "transition-all duration-200",
                "px-6 py-2 rounded-full"
              )}
            >
              Sign In
            </Button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
}
