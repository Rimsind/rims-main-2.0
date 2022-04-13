import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileInfo = ({ data }) => {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const updateProfile = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        title: data.title,
        first_name: data.first_name,
        last_name: data.last_name,
        dob: data.dob,
        age: data.age,
        gender: data.gender,
        marital_status: data.marital_status,
        phone: data.phone,
        blood_group: {
          id: data.blood_group,
        },
      };

      const res = await axios.put(
        `${apiUrl}/patients/${auth.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;

      toast.success("Profile Updated Succesfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return result, setLoading(false);
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      setLoading(false);
    }
  };

  const titleList = ["Mr", "Mrs", "Ms", "Miss"];

  return (
    <>
      <form
        className=" needs-validation"
        onSubmit={handleSubmit(updateProfile)}
      >
        <div className="card">
          <div className="card-body">
            <div className="row form-row">
              <div className="col-12 col-md-2">
                <div className="form-group">
                  <label>Title</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    {...register("title")}
                  >
                    <option defaultValue={!!data?.title && data.title}>
                      {!!data?.title && data.title}
                    </option>
                    {titleList.map((items, index) => (
                      <option value={items} key={index}>
                        {items}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    {...register("first_name")}
                    defaultValue={!!data?.first_name ? data.first_name : ""}
                  />
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    {...register("last_name")}
                    defaultValue={!!data?.last_name ? data.last_name : ""}
                  />
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <div className="cal-icon">
                    <input
                      type="date"
                      className="form-control"
                      required
                      {...register("dob")}
                      defaultValue={!!data?.dob ? data.dob : ""}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    {...register("age")}
                    defaultValue={!!data?.age ? data.age : ""}
                  />
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    className="form-select form-control"
                    {...register("gender")}
                    required
                  >
                    <option
                      name="gender"
                      defaultValue={!!data?.gender && data.gender}
                    >
                      {!!data?.gender && data.gender}
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="form-group">
                  <label>Martial Status</label>
                  <select
                    className="form-select form-control"
                    {...register("marital_status")}
                    required
                  >
                    <option
                      name="marital_status"
                      defaultChecked={
                        !!data?.marital_status && data.marital_status
                      }
                    >
                      {!!data?.marital_status && data.marital_status}
                    </option>
                    <option name="marital_status" value="Single">
                      Single
                    </option>
                    <option name="marital_status" value="Married">
                      Married
                    </option>
                    <option name="marital_status" value="Separated">
                      Separated
                    </option>
                    <option name="marital_status" value="Divorced">
                      Divorced
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Blood Group</label>
                  <select
                    className="form-select form-control"
                    {...register("blood_group")}
                    required
                  >
                    <option
                      name="blood_group"
                      value={!!data?.blood_group?.id && data.blood_group?.id}
                    >
                      {!!data?.blood_group && !!data.blood_group?.name
                        ? data.blood_group?.name
                        : "Select"}
                    </option>
                    <option name="blood_group" value="2">
                      A+
                    </option>
                    <option name="blood_group" value="3">
                      A-
                    </option>
                    <option name="blood_group" value="4">
                      B+
                    </option>
                    <option name="blood_group" value="5">
                      B-
                    </option>
                    <option name="blood_group" value="6">
                      AB+
                    </option>
                    <option name="blood_group" value="7">
                      AB-
                    </option>
                    <option name="blood_group" value="9">
                      O+
                    </option>
                    <option name="blood_group" value="8">
                      O-
                    </option>
                    <option name="blood_group" value="8">
                      NA
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    readOnly
                    defaultValue={!!data?.email ? data.email : ""}
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    placeholder="+1 202-555-0125"
                    className="form-control"
                    required
                    {...register("phone")}
                    defaultValue={!!data?.phone ? data.phone : ""}
                  />
                </div>
              </div>
              <div className="submit-section text-end">
                <input
                  type="submit"
                  className="btn btn-primary submit-btn"
                  value={loading ? "Saving..." : "Save Changes"}
                  disabled={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default ProfileInfo;
