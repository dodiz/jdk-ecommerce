import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

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
      <main>JDK</main>
    </>
  );
};

export default Home;
