import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { setCookie } from "nookies";
import Router from "next/router";
import { useAuth } from "context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const { dispatchAuth } = useAuth();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      alert("please fill all data");
      return;
    }
    dispatchAuth({ type: "AUTH_LOADING" });

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

      if (result.jwt && result.user.role.id === 1) {
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
        });
        Router.push("/");
        // if (redirect) {
        //   Router.push(`/${redirect}`);
        // } else {
        //   Router.push("/");
        // }
      }
    } catch (error) {
      toast.error("Email Or Password does not exist", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatchAuth({
        type: "LOGIN_FAILED",
        payload: error.message
          ? error.message
          : "Something went wrong, try agin",
      });
    }
  };
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
                      <Image
                        height="400"
                        width="400"
                        src="/assets/images/login.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>Patient Login</h3>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            className="form-control floating"
                            {...register("email")}
                          />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                            {...register("password")}
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
                          Don&apos;t have an account?
                          <Link href="/user/signup">
                            <a>Register</a>
                          </Link>
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
      <ToastContainer />
    </>
  );
};

export default Login;
