"use client";
import { Suspense, useState } from "react";
import Loader from "./loader";
import FormField from "@/components/FormField";
import Card from "@/components/Card";
const RenderCard = ({ data, text }) => {
  if (data.length > 0) {
    return data.map((singleElement) => (
      <Card key={singleElement.id} {...singleElement} />
    ));
  }

  return <h2>{text} </h2>;
};
const Home = () => {
  // const [Loader, setLoader] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allSearchedPosts, setAllSearchedPosts] = useState([]);
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold text-black">The Community Showcase</h1>
        <p className="text-sm font-semibold text-gray-500">
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>
      <div>
        <FormField />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<Loader />}>
          {searchText ? (
            <RenderCard data={allSearchedPosts} text={"No results Found"} />
          ) : (
            <RenderCard data={allPosts} text={"No Post Found"} />
          )}
        </Suspense>
      </div>
    </section>
  );
};

export default Home;
