import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircleIcon } from "lucide-react";

export function AppBanner() {
  return (
    <div className="mb-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6 rounded-xl flex items-center h-[200px] overflow-hidden relative">
      <div className="w-2/3 pr-4">
        <h2 className="text-2xl font-bold mb-2">
          Learn and Share Skills Anytime, Anywhere
        </h2>
        <p className="text-xs mb-4">
          Access a vast library of courses, connect with expert instructors, and
          share your knowledge globally. Enhance your skills on the go and join
          our community of lifelong learners today!
        </p>
        <Button
          variant="secondary"
          className="bg-white font-semibold rounded-full text-[#0f172a] hover:bg-white/90 w-fit px-6"
        >
          <PlayCircleIcon className="mr-2 h-4 w-4" />
          Start Learning
        </Button>
      </div>
    </div>
  );
}
