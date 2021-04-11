import Head from "next/head";
import { BlogListItem } from "../components/BlogListItem";
import { blogPosts } from "../fixtures/data";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Bhekani.com | My blog</title>
      </Head>

      <h1>Home</h1>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <BlogListItem key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
