import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full mt-20 border-t pt-10 flex flex-wrap md:flex-row justify-between pb-8">
      <div className="md:w-1/2 ">
        <div className="flex gap-4 items-center">
          <span className="w-14 h-14 border rounded-full overflow-hidden">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </span>
          <span className="text-2xl font-bold ">Dark-Coder</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Dropped successful plain dream author hair cause either same brush buy
          loose year mean truth rush addition listen balloon early seeing crop
          then push
        </p>
        <div className="flex w-fit gap-4 dark:bg-white p-2 rounded-full mt-8">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </div>
      </div>
      <div className="flex w-full mt-6 md:mt-0 md:w-1/3 justify-between">
        <div className="flex flex-col">
            <h1 className="text-lg font-semibold">Links</h1>
            <Link href="/" className="dark:text-gray-400 font-light">HomePage</Link>
            <Link href="/blog" className="dark:text-gray-400 font-light">Blog</Link>
            <Link href="/about" className="dark:text-gray-400 font-light">About</Link>
            <Link href="/contact" className="dark:text-gray-400 font-light">Contact</Link>
        </div>
        <div className="flex flex-col">
            <h1 className="text-lg font-semibold">Tags</h1>
            <Link href="/" className="dark:text-gray-400 font-light">Style</Link>
            <Link href="/blog" className="dark:text-gray-400 font-light">Fashion</Link>
            <Link href="/about" className="dark:text-gray-400 font-light">Coding</Link>
            <Link href="/contact" className="dark:text-gray-400 font-light">Travel</Link>
        </div>
        <div className="flex flex-col">
            <h1 className="text-lg font-semibold">Links</h1>
            <Link href="/" className="dark:text-gray-400 font-light">Social</Link>
            <Link href="/blog" className="dark:text-gray-400 font-light">Facebook</Link>
            <Link href="/about" className="dark:text-gray-400 font-light">Instagram</Link>
            <Link href="/contact" className="dark:text-gray-400 font-light">LinkedIn</Link>
        </div>
      </div>
    </div>
  );
};
