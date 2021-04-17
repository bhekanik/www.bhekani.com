// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { MdxRemote } from "next-mdx-remote/types";
import { getAllPosts } from "../../fixtures/data";

export interface Post {
  title: string;
  description: string;
  date: string;
  tags: string;
  cover_image: string;
  content: string | MdxRemote.Source;
  slug: string;
}

interface Data {
  data: {
    posts: Post[] | Post;
  };
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const allPosts = getAllPosts();

  const posts = allPosts.map(({ data, slug, content }) => ({
    ...data,
    date: data.date.toISOString(),
    slug,
    content,
  }));

  res.status(200).json({ data: { posts } });
};
