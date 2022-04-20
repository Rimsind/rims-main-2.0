import Image from "next/image";
import Link from "next/link";

const OtpVerify = () => {
  return (
    <>
      {/* <section className="lgnotp-frm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <Image
                src="/assets/images/doctor-login.png"
                height="500px"
                width="500px"
                alt=""
              />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="doctor-login-form border border-1 rounded ">
                <form>
                  <div className="lgnotp-frm-heading">
                    <p className="lgnotp-frm-nos-til">
                      Mobile verification has successfully send
                    </p>
                    <p className="lgnotp-frm-desc-sub-til">
                      Please enter the verification code sent
                      <br />
                      to +91 7856313218
                    </p>
                  </div>
                  <div className="mt-5 mb-3">
                    <input
                      type="text"
                      className="form-control is-invalid"
                      maxLength="4"
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                  <div className="otp-resnd">
                    <p className="otp-resnd-txt text-center">
                      If you didn't recieve a code!{" "}
                      <a href="#" className="text-danger">
                        Resend
                      </a>
                    </p>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-custom-login">
                        Verify
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
                    {/* <div className="back-to-home-button mb-4">
                      <Link href="/">
                        <a className="fs-6 text-warning">
                          <i className="fas fa-arrow-circle-left me-2 fs-6"></i>
                          Back To Home
                        </a>
                      </Link>
                    </div> */}
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
                      Mobile verification has successfully <br /> sent to +91
                      7856313218
                    </p>
                    <p className="lgnotp-frm-desc-sub-til text-light">
                      Please enter the verification code
                      <br />
                    </p>
                  </div>
                  <div
                    className="patient-login-form"
                    style={{ width: "300px", margin: "auto" }}
                  >
                    <div className=" mt-5 mb-3">
                      <input
                        type="text"
                        className="form-control is-invalid"
                        maxLength="4"
                        placeholder="Enter OTP"
                        required
                      />
                    </div>
                    <div className="otp-resnd mb-5">
                      <p className="otp-resnd-txt text-center text-light">
                        If you didn't recieve a code!
                        <a href="#" className="text-danger ms-2">
                          Resend
                        </a>
                      </p>
                    </div>
                    <button className="btn btn-dark rounded px-5" type="submit">
                      Verify
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

export default OtpVerify;
