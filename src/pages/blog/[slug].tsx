import Head from "next/head";
import React from "react";
import { blogPosts } from "../../fixtures/data";
import { MainNavigation } from "../../layout/MainNavigation";

const Home = ({ title, date, content }) => {
  return (
    <div>
      <Head>
        <title>Bhekani.com | </title>
      </Head>

      <MainNavigation />
      <h1>{title}</h1>
      <div>{date}</div>
      <main>
        <article>{content}</article>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  return {
    props: blogPosts.find((posts) => posts.slug === slug),
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export default Home;
