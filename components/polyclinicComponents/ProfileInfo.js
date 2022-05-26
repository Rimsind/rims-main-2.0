import { useAuth } from "context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "config/api";
import { toast, Slide } from "react-toastify";
import { useState } from "react";
const ProfileInfo = ({ data }) => {
  const { auth } = useAuth();
  if (auth?.user?.role?.id === 4) {
    var role = "polyclinics";
  }
  if (auth?.user?.role?.id === 5) {
    var role = "nursing-homes";
  }
  if (auth?.user?.role?.id === 6) {
    var role = "hospitals";
  }
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();
  const submit_polydetails = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        overview: data.overview,
        name: data.name,
        contact_person_name: data.contact_person_name,
        phone: data.phone,
        registration_no: data.registration_no,

        workingHours: {
          start_time: data.start_time,
          end_time: data?.end_time,
        },
      };

      const res = await axios.put(
        `${apiUrl}/${role}/${auth.user?.profileId}`,
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
      setLoading(false);
      return result;
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong Try Again.", {
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
  return (
    <>
      {" "}
      <div className="card">
        <div className="card-header">
          <p className="fs-5 fw-bold text-center">Profile Details</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(submit_polydetails)}>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Clinic Name</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Clinic Name"
                        {...register("name")}
                        defaultValue={!!data ? data.name : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Conatct Person Name</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        {...register("contact_person_name")}
                        defaultValue={!!data ? data?.contact_person_name : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row  mb-3">
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Reg No.</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Registration No."
                        {...register("registration_no")}
                        defaultValue={!!data ? data.registration_no : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="nursing-form-input">
                      <label>Email</label>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="nursing-form-input">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Id"
                        disabled
                        defaultValue={!!data ? data.email : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="nursing-form-input">
                      <label>Phone</label>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="nursing-form-input">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="eg: 987456321"
                        {...register("phone")}
                        defaultValue={!!data ? data.phone : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="form-group">
                  <label className="mb-2" htmlFor="floatingTextarea">
                    Overview
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Overview"
                    id="floatingTextarea"
                    rows="3"
                    defaultValue={!!data ? data.overview : ""}
                    {...register("overview")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <p className="workings-hours-title text-center my-5 fs-5 fw-bold border-bottom border-1 pb-3">
                Working Hours
              </p>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label>Start Time -</label>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={
                        !!data && data.workingHours
                          ? data.workingHours.start_time
                          : ""
                      }
                      {...register("start_time")}
                    >
                      <option
                        disabled
                        defaultValue={
                          !!data && data.workingHours
                            ? data.workingHours.start_time
                            : ""
                        }
                      >
                        {!!data && data.workingHours
                          ? data.workingHours.start_time
                          : ""}
                      </option>
                      <option value="Open 24 Hrs">Open 24 Hrs</option>
                      <option value="00:00">00:00</option>
                      <option value="00:30">00:30</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 text-center">
                    <label>End Time -</label>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={
                        !!data && data.workingHours
                          ? data.workingHours.end_time
                          : ""
                      }
                      {...register("end_time")}
                    >
                      <option
                        defaultValue={
                          !!data && data.workingHours
                            ? data.workingHours.end_time
                            : ""
                        }
                      >
                        {!!data && data.workingHours
                          ? data.workingHours.end_time
                          : ""}
                      </option>
                      <option value="Open 24 Hrs">Open 24 Hrs</option>
                      <option value="00:00">00:00</option>
                      <option value="00:30">00:30</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="save-btn-poly mt-5 text-end">
              <input
                type="submit"
                className="btn btn-primary submit-btn"
                value={loading ? "Saving..." : "Save Changes"}
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
