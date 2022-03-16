import { useState } from "react";
import { useAuth } from "context";
import router from "next/router";
import axios from "axios";
import { fetcher } from "config/api";
import useSWR from "swr";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Assesment = ({ appointmentId }) => {
  const { auth } = useAuth();
  const [investigation, setInvestigation] = useState();
  const [treatmentPlan, setTreatmentPlan] = useState();
  const [icd, setIcd] = useState();
  const [allIcd, setAllIcd] = useState([]);
  const { data: appointment } = useSWR(
    `${apiUrl}/appointments/${appointmentId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  const { data: doctor } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  const { data } = useSWR(
    `http://icd10api.com/?s=${icd}&desc=short&r=json`,
    fetcher
  );

  const addIcd = (event) => {
    setAllIcd([
      ...allIcd,
      {
        description: event.target.value,
      },
    ]);
    setIcd("");
  };

  const submitAssesment = async (event) => {
    event.preventDefault();
    const payload = {
      assesment: {
        clinicalInvestigation: investigation,
        diagnosis: allIcd,
        treatmentPlan: treatmentPlan,
      },
    };

    try {
      const res = await axios.put(
        `${apiUrl}/appointments/${appointmentId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;

      toast.success("Form Submitted Succesfully", {
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
    } catch (error) {
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
    }
  };
  return (
    <>
      <div className="general-information-form">
        <div className="gen-form">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="general-form">
                <p className="fs-6 fw-bold">Problems List</p>
                <div className="gen-form-table px-2 py-3 bg-light">
                  {doctor?.specialty?.name === "Rehabilitation" ? (
                    <>
                      <table className="table">
                        <thead className="bg-info">
                          <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Aerobic Capacity With Functional Mobility Skill
                              Assessment
                            </td>
                            <td>
                              {
                                appointment?.rehab?.aerobicCapacity
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>Anthropometric Assessment</td>
                            <td>
                              {
                                appointment?.rehab?.abthropometric
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Circulatory Assessment Includes Arterial / Venous
                              / Lymphatic System
                            </td>
                            <td>
                              {
                                appointment?.rehab?.circulatory_assesment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>Arousal, Attention And Cognitive Assessment</td>
                            <td>
                              {
                                appointment?.rehab?.arousal_assesment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>Cranial And Peripheral Nerve Assessment</td>
                            <td>
                              {
                                appointment?.rehab?.cranial_peripheral_assesment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>Reflex And Sensory Assessment</td>
                            <td>
                              {
                                appointment?.rehab?.reflex_sensory_assessment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>Postural Assessment</td>
                            <td>
                              {
                                appointment?.rehab?.postural_assessment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>Gait Assessment</td>
                            <td>
                              {
                                appointment?.rehab?.gait_assesment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>Postural Control Or Balance Assessment</td>
                            <td>
                              {
                                appointment?.rehab?.postural_control_assesment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Motor Function Assessment Includes Motor Control
                              And Motor Learning
                            </td>
                            <td>
                              {
                                appointment?.rehab?.motor_function_assesment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Manual Muscle Strength And Range Of Motion
                              Assessment
                            </td>
                            <td>
                              {
                                appointment?.rehab?.manual_muscle_assesment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>Pain Assessment</td>
                            <td>
                              {
                                appointment?.rehab?.pain_assessment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>
                              ENVIRONMENTAL BARRIER & HOME AND WORK BARRIER
                              ASSESSMNET
                            </td>
                            <td>
                              {
                                appointment?.rehab
                                  ?.environmental_barrier_assessmnet
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>
                              ORTHOTIC / PROSTHETIC / ADAPTIVE EQUIPMENT / WHEEL
                              CHAIR ASSESSMENT
                            </td>
                            <td>
                              {
                                appointment?.rehab?.wheel_chair_assessment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>JOINT INTEGRETY AND MOBILITY ASSESSMNET</td>
                            <td>
                              {
                                appointment?.rehab
                                  ?.joint_integrety_mobility_assessmnet
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>VENTILATION,RESPIRATION AND GAS EXCHANGE</td>
                            <td>
                              {
                                appointment?.rehab
                                  ?.ventilation_respiration_gas_exchange
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>WOUND ASSESSMENT</td>
                            <td>
                              {
                                appointment?.rehab?.wound_assessment
                                  ?.identified_problems
                              }
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="general-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <p className="fs-6 fw-bold">Clinical Investigation</p>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Describe your problems here"
                      onChange={(e) => setInvestigation(e.target.value)}
                      defaultValue={
                        !!appointment?.assesment &&
                        !!appointment?.assesment?.clinicalInvestigation
                          ? appointment?.assesment?.clinicalInvestigation
                          : ""
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gen-form">
          <p className="fs-5 fw-bold">Medical Diagnosis</p>

          <div className="row mt-3">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder=""
              value={icd}
              onChange={(e) => setIcd(e.target.value)}
            />
            <ul
              className="bg-light"
              style={{ marginLeft: "1px", width: "700px" }}
            >
              {data?.Search?.map((items, index) => (
                <li
                  key={index}
                  className="list-unstyled border-b{appointment?.rehab?.}m"
                >
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-outline-primary border-0 text-start "
                      value={`${items.Name}: ${items.Description}`}
                      onClick={addIcd}
                    >
                      {items?.Name} : {items?.Description}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="gen-form">
          <div className="row align-items-baseline">
            <div className="col-12">
              <div className="rfa-gen-form-data-table bg-white p-2 rounded-3 mt-4">
                <table className="table table-striped">
                  <thead className="bg-info">
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col"> Medical Diagnosis List</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allIcd.map((items, index) => (
                      <tr key={index}>
                        <th scope="row">X</th>
                        <td>{items.description}</td>
                      </tr>
                    ))}
                    {appointment?.assesment?.diagnosis?.map((items, index) => (
                      <tr key={index}>
                        <th scope="row">*</th>
                        <td>{items.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="general-form">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <p className="fs-6 fw-bold">Treatment Plan </p>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Describe your problems here"
                      onChange={(e) => setTreatmentPlan(e.target.value)}
                      defaultValue={
                        !!appointment?.assesment &&
                        !!appointment?.assesment?.treatmentPlan
                          ? appointment?.assesment?.treatmentPlan
                          : ""
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="save_btn_form_assessment text-center mt-3">
          <button className="btn btn-success" onClick={submitAssesment}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Assesment;
