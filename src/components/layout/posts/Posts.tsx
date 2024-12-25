import React from "react";
import PostCard from "./PostCard";

const posts = [
  {
    _id: 1,
    _createdAt: "December 25, 2024",
    views: 55,
    author: { _id: 1, name: "Ali", imgUrl: "https://images.unsplash.com/photo-1732647169576-49abfdef3348?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" },
    description: "This is a description",
    image:
      "https://images.unsplash.com/photo-1732647169576-49abfdef3348?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    category: "Robots",
    title: "We Robots",
  },
];

export type postsType = (typeof posts)[0];

const Posts = ({ query }: { query: string | undefined }) => {
  return (
    <section className="mx-auto w-full max-w-screen-lg px-3 py-10 lg:px-4 xl:px-0">
      <h3 className="relative z-20 mb-8 mt-10 w-full text-3xl font-bold">
        {query ? `Search Result For "${query}" ` : `All Footprints`}
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
