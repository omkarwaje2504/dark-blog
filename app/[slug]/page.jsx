import { Menu } from "@/components/Menu";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div>
      <div className="flex flex-col md:items-center md:flex-row w-full gap-8 mt-3 md:mt-6">
        <div className="md:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-semibold">
            Continent had stage near possible arrow
          </h1>
          <div className="flex gap-2 mt-8">
            <div className="flex w-14 h-14 rounded-full border-2 border-gray-200 overflow-hidden">
              <Image
                src="/p1.jpeg"
                alt="image"
                width={100}
                height={100}
                className=""
              />
            </div>
            <div className="flex flex-col text-gray-400">
              <span>Omkar Waje</span>
              <span>12-04-2002</span>
            </div>
          </div>
        </div>
        <div className="flex md:w-1/2 h-64 md:h-96 relative">
          <Image src="/p1.jpeg" alt="image" fill className="object-cover" />
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-10">
        <div className="mt-10 md:w-3/4">
          <div className="flex flex-col gap-6">
            <p>
              ice grass inside layers reason diameter farm clearly blew tired
              rough balloon swam column swing damage solid eaten cloth pupil
              quite swimming straw bigger ice grass inside layers reason
              diameter farm clearly blew tired rough balloon swam column swing
              damage solid eaten cloth pupil quite swimming straw bigger
            </p>
            <h1 className="text-2xl font-semibold">
              Content is this the heading part
            </h1>
            <p>
              ice grass inside layers reason diameter farm clearly blew tired
              rough balloon swam column swing damage solid eaten cloth pupil
              quite swimming straw bigger ice grass inside layers reason
              diameter farm clearly blew tired rough balloon swam column swing
              damage solid eaten cloth pupil quite swimming straw bigger
            </p>
            <p>
              ice grass inside layers reason diameter farm clearly blew tired
              rough balloon swam column swing damage solid eaten cloth pupil
              quite swimming straw bigger ice grass inside layers reason
              diameter farm clearly blew tired rough balloon swam column swing
              damage solid eaten cloth pupil quite swimming straw bigger
            </p>
            <p>
              ice grass inside layers reason diameter farm clearly blew tired
              rough balloon swam column swing damage solid eaten cloth pupil
              quite swimming straw bigger ice grass inside layers reason
              diameter farm clearly blew tired rough balloon swam column swing
              damage solid eaten cloth pupil quite swimming straw bigger
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
