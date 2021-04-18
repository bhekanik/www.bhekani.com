import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogDate } from "../../components/BlogDate";
import { SEO } from "../../components/Seo";
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
  description,
}: Props): JSX.Element => {
  return (
    <div>
      <SEO title={title} description={description} />

      <div className="mb-8 mt-4">
        <Link href="/">
          <a href="/">{`< Back`}</a>
        </Link>
      </div>

      {cover_image && (
        <Image
          src={cover_image}
          width={1000}
          height={500}
          layout="responsive"
          objectFit="cover"
        />
      )}

      <div className="border-b-2 border-gray-200 my-8 pb-4">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        {date && <BlogDate date={date} />}
      </div>
      <main>
        <article className="prose max-w-none">
          {content && hydrate(content)}
        </article>
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
