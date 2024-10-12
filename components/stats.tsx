import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  watched: number;
  total: number;
  title: string;
  icon: LucideIcon;
}

const StatCard: React.FC<StatCardProps> = ({
  watched,
  total,
  title,
  icon: Icon,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center border border-[#0f172a]/10">
      <div className="bg-[#0369a1]/10 rounded-full p-2 mr-4">
        <Icon className="text-[#0369a1] w-6 h-6" />
      </div>
      <div className="flex-grow">
        <p className="text-xs text-gray-600">
          {watched}/{total} Watched
        </p>
        <h3 className="text-base text-[#202121]">{title}</h3>
      </div>
    </div>
  );
};

interface StatsProps {
  watchedLessons: number;
  totalLessons: number;
  courseTitle: string;
  icon: LucideIcon;
}

const Stats: React.FC<StatsProps> = ({
  watchedLessons,
  totalLessons,
  courseTitle,
  icon,
}) => {
  return (
    <div className="max-w-sm">
      <StatCard
        watched={watchedLessons}
        total={totalLessons}
        title={courseTitle}
        icon={icon}
      />
    </div>
  );
};

export default Stats;
