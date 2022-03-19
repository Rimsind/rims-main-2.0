import Image from "next/image";

const Signup = () => {
  return (
    <>
      <div
        className="patient-login d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: "url(/assets/images/ererere.png)",
          backgroundSize: "cover",
          height: "80vh",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
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
                  <Image
                    src="/assets/images/logo-white.png"
                    width="150px"
                    height="100px"
                    alt="Rims Logo"
                  />
                  <p className="fs-5 text-light my-4">Patient / User</p>
                  <div
                    className="patient-login-form"
                    style={{ width: "360px" }}
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Create Password"
                      />
                    </div>
                    <button
                      className="btn btn-outline-light text-dark rounded-pill px-5"
                      type="submit"
                    >
                      Sign up
                    </button>
                    {/* <div className="forgot-password-sec my-4">
                      <p className="fs-6">Forgot Your Password</p>
                    </div> */}
                    {/* <div className="welcome-heading mt-5 mb-4">
                      <p className="fs-1 text-capitalize text-light">Welcome</p>
                    </div> */}
                    <div className="dont-account my-4">
                      <p>Already Have An Account?</p>
                    </div>
                    <button
                      className="btn btn-dark rounded-pill px-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
