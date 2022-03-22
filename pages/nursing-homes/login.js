import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { setCookie } from "nookies";
import router from "next/router";
import { useAuth } from "context/index";
import Image from "next/image";
import AuthLayout from "components/layout/AuthLayout";

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

      if (result.jwt && result.user.role.id === 7) {
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
        router.push("/nursing-homes/dashboard");
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
            background: "url(/user_assets/img/nursing-login/nursing.jpg)",
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
              Nursing Home Login
            </p>
          </div>
          <div
            className="doctor-admin-login"
            style={{
              height: "52%",
              backgroundColor: "#dde2e7a3",
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
            <form
              style={{ width: "350px", margin: "auto" }}
              onSubmit={handleSubmit(onSubmit)}
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
                  placeholder="Password"
                  {...register("password")}
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

export default Login;

Login.getLayout = (Login) => <AuthLayout>{Login}</AuthLayout>;
