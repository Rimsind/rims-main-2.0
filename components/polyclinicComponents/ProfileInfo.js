import { useAuth } from "context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "config/api";
import { toast, Slide } from "react-toastify";
import { useState } from "react";
import { inputTime } from "pages/api/inputTime";
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
  if (auth?.user?.role?.id === 9) {
    var role = "diagnostic-centers";
  }
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();
  const submitDetails = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        overview: data.overview,
        name: data.name,
        contact_person_name: data.contact_person_name,
        phone: data.phone,
        registration_no: data.registration_no,
        alternate_phone: data.alternate_phone,
        telephone: data.telephone,
        workingHours: {
          start_time: data.start_time,
          end_time: data.end_time,
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
          <form onSubmit={handleSubmit(submitDetails)}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Clinic Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Clinic Name"
                  defaultValue={!!data?.name ? data.name : ""}
                  {...register("name")}
                />
              </div>
              <div className="col-md-6">
                <label>Conatct Person Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("contact_person_name")}
                  defaultValue={
                    !!data?.contact_person_name ? data.contact_person_name : ""
                  }
                />
              </div>
            </div>
            <div className="row  mb-3">
              <div className="col-md-4">
                <label>Reg No.</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Registration No."
                  defaultValue={
                    !!data?.registration_no ? data.registration_no : ""
                  }
                  {...register("registration_no")}
                />
              </div>
              <div className="col-md-4">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Id"
                  disabled
                  defaultValue={!!data && !!data.email ? data.email : ""}
                />
              </div>
              <div className="col-md-4">
                <label>Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="eg: 987456321"
                  {...register("phone")}
                  defaultValue={!!data?.phone ? data.phone : ""}
                />
              </div>
            </div>{" "}
            <div className="row">
              <div className="col-md-4">
                <label>Alternate Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="eg: 987456321"
                  {...register("alternate_phone")}
                  defaultValue={
                    !!data?.alternate_phone ? data.alternate_phone : ""
                  }
                />
              </div>
              <div className="col-md-4">
                <label>Telephone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="eg: 987456321"
                  {...register("telephone")}
                  defaultValue={!!data?.telephone ? data.telephone : ""}
                />
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <label>Start Time</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={
                        !!data?.workingHours ? data.workingHours.start_time : ""
                      }
                      {...register("start_time")}
                    >
                      <option
                        disabled
                        defaultValue={
                          !!data?.workingHours
                            ? data.workingHours.start_time
                            : ""
                        }
                      >
                        {!!data?.workingHours
                          ? data.workingHours.start_time
                          : ""}
                      </option>
                      <option value="Open 24 Hrs">Open 24 Hrs</option>
                      {inputTime.map((items, index) => (
                        <option value={items.value} key={index}>
                          {items.display}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    {" "}
                    <label>End Time</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={
                        !!data?.workingHours ? data.workingHours.end_time : ""
                      }
                      {...register("end_time")}
                    >
                      <option
                        defaultValue={
                          !!data?.workingHours ? data.workingHours.end_time : ""
                        }
                      >
                        {!!data?.workingHours ? data.workingHours.end_time : ""}
                      </option>
                      <option value="Open 24 Hrs">Open 24 Hrs</option>
                      {inputTime.map((items, index) => (
                        <option value={items.value} key={index}>
                          {items.display}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="form-group">
                  <label className="mb-2">Overview</label>
                  <textarea
                    className="form-control"
                    placeholder="Overview"
                    rows="3"
                    defaultValue={!!data?.overview ? data.overview : ""}
                    {...register("overview")}
                  ></textarea>
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
