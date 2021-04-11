import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { BlogListItem } from "../components/BlogListItem";
import { getAllPosts } from "../fixtures/data";

interface Post {
  title: string;
  description: string;
  slug: string;
  tags: string;
  cover_image: string;
  date: string;
}

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <div>
      <Head>
        <title>Bhekani.com | My blog</title>
      </Head>

      <div className="space-y-4">
        {posts.map((post) => (
          <BlogListItem key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  const posts = allPosts.map(({ data, slug }) => ({
    ...data,
    date: data.date.toISOString(),
    slug,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default Home;
