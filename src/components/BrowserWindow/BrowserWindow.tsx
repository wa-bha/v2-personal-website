import React, { PropsWithChildren } from "react";
import { Search } from "react-feather";

const BrowserWindow = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-3xl mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md">
      {/* Top bar */}
      <div className="relative h-6 w-full flex justify-center items-center bg-gray-200 px-2 py-1">
        <div className="absolute left-2 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="hidden sm:block text-xs text-gray-600">
          Bhavit Wadhwa | software developer ☕
        </div>
      </div>

      {/* Window content */}
      <div className="px-2 py-4">
        <div className="flex items-center space-x-2 mb-3">
          <Search height={16} />
          <div className="text-xs text-gray-500">https://bhavit.dev/#experience</div>
        </div>

        <hr className="mx-2 h-2"></hr>

        <div className="rounded-lg overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default BrowserWindow;
