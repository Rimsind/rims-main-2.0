import AuthLayout from "components/layout/AuthLayout";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";

import router from "next/router";
const Signup = () => {
  //react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const registerUser = async (payload) => {
    const res = await axios.post(
      "https://manage.riimstechnology.com/auth/local/register",
      payload
    );
    const result = await res.data;
    return result;
  };

  // creating user profile after user is created
  const createUserProfile = async (data, token) => {
    const profilePayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };

    //post function for the user profile
    const res = await axios.post(
      "https://manage.riimstechnology.com/doctors",
      profilePayload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = res.data;
    return result;
  };

  //onsubmit function defined
  const onSubmit = async (data, e) => {
    e.preventDefault();

    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      alert("please fill all data");
      return;
    }

    try {
      const payload = {
        username: data.email,
        email: data.email,
        password: data.password,
      };

      const result = await registerUser(payload);

      if (result.jwt) {
        // create profile

        const profile = await createUserProfile(data, result.jwt);

        await axios.put(
          `https://manage.riimstechnology.com/users/${result.user.id}`,
          {
            profileId: profile.id,
            role: 3,
          },
          {
            headers: {
              Authorization: `Bearer ${result.jwt}`,
            },
          }
        );
      }
      reset();
      alert("Registration Succesful");
      router.push("/doctors/login");
    } catch (err) {
      console.log(err.message);
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
                  Get started with a free account <br />
                  consult with doctor, appointment and many more!
                </p>
              </div>
              <div className="login-btn-option mt-4 d-flex align-items-center justify-content-between">
                <button type="button" className="btn btn-primary px-5 disabled">
                  <i className="fab fa-facebook-f me-2"></i> Signup with
                  Facebook
                </button>
                <button type="button" className="btn btn-danger px-5 disabled">
                  <i className="fab fa-google me-2"></i> Signup with Google
                </button>
              </div>
              <div className="text-center mt-4">
                <p className="fs-6 fw-lighter fst-italic">-OR-</p>
              </div>
              <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Enter first name"
                          {...register("firstName")}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Enter last name"
                          {...register("lastName")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email id"
                      {...register("email")}
                    />
                    <div id="emailHelp" className="form-text">
                      We&apos;ll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      {...register("password")}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <div className="row">
                      <div className="col-12 text-center">
                        <p>
                          Already a member?
                          <Link href="/doctors/login">
                            <a className="text-dark fw-bold">Login </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-custom-login">
                        Signup
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-6 bg-background"></div>
          </div>
        </div>
      </div> */}
      <section className="doctor-signup-section">
        <div className="container">
          <div class="card-body">
            <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
              <li class="nav-item">
                <Link href="/doctors/login">
                  <a class="nav-link">Login</a>
                </Link>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link active"
                  href="#bottom-justified-tab2"
                  data-bs-toogle="tab"
                >
                  Register
                </a>
              </li>
            </ul>
            <div class="tab-content">
              {/* <div class="tab-pane show active" id="bottom-justified-tab1">
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
              <div class="tab-pane show active" id="bottom-justified-tab2">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <Image
                      src="/assets/images/doctor-login.png"
                      height="500px"
                      width="500px"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="doctor-signup-form p-5 border border-1 rounded ">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-6">
                            <div className="mb-3">
                              <label htmlFor="" className="form-label">
                                First Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id=""
                                placeholder="Enter first name"
                                {...register("firstName")}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="mb-3">
                              <label htmlFor="" className="form-label">
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id=""
                                placeholder="Enter last name"
                                {...register("lastName")}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email id"
                            {...register("email")}
                          />
                          <div id="emailHelp" className="form-text">
                            We&apos;ll never share your email with anyone else.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            {...register("password")}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Confirm Password</label>
                          <input
                            type="password"
                            className="form-control"
                            // {...register("password")}
                          />
                        </div>

                        <div className="row mt-5">
                          <div className="col-12 text-center">
                            <button
                              type="submit"
                              className="btn btn-custom-login"
                            >
                              Signup
                            </button>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

Signup.getLayout = (Signup) => <AuthLayout>{Signup}</AuthLayout>;
