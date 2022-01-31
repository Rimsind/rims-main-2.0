import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>RIMS IND</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
