import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form12 = ({ appointmentId, rehabData }) => {
  const { auth } = useAuth();
  const { register, handleSubmit } = useForm();
  const submit_form12 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...rehabData,
        pain_assessment: {
          related_signs: data.related_signs.toString(),
          onset_of_pain: data.onset_of_pain,
          releiving_pain_medication: data.releiving_pain_medication,
          vascular: data.vascular.toString(),
          releiving_factor_of_pain: data.releiving_factor_of_pain.toString(),
          aggravating_factor_of_pain: data.aggravating_factor_of_pain,
          emotional: data.emotional.toString(),
          severity_of_pain_scale: data.severity_of_pain_scale,
          joint_irritability: data.joint_irritability,
          progress_of_pain: data.progress_of_pain,
          worse_problem: data.worse_problem,
          pattern_of_joint_involvement:
            data.pattern_of_joint_involvement.toString(),
          severity_of_pain_value: data.severity_of_pain_value,
          neurogenic: data.neurogenic.toString(),
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          duration_of_pain: data.duration_of_pain,
          location_of_pain: data.location_of_pain,
          identified_problems: data.identified_problems,
          type_of_pain: data.type_of_pain,
          musculoskeletal: data.musculoskeletal.toString(),
          frequency_of_pain: data.frequency_of_pain,
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
      <div className="general-information-form relative p-6 flex-auto mt-3">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <form onSubmit={handleSubmit(submit_form12)}>
                <div className="gen-form mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">Pain Assessment</p>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3 className="fs-6">ONSET OF PAIN</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Gradual"
                            {...register("onset_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.onset_of_pain ===
                                "Gradual"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Gradual</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Sudden"
                            {...register("onset_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.onset_of_pain ===
                                "Sudden"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Sudden</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">LOCATION OF PAIN</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Box"
                        {...register("location_of_pain")}
                        defaultValue={
                          !!rehabData?.pain_assessment &&
                          !!rehabData?.pain_assessment.location_of_pain
                            ? rehabData?.pain_assessment.location_of_pain
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <h3 className="fs-6 mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">Vascular</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Throbbing"
                                {...register("vascular")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.vascular
                                  )?.includes("Throbbing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Throbbing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pounding"
                                {...register("vascular")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.vascular
                                  )?.includes("Pounding")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pounding</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pulsing"
                                {...register("vascular")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.vascular
                                  )?.includes("Pulsing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pulsing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Beating"
                                {...register("vascular")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.vascular
                                  )?.includes("Beating")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Beating</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <h3 className="fs-6 mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">Neurogenic</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Stabbing"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Stabbing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Stabbing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Crushing"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Crushing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Crushing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pinching"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Pinching")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pinching</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Hot"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Hot")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Hot</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Searing"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Searing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Searing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Itchy"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Itchy")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Itchy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Stinging"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Stinging")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Stinging</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pulling"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Pulling")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pulling</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Jumping"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Jumping")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Jumping</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Shooting"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Shooting")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Shooting</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pricking"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Pricking")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pricking</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Gnawing"
                                {...register("neurogenic")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.neurogenic
                                  )?.includes("Gnawing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Gnawing</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <h3 className="fs-6 mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">Musculoskeletal</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Aching"
                                {...register("musculoskeletal")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.musculoskeletal
                                  )?.includes("Aching")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Aching</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Sore"
                                {...register("musculoskeletal")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.musculoskeletal
                                  )?.includes("Sore")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Sore</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Heavy"
                                {...register("musculoskeletal")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.musculoskeletal
                                  )?.includes("Heavy")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Heavy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Hurting"
                                {...register("musculoskeletal")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.musculoskeletal
                                  )?.includes("Hurting")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Hurting</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Dull"
                                {...register("musculoskeletal")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.musculoskeletal
                                  )?.includes("Dull")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Dull</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <h3 className="fs-6 mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">Emotional</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Tiring"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Tiring")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Tiring</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Miserable"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Miserable")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Miserable</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Vicious"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Vicious")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Vicious</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Agonizing"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Agonizing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Agonizing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Nauseating"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Nauseating")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Nauseating</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Frightful"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Frightful")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Frightful</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Piercing"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Piercing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Piercing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Dreadful"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Dreadful")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Dreadful</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Punishing"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Punishing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Punishing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Torturing"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Torturing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Torturing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Killing"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Killing")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Killing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Unbearable"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Unbearable")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Unbearable</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Annoying"
                                {...register("emotional")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  makeArrfromString(
                                    rehabData?.pain_assessment.emotional
                                  )?.includes("Annoying")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Annoying</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">TYPE OF PAIN</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="RADIATING"
                                {...register("type_of_pain")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  rehabData?.pain_assessment.type_of_pain ===
                                    "RADIATING"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">RADIATING</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="LOCALIZED"
                                {...register("type_of_pain")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  rehabData?.pain_assessment.type_of_pain ===
                                    "LOCALIZED"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">LOCALIZED</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="DIFFUSE"
                                {...register("type_of_pain")}
                                defaultChecked={
                                  !!rehabData?.pain_assessment &&
                                  rehabData?.pain_assessment.type_of_pain ===
                                    "DIFFUSE"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">DIFFUSE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">SEVERITY OF PAIN</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="VISUAL ANALOG SCALE"
                            {...register("severity_of_pain_value")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment
                                .severity_of_pain_value ===
                                "VISUAL ANALOG SCALE"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">VISUAL ANALOG SCALE</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="FACIAL EXPRESSION"
                            {...register("severity_of_pain_value")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment
                                .severity_of_pain_value === "FACIAL EXPRESSION"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">FACIAL EXPRESSION</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <select
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        {...register("severity_of_pain_scale")}
                      >
                        <option
                          name="language"
                          defaultValue={
                            !!rehabData?.pain_assessment &&
                            rehabData?.pain_assessment.severity_of_pain_scale
                          }
                        >
                          {!!rehabData?.pain_assessment &&
                          rehabData?.pain_assessment.severity_of_pain_scale
                            ? rehabData?.pain_assessment.severity_of_pain_scale
                            : ""}
                        </option>
                        <option value="0 : No pain">0 : No pain</option>
                        <option value="1-3 : Mild pain">1-3 : Mild pain</option>
                        <option value="4-6 : Severe pain">
                          4-6 : Severe pain
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">Frequency of pain</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Day Time"
                            {...register("frequency_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.frequency_of_pain ===
                                "Day Time"
                            }
                          />
                        </div>
                        <div className="col-md-8">
                          <p className="space-x-4">Day Time</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Night Time"
                            {...register("frequency_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.frequency_of_pain ===
                                "Night Time"
                            }
                          />
                        </div>
                        <div className="col-md-8">
                          <p className="space-x-4">Night Time</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="All Time"
                            {...register("frequency_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.frequency_of_pain ===
                                "All Time"
                            }
                          />
                        </div>
                        <div className="col-md-8">
                          <p className="space-x-4">All Time</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="During Activity"
                            {...register("frequency_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.frequency_of_pain ===
                                "During Activity"
                            }
                          />
                        </div>
                        <div className="col-md-8">
                          <p className="space-x-4">During Activity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3 className="fs-6">Duration of pain (in hrs)</h3>
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter the Value in hours"
                        min="0"
                        max="24"
                        {...register("duration_of_pain")}
                        defaultValue={
                          !!rehabData?.pain_assessment &&
                          !!rehabData?.pain_assessment.duration_of_pain
                            ? rehabData?.pain_assessment.duration_of_pain
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3 className="fs-6">Aggravating factor of pain</h3>
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("aggravating_factor_of_pain")}
                        defaultValue={
                          !!rehabData?.pain_assessment &&
                          !!rehabData?.pain_assessment
                            .aggravating_factor_of_pain
                            ? rehabData?.pain_assessment
                                .aggravating_factor_of_pain
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">Releiving factor of pain</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Liquor"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Liquor")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Liquor</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Sleep/rest"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Sleep/rest")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Sleep/rest</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Stumilants (e.g caffine)"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Stumilants (e.g caffine)")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Stumilants (e.g caffine)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Eating"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Eating")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Eating</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Heat"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Heat")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Heat</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Cold"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Cold")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Cold</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Weather changes"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Weather changes")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Weather changes</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Massage"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Massage")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Massage</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Pressure"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Pressure")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Pressure</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="No movement"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("No movement")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">No movement</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Movement"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Movement")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Movement</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Sitting"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Sitting")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Sitting</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Lying down"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Lying down")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Lying down</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Distraction (e.g. television)"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Distraction (e.g. television)")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">
                            Distraction (e.g. television)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Urination / Defecation"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Urination / Defecation")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Urination / Defecation</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Mild exercise"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Mild exercise")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Mild exercise</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Loude Noise"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Loude Noise")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Loude Noise</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Standing"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Standing")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Standing</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Medication"
                            {...register("releiving_factor_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .releiving_factor_of_pain
                              )?.includes("Medication")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Medication</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">
                        Relieving of pain with medication (include type of
                        medication,dosage and hours of releive)
                      </h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("releiving_pain_medication")}
                        defaultValue={
                          !!rehabData?.pain_assessment &&
                          !!rehabData?.pain_assessment.releiving_pain_medication
                            ? rehabData?.pain_assessment
                                .releiving_pain_medication
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">Pattern of joint involvement</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="One joint"
                            {...register("pattern_of_joint_involvement")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .pattern_of_joint_involvement
                              )?.includes("One joint")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">One joint</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Multiple joint"
                            {...register("pattern_of_joint_involvement")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .pattern_of_joint_involvement
                              )?.includes("Multiple joint")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Multiple joint</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Assymetrical"
                            {...register("pattern_of_joint_involvement")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .pattern_of_joint_involvement
                              )?.includes("Assymetrical")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Assymetrical</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Symmetrical"
                            {...register("pattern_of_joint_involvement")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment
                                  .pattern_of_joint_involvement
                              )?.includes("Symmetrical")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Symmetrical</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3 className="fs-6">Joint irritability</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Mild"
                            {...register("joint_irritability")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.joint_irritability ===
                                "Mild"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Mild</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="moderate"
                            {...register("joint_irritability")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.joint_irritability ===
                                "moderate"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">moderate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Seveir"
                            {...register("joint_irritability")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.joint_irritability ===
                                "Seveir"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Seveir</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">Progress of pain</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Intermittently present"
                            {...register("progress_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.progress_of_pain ===
                                "Intermittently present"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Intermittently present</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Constantly present"
                            {...register("progress_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.progress_of_pain ===
                                "Constantly present"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Constantly present</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Present in recurrent attacks"
                            {...register("progress_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.progress_of_pain ===
                                "Present in recurrent attacks"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">
                            Present in recurrent attacks
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Progressively worse"
                            {...register("progress_of_pain")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.progress_of_pain ===
                                "Progressively worse"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Progressively worse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3 className="fs-6">Worse problem (loss of function)</h3>
                    </div>

                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Mild"
                            {...register("worse_problem")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.worse_problem ===
                                "Mild"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Mild</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="moderate"
                            {...register("worse_problem")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.worse_problem ===
                                "moderate"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">moderate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Seveir"
                            {...register("worse_problem")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              rehabData?.pain_assessment.worse_problem ===
                                "Seveir"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Seveir</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6">Related signs and symprtoms</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Stiffness"
                            {...register("related_signs")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment.related_signs
                              )?.includes("Stiffness")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Stiffness</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Swelling"
                            {...register("related_signs")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment.related_signs
                              )?.includes("Swelling")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4"> Swelling</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Crepitus"
                            {...register("related_signs")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment.related_signs
                              )?.includes("Crepitus")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Crepitus</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Locking"
                            {...register("related_signs")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment.related_signs
                              )?.includes("Locking")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Locking</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Instability"
                            {...register("related_signs")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment.related_signs
                              )?.includes("Instability")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Instability</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Weakness"
                            {...register("related_signs")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment.related_signs
                              )?.includes("Weakness")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Weakness</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Muscle spasm"
                            {...register("related_signs")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment.related_signs
                              )?.includes("Muscle spasm")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Muscle spasm</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Neurological symptoms"
                            {...register("related_signs")}
                            defaultChecked={
                              !!rehabData?.pain_assessment &&
                              makeArrfromString(
                                rehabData?.pain_assessment.related_signs
                              )?.includes("Neurological symptoms")
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Neurological symptoms</p>
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
                          !!rehabData?.pain_assessment &&
                          !!rehabData?.pain_assessment.identified_problems
                            ? rehabData?.pain_assessment.identified_problems
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
                          !!rehabData?.pain_assessment &&
                          !!rehabData?.pain_assessment.short_term_goals
                            ? rehabData?.pain_assessment.short_term_goals
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
                          !!rehabData?.pain_assessment &&
                          !!rehabData?.pain_assessment.long_term_goals
                            ? rehabData?.pain_assessment.long_term_goals
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
                          !!rehabData?.pain_assessment &&
                          !!rehabData?.pain_assessment.treatment_plan
                            ? rehabData?.pain_assessment.treatment_plan
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

export default Form12;
