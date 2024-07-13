import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse flex flex-col gap-4 p-4 border border-gray-200 rounded-lg">
      <div className="h-48 bg-gray-300 rounded-lg"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
    </div>
  );
};

export default SkeletonLoader;
