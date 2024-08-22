"use client";
import React, { useState } from "react";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notauthenticated";
  const [open, setOpen] = useState(false);
  return (
    <div>
      {status === "notauthenticated" ? (
        <>
          <Link href="./login" className="cursor-pointer hidden lg:flex">
            Login
          </Link>
        </>
      ) : (
        <>
          <Link href="./write" className="cursor-pointer hidden lg:flex">
            Write
          </Link>
          <span className="cursor-pointer hidden md:flex">Logout</span>
        </>
      )}
      <div
        className="w-[20px] h-[24px] cursor-pointer lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full border border-black bg-black dark:bg-white dark:border-white my-1"></div>
        <div className="w-full border border-black bg-black dark:bg-white dark:border-white my-1"></div>
        <div className="w-full border border-black bg-black dark:bg-white dark:border-white my-1"></div>
      </div>
      {open ? (
        <div className="z-50 w-full h-full text-center items-center justify-center left-0 fixed top-20 bg-white dark:bg-slate-950 p-10 text-lg ">
          <Link href="./" className="flex my-2 py-4 dark:text-white text-slate-900">
            Homepage
          </Link>
          <Link href="./" className="flex my-2 py-4 dark:text-white text-slate-900">
            Contact
          </Link>
          <Link href="./" className="flex my-2 py-4 dark:text-white text-slate-900">
            About
          </Link>
          <div className="border-t border-black dark:border-white flex items-center justify-center space-x-4">
            {status === "notauthenticated" ? (
              <>
                <Link href="./login" className="cursor-pointer md:flex mt-3 dark:text-white text-slate-900">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link href="./write" className="cursor-pointer md:flex dark:text-white text-slate-900">
                  Write
                </Link>
                <span className="cursor-pointer md:flex dark:text-white text-slate-900">Logout</span>
              </>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AuthLinks;
