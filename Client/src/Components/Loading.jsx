import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Text with animation */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in mb-3">
            Welcome to My Portfolio
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
