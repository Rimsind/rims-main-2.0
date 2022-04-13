import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { setCookie } from "nookies";
import router from "next/router";
import { useAuth } from "context";
import { toast, Slide } from "react-toastify";
const Index = () => {
  const { dispatchAuth } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    dispatchAuth({ type: "AUTH_LOADING" });
    if (!data.email || !data.password) {
      alert("please fill all data");
      return;
    }

    try {
      const payload = {
        identifier: data.email,
        password: data.password,
      };
      const res = await axios.post(
        "https://manage.riimstechnology.com/auth/local",
        payload
      );
      const result = res.data;

      if (result.jwt && result.user.role.id === 3) {
        setCookie(null, "token", result.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setCookie(null, "user", JSON.stringify(result.user), {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        dispatchAuth({
          type: "LOGIN_SUCCESS",
          payload: { token: result.jwt, user: result.user },
        });

        reset();

        toast.success("login success", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
        router.push("/doctors/dashboard");
      }
    } catch (error) {
      dispatchAuth({
        type: "LOGIN_FAILED",
        payload: error.message
          ? error.message
          : "Something went wrong, try agin",
      });
      console.log(error.message);

      toast.error("login failed", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  };
  return (
    <>
      {/* <section className="login-section">
        <div className="container">
          <div className="row form-box">
            <div className="col-6 px-5 py-4">
              <div className="login-logo mt-3">
                <img src="/assets/images/logo-dark.png" width="70px" />
              </div>
              <div className="login-con mt-4">
                <p className="fs-5 text-secondary">
                  Welcome Back, Please login <br />
                  to your account
                </p>
              </div>
              <div className="login-btn-option mt-4 d-flex align-items-center justify-content-between">
                <button type="button" className="btn btn-primary px-5 disabled">
                  <i className="fab fa-facebook-f me-2"></i> Login with Facebook
                </button>
                <button type="button" className="btn btn-danger px-5 disabled">
                  <i className="fab fa-google me-2"></i> Login with Google
                </button>
              </div>
              <div className="text-center mt-4">
                <p className="fs-6 fw-lighter fst-italic">-OR-</p>
              </div>
              <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      {...register("email")}
                    />
                    <div id="emailHelp" className="form-text">
                      We&apos;ll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      {...register("password")}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <div className="row">
                      <div className="col-6">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Show Password
                        </label>
                      </div>
                      <div className="col-6 text-end">
                        <a
                          href="#"
                          className="text-dark fw-bold text-decoration-none"
                        >
                          Forgot Password
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-custom-login">
                        Login
                      </button>
                      <p className="mt-2">
                        Don&apos;t have an account?
                        <Link href="/doctors/signup">
                          <a className="text-dark fw-bold">Register </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="warning-text">
                    <p className="fs-6 fw-lighter mt-2">
                      By signing up, you agree to Rims&apos;s
                      <a href="#">Terms & Condition</a> &
                      <a href="#">Privacy Policy</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-6 bg-background"></div>
          </div>
        </div>
      </section> */}
      <section
        className="doctor-login-section"
        style={{ background: "url(/assets/images/login-bg.jpg)" }}
      >
        <div className="container">
          <div className="card-body">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#bottom-justified-tab1"
                  data-bs-toggle="tab"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <Link href="/doctors/signup">
                  <a className="nav-link">Register</a>
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane show active" id="bottom-justified-tab1">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <Image
                      src="/assets/images/doctor-login.png"
                      height="500px"
                      width="500px"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="doctor-login-form p-5 border border-1 rounded ">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            {...register("email")}
                          />
                          <div id="emailHelp" className="form-text">
                            We&apos;ll never share your email with anyone else.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            {...register("password")}
                          />
                        </div>
                        <div className="mb-3 form-check">
                          <div className="row">
                            <div className="col-6">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Show Password
                              </label>
                            </div>
                            <div className="col-6 text-end">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-12 text-center">
                            <button
                              type="submit"
                              className="btn btn-custom-login"
                            >
                              Login
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="tab-pane" id="bottom-justified-tab2">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <Image
                      src="/assets/images/doctor-login.png"
                      height="600px"
                      width="400px"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="doctor-login-form p-5 border border-1 rounded ">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            {...register("email")}
                          />
                          <div id="emailHelp" className="form-text">
                            We&apos;ll never share your email with anyone else.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            {...register("password")}
                          />
                        </div>
                        <div className="mb-3 form-check">
                          <div className="row">
                            <div className="col-6">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Show Password
                              </label>
                            </div>
                            <div className="col-6 text-end">
                              <a
                                href="#"
                                className="text-dark fw-bold text-decoration-none"
                              >
                                Forgot Password
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-12 text-center">
                            <button
                              type="submit"
                              className="btn btn-custom-login"
                            >
                              Login
                            </button>
                            <p className="mt-2">
                              Don&apos;t have an account?
                              <Link href="/doctors/signup">
                                <a className="text-dark fw-bold">Register </a>
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div className="warning-text text-center">
                          <p className="fs-6 fw-lighter mt-2">
                            By signing up, you agree to Rims&apos;s
                            <a href="#">Terms & Condition</a> &
                            <a href="#">Privacy Policy</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
