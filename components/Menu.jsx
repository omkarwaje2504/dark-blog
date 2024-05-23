import Link from "next/link";
import Image from "next/image";
import MenuPosts from "./MenuPosts";
import { MenuCategories } from "./MenuCategories";

export const Menu = () => {
  return (
    <div className="basis-2/6 mt-10 hidden md:flex ">
      <div className="mt-1">
        <div>
          <h2 className="text-sm text-red-500 font-light">What&apos;s hot</h2>
          <h1 className="text-2xl md:text-3xl font-bold ">Most Popular</h1>
        </div>
        <MenuPosts withImage={false} />

        <div className="mt-10">
          <h2 className="text-sm text-red-500 font-light">
            Discovered by topic
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold ">Categories</h1>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 md:gap-6 w-full">
          <MenuCategories withImage={false} />
        </div>

        <div className="mt-10">
          <h2 className="text-sm text-red-500 font-light">
            Choosen by the editor
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold ">Editors pick</h1>
        </div>
        <MenuPosts withImage={true} />
      </div>
    </div>
  );
};
