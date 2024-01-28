import Link from "next/link";
import Image from "next/image";
export const Featured = () => {
  return (
    <div className="mt-6 2xl:mt-20">
      <h1 className="text-4xl lg:text-5xl 2xl:text-6xl">
        <b>Hey! This is the latest blog </b>of this month hope you like it
      </h1>
      <div className="flex flex-col md:flex-row gap-4 2xl:gap-20 mt-4 md:mt-10 items-center">
        <div className="flex w-full md:w-1/2 h-64 md:h-96 2xl:h-[32rem] relative mt-8 overflow-hidden">
          <Image
            src="/p1.jpeg"
            fill
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl 2xl:text-5xl font-bold">
            Electric exercise shine feathers four believed cattle sing leg
            market.
          </h1>
          <p className=" text-md md:text-lg 2xl:text-xl mt-4">
            electric exercise shine feathers four believed cattle sing leg
            market event automobile winter test cake chapter rocky settle
            kitchen house tea cap massage stream
          </p>
          <button className="bg-white dark:bg-transparent border-2 border-gray-400 py-2 px-4 cursor-pointer hover:scale-105 rounded-md mt-4">Read More</button>
        </div>
      </div>
    </div>
  );
};
