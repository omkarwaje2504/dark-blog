import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ imageUrl, date, category, title, des }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div className="flex w-full md:w-64 h-64 relative mt-8 overflow-hidden">
        <Image src={imageUrl} fill alt="image" className="object-cover" />
      </div>
      <div className="md:w-1/2">
        <p className="mt-4">
          {date} <span className="text-red-500"> - {category}</span>
        </p>
        <Link
          href="/"
          className="text-lg md:text-xl 2xl:text-2xl font-bold mt-4"
        >
          {title}
        </Link>
        <p className="text-sm 2xl:text-md mt-2 mb-6">{des}</p>
        <Link
          href="/"
          className="border-b-2 border-red-400  cursor-pointer hover:font-semibold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
