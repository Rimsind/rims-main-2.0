import Image from "next/image";
import AuthLayout from "components/layout/AuthLayout";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast, Slide } from "react-toastify";
import { apiUrl } from "config/api";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const [roleId, setRoleId] = useState(null);
  const [roleName, setRoleName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitUserType = (data, e) => {
    e.preventDefault();
    if (!data.id) {
      alert("Please Select a Option");
      return;
    }
    setRoleId(parseInt(data.id));
    if (parseInt(data.id) === 1) {
      setRoleName("patients");
    } else if (parseInt(data.id) === 3) {
      setRoleName("doctors");
    } else if (parseInt(data.id) === 4) {
      setRoleName("polyclinics");
    } else if (parseInt(data.id) === 5) {
      setRoleName("nursing-homes");
    } else if (parseInt(data.id) === 6) {
      setRoleName("hospitals");
    } else if (parseInt(data.id) === 9) {
      setRoleName("diagnostic-centers");
    }
    setCount(1);
  };
  const submitInfo = (data, e) => {
    e.preventDefault();
    if (roleId === 1 || roleId === 3) {
      if (!data.firstName && !data.lastName && !data?.phone) {
        alert("Please Enter all the Fields");
        return;
      }
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPhone(data.phone);
      setEmail(data.email);
      setCount(2);
      return;
    } else {
      if (!data.clinicName && !data?.phone && !data.email) {
        alert("Please Enter all the Fields");
        return;
      }
      setClinicName(data.clinicName);
      setPhone(data.phone);
      setEmail(data.email);
      setCount(2);
      return;
    }
  };
  console.log(clinicName, email, phone);

  const registerUser = async (payload) => {
    const res = await axios.post(`${apiUrl}/auth/local/register`, payload);
    const result = await res.data;
    return result;
  };

  const createUserProfile = async (token) => {
    const profilePayload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
    };

    const res = await axios.post(`${apiUrl}/${roleName}`, profilePayload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = res.data;
    return result;
  };
  const createDoctorProfile = async (token) => {
    const profilePayload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };

    const res = await axios.post(`${apiUrl}/${roleName}`, profilePayload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = res.data;
    return result;
  };
  const createClinicProfile = async (token) => {
    const profilePayload = {
      name: clinicName,
      email: email,
      phone: phone,
    };

    const res = await axios.post(`${apiUrl}/${roleName}`, profilePayload, {
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
        username: data.userName,
        email: email,
        password: data.password,
      };

      const result = await registerUser(payload);

      if (result.jwt && roleId == 1) {
        const profile = await createUserProfile(result.jwt);

        await axios.put(
          `${apiUrl}/users/${result.user.id}`,
          {
            profileId: profile.id,
            role: `${roleId}`,
          },
          {
            headers: {
              Authorization: `Bearer ${result.jwt}`,
            },
          }
        );
      }
      if (result.jwt && roleId == 3) {
        const profile = await createDoctorProfile(result.jwt);

        await axios.put(
          `${apiUrl}/users/${result.user.id}`,
          {
            profileId: profile.id,
            role: `${roleId}`,
          },
          {
            headers: {
              Authorization: `Bearer ${result.jwt}`,
            },
          }
        );
      }
      if (
        (result.jwt && roleId == 4) ||
        roleId == 4 ||
        roleId == 5 ||
        roleId == 6 ||
        roleId == 9
      ) {
        const profile = await createClinicProfile(result.jwt);

        await axios.put(
          `${apiUrl}/users/${result.user.id}`,
          {
            profileId: profile.id,
            role: `${roleId}`,
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
      router.push("/login");
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
            <div className="col-12 col-4 col-lg-12 col-xl-4 col-xxl-4">
              <div
                className="patient-login-content text-center d-flex justify-content-center align-items-center py-3"
                style={{
                  backgroundImage: "url(/assets/images/Loginerer.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0px 5px 60px 2px #000",
                }}
              >
                <div className="form-first-step">
                  <div
                    className="back-home-btn text-center"
                    style={{
                      borderRadius: "100px 30px 30px 100px",
                    }}
                  >
                    <div className="back-to-home-button mb-4">
                      <Link href="/">
                        <a className="fs-6 text-warning">
                          <i className="fas fa-arrow-circle-left me-2 fs-6"></i>
                          Back To Home
                        </a>
                      </Link>
                    </div>
                  </div>
                  <Image
                    src="/assets/images/logo-white.png"
                    width="120px"
                    height="100px"
                    alt="Rims Logo"
                  />
                  {count === 0 && (
                    <>
                      <form onSubmit={handleSubmit(submitUserType)}>
                        <div className="row align-items-center my-2">
                          <div className="col-2 text-center">
                            <div
                              className="step-inner-items"
                              style={{ marginTop: "5px" }}
                            >
                              <div className="step-inner-pointer">
                                <h6
                                  className="fs-6"
                                  style={{
                                    border: "2px solid",
                                    borderRadius: "100%",
                                    padding: "4px",
                                    backgroundColor: "#0c5199",
                                    color: "white",
                                  }}
                                >
                                  1
                                </h6>
                              </div>
                            </div>
                          </div>

                          <div className="col-3">
                            <div
                              className="empty"
                              style={{ border: "2px solid white" }}
                            ></div>
                          </div>

                          <div className="col-2 text-center">
                            <div
                              className="step-inner-items"
                              style={{ marginTop: "5px" }}
                            >
                              <h6
                                className="fs-6"
                                style={{
                                  border: "2px solid #0c5199",
                                  borderRadius: "100%",
                                  padding: "4px",
                                  backgroundColor: "white",
                                  color: "#0c5199",
                                }}
                              >
                                2
                              </h6>
                            </div>
                          </div>
                          <div className="col-3">
                            <div
                              className="empty"
                              style={{ border: "2px solid white" }}
                            ></div>
                          </div>
                          <div className="col-2 text-center">
                            <div
                              className="step-inner-items"
                              style={{ marginTop: "5px" }}
                            >
                              <h6
                                className="fs-6"
                                style={{
                                  border: "2px solid #0c5199",
                                  borderRadius: "100%",
                                  padding: "4px",
                                  backgroundColor: "white",
                                  color: "#0c5199",
                                }}
                              >
                                3
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body" style={{ width: "300px" }}>
                            <h6 className="fs-6 fw-bold">
                              Select Account Type
                            </h6>
                            <hr />
                            <div className="select-radio-btn mb-2 text-start">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios1"
                                  value="1"
                                  {...register("id")}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios1"
                                >
                                  User / Patient
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios2"
                                  value="3"
                                  {...register("id")}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios2"
                                >
                                  Doctor
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios3"
                                  value="4"
                                  {...register("id")}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios3"
                                >
                                  Polyclinic
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios4"
                                  value="5"
                                  {...register("id")}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios4"
                                >
                                  Nursing Home
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios5"
                                  value="6"
                                  {...register("id")}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios5"
                                >
                                  Hospital
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios6"
                                  value="9"
                                  {...register("id")}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios6"
                                >
                                  Diagnostic Center
                                </label>
                              </div>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-12 text-end my-3">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Next
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                  {count === 1 && (
                    <>
                      <form onSubmit={handleSubmit(submitInfo)}>
                        <div className="row align-items-center my-2">
                          <div className="col-2 text-center">
                            <div
                              className="step-inner-items"
                              style={{ marginTop: "5px" }}
                            >
                              <div className="step-inner-pointer">
                                <h6
                                  className="fs-6"
                                  style={{
                                    border: "2px solid",
                                    borderRadius: "100%",
                                    padding: "4px",
                                    backgroundColor: "#0c5199",
                                    color: "white",
                                  }}
                                >
                                  1
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-3">
                            <div
                              className="empty"
                              style={{ border: "2px solid #0c5199" }}
                            ></div>
                          </div>

                          <div className="col-2 text-center">
                            <div
                              className="step-inner-items"
                              style={{ marginTop: "5px" }}
                            >
                              <h6
                                className="fs-6"
                                style={{
                                  border: "2px solid",
                                  borderRadius: "100%",
                                  padding: "4px",
                                  backgroundColor: "#0c5199",
                                  color: "white",
                                }}
                              >
                                2
                              </h6>
                            </div>
                          </div>
                          <div className="col-3">
                            <div
                              className="empty"
                              style={{ border: "2px solid white" }}
                            ></div>
                          </div>
                          <div className="col-2 text-center">
                            <div
                              className="step-inner-items"
                              style={{ marginTop: "5px" }}
                            >
                              <h6
                                className="fs-6"
                                style={{
                                  border: "2px solid #0c5199",
                                  borderRadius: "100%",
                                  padding: "4px",
                                  backgroundColor: "white",
                                  color: "#0c5199",
                                }}
                              >
                                3
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-body" style={{ width: "300px" }}>
                            <h6 className="fs-6 fw-bold">
                              Personal Information
                            </h6>
                            <hr />
                            {roleId === 1 || roleId === 3 ? (
                              <>
                                <div className="text-start mb-2">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter First Name"
                                    {...register("firstName")}
                                  />
                                </div>
                                <div className="text-start mb-2">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Last Name"
                                    {...register("lastName")}
                                  />
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="text-start mb-2">
                                  <label>Institute Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Last Name"
                                    {...register("clinicName")}
                                  />
                                </div>
                              </>
                            )}

                            <div className="text-start mb-2">
                              <label>Email ID</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email ID"
                                {...register("email")}
                              />
                            </div>
                            <div className="text-start mb-2">
                              <label>Phone No.</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Phone No."
                                {...register("phone")}
                              />
                            </div>
                            <div className="row align-items-center">
                              <div className="col-12 text-end my-3">
                                <button
                                  className="btn btn-primary me-2"
                                  onClick={() => setCount(0)}
                                >
                                  Previous
                                </button>
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Next
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                  {count === 2 && (
                    <>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row align-items-center my-2">
                          <div className="col-2 text-center">
                            <div
                              className="step-inner-items"
                              style={{ marginTop: "5px" }}
                            >
                              <div className="step-inner-pointer">
                                <h6
                                  className="fs-6"
                                  style={{
                                    border: "2px solid",
                                    borderRadius: "100%",
                                    padding: "4px",
                                    backgroundColor: "#0c5199",
                                    color: "white",
                                  }}
                                >
                                  1
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-3">
                            <div
                              className="empty"
                              style={{ border: "2px solid #0c5199" }}
                            ></div>
                          </div>

                          <div className="col-2 text-center">
                            <div
                              className="step-inner-items"
                              style={{ marginTop: "5px" }}
                            >
                              <h6
                                className="fs-6"
                                style={{
                                  border: "2px solid",
                                  borderRadius: "100%",
                                  padding: "4px",
                                  backgroundColor: "#0c5199",
                                  color: "white",
                                }}
                              >
                                2
                              </h6>
                            </div>
                          </div>
                          <div className="col-3">
                            <div
                              className="empty"
                              style={{ border: "2px solid #0c5199" }}
                            ></div>
                          </div>
                          <div className="col-2 text-center">
                            <div
                              className="step-inner-items"
                              style={{ marginTop: "5px" }}
                            >
                              <h6
                                className="fs-6"
                                style={{
                                  border: "2px solid",
                                  borderRadius: "100%",
                                  padding: "4px",
                                  backgroundColor: "#0c5199",
                                  color: "white",
                                }}
                              >
                                3
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body" style={{ width: "300px" }}>
                            <h6 className="fs-6 fw-bold">Set Password</h6>
                            <hr />
                            <div className="text-start mb-2">
                              <label>User Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="use email / password"
                                required
                                {...register("userName")}
                              />
                            </div>
                            <div className="text-start mb-2">
                              <label>Enter Password</label>
                              <input
                                type="password"
                                className="form-control"
                                required
                                {...register("password")}
                              />
                            </div>
                            <div className="text-start mb-2">
                              <label>Confirm Password</label>
                              <input
                                type="password"
                                className="form-control"
                                required
                                {...register("confirmPassword")}
                              />
                            </div>
                            <div className="row align-items-center">
                              <div className="col-12 text-end my-3">
                                <button
                                  className="btn btn-primary me-2"
                                  onClick={() => setCount(1)}
                                >
                                  Previous
                                </button>
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Register
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                  {/* <div className="my-3">
                    <div className="row align-items-center">
                      <div className="col-5">
                        <div
                          className="empty-div"
                          style={{ borderBottom: "2px dashed black" }}
                        ></div>
                      </div>
                      <div className="col-2">
                        <div
                          className="content-middle-item"
                          style={{ marginTop: "9px" }}
                        >
                          <h6>OR</h6>
                        </div>
                      </div>
                      <div className="col-5">
                        <div
                          className="empty-div"
                          style={{ borderBottom: "2px dashed black" }}
                        ></div>
                      </div>
                    </div>
                  </div> */}

                  <div className="dont-account">
                    <p className="text-light">
                      Already Have An Account?
                      <Link href="/login">
                        <a className="ms-1 me-1">Login</a>
                      </Link>
                      Here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-lg-4 col-xl-4 col-xxl-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

Signup.getLayout = (Signup) => <AuthLayout>{Signup}</AuthLayout>;
