import Image from "next/image";
import React from "react";

import { postsType } from "./Posts";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

const PostCard = ({ post }: { post: postsType }) => {
  const {
    // _id,
    _createdAt,
    views,
    author: {
      // _id: authorId,
      imgUrl,
      name,
    },
    description,
    image,
    // category,
    title,
  } = post;

  return (
    <article className="group z-10 cursor-pointer space-y-4 rounded-xl border bg-white p-3">
      {/* Images & Actions */}
      <figure className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          fill
          src={`${image}`}
          alt={name}
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <Link
              href="/"
              className={`items-center justify-center rounded-full border bg-white p-2 text-gray-600 shadow-md transition hover:scale-110`}
            >
              <div className="flex gap-1">
                {" "}
                <EyeIcon /> {views}
              </div>
            </Link>
            <Link
              href="/"
              className={`items-center justify-center rounded-full border bg-white p-2 text-gray-600 shadow-md transition hover:scale-110`}
            >
              <div className="flex gap-1"> Details</div>
            </Link>
          </div>
        </div>
      </figure>
      {/* Description */}
      <div>
        <h6 className="text-lg font-semibold">{title}</h6>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-start gap-1">
        <Link href={"/profile"}>
          <figure className="relative size-8">
            <Image
              src={`${imgUrl}`}
              alt="User Avatar"
              fill
              className="w-full rounded-full"
            />
          </figure>
        </Link>

        <p className="text-sm text-gray-500">{_createdAt}</p>
      </div>
    </article>
  );
};

export default PostCard;
