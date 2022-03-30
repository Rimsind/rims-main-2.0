import Layout from "components/layout/Layout";
import "../public/assets/css/style.css";
import "../public/assets/css/admin.css";
import "../public/user_assets/plugins/apex/apexcharts.css";
import "../public/user_assets/css/style.css";
import "../public/user_assets/css/main.css";
import "../public/assets/css/style2.css";
import "../public/assets/css/style3.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalProvider from "context";

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <GlobalProvider>
        <Layout>
          {page}
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Layout>
      </GlobalProvider>
    ));

  return getLayout(
    <GlobalProvider>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </GlobalProvider>
  );
}
