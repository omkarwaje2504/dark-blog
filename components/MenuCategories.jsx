import Link from "next/link";
import Image from "next/image";

export const MenuCategories = ({ withImage }) => {
  return (
    <>
      <Link
        href="/blog?cat=style"
        className="bg-indigo-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
      >
        {withImage && (
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/style.png"
              width={20}
              height={20}
              alt="style"
              className="w-full h-full"
            />
          </div>
        )}
        <p className="text-md dark:text-black">Style</p>
      </Link>
      <Link
        href="/blog?cat=fashion"
        className="bg-red-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
      >
        {withImage && (
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/fashion.png"
              width={20}
              height={20}
              alt="fashion"
              className="w-full h-full"
            />
          </div>
        )}
        <p className="text-md dark:text-black">Fashion</p>
      </Link>
      <Link
        href="/blog?cat=food"
        className="bg-orange-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
      >
        {withImage && (
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/food.png"
              width={20}
              height={20}
              alt="food"
              className="w-full h-full"
            />
          </div>
        )}
        <p className="text-md dark:text-black">Food</p>
      </Link>
      <Link
        href="/blog?cat=travel"
        className="bg-purple-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
      >
        {withImage && (
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/travel.png"
              width={20}
              height={20}
              alt="travel"
              className="w-full h-full"
            />
          </div>
        )}
        <p className="text-md dark:text-black">Travel</p>
      </Link>
      <Link
        href="/blog?cat=culture"
        className="bg-green-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
      >
        {withImage && (
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/culture.png"
              width={20}
              height={20}
              alt="culture"
              className="w-full h-full"
            />
          </div>
        )}
        <p className="text-md dark:text-black">Culture</p>
      </Link>
      <Link
        href="/blog?cat=coding"
        className="bg-blue-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
      >
        {withImage && (
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/coding.png"
              width={20}
              height={20}
              alt="coding"
              className="w-full h-full"
            />
          </div>
        )}
        <p className="text-md dark:text-black">Coding</p>
      </Link>
    </>
  );
};
