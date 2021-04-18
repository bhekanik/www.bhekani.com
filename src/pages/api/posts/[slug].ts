// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import { getAllPosts } from "../../../fixtures/data";

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
  data?: {
    posts: Post[] | Post;
  };
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const allPosts = getAllPosts();
  if (req.query.slug) {
    console.log("req.query.slug:", req.query.slug);
    const returned = allPosts.find((post) => post.slug === req.query.slug);
    console.log("returned:", returned);
    const { data, content, slug } = returned;

    res.status(200).json({
      data: {
        posts: {
          ...data,
          date: data.date.toISOString(),
          content: await renderToString(content),
          slug,
        },
      },
    });
  }
};
