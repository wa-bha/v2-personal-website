import React, { PropsWithChildren } from "react";
import { Search } from "react-feather";

type Props = {
  sectionName: string;
};

const BrowserWindow = ({ sectionName, children }: PropsWithChildren<Props>) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
      {/* Top bar */}
      <div className="relative h-6 w-full flex justify-start items-center space-x-2 bg-gray-200 px-2 py-1">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Window content */}
      <div className="px-2 py-4 md:p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Search height={16} />
          <div className="text-xs text-gray-500">https://bhavit.dev/#{sectionName}</div>
        </div>

        <hr className="mx-1 my-4"></hr>

        <div className="rounded-lg overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default BrowserWindow;
