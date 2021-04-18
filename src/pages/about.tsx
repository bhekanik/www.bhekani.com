import { GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import Image from "next/image";
import React from "react";
import { SEO } from "../components/Seo";
import { getAboutPageContent } from "../fixtures/data";

interface Props {
  title: string;
  date: string;
  content: MdxRemote.Source;
  slug: string;
  description: string;
  tags: string;
  cover_image: string;
}

export const About = ({
  title,
  content,
  cover_image,
  description,
}: Props): JSX.Element => {
  return (
    <div>
      <SEO title="About Me" description={description} />

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
  const { data, content } = getAboutPageContent();

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: await renderToString(content),
    },
  };
};

export default About;
