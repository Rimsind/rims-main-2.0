import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import { toast, Slide } from "react-toastify";

const VitalSigns = ({ patientId, vitalSigns, updated_at }) => {
  const [loading, setLoading] = useState(false);
  const { auth } = useAuth();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  let meter = height / 100;
  let result = weight / (meter * meter);
  let bmiResult = result.toFixed(1);

  const { register, handleSubmit } = useForm();
  const submitVitalSigns = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        vitalSigns: {
          oxygen: data.oxygen,
          heartRate: data.heartRate,
          height: height,
          glucose: data.glucose,
          temperature: data.temperature,
          weight: weight,
          respiration: data.respiration,
          bmi: bmiResult,
          bloodPressure: data.bloodPressure,
        },
      };
      const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      toast.success("Vital Signs Updated", {
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
      <form onSubmit={handleSubmit(submitVitalSigns)}>
        <div
          className="general-information-form relative p-6 flex-auto"
          style={{ borderBottom: "1px solid #bbbaba" }}
        >
          <div className="max-w-6xl mx-auto md:py-10">
            <div className="space-y-5 border-2 p-10 rounded">
              <div className="space-y-2 pb-5">
                <div className="gen-form">
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-2">
                      <label>Height (cm)</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="cm"
                            onChange={(e) => setHeight(e.target.value)}
                            defaultValue={
                              !!vitalSigns && !!vitalSigns.height
                                ? vitalSigns.height
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label>Weight (Kg)</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="kg"
                            onChange={(e) => setWeight(e.target.value)}
                            defaultValue={
                              !!vitalSigns && !!vitalSigns.weight
                                ? vitalSigns.weight
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label>BMI</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            // value={bmiResult}
                            contentEditable="false"
                            defaultValue={
                              !!vitalSigns && !!vitalSigns.bmi
                                ? vitalSigns.bmi
                                : bmiResult
                            }
                            disabled
                            title="BMI Value Will be generated aumomatically"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label>BP (Right Arm)</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("bloodPressure")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.bloodPressure
                            ? vitalSigns.bloodPressure
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-3">
                      <label>BP (Left Arm)</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.heartRate
                            ? vitalSigns.heartRate
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-2 mt-4">
                      <label>Heart Rate</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("heartRate")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.heartRate
                            ? vitalSigns.heartRate
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-2 mt-4">
                      <label>O2 Saturation</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("oxygen")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.oxygen
                            ? vitalSigns.oxygen
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Respiratory Rate</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("respiration")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.respiration
                            ? vitalSigns.respiration
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Temperature (Oral)</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("temperature")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.temperature
                            ? vitalSigns.temperature
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-2 mt-4">
                      <label>Glocose Level</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("glucose")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.glucose
                            ? vitalSigns.glucose
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form-soft-button mt-3">
          <div className="row">
            <div className="col-md-8 col-sm-8">
              <p className="text-info">Last Updated On : {updated_at}</p>
            </div>
            <div className="col-md-4">
              <div className="right-button" style={{ textAlign: "right" }}>
                <input
                  type="submit"
                  className="btn btn-primary"
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

export default VitalSigns;
