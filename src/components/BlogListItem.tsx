import Link from "next/link";
import React from "react";
import { BlogDate } from "./BlogDate";

interface Props {
  title: string;
  slug: string;
  date: string;
  content: string;
}

export const BlogListItem = ({
  title,
  slug,
  date,
  content,
}: Props): JSX.Element => {
  return (
    <div className="border transition duration-500 ease-in border-gray-100 hover:shadow-md hover:border-gray-200 shadow rounded-md p-4">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      <BlogDate date={date} />
      <div>{content}</div>
    </div>
  );
};
