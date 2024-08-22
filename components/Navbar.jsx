import Link from "next/link";
import Image from "next/image";
import  Themetoggle from "./ThemeToggle";
import Authlinks from "./AuthLinks";
export const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between h-[100px]">
      <div className="hidden md:flex gap-4 dark:bg-white p-2 rounded-full">
        <Image src="./facebook.png" alt="facebook" width={24} height={24} />
        <Image src="./instagram.png" alt="instagram" width={24} height={24} />
        <Image src="./tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="./youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="font-bold text-2xl lg:text-4xl">Dark-Blogs</div>
      <div className="flex gap-4 items-center justify-center">
        <Themetoggle />
        <Link href="./" className="hidden lg:flex">Homepage</Link>
        <Link href="./" className="hidden lg:flex">Contact</Link>
        <Link href="./" className="hidden lg:flex">About</Link>
        <Authlinks />
      </div>
    </div>
  );
};
