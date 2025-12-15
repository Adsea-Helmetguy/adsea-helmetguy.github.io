//import React from 'react'

export const AppHeader = () => {
  return (
    <div className="fixed border border-orange-800 backdrop-blur-md min-w-screen bg-gray-800">
      <div className="grid grid-rows-2">
        <p className="font-bold text-lg">Image</p>
        <div className="flex flex-row justify-end text-center gap-1">
          <div className="cursor-pointer hover:text-blue-600 transition-colors">
            About Me
          </div>
          <div className="cursor-pointer hover:text-blue-600 transition-colors">
            Projects
          </div>
          <div className="cursor-pointer hover:text-blue-600 transition-colors">
            Contact Me
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
