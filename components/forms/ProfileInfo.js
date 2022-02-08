import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { useState } from "react";

const ProfileInfo = ({ patient }) => {
  const { auth } = useAuth();
  console.log(patient);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const updateProfile = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        first_name: data.first_name,
        last_name: data.last_name,
        dob: data.dob,
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
      setLoading(false);
      alert("Profile Updated Succesfully");
      return result;
    } catch (error) {
      console.log(error.message);
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
                    {...register("first_name")}
                    defaultValue={
                      !!patient?.first_name ? patient.first_name : ""
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("last_name")}
                    defaultValue={!!patient?.last_name ? patient.last_name : ""}
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <div className="cal-icon">
                    <input
                      type="date"
                      className="form-control"
                      {...register("dob")}
                      defaultValue={!!patient?.dob ? patient.dob : ""}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    className="form-select form-control"
                    {...register("gender")}
                  >
                    <option
                      name="gender"
                      defaultValue={!!patient?.gender && patient.gender}
                    >
                      {!!patient?.gender && patient.gender}
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Martial Status</label>
                  <select
                    className="form-select form-control"
                    {...register("marital_status")}
                  >
                    <option
                      name="marital_status"
                      defaultChecked={
                        !!patient?.marital_status && patient.marital_status
                      }
                    >
                      {!!patient?.marital_status && patient.marital_status}
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
                  >
                    <option
                      name="blood_group"
                      defaultValue={
                        !!patient?.blood_group?.id && patient.blood_group?.id
                      }
                    >
                      {!!patient?.blood_group?.name &&
                        patient.blood_group?.name}
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
                    defaultValue={!!patient?.email ? patient.email : ""}
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
                    defaultValue={!!patient?.phone ? patient.phone : ""}
                  />
                </div>
              </div>
              <div className="submit-section text-end">
                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  value={loading ? "loading..." : "Save Changes"}
                  disabled={loading}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProfileInfo;
