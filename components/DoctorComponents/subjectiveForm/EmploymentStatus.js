import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context";
import { apiUrl } from "config/api";

const EmploymentStatus = ({ employmentStatus, patientId }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const updateEmploymentStatus = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        employmentStatus: {
          occupation: data.occupation,
          work_status: data.workStatus,
          work_involves: data.workInvolves?.toString(),
        },
      };

      const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      alert("Employment Status Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  const work_involves = [
    "Prolonged Standing",
    "Working with bent neck",
    "Lifting light object",
    "Prolonged Sitting",
    "Frequent typing",
    "Lifting heavy object",
    "Prolonged Walking",
    "Repetitive overhead work",
    "Prolonged Driving",
    "Excessive reaching",
    "Carrying heavy object",
    "Prolonged forward bending",
    "Frequent hand grasping",
    "Repetitive pushing/pulling",
    "Exposure to",
    "Climbing ladders",
    "Repetitive arm motions",
    "Excessive stair climbing",
    "Repetitive foot motions",
    "Others",
  ];

  const makeArrfromString = (str) => {
    if (str) {
      const arr = str.split(",");
      const result = arr.map((item) => item.trim());
      return result;
    } else {
      str = "";
    }
  };
  return (
    <>
      <div className="general-information-form ">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <form onSubmit={handleSubmit(updateEmploymentStatus)}>
                <div className="gen-form">
                  <div className="row">
                    <div className="col-md-3">
                      <p className="fs-5 fw-bold">Work Status</p>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-4" {...register("workStatus")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="workStatus"
                                value="Work Full Time"
                                defaultChecked={
                                  !!employmentStatus &&
                                  employmentStatus.work_status ===
                                    "Work Full Time"
                                }
                              />
                            </div>
                            <div className="col-md-9">
                              <p className="space-x-4">Work Full Time</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" {...register("workStatus")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="workStatus"
                                value="Work Part Time"
                                defaultChecked={
                                  !!employmentStatus &&
                                  employmentStatus.work_status ===
                                    "Work Part Time"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Work Part Time</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" {...register("workStatus")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="workStatus"
                                value="Work Light Duty"
                                defaultChecked={
                                  !!employmentStatus &&
                                  employmentStatus.work_status ===
                                    "Work Light Duty"
                                }
                              />
                            </div>
                            <div className="col-md-9">
                              <p className="space-x-4">Work Light Duty</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" {...register("workStatus")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="workStatus"
                                value="Homemaker"
                                defaultChecked={
                                  !!employmentStatus &&
                                  employmentStatus.work_status === "Homemaker"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Homemaker</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" {...register("workStatus")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="workStatus"
                                value="Retired"
                                defaultChecked={
                                  !!employmentStatus &&
                                  employmentStatus.work_status === "Retired"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Retired</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" {...register("workStatus")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="workStatus"
                                value="Disabled"
                                defaultChecked={
                                  !!employmentStatus &&
                                  employmentStatus.work_status === "Disabled"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Disabled</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" {...register("workStatus")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="workStatus"
                                value="Unemployed"
                                defaultChecked={
                                  !!employmentStatus &&
                                  employmentStatus.work_status === "Unemployed"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Unemployed</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4" {...register("workStatus")}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="workStatus"
                                value="Student"
                                defaultChecked={
                                  !!employmentStatus &&
                                  employmentStatus.work_status === "Student"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Student</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-3">
                      <p className="fs-5 fw-bold">Occupation?</p>
                    </div>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        name="occupation"
                        {...register("occupation")}
                        defaultValue={
                          !!employmentStatus && !!employmentStatus.occupation
                            ? employmentStatus.occupation
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="gen-form">
                  <div className="row ">
                    <div className="col-md-3">
                      <p className="fs-5 fw-bold">
                        Your Work Involves (Check all that apply)
                      </p>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        {work_involves?.map((item, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="flexRadioDefault1"
                                  name="workInvolves"
                                  value={item}
                                  {...register("workInvolves")}
                                  defaultChecked={
                                    !!employmentStatus &&
                                    makeArrfromString(
                                      employmentStatus.work_involves
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form-soft-button mt-3 text-end">
                  <button type="submit" className="btn btn-success">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmploymentStatus;
