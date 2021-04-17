import { GetStaticProps } from "next";
import React from "react";
import { BlogListItem } from "../components/BlogListItem";
import { SEO } from "../components/Seo";
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
      <SEO title="Home" description="The landing page for bhekani.com" />

      <div className="space-y-4">
        {posts?.map((post: Post) => (
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
