import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>RIMS IND</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
