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
        phone: data.phone,
        workingHours: {
          Start: data.start,
          end: data.end,
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
      return result, setLoading(false);
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
                        name="polyclinic_name"
                        {...register("name")}
                        defaultValue={!!data?.name ? data.name : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Email Id</label>
                    </div>
                  </div>
                  <div className="col-md-8">
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
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Phone</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="eg: 987456321"
                        name="polyclinic_phone"
                        {...register("phone")}
                        defaultValue={!!data?.phone ? data.phone : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Opening Time</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="eg: 10:00 A.M."
                        name="polyclinic_start_time"
                        {...register("start")}
                        defaultValue={
                          !!data?.workingHours ? data?.workingHours?.Start : ""
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Closing Time</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="eg: 03:30 P.M."
                        name="polyclinic_end_time"
                        {...register("end")}
                        defaultValue={
                          !!data?.workingHours ? data?.workingHours?.end : ""
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="save-btn-poly mt-4 text-end">
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
