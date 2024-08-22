import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ imageUrl, date, category, title, des }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
      <div className="flex w-full md:w-52 lg:w-64 h-64 relative mt-8 overflow-hidden">
        <Image src={imageUrl} fill alt="image" className="object-cover" />
      </div>
      <div className="md:w-1/2">
        <p className="md:mt-4">
          {date} <span className="text-red-500"> - {category}</span>
        </p>
        <Link
          href="./"
          className="text-xl 2xl:text-2xl font-bold leading-6"
        >
          {title}
        </Link>
        <p className="text-sm 2xl:text-md mt-2 mb-2">{des}</p>
        <Link
          href="./"
          className="border-b-2 border-red-400  cursor-pointer hover:font-semibold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
