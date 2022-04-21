import Image from "next/image";
import Link from "next/link";

const OtpVerify = () => {
  return (
    <>
      <section className="lgnotp-frm">
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
                      If you didn&apos;t recieve a code!{" "}
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
      </section>
    </>
  );
};

export default OtpVerify;
