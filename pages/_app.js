import Layout from "../components/Layout";
import "../public/assets/css/style.css";
import "../public/assets/css/admin.css";
import "../public/user_assets/plugins/apex/apexcharts.css";
import "../public/user_assets/css/style.css";
import "../public/user_assets/css/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
