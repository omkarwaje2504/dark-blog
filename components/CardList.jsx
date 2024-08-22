import Link from "next/link";
import Image from "next/image";
import { Pagination } from "./Pagination";
import Card from "./card";

export const CardList = () => {
  return (
    <div className="basis-4/6 mt-10">
      <h1 className="text-2xl md:text-3xl font-bold">Recent Posts</h1>
      <div>
        <Card
          imageUrl={"./p1.jpeg"}
          date={"4/14/2098"}
          category={"Culture"}
          title={
            "Electric exercise shine feathers four believed cattle sing leg market."
          }
          des={
            " electric exercise shine feathers four believed cattle sing leg market event automobile winter test cake chapter rocky settle kitchen house tea cap massage stream"
          }
        />
        <Card
          imageUrl={"./p1.jpeg"}
          date={"4/14/2098"}
          category={"Culture"}
          title={
            "Electric exercise shine feathers four believed cattle sing leg market."
          }
          des={
            " electric exercise shine feathers four believed cattle sing leg market event automobile winter test cake chapter rocky settle kitchen house tea cap massage stream"
          }
        />
        <Card
          imageUrl={"./p1.jpeg"}
          date={"4/14/2098"}
          category={"Culture"}
          title={
            "Electric exercise shine feathers four believed cattle sing leg market."
          }
          des={
            " electric exercise shine feathers four believed cattle sing leg market event automobile winter test cake chapter rocky settle kitchen house tea cap massage stream"
          }
        />
        <Card
          imageUrl={"./p1.jpeg"}
          date={"4/14/2098"}
          category={"Culture"}
          title={
             "Electric exercise shine feathers four believed cattle sing leg market."
          }
          des={
            " electric exercise shine feathers four believed cattle sing leg market event automobile winter test cake chapter rocky settle kitchen house tea cap massage stream"
          }
        />
      </div>

      <Pagination />
    </div>
  );
};
