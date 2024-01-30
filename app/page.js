import Link from "next/link";
import { Featured } from "@/components/Featured";
import { CategoryList } from "@/components/CategoryList";
import { CardList } from "@/components/CardList";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <div className="pb-60">
      <Featured />
      <CategoryList />
      <div className="flex w-full flex-col md:flex-row">
        <CardList />
        <Menu />
      </div>
      
    </div>
  );
}
