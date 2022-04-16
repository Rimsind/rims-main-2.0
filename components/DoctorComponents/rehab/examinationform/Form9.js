import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form9 = ({ appointmentId, rehabData }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const submit_form9 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...rehabData,
        postural_control_assesment: {
          cognitive_impairment: data.cognitive_impairment,
          neuromuscular_mpairment: data.neuromuscular_mpairment,
          musculoskeletal_impairment: data.musculoskeletal_impairment,
          sitting_large_movement: data.sitting_large_movement,
          berge_balance_test: data.berge_balance_test,
          standing_ankle_strategy: data.standing_ankle_strategy,
          movement_sitting_standing: data.movement_sitting_standing,
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          tinetti_test: data.tinetti_test,
          stepping_strategy: data.stepping_strategy,
          standing_hip_strategy: data.standing_hip_strategy,
          identified_problems: data.identified_problems,
          sitting_small_movement: data.sitting_small_movement,
          functional_reach_test: data.functional_reach_test,
          alignment_sitting_standing: data.alignment_sitting_standing,
          ctsib: data.ctsib,
          getup_go_test: data.getup_go_test,
          perceptual_impairment: data.perceptual_impairment,
          functional_performance_score: data.functional_performance_score,
          motor_strategy_score: data.motor_strategy_score,
          sensory_strategy_score: data.sensory_strategy_score,
          factors_impacted_score: data.factors_impacted_score,
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
              <form onSubmit={handleSubmit(submit_form9)}>
                <div className="gen-form mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">
                      Postural Control or Balance Assessment
                    </p>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3 className="fs-6 fw-bold">
                        1. Functional Performance Test And Measures
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Score"
                        {...register("functional_performance_score")}
                        defaultValue={
                          !!rehabData?.postural_control_assesment &&
                          !!rehabData?.postural_control_assesment
                            .functional_performance_score
                            ? rehabData?.postural_control_assesment
                                .functional_performance_score
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>A. Get up and go test</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("getup_go_test")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment
                                .getup_go_test
                                ? rehabData?.postural_control_assesment
                                    .getup_go_test
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>B. Functional reach test</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("functional_reach_test")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment
                                .functional_reach_test
                                ? rehabData?.postural_control_assesment
                                    .functional_reach_test
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>C. Tinetti,s Test</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("tinetti_test")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment
                                .tinetti_test
                                ? rehabData?.postural_control_assesment
                                    .tinetti_test
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>D. Berg Balance Test</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("berge_balance_test")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment
                                .berge_balance_test
                                ? rehabData?.postural_control_assesment
                                    .berge_balance_test
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3 className="fs-6 fw-bold">
                        2. Motor Strategy Level Test
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Score"
                        {...register("motor_strategy_score")}
                        defaultValue={
                          !!rehabData?.postural_control_assesment &&
                          !!rehabData?.postural_control_assesment
                            .motor_strategy_score
                            ? rehabData?.postural_control_assesment
                                .motor_strategy_score
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>A. Alignment In Sitting And Standing</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("alignment_sitting_standing")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment
                                .alignment_sitting_standing
                                ? rehabData?.postural_control_assesment
                                    .alignment_sitting_standing
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>D. Movement Strategy in Sitting and Standing</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("movement_sitting_standing")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment
                                .movement_sitting_standing
                                ? rehabData?.postural_control_assesment
                                    .movement_sitting_standing
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3 className="fs-6 fw-bold">
                        3. Sensory Strategy Level Assessment
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Score"
                        {...register("sensory_strategy_score")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>
                            Clinical Test for Sensory Interaction in
                            Balance(CTSIB)
                          </p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("ctsib")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment.ctsib
                                ? rehabData?.postural_control_assesment.ctsib
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3 className="fs-6 fw-bold">
                        4. Factors Impacted on Normal Postural Control Includes{" "}
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Score"
                        {...register("factors_impacted_score")}
                        defaultValue={
                          !!rehabData?.postural_control_assesment &&
                          !!rehabData?.postural_control_assesment
                            .factors_impacted_score
                            ? rehabData?.postural_control_assesment
                                .factors_impacted_score
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>Cognitive Impairment</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("cognitive_impairment")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment
                                .cognitive_impairment
                                ? rehabData?.postural_control_assesment
                                    .cognitive_impairment
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>Musculoskeletal Impairment</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("musculoskeletal_impairment")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment
                                .musculoskeletal_impairment
                                ? rehabData?.postural_control_assesment
                                    .musculoskeletal_impairment
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>Neuromuscular Impairment</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("neuromuscular_mpairment")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment
                                .neuromuscular_mpairment
                                ? rehabData?.postural_control_assesment
                                    .neuromuscular_mpairment
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>Perceptual Impairment</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("perceptual_impairment")}
                            defaultValue={
                              !!rehabData?.postural_control_assesment &&
                              !!rehabData?.postural_control_assesment
                                .perceptual_impairment
                                ? rehabData?.postural_control_assesment
                                    .perceptual_impairment
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-table-form mt-4 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <table className="table table-bordered border-dark">
                        <tr>
                          <th colSpan="3" className="text-center py-3">
                            Sitting
                          </th>
                        </tr>
                        <tr className="text-center">
                          <td>Small Movement</td>
                          <td>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-md-4">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="Normal"
                                      {...register("sitting_small_movement")}
                                      defaultChecked={
                                        !!rehabData?.postural_control_assesment &&
                                        rehabData?.postural_control_assesment
                                          .sitting_small_movement === "Normal"
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
                                      {...register("sitting_small_movement")}
                                      defaultChecked={
                                        !!rehabData?.postural_control_assesment &&
                                        rehabData?.postural_control_assesment
                                          .sitting_small_movement === "Impared"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-8">
                                    <p className="space-x-4">Impared</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-center">
                          <td>Large Movement</td>
                          <td>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-md-4">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="Normal"
                                      {...register("sitting_large_movement")}
                                      defaultChecked={
                                        !!rehabData?.postural_control_assesment &&
                                        rehabData?.postural_control_assesment
                                          .sitting_large_movement === "Normal"
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
                                      {...register("sitting_large_movement")}
                                      defaultChecked={
                                        !!rehabData?.postural_control_assesment &&
                                        rehabData?.postural_control_assesment
                                          .sitting_large_movement === "Impared"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-8">
                                    <p className="space-x-4">Impared</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <table className="table table-bordered border-dark">
                        <tr>
                          <th colSpan="3" className="text-center py-3">
                            Standing
                          </th>
                        </tr>
                        <tr className="text-center">
                          <td>Ankle Strategy</td>
                          <td>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-md-4">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="Normal"
                                      {...register("standing_ankle_strategy")}
                                      defaultChecked={
                                        !!rehabData?.postural_control_assesment &&
                                        rehabData?.postural_control_assesment
                                          .standing_ankle_strategy === "Normal"
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
                                      {...register("standing_ankle_strategy")}
                                      defaultChecked={
                                        !!rehabData?.postural_control_assesment &&
                                        rehabData?.postural_control_assesment
                                          .standing_ankle_strategy === "Impared"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-8">
                                    <p className="space-x-4">Impared</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-center">
                          <td>Hip Strategy</td>
                          <td>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-md-4">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="Normal"
                                      {...register("standing_hip_strategy")}
                                      defaultChecked={
                                        !!rehabData?.postural_control_assesment &&
                                        rehabData?.postural_control_assesment
                                          .standing_hip_strategy === "Normal"
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
                                      {...register("standing_hip_strategy")}
                                      defaultChecked={
                                        !!rehabData?.postural_control_assesment &&
                                        rehabData?.postural_control_assesment
                                          .standing_hip_strategy === "Impared"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-8">
                                    <p className="space-x-4">Impared</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-center">
                          <td>Stepping Strategy</td>
                          <td>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-md-4">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="Normal"
                                      {...register("stepping_strategy")}
                                      defaultChecked={
                                        !!rehabData?.postural_control_assesment &&
                                        rehabData?.postural_control_assesment
                                          .stepping_strategy === "Normal"
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
                                      {...register("stepping_strategy")}
                                      defaultChecked={
                                        !!rehabData?.postural_control_assesment &&
                                        rehabData?.postural_control_assesment
                                          .stepping_strategy === "Impared"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-8">
                                    <p className="space-x-4">Impared</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
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
                          !!rehabData?.postural_control_assesment &&
                          !!rehabData?.postural_control_assesment
                            .identified_problems
                            ? rehabData?.postural_control_assesment
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
                          !!rehabData?.postural_control_assesment &&
                          !!rehabData?.postural_control_assesment
                            .short_term_goals
                            ? rehabData?.postural_control_assesment
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
                          !!rehabData?.postural_control_assesment &&
                          !!rehabData?.postural_control_assesment
                            .long_term_goals
                            ? rehabData?.postural_control_assesment
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
                          !!rehabData?.postural_control_assesment &&
                          !!rehabData?.postural_control_assesment.treatment_plan
                            ? rehabData?.postural_control_assesment
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

export default Form9;
