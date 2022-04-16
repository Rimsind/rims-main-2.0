import { useForm } from "react-hook-form";
import { apiUrl, fetcher } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { useState } from "react";
import useSWR from "swr";
import { Slide, toast } from "react-toastify";
const ProfileInfo = ({ data }) => {
  console.log(data);
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const { data: specialties } = useSWR(`${apiUrl}/specialties`, fetcher);

  const { register, handleSubmit } = useForm();
  const updateProfile = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        qualification: data.qualification,
        experienceInYrs: data.experienceInYear,
        bio: data.bio,
        skype_id: data.skype_id,
        registration_number: data.registration_number,
        specialty: {
          id: data.specialty,
        },
      };

      const res = await axios.put(
        `${apiUrl}/doctors/${auth.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;
      setLoading(false);

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
      return result;
    } catch (err) {
      console.log(err.message);
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
      <form onSubmit={handleSubmit(updateProfile)}>
        <div className="card">
          <div className="card-body">
            <div className="row form-row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("firstName")}
                    defaultValue={!!data?.firstName ? data.firstName : ""}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("lastName")}
                    defaultValue={!!data?.lastName ? data.lastName : ""}
                  />
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
                    {...register("phone")}
                    defaultValue={!!data?.phone ? data.phone : ""}
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Registration No</label>
                  <input
                    type="text"
                    placeholder="+1 202-555-0125"
                    className="form-control"
                    {...register("registration_number")}
                    defaultValue={
                      !!data?.registration_number
                        ? data.registration_number
                        : ""
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="form-group">
                  <label htmlFor="validationCustom01">Qualification</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="MBBS"
                    {...register("qualification")}
                    defaultValue={
                      !!data?.qualification ? data.qualification : ""
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="form-group">
                  <label htmlFor="validationCustom02">
                    Experience (in Years)
                  </label>
                  <div className="cal-icon">
                    <input
                      type="number"
                      className="form-control"
                      id="validationCustom02"
                      placeholder="Your Phone No."
                      {...register("experienceInYear")}
                      defaultValue={
                        !!data?.experienceInYrs ? data.experienceInYrs : ""
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="form-group">
                  <label htmlFor="validationCustom01">Specialization</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    {...register("specialty")}
                  >
                    <option
                      defaultChecked={
                        !!data?.specialty?.id ? data.specialty?.id : ""
                      }
                    >
                      {!!data?.specialty?.name ? data.specialty?.name : ""}
                    </option>
                    {specialties?.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="form-group">
                  <label htmlFor="validationCustom02">Skype ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Your Skype ID"
                    {...register("skype_id")}
                    defaultValue={!!data?.skype_id ? data.skype_id : ""}
                  />
                </div>
              </div>
              <div className="col-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="floatingTextarea">Your Bio</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter Your Bio"
                    id="floatingTextarea"
                    rows="10"
                    {...register("bio")}
                    defaultValue={!!data?.bio ? data.bio : ""}
                  ></textarea>
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
    </>
  );
};

export default ProfileInfo;
