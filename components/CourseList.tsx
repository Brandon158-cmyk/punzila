import React from "react";
import CourseCard from "./CourseCard"; // Adjust the import path as necessary
import courseImage from "@/assets/images/banner.jpg";

const CourseList = () => {
  return (
    <div className="max-h-80 overflow-x-auto p-4 custom-scrollbar">
      <div className="flex items-start space-x-4 w-max">
        {[...Array(6)].map((_, index) => (
          <CourseCard
            key={index}
            title="Mastering React: From Basics to Advanced Patterns"
            category="Web Development"
            imageUrl={courseImage.src}
            enrolledCount={3700}
            progress={80}
          />
        ))}
        {/* You can add more CourseCard components here if needed */}
      </div>
    </div>
  );
};

export default CourseList;
