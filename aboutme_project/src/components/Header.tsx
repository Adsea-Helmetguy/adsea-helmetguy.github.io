//import React from 'react'
import type { ReactNode } from "react";
import viteLogo2 from "/vite.svg";

interface NavItemProps {
  children: ReactNode;
  borderClass: string;
}

//children is a special prop in React that represents
// whatever you put between the opening and closing tags of a component(like text "About Me").
//
/* ReactNode is a TypeScript type that means "any valid React content". It can be:
Text: "About Me"
JSX elements: <span>About Me</span>
Numbers: 42
Arrays: ["About", " ", "Me"]
Even null or undefined */
const NavItem = ({ children, borderClass }: NavItemProps) => (
  <div
    className={`flex items-center h-full cursor-pointer transition duration-200 shadow-xl hover:shadow-orange-800/50 ease-in-out border-double border-gray-800 hover:text-blue-400 hover:underline hover:decoration-1 ${borderClass}`}
  >
    <p className="font-bold text-2xl m-5">{children}</p>
  </div>
);

export const AppHeader = () => {
  return (
    <div className="fixed border border-orange-800 backdrop-blur-md min-w-screen bg-gray-900">
      <div className="grid grid-cols-2">
        <div className="flex justify-start items-center">
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            className="flex flex-row items-center"
          >
            <img
              src={viteLogo2}
              className="h-10 mt-5 mb-5 ml-3"
              alt="ViteLogo"
            />
            <p className="font-bold text-lg">My Portfolio Website!</p>
          </a>
        </div>
        <div className="flex flex-row justify-end items-center font-bold">
          <NavItem borderClass="border-l-4">About Me</NavItem>
          <NavItem borderClass="border-x-4">Projects</NavItem>
          <NavItem borderClass="border-r-4">Contact Me</NavItem>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;

// the reason why SVG size gets smaller is due to padding,
// Actual SVG content space = 80px - 16px (top) - 16px (bottom) = 48px
/*
          { <div className="flex items-center h-full cursor-pointer transition duration-200 shadow-xl hover:shadow-orange-800/50 ease-in-out border-l-4 border-double border-gray-800 hover:text-blue-400 hover:underline hover:decoration-1">
            <p className="font-bold text-2xl m-5 ">About Me</p>
          </div>
          <div className="flex items-center h-full cursor-pointer transition duration-200 shadow-xl hover:shadow-orange-800/50 ease-in-out border-x-4 border-double border-gray-800 hover:text-blue-400 hover:underline hover:decoration-1">
            <p className="font-bold text-2xl m-5">Projects</p>
          </div>
          <div className="flex items-center h-full cursor-pointer transition duration-200 shadow-xl hover:shadow-orange-800/50 ease-in-out border-x-4 border-double border-gray-800 hover:text-blue-400 hover:underline hover:decoration-1">
            <p className="font-bold text-2xl m-5">Contact Me</p>
          </div> }
*/
