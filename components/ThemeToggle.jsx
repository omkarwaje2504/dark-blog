"use client";

import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { ThemeContext } from "@/context/Themecontext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className="bg-black dark:bg-white w-16 relative p-1 border-2 border-slate-300 shadow-inner flex items-center justify-between rounded-full"
      onClick={() => toggle()}
    >
      <Image src="/moon.png" width={20} height={20} alt="toggleIcon" />
      <div
        className={`bg-white w-6 h-6 rounded-full absolute dark:bg-black ${
          theme === "dark" ? "right-0" : "left-0"
        } m-1`}
      ></div>
      <Image src="/sun.png" width={20} height={20} alt="toggleIcon" />
    </div>
  );
};

export default ThemeToggle;
