import Link from "next/link";
import Image from "next/image";
import { MenuCategories } from "./MenuCategories";
export const CategoryList = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl md:text-3xl font-bold">Popular Categories</h1>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-6 w-full">
        <MenuCategories withImage={true} />
      </div>
    </div>
  );
};
