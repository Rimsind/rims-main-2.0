import Image from "next/image";
const SignUp = () => {
  return (
    <>
      {" "}
      <main className="main">
        <div className="content user_login_main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <Image
                        height="400"
                        width="450"
                        src="/assets/images/login.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Patient <span>Register</span>
                        </h3>
                      </div>
                      <form>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                          />
                          <label className="focus-label">Name</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="number"
                            className="form-control floating"
                          />
                          <label className="focus-label">Mobile</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            className="form-control floating"
                          />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                          />
                          <label className="focus-label">Create Password</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                          />
                          <label className="focus-label">
                            Confirm Password
                          </label>
                        </div>
                        <div className="text-end">
                          <a
                            className="forgot-link"
                            href="forgot-password.html"
                          >
                            Already have an account ?
                          </a>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Signup
                        </button>
                        <div className="login-or">
                          <span className="or-line"></span>
                          <span className="span-or">or</span>
                        </div>
                        <div className="row form-row social-login">
                          <div className="col-6">
                            <a href="#" className="btn btn-patient w-100">
                              Polyclinic Register
                            </a>
                          </div>
                          <div className="col-6">
                            <a href="#" className="btn btn-doctor w-100">
                              Doctor Register
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
