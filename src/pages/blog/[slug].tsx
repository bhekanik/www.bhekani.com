import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { BlogDate } from "../../components/BlogDate";
import { blogPosts } from "../../fixtures/data";

interface Props {
  title: string;
  date: string;
  content: string;
  slug: string;
}

export const BlogPost = ({ title, date, content }: Props): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Bhekani.com | </title>
      </Head>

      <div className="border-b-2 border-gray-200 mb-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <BlogDate date={date} size="md" />
      </div>
      <main>
        <article>{content}</article>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { slug },
  } = context;

  return {
    props: blogPosts.find((posts) => posts.slug === slug),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export default BlogPost;
