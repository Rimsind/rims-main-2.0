import Image from "next/image";
import Link from "next/link";

const LoginOtp = () => {
  return (
    <>
      <div
        className="patient-login d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: "url(/assets/images/ererere.png)",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-xl-4 col-xxl-4"></div>
            <div className="col-12 col-lg-6 col-xl-4 col-xxl-4">
              <div
                className="patient-login-content text-center d-flex justify-content-center align-items-center pt-5 pb-5"
                style={{
                  backgroundImage: "url(/assets/images/Loginerer.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0px 5px 60px 2px #000",
                }}
              >
                <form>
                  <div
                    className="back-home-btn text-center"
                    style={{
                      borderRadius: "100px 30px 30px 100px",
                    }}
                  >
                    <div className="back-to-home-button mb-4">
                      <Link href="/">
                        <a className="fs-6 text-warning">
                          <i className="fas fa-arrow-circle-left me-2 fs-6"></i>
                          Back To Home
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="usr-otp-lgn-img mt-5 mb-3">
                    <Image
                      src="/assets/images/logo-white.png"
                      width="150px"
                      height="100px"
                      alt="Rims Logo"
                    />
                  </div>
                  <div className="lgnotp-frm-heading mt-4 mb-5">
                    <p className="lgnotp-frm-nos-til">
                      Enter mobile number to login
                      <br /> to your account
                    </p>
                    <p className="lgnotp-frm-desc-sub-til text-light">
                      We will send you One Time Password (OTP)
                    </p>
                  </div>
                  <div
                    className="patient-login-form"
                    style={{ width: "300px", margin: "auto" }}
                  >
                    <div className=" mt-5 mb-5">
                      <input
                        type="number"
                        className="form-control is-valid"
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>

                    <button className="btn btn-dark rounded px-5" type="submit">
                      Get OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-xl-4 col-xxl-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginOtp;
