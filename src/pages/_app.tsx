import { Poppins } from "next/font/google";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { api } from "~utils";

import "react-toastify/dist/ReactToastify.css";
import "~styles/style.scss";
import { Navbar, Footer } from "~components";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ToastContainer />
      <main className={poppins.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
