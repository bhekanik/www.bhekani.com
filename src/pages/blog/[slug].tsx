import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogDate } from "../../components/BlogDate";
import { getAllPosts } from "../../fixtures/data";

interface Props {
  title: string;
  date: string;
  content: MdxRemote.Source;
  slug: string;
  description: string;
  tags: string;
  cover_image: string;
}

export const BlogPost = ({
  title,
  date,
  content,
  cover_image,
}: Props): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Bhekani.com | </title>
      </Head>

      <div className="mb-8 mt-4">
        <Link href="/">
          <a>{`< Back`}</a>
        </Link>
      </div>

      <Image
        src={cover_image}
        width={1000}
        height={500}
        layout="responsive"
        objectFit="cover"
      />

      <div className="border-b-2 border-gray-200 my-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <BlogDate date={date} size="md" />
      </div>
      <main>
        <article className="prose max-w-none">{hydrate(content)}</article>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { slug },
  } = context;

  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((post) => post.slug === slug);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: await renderToString(content),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllPosts();
  const paths = allPosts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
