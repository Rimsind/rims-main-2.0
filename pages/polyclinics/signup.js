import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";

import Router from "next/router";
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

    if (!data.name || !data.email || !data.password) {
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
      // console.log(result);
      if (result.jwt) {
        // create profile

        const profile = await createUserProfile(data, result.jwt);
        console.log(profile);

        await axios.put(
          `https://manage.riimstechnology.com/users/${result.user.id}`,
          {
            profileId: profile.id,
            role: 4,
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
      Router.push("/polyclinics/login");
    } catch (err) {
      console.log(err.message);
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
                <img src="./imag/logo-dark.png" width="70px" />
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
                          <Link href="/polyclinics/login">
                            <a href="#" className="text-dark fw-bold">
                              Login
                            </a>
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
      </div>
    </>
  );
};

export default Signup;
