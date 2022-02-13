import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { setCookie } from "nookies";
import router from "next/router";
import { useAuth } from "context/index";

const Login = () => {
  const { dispatchAuth } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

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

      if (result.jwt && result.user.role.id === 4) {
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
        alert("login success");
        router.push("/polyclinics/dashboard");
      }
    } catch (error) {
      dispatchAuth({
        type: "LOGIN_FAILED",
        payload: error.message
          ? error.message
          : "Something went wrong, try agin",
      });
      console.log(error.message);
      alert("login failed");
    }
  };
  return (
    <>
      <div className="login-form-main">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
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
                    <label htmlForm="exampleInputEmail1" className="form-label">
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
                      htmlForm="exampleInputPassword1"
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
                          htmlForm="exampleCheck1"
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
                        <Link href="/polyclinics/signup">
                          <a href="#" className="text-dark fw-bold">
                            Register{" "}
                          </a>
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
            <div
              className="col-6 bg-background1"
              style={{
                backgroundImage: "url(/assets/images/background-right.png)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
