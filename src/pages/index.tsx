import { type NextPage } from "next";
import Head from "next/head";
import { Navbar, Carousel } from "~components";

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
        <Carousel
          slides={[
            {
              title: "slide 1",
              background: "/images/1.jpg",
            },
            {
              title: "slide 2",
              background: "/images/1.jpg",
            },
            {
              title: "slide 3",
              background: "/images/1.jpg",
            },
            {
              title: "slide 4",
              background: "/images/1.jpg",
            },
          ]}
        />
      </main>
    </>
  );
};

export default Home;
