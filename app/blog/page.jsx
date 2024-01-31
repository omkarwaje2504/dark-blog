import { CardList } from "@/components/CardList";
import { Menu } from "@/components/Menu";

const BlogPage = () => {
  return (
    <div>
      <h1 className="w-full bg-red-500 text-white py-4 px-8 font-bold text-2xl text-center">Style Blog</h1>
      <div className="flex w-full flex-col md:flex-row">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
