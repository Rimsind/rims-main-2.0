import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { setCookie } from "nookies";
import router from "next/router";
import { useAuth } from "context";
import { toast, Slide } from "react-toastify";
import { apiUrl } from "config/api";
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
      const res = await axios.post(`${apiUrl}/auth/local`, payload);
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
          : "Something went wrong, try again",
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
      <section className="doctor-login-section">
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
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="doctor-login-form border border-1 rounded ">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
