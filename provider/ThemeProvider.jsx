"use client";

import { React, useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/Themecontext";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
  else{
    return <div className="flex h-[100vh] w-full items-center justify-center transition-opacity">Loading...</div>
  }
};

export default ThemeProvider;
