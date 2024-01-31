import Link from "next/link";
export const Pagination = () => {
  return (
    <div className="mt-10 flex w-full items-center justify-between">
      <button className="lg:px-6 px-4 py-2 text-sm md:text-auto lg:py-4 bg-red-500 text-white hover:bg-red-600 hover:scale-105">
        Previous
      </button>
      <button className="lg:px-6 px-4 py-2 text-sm md:text-auto lg:py-4 bg-red-500 text-white hover:bg-red-600 hover:scale-105">
        Next
      </button>
    </div>
  );
};
