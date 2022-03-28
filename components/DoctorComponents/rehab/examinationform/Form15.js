import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form15 = ({ appointmentId }) => {
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
  const submit_form15 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        joint_integrety_mobility_assessmnet: {
          palpation: data.palpation,
          drawer_test: data.drawer_test,
          shear_tests: data.shear_tests,
          impingement_test: data.impingement_test,
          valgus_varus_stress_test: data.valgus_varus_stress_test,
          compression_distraction_test: data.compression_distraction_test,
          glide_test: data.glide_test,
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          identified_problems: data.identified_problems,
          apprehension_test: data.apprehension_test,
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
              <form onSubmit={handleSubmit(submit_form15)}>
                <div className="gen-form mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">
                      Joint Integrety And Mobility Assessment
                    </p>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3 className="fs-6">APPREHENSION TEST</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NEGATIVE"
                                {...register("apprehension_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .apprehension_test === "NEGATIVE"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">NEGATIVE</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="POSITIVE"
                                {...register("apprehension_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .apprehension_test === "POSITIVE"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">POSITIVE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="fs-6">COMPRESSION AND DISTRACTION TEST</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NEGATIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .compression_distraction_test === "NEGATIVE"
                                }
                                {...register("compression_distraction_test")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">NEGATIVE</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="POSITIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .compression_distraction_test === "POSITIVE"
                                }
                                {...register("compression_distraction_test")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">POSITIVE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="fs-6">DRAWER TEST</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NEGATIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .drawer_test === "NEGATIVE"
                                }
                                {...register("drawer_test")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">NEGATIVE</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="POSITIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .drawer_test === "POSITIVE"
                                }
                                {...register("drawer_test")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">POSITIVE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="fs-6">GLIDE TEST</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NEGATIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .glide_test === "NEGATIVE"
                                }
                                {...register("glide_test")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">NEGATIVE</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="POSITIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .glide_test === "POSITIVE"
                                }
                                {...register("glide_test")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">POSITIVE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="fs-6">IMPINGEMENT TEST</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NEGATIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .impingement_test === "NEGATIVE"
                                }
                                {...register("impingement_test")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">NEGATIVE</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="POSITIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .impingement_test === "POSITIVE"
                                }
                                {...register("impingement_test")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">POSITIVE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="fs-6">PALPATION</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NEGATIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .palpation === "NEGATIVE"
                                }
                                {...register("palpation")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">NEGATIVE</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="POSITIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .palpation === "POSITIVE"
                                }
                                {...register("palpation")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">POSITIVE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="fs-6">SHEAR TESTS</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NEGATIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .shear_tests === "NEGATIVE"
                                }
                                {...register("shear_tests")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">NEGATIVE</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="POSITIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .shear_tests === "POSITIVE"
                                }
                                {...register("shear_tests")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">POSITIVE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="fs-6">VALGUS AND VARUS STRESS TEST</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NEGATIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .valgus_varus_stress_test === "NEGATIVE"
                                }
                                {...register("valgus_varus_stress_test")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">NEGATIVE</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="POSITIVE"
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet &&
                                  appointment?.rehab
                                    ?.joint_integrety_mobility_assessmnet
                                    .valgus_varus_stress_test === "POSITIVE"
                                }
                                {...register("valgus_varus_stress_test")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">POSITIVE</p>
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
                          !!appointment?.rehab
                            ?.joint_integrety_mobility_assessmnet &&
                          !!appointment?.rehab
                            ?.joint_integrety_mobility_assessmnet
                            .identified_problems
                            ? appointment?.rehab
                                ?.joint_integrety_mobility_assessmnet
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
                          !!appointment?.rehab
                            ?.joint_integrety_mobility_assessmnet &&
                          !!appointment?.rehab
                            ?.joint_integrety_mobility_assessmnet
                            .short_term_goals
                            ? appointment?.rehab
                                ?.joint_integrety_mobility_assessmnet
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
                          !!appointment?.rehab
                            ?.joint_integrety_mobility_assessmnet &&
                          !!appointment?.rehab
                            ?.joint_integrety_mobility_assessmnet
                            .long_term_goals
                            ? appointment?.rehab
                                ?.joint_integrety_mobility_assessmnet
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
                          !!appointment?.rehab
                            ?.joint_integrety_mobility_assessmnet &&
                          !!appointment?.rehab
                            ?.joint_integrety_mobility_assessmnet.treatment_plan
                            ? appointment?.rehab
                                ?.joint_integrety_mobility_assessmnet
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

export default Form15;
