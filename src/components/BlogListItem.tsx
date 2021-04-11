import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogDate } from "./BlogDate";

interface Props {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string;
  cover_image: string;
}

export const BlogListItem = ({
  title,
  slug,
  date,
  tags,
  description,
  cover_image,
}: Props): JSX.Element => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="cursor-pointer flex border transition duration-500 ease-in border-gray-100 hover:shadow-md hover:border-gray-200 shadow rounded-md p-4">
        <div className="flex-1">
          <div>
            <a className="font-bold">{title}</a>
          </div>
          <BlogDate date={date} />
          <span>{tags}</span>
          <p>{description}</p>
        </div>

        <Image src={cover_image} objectFit="cover" width={300} height={100} />
      </div>
    </Link>
  );
};
