import { type NextPage } from "next";
import Head from "next/head";
import { Navbar, Slider } from "~components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Java dressing kit</title>
        <meta
          name="description"
          content="E-commerce made for portfolio purposes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Slider />
      </main>
    </>
  );
};

export default Home;
