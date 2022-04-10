import "../styles/globals.css";
import "../styles/prism.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Loading from "../components/Layout/loading";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#3A3D68" />
        <meta content="Dhafit Farenza" name="author" />
        <meta content="Dhafit Farenza" property="article:author" />
        <meta content="Dhafit Farenza" name="publisher" />
        <meta content="Dhafit Farenza" property="article:publisher" />
        <meta content="@DhafitF" name="twitter:site" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="me" href="https://twitter.com/DhafitF"></link>
        <link rel="me" href="https://www.instagram.com/dhafitf"></link>
        <link rel="me" href="https://github.com/dhafitf"></link>
      </Head>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <>
        <motion.div
          id="content"
          key={router.route}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </>
    </>
  );
};

export default App;
