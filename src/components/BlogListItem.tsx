import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogDate } from "./BlogDate";
import { Tags } from "./Tags";

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
    <Link href={`/blog/${slug}`} passHref>
      <div className="h-56 cursor-pointer flex border transition duration-250 ease-in border-gray-100 dark:border-gray-600 dark:hover:border-gray-500 hover:shadow-md hover:border-gray-200 shadow rounded-md p-4">
        <div className="flex-1">
          <div className="mb-4">
            <a href={`/blog/${slug}`} className="font-bold text-left">
              {title}
            </a>
            <BlogDate date={date} />
            <Tags tags={tags} />
          </div>
          <p className="overflow-ellipsis overflow-hidden h-24">
            {description}
          </p>
        </div>

        <div className="relative w-48 h-48 ml-4">
          <Image
            src={cover_image}
            className="margin-left: 1rem"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </Link>
  );
};
