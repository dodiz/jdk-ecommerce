import { type NextPage } from "next";
import Head from "next/head";
import { Navbar, Slider, Footer } from "~components";

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
        <Footer />
      </main>
    </>
  );
};

export default Home;
