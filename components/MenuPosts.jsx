import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({ withImage }) => {
  return (
    <>
      <Link href="/" className="flex gap-3 mt-6 items-center">
        {withImage && (
          <div className="flex w-14 h-14 relative overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="./culture.png"
              fill
              alt="image"
              className="object-cover"
            />
          </div>
        )}
        <div className={`${withImage ? "w-3/4" : ""}`}>
          <p className="px-2 bg-red-100 font-medium w-fit rounded-full text-black text-xs">
            Travel
          </p>
          <Link href="/" className="flex mt-1 leading-5 font-semibold text-md">
            Electric exercise shine feathers four market feathers four market.
          </Link>
          <div className="text-xs mt-1">
            <span>Omkar Waje </span>
            <span>-10/12/2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex gap-3 mt-6 items-center">
        {withImage && (
          <div className="flex w-14 h-14 relative overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="./culture.png"
              fill
              alt="image"
              className="object-cover"
            />
          </div>
        )}
        <div className={`${withImage ? "w-3/4" : ""}`}>
          <p className="px-2 bg-yellow-100 font-medium w-fit rounded-full text-black text-xs">
            Travel
          </p>
          <Link href="/" className="flex mt-1 leading-5 font-semibold text-md">
            Electric exercise shine feathers four market feathers four market.
          </Link>
          <div className="text-xs mt-1">
            <span>Omkar Waje </span>
            <span>-10/12/2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex gap-3 mt-6 items-center">
        {withImage && (
          <div className="flex w-14 h-14 relative overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="./culture.png"
              fill
              alt="image"
              className="object-cover"
            />
          </div>
        )}
        <div className={`${withImage ? "w-3/4" : ""}`}>
          <p className="px-2 bg-green-100 font-medium w-fit rounded-full text-black text-xs">
            Travel
          </p>
          <Link href="/" className="flex mt-1 leading-5 font-semibold text-md">
            Electric exercise shine feathers four market feathers four market.
          </Link>
          <div className="text-xs mt-1">
            <span>Omkar Waje </span>
            <span>-10/12/2024</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MenuPosts;
