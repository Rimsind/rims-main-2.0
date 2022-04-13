import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import Router from "next/router";
import Image from "next/image";
import { toast, Slide } from "react-toastify";
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
      name: data.name,

      email: data.email,
    };

    //post function for the user profile
    const res = await axios.post(
      "https://manage.riimstechnology.com/nursing-homes",
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

    if (data.password != data.confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
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
            role: 7,
          },
          {
            headers: {
              Authorization: `Bearer ${result.jwt}`,
            },
          }
        );
      }
      reset();
      toast.success("Registration Succesful", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      Router.push("/nursing-homes/login");
    } catch (err) {
      console.log(err.message);
      toast.error("Registration Failed", {
        position: "top-center",
        autoClose: 5000,
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
      <section className="nursing-signup-section">
        <div className="container">
          <div className="card-body">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <Link href="/nursing-homes/login">
                  <a className="nav-link">Login</a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#bottom-justified-tab2"
                  data-bs-toogle="tab"
                >
                  Register
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane show active" id="bottom-justified-tab2">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <Image
                      src="/assets/images/doctor-login.png"
                      height="500px"
                      width="500px"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="nursing-signup-form p-5 border border-1 rounded">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-3">
                              <label htmlForm="" className="form-label">
                                Institution Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id=""
                                placeholder="Enter Institution name"
                                {...register("name")}
                                required
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
                            required
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
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            Confirmed Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            required
                            {...register("confirmPassword")}
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
