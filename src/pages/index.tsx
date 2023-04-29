import { type NextPage } from "next";
import Head from "next/head";
import { Slider } from "~components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Java dressing kit</title>
        <meta
          name="description"
          content="E-commerce made for portfolio purposes"
        />
      </Head>
      <Slider />
    </>
  );
};

export default Home;
