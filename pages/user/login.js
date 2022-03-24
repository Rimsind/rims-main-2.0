import Image from "next/image";
import AuthLayout from "components/layout/AuthLayout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { setCookie } from "nookies";
import Router from "next/router";
import { useAuth } from "context";
import { toast, Slide } from "react-toastify";
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
          transition: Slide,
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
            <div className="col-lg-4 col-xl-4 col-xxl-4"></div>
            <div className="col-12 col-lg-4 col-xl-4 col-xxl-4">
              <div
                className="patient-login-content text-center d-flex justify-content-center align-items-center pt-5 pb-5"
                style={{
                  backgroundImage: "url(/assets/images/Loginerer.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0px 5px 60px 2px #000",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Image
                    src="/assets/images/logo-white.png"
                    width="150px"
                    height="100px"
                    alt="Rims Logo"
                  />
                  <p className="fs-5 text-light my-4">Patient / User</p>
                  <div
                    className="patient-login-form"
                    style={{ width: "340px" }}
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        {...register("email")}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        {...register("password")}
                      />
                    </div>
                    <button
                      className="btn btn-outline-light text-dark rounded-pill px-5"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="forgot-password-sec my-4">
                      <p className="fs-6">Forgot Your Password</p>
                    </div>
                    <div className="welcome-heading mt-5 mb-4">
                      <p className="fs-1 text-capitalize text-light">Welcome</p>
                    </div>
                    <div className="dont-account">
                      <p>Don&apos;t You Have Account?</p>
                    </div>
                    <Link href="/user/signup">
                      <a className="btn btn-dark rounded-pill px-5">Sign up</a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-xxl-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

Login.getLayout = (Login) => <AuthLayout>{Login}</AuthLayout>;
