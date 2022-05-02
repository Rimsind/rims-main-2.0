import { useAuth } from "context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "config/api";
import { toast, Slide } from "react-toastify";
import { useState } from "react";
const ProfileDetails = ({ data }) => {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  if (auth?.user?.role?.id === 4) {
    var role = "polyclinics";
  }
  if (auth?.user?.role?.id === 5) {
    var role = "nursing-homes";
  }
  const { register, handleSubmit } = useForm();
  const submit_polydetails = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        name: data.name,
        contact_person_name: data.contact_person_name,
        phone: data.phone,
        registration_no: data.registration_no,
        // workingHours: {
        //   start_time: data.start_time,
        //   end_time: data.end_time,
        // },
      };
      // console.log(payload);
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
                      <label>Polyclinic Name</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Polyclinic Name"
                        {...register("name")}
                        defaultValue={!!data?.name ? data?.name : ""}
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
                        defaultValue={
                          !!data?.contact_person_name
                            ? data.contact_person_name
                            : ""
                        }
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
                        defaultValue={
                          !!data?.registration_no ? data.registration_no : ""
                        }
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
                        defaultValue={!!data?.email ? data.email : ""}
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
                        defaultValue={!!data?.phone ? data.phone : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <label>Start Time</label>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g 09:00 AM"
                      {...register("start_time")}
                      defaultValue={
                        !!data?.workingHours && !!data?.workingHours?.Start
                          ? data?.workingHours?.Start
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <label>End Time</label>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g 09:00 PM"
                      {...register("end_time")}
                      defaultValue={
                        !!data?.workingHours && !!data?.workingHours?.end
                          ? data?.workingHours?.end
                          : ""
                      }
                    />
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

export default ProfileDetails;
