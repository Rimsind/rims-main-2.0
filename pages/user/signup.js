import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
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
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
    };

    //post function for the user profile
    const res = await axios.post(
      "https://manage.riimstechnology.com/patients",
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
          },
          {
            headers: {
              Authorization: `Bearer ${result.jwt}`,
            },
          }
        );
      }
      toast.success("Registration Succesful", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      reset();
      router.push("/user/login");
    } catch (err) {
      toast.error("Registration Failed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      {" "}
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
                        width="450"
                        src="/assets/images/login.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Patient <span>Register</span>
                        </h3>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            required
                            {...register("firstName")}
                          />
                          <label className="focus-label">First Name</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            required
                            {...register("lastName")}
                          />
                          <label className="focus-label">Last Name</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            className="form-control floating"
                            required
                            {...register("email")}
                          />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                            required
                            {...register("password")}
                          />
                          <label className="focus-label">Create Password</label>
                        </div>
                        {/* <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                          />
                          <label className="focus-label">
                            Confirm Password
                          </label>
                        </div> */}
                        <div className="text-end">
                          <Link href="/user/login">
                            <a className="forgot-link">
                              Already have an account ?
                            </a>
                          </Link>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Signup
                        </button>
                        <div className="login-or">
                          <span className="or-line"></span>
                          <span className="span-or">or</span>
                        </div>
                        <div className="row form-row social-login">
                          <div className="col-6">
                            <a href="#" className="btn btn-patient w-100">
                              Polyclinic Register
                            </a>
                          </div>
                          <div className="col-6">
                            <a href="#" className="btn btn-doctor w-100">
                              Doctor Register
                            </a>
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
      </main>
      <ToastContainer />
    </>
  );
};

export default SignUp;
