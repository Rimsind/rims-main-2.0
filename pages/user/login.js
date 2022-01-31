const Login = () => {
  return (
    <>
      <main className="main">
        <div className="content user_login_main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src="/assets/images/login.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Login <span>Rims India</span>
                        </h3>
                      </div>
                      <form>
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
                          <label className="focus-label">Password</label>
                        </div>
                        <div className="text-end">
                          <a
                            className="forgot-link"
                            href="forgot-password.html"
                          >
                            Forgot Password ?
                          </a>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Login
                        </button>
                        <div className="login-or">
                          <span className="or-line"></span>
                          <span className="span-or">or</span>
                        </div>
                        <div className="row form-row social-login">
                          <div className="col-6">
                            <a href="#" className="btn btn-patient w-100">
                              Patient Login
                            </a>
                          </div>
                          <div className="col-6">
                            <a href="#" className="btn btn-doctor w-100">
                              Doctor Login
                            </a>
                          </div>
                        </div>
                        <div className="text-center mt-3">
                          Don’t have an account?
                          <a href="register.html">Register</a>
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

export default Login;
