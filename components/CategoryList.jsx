import Link from "next/link";
import Image from "next/image";
export const CategoryList = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl md:text-3xl font-bold">Popular Categories</h1>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-6 w-full">
        <Link
          href="/"
          className="bg-indigo-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
        >
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/style.png"
              width={20}
              height={20}
              alt="style"
              className="w-full h-full"
            />
          </div>
          <p className="text-md dark:text-black">Style</p>
        </Link>
        <Link
          href="/"
          className="bg-red-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
        >
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/fashion.png"
              width={20}
              height={20}
              alt="fashion"
              className="w-full h-full"
            />
          </div>
          <p className="text-md dark:text-black">Fashion</p>
        </Link>
        <Link
          href="/"
          className="bg-orange-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
        >
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/food.png"
              width={20}
              height={20}
              alt="food"
              className="w-full h-full"
            />
          </div>
          <p className="text-md dark:text-black">Food</p>
        </Link>
        <Link
          href="/"
          className="bg-purple-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
        >
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/travel.png"
              width={20}
              height={20}
              alt="travel"
              className="w-full h-full"
            />
          </div>
          <p className="text-md dark:text-black">Travel</p>
        </Link>
        <Link
          href="/"
          className="bg-green-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
        >
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/culture.png"
              width={20}
              height={20}
              alt="culture"
              className="w-full h-full"
            />
          </div>
          <p className="text-md dark:text-black">Culture</p>
        </Link>
        <Link
          href="/"
          className="bg-blue-100 md:py-4 md:px-8 py-3 px-4 flex gap-2 w-full items-center justify-center rounded-xl hover:scale-110"
        >
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden">
            <Image
              src="/coding.png"
              width={20}
              height={20}
              alt="coding"
              className="w-full h-full"
            />
          </div>
          <p className="text-md dark:text-black">Coding</p>
        </Link>
      </div>
    </div>
  );
};

