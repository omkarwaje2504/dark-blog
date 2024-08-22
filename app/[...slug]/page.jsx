// app/[...slug]/page.js
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Menu } from '@/components/Menu';

export async function generateStaticParams() {
  // Generate the paths you want to pre-render
  // For example, assuming you have some slugs:
  const slugs = ['slug1', 'slug2', 'slug3'];

  return slugs.map((slug) => ({
    slug: [slug], // as this is a catch-all route, the slug should be an array
  }));
}

async function fetchDataForSlug(slug) {
  // Replace this with your actual data fetching logic
  return {
    title: "Continent had stage near possible arrow",
    author: "Omkar Waje",
    date: "12-04-2002",
    content: `
      ice grass inside layers reason diameter farm clearly blew tired rough balloon swam column swing damage solid eaten cloth pupil quite swimming straw bigger
      ice grass inside layers reason diameter farm clearly blew tired rough balloon swam column swing damage solid eaten cloth pupil quite swimming straw bigger
    `,
    heading: "Content is this the heading part",
    mainImage: "/p1.jpeg",
  };
}

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await fetchDataForSlug(slug.join('/'));

  if (!data) {
    return notFound();
  }

  return (
    <div>
      <div className="flex flex-col md:items-center md:flex-row w-full gap-8 mt-3 md:mt-6">
        <div className="md:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-semibold">{data.title}</h1>
          <div className="flex gap-2 mt-8">
            <div className="flex w-14 h-14 rounded-full border-2 border-gray-200 overflow-hidden">
              <Image
                src={data.mainImage}
                alt="image"
                width={100}
                height={100}
                className=""
              />
            </div>
            <div className="flex flex-col text-gray-400">
              <span>{data.author}</span>
              <span>{data.date}</span>
            </div>
          </div>
        </div>
        <div className="flex md:w-1/2 h-64 md:h-96 relative">
          <Image src={data.mainImage} alt="image" fill className="object-cover" />
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-10">
        <div className="mt-10 md:w-3/4">
          <div className="flex flex-col gap-6">
            <p>{data.content}</p>
            <h1 className="text-2xl font-semibold">{data.heading}</h1>
            <p>{data.content}</p>
            <p>{data.content}</p>
            <p>{data.content}</p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
