import Head from "next/head";
import MainNavigation from "../layout/MainNavigation";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Bhekani.com | My blog</title>
      </Head>

      <MainNavigation />
    </div>
  );
};

export default Home;
