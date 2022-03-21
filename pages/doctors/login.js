import AuthLayout from "components/layout/AuthLayout";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { setCookie } from "nookies";
import router from "next/router";
import { useAuth } from "context";

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
        alert("login success");
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
      alert("login failed");
    }
  };
  return (
    <>
      {/* <div className="login-form-main">
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
      </div> */}
      <div
        className="doctor-login-main-sec d-flex justify-content-center align-items-center shadow"
        style={{
          height: "100vh",
          background: "url(/user_assets/img/background.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div
          className="doctor-admin-login-sec"
          style={{
            background: "url(/user_assets/img/doctor-login/doctor.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "no-repeat",
            height: "70vh",
            width: "22vw",
          }}
        >
          <div
            className="doctor-admin-login-title"
            style={{
              height: "48%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Image
              src="/user_assets/img/logo-dark.png"
              height="100px"
              width="100px"
              alt="Rims Logo"
            />
            <p
              className="text-center"
              style={{
                fontSize: "50px",
                fontWeight: "600",
                textShadow: "3px 5px 2px #022856c7",
                color: "#fff",
              }}
            >
              Doctor Login
            </p>
          </div>
          <div
            className="doctor-admin-login"
            style={{
              height: "52%",
              backgroundColor: "#71a5d1a3",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div className="user-title my-2">
              <p
                className="text-center"
                style={{ letterSpacing: "5px", fontSize: "20px" }}
              >
                USER LOGIN
              </p>
            </div>
            <form style={{ width: "350px", margin: "auto" }}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <a className="fs-6" style={{ color: "#3f51b5" }}>
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
              <div className="login-btn text-center my-3">
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "10px 40px",
                    color: "#022856c7",
                    fontSize: "18px",
                    fontWeight: "600",
                    borderColor: "#022856c7",
                    boxShadow: "4px 4px 10px 0px #022856c7",
                  }}
                >
                  LOGIN
                </button>
              </div>
            </form>
            <div className="create-account-link text-center my-3">
              <p style={{ letterSpacing: "5px", fontSize: "20px" }}>
                CREATE ACCOUNT
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

Index.getLayout = (Index) => <AuthLayout>{Index}</AuthLayout>;
