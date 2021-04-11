import Head from "next/head";
import Link from "next/link";
import { blogPosts } from "../fixtures/data";
import MainNavigation from "../layout/MainNavigation";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Bhekani.com | My blog</title>
      </Head>

      <MainNavigation />
      <h1>Home</h1>
      <div>
        {blogPosts.map((post) => (
          <div key={post.slug}>
            <div>
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </div>
            <div>{post.date}</div>
            <div>{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  console.log("context:", context);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
