import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form6 = ({ appointmentId }) => {
  const { auth } = useAuth();
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

  const { register, handleSubmit } = useForm();
  const submit_form6 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        reflex_sensory_assessment: {
          cold: data.cold,
          sharp: data.sharp,
          joint_motion: data.joint_motion,
          hot: data.hot,
          stereognosis: data.stereognosis,
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          two_point_discrimination: data.two_point_discrimination,
          dull: data.dull,
          touch_pressure_threshold: data.touch_pressure_threshold,
          vibration: data.vibration,
          touch_awareness: data.touch_awareness,
          identified_problems: data.identified_problems,
          touch_localization: data.touch_localization,
          reflex_examination: data.reflex_examination,
          joint_position: data.joint_position,
        },
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
    }
  };
  return (
    <>
      <div className="general-information-form relative p-6 flex-auto mt-3">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <form onSubmit={handleSubmit(submit_form6)}>
                <div className="gen-form mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">
                      Reflex And Sensory Assessment
                    </p>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3 className="fs-6">
                        Deep Tendon Reflex And Supercial Reflex Examination
                      </h3>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("reflex_examination")}
                        defaultValue={
                          !!appointment?.rehab?.reflex_sensory_assessment &&
                          !!appointment?.rehab?.reflex_sensory_assessment
                            .reflex_examination
                            ? appointment?.rehab?.reflex_sensory_assessment
                                .reflex_examination
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <p className="fs-5 fw-bpld mt-4 mb-4">
                    Samatosensory Assessment:
                  </p>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h3 className="fs-6">Discriminative Touch</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Touch Awareness</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("touch_awareness")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_awareness === "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("touch_awareness")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_awareness === "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Touch Localization</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("touch_localization")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_localization === "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("touch_localization")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_localization === "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Touch Pressure Threshold</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("touch_pressure_threshold")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_pressure_threshold === "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("touch_pressure_threshold")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_pressure_threshold === "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Two point discrimination</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("two_point_discrimination")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .two_point_discrimination === "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("two_point_discrimination")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .two_point_discrimination === "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h3 className="fs-6">Plain</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Sharp</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("sharp")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.sharp ===
                                        "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("sharp")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.sharp ===
                                        "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Dull</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("dull")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.dull ===
                                        "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("dull")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.dull ===
                                        "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h3 className="fs-6">Proprioception</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Vibration</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("vibration")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .vibration === "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("vibration")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .vibration === "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Joint Position</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("joint_position")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .joint_position === "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("joint_position")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .joint_position === "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Joint Motion</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("joint_motion")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .joint_motion === "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("joint_motion")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .joint_motion === "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Stereognosis</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("stereognosis")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .stereognosis === "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("stereognosis")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .stereognosis === "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h3 className="fs-6">Temperature</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Hot</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("hot")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.hot ===
                                        "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("hot")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.hot ===
                                        "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="fs-6">Cold</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("cold")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.cold ===
                                        "Normal"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Normal</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Impared"
                                    {...register("cold")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.cold ===
                                        "Impared"
                                    }
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="space-x-4">Impared</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3 className="fs-6">Identified Problems</h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("identified_problems")}
                        defaultValue={
                          !!appointment?.rehab?.reflex_sensory_assessment &&
                          !!appointment?.rehab?.reflex_sensory_assessment
                            .identified_problems
                            ? appointment?.rehab?.reflex_sensory_assessment
                                .identified_problems
                            : ""
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3 className="fs-6">Short Term Goals </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("short_term_goals")}
                        defaultValue={
                          !!appointment?.rehab?.reflex_sensory_assessment &&
                          !!appointment?.rehab?.reflex_sensory_assessment
                            .short_term_goals
                            ? appointment?.rehab?.reflex_sensory_assessment
                                .short_term_goals
                            : ""
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3 className="fs-6">Long Term Goals </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("long_term_goals")}
                        defaultValue={
                          !!appointment?.rehab?.reflex_sensory_assessment &&
                          !!appointment?.rehab?.reflex_sensory_assessment
                            .long_term_goals
                            ? appointment?.rehab?.reflex_sensory_assessment
                                .long_term_goals
                            : ""
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3 className="fs-6">Treatment Plan </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("treatment_plan")}
                        defaultValue={
                          !!appointment?.rehab?.reflex_sensory_assessment &&
                          !!appointment?.rehab?.reflex_sensory_assessment
                            .treatment_plan
                            ? appointment?.rehab?.reflex_sensory_assessment
                                .treatment_plan
                            : ""
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="submit-btn mt-2 text-center">
                  <button className="btn btn-primary" type="submit">
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

export default Form6;
