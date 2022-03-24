import AuthLayout from "components/layout/AuthLayout";
import Link from "next/link";
const Administration = () => {
  return (
    <>
      <main>
        <div
          className="admin_page"
          style={{
            background: "url(/user_assets/img/background.jpg)",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div className="container">
            {/* <div className="admin_page_logo">
              <Image
                height="170"
                width="200"
                src="/assets/images/logo-dark.png"
                alt=""
              />
            </div> */}

            <div className="card_list">
              <div className="card-inner">
                <Link href="/doctors/login">
                  <a className="anchr-main-inner-box">
                    <div
                      className="card-item shadow p-4"
                      style={{
                        background:
                          "url(/user_assets/img/doctor-login/doctor_admin_login.jpg)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="card-item-inner">
                        <div className="card-inner-con ms-3">
                          <a className="fs-4 text-light">Doctor Login</a>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="card-inner">
                <Link href="/polyclinics/login">
                  <a className="anchr-main-inner-box">
                    <div
                      className="card-item shadow p-4"
                      style={{
                        background:
                          "url(/user_assets/img/polyclinic-login/polyclinic_admin_login.jpg)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="card-item-inner">
                        <div className="card-inner-con ms-3">
                          <a className="fs-4 text-light">Polyclinics Login</a>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="card-inner">
                <Link href="/nursing-homes/login">
                  <a className="anchr-main-inner-box">
                    <div
                      className="card-item shadow p-4"
                      style={{
                        background:
                          "url(/user_assets/img/nursing-login/nursing_admin_login.jpg)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="card-item-inner">
                        <div className="card-inner-con ms-3">
                          <a className="fs-4 text-light">Nursing Home Login</a>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            {/* <div className="back_to_home text-center">
              <button
                type="button"
                className="btn btn-success ps-5 pe-5 pt-3 pb-3"
              >
                Back To Home
              </button>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Administration;

Administration.getLayout = (Administration) => (
  <AuthLayout>{Administration}</AuthLayout>
);
