import Image from "next/image";
import AuthLayout from "components/layout/AuthLayout";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast, Slide } from "react-toastify";
import { apiUrl } from "config/api";

const Signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const registerUser = async (payload) => {
    const res = await axios.post(`${apiUrl}/auth/local/register`, payload);
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
    const res = await axios.post(`${apiUrl}/patients`, profilePayload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
          `${apiUrl}/users/${result.user.id}`,
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
        transition: Slide,
      });
      reset();
      router.push("/user/login");
    } catch (err) {
      if ((err.response.status = 400)) {
        toast.warn("User Already Exists", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          transition: Slide,
        });
      }
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
            <div className="col-4 col-lg-4 col-xl-4 col-xxl-4"></div>
            <div className="col-12 col-4 col-lg-4 col-xl-4 col-xxl-4">
              <div
                className="patient-login-content text-center d-flex justify-content-center align-items-center pt-5 pb-5"
                style={{
                  backgroundImage: "url(/assets/images/Loginerer.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0px 5px 60px 2px #000",
                }}
              >
                {/* <form onSubmit={handleSubmit(onSubmit)}>
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
                        placeholder="First Name"
                        required
                        {...register("firstName")}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        required
                        {...register("lastName")}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        {...register("email")}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Create Password"
                        required
                        {...register("password")}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        required
                        {...register("confirmPassword")}
                      />
                    </div>
                    <button
                      className="btn btn-outline-light text-dark rounded-pill px-5"
                      type="submit"
                    >
                      Sign up
                    </button>
                    <div className="dont-account my-4">
                      <p>Already Have An Account?</p>
                    </div>
                    <Link href="/user/login">
                      <a className="btn btn-dark rounded-pill px-5">Login</a>
                    </Link>
                  </div>
                </form> */}
                <UserType />
                {/* <BasicDetails />
                <PasswordDetails /> */}
              </div>
            </div>
            <div className="col-4 col-lg-4 col-xl-4 col-xxl-4"></div>
          </div>
        </div>
      </div>
      {/* {AddLibrary("/user-assets/js/step-form.js")}; */}
    </>
  );
};

export default Signup;

Signup.getLayout = (Signup) => <AuthLayout>{Signup}</AuthLayout>;

export const UserType = () => {
  return (
    <>
      <div className="form-first-step">
        <div className="select-radio-btn mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" for="exampleRadios1">
              User / Patient
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" for="exampleRadios2">
              Doctor
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="option3"
            />
            <label className="form-check-label" for="exampleRadios3">
              Polyclinic
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios4"
              value="option4"
            />
            <label className="form-check-label" for="exampleRadios4">
              Nursing Home
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios5"
              value="option5"
            />
            <label className="form-check-label" for="exampleRadios5">
              Hospital
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios6"
              value="option6"
            />
            <label className="form-check-label" for="exampleRadios6">
              Diagnostic Center
            </label>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 text-end my-3">
            <button className="btn btn-primary">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const BasicDetails = () => {
  return (
    <>
      <div className="form-second-step">
        <div className="row align-items-center mb-2">
          <div className="col-4">
            <label>First Name</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="row align-items-center mb-2">
          <div className="col-4">
            <label>Last Name</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="row align-items-center mb-2">
          <div className="col-4">
            <label>Email ID</label>
          </div>
          <div className="col-8">
            <input
              type="email"
              className="form-control"
              placeholder="Email ID"
            />
          </div>
        </div>
        <div className="row align-items-center mb-2">
          <div className="col-4">
            <label>Phone No.</label>
          </div>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              placeholder="Phone No."
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 text-end my-3">
            <button className="btn btn-primary me-2">Previous</button>
            <button className="btn btn-primary">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const PasswordDetails = () => {
  return (
    <>
      <div className="form-third-step">
        <div className="row align-items-center mb-2">
          <div className="col-5">
            <label>Create Password</label>
          </div>
          <div className="col-7">
            <input type="password" className="form-control" />
          </div>
        </div>
        <div className="row align-items-center mb-2">
          <div className="col-5">
            <label>Confirm Password</label>
          </div>
          <div className="col-7">
            <input type="password" className="form-control" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 text-end my-3">
            <button className="btn btn-primary me-2">Previous</button>
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </>
  );
};
