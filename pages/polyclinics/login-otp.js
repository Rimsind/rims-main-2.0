import Image from "next/image";
import Link from "next/link";

const LoginOtp = () => {
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
                      Enter mobile number to login to your account
                    </p>
                    <p className="lgnotp-frm-desc-sub-til">
                      We will send you One Time Password (OTP)
                    </p>
                  </div>
                  <div className="mt-5 mb-5">
                    <input
                      type="number"
                      className="form-control is-valid"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-custom-login">
                        Get OTP
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

export default LoginOtp;
