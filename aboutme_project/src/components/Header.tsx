//import React from 'react'

export const AppHeader = () => {
  return (
    <div className="grid grid-cols-2 fixed border border-blue-800 backdrop-blur-md min-w-screen">
      <div className="grid grid-col-2">
        <div className="font-bold text-lg">Image</div>
        <div className="grid grid-cols-3 gap-6 justify-end text-right">
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
