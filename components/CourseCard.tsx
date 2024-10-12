import Image from "next/image";
import { Play } from "lucide-react";

interface CourseCardProps {
  title: string;
  category: string;
  imageUrl: string;
  enrolledCount: number;
  progress: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  category,
  imageUrl,
  enrolledCount,
  progress,
}) => {
  return (
    <div className="rounded-xl overflow-hidden w-52">
      {/* Course image */}
      <div className="relative aspect-video">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-b-xl"
        />
      </div>

      {/* Course details */}
      <div className="px-3 pb-3">
        <span className="text-[#0369a1] font-semibold uppercase text-[10px]">
          {category}
        </span>
        <h4 className="text-sm font-bold mt-0.5 line-clamp-2">{title}</h4>

        {/* Progress bar */}
        <div className="mt-2 bg-gray-200 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#0369a1] h-full rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <span className="text-xs text-gray-600">+{enrolledCount}</span>
          </div>
          <button className="bg-[#0369a1] text-white rounded-full p-1">
            <Play size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
