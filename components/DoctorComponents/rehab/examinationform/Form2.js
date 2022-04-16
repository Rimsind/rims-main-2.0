import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form2 = ({ appointmentId, rehabData }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const submit_form2 = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        rehab: {
          ...rehabData,
          abthropometric: {
            skin_fold: data.skin_fold,
            height: data.height,
            edema_grith: data.edema_grith,
            edema_scales: data.edema_scales,
            short_term_goals: data.short_term_goals,
            treatment_plan: data.treatment_plan,
            long_term_goals: data.long_term_goals,
            impedence: data.impedence,
            identified_problems: data.identified_problems,
            weight: data.weight,
            edema_palpation: data.edema_palpation,
            body_dimension_length: data.body_dimension_length,
            body_dimension_grith: data.body_dimension_grith,
            bmi: data.bmi,
            edema_volume: data.edema_volume,
          },
        },
      };

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
              <form onSubmit={handleSubmit(submit_form2)}>
                <div className="gen-form mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">
                      Anthropometric Assessment
                    </p>
                  </div>
                  <h3 className="fs-6 fw-bold">
                    Body composition assessment includes
                  </h3>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3 className="fs-6 fw-bold">Body Mass Index</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row mt-3">
                        <div className="col-md-4">
                          <label>Height (cm)</label>
                          <div className="row">
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="cm"
                                {...register("height")}
                                defaultValue={
                                  !!rehabData?.abthropometric &&
                                  !!rehabData?.abthropometric.height
                                    ? rehabData?.abthropometric.height
                                    : ""
                                }
                                // onChange={(e) => setHeight(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label>Weight (Kg)</label>
                          <div className="row">
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="kg"
                                {...register("weight")}
                                defaultValue={
                                  !!rehabData?.abthropometric &&
                                  !!rehabData?.abthropometric.weight
                                    ? rehabData?.abthropometric.weight
                                    : ""
                                }
                                // onChange={(e) => setWeight(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label>BMI</label>
                          <div className="row">
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                // value={BMI}
                                contentEditable="false"
                                {...register("bmi")}
                                defaultValue={
                                  !!rehabData?.abthropometric &&
                                  !!rehabData?.abthropometric.bmi
                                    ? rehabData?.abthropometric.bmi
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3 className="fs-6 fw-bold">Impedence Measurement</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("impedence")}
                        defaultValue={
                          !!rehabData?.abthropometric &&
                          !!rehabData?.abthropometric.impedence
                            ? rehabData?.abthropometric.impedence
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3 className="fs-6 fw-bold">
                        Skin Fold Thickness Measurement
                      </h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("skin_fold")}
                        defaultValue={
                          !!rehabData?.abthropometric &&
                          !!rehabData?.abthropometric.skin_fold
                            ? rehabData?.abthropometric.skin_fold
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <h3 className="fs-6 fw-bold">Body Dimension Includes</h3>

                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3 className="fs-6 fw-bold">Girth Measurement </h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("body_dimension_grith")}
                        defaultValue={
                          !!rehabData?.abthropometric &&
                          !!rehabData?.abthropometric.body_dimension_grith
                            ? rehabData?.abthropometric.body_dimension_grith
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3 className="fs-6 fw-bold">Length Measurement</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("body_dimension_length")}
                        defaultValue={
                          !!rehabData?.abthropometric &&
                          !!rehabData?.abthropometric.body_dimension_length
                            ? rehabData?.abthropometric.body_dimension_length
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="gen-form mb-3">
                  <div className="row align-items-start">
                    <div className="col-md-4">
                      <h3 className="fs-6 fw-bold">
                        Edema Measurement includes
                      </h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row mb-3">
                        <div className="col-md-3 d-flex align-items-center">
                          <div className="check-item d-flex align-items-center ms-2">
                            <label className="ps-2">Girth</label>
                          </div>
                          <div className="checkitem">
                            <input
                              type="text"
                              className="form-control ms-2"
                              placeholder="Text Area"
                              {...register("edema_grith")}
                              defaultValue={
                                !!rehabData?.abthropometric &&
                                !!rehabData?.abthropometric.edema_grith
                                  ? rehabData?.abthropometric.edema_grith
                                  : ""
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                          <div className="check-item d-flex align-items-center ms-2">
                            <label className="ps-2">Palpation</label>
                          </div>
                          <div className="checkitem">
                            <input
                              type="text"
                              className="form-control ms-2"
                              placeholder="Text Area"
                              {...register("edema_palpation")}
                              defaultValue={
                                !!rehabData?.abthropometric &&
                                !!rehabData?.abthropometric.edema_palpation
                                  ? rehabData?.abthropometric.edema_palpation
                                  : ""
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                          <div className="check-item d-flex align-items-center ms-2">
                            <label className="ps-2">Scales</label>
                          </div>
                          <div className="checkitem">
                            <input
                              type="text"
                              className="form-control ms-2"
                              placeholder="Text Area"
                              {...register("edema_scales")}
                              defaultValue={
                                !!rehabData?.abthropometric &&
                                !!rehabData?.abthropometric.edema_scales
                                  ? rehabData?.abthropometric.edema_scales
                                  : ""
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                          <div className="check-item d-flex align-items-center ms-2">
                            <label className="ps-2">Volume</label>
                          </div>
                          <div className="checkitem">
                            <input
                              type="text"
                              className="form-control ms-2"
                              placeholder="Text Area"
                              {...register("edema_volume")}
                              defaultValue={
                                !!rehabData?.abthropometric &&
                                !!rehabData?.abthropometric.edema_volume
                                  ? rehabData?.abthropometric.edema_volume
                                  : ""
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3 className="fs-6 fw-bold">Identified Problems</h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("identified_problems")}
                        defaultValue={
                          !!rehabData?.abthropometric &&
                          !!rehabData?.abthropometric.identified_problems
                            ? rehabData?.abthropometric.identified_problems
                            : ""
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3 className="fs-6 fw-bold">Short Term Goals </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("short_term_goals")}
                        defaultValue={
                          !!rehabData?.abthropometric &&
                          !!rehabData?.abthropometric.short_term_goals
                            ? rehabData?.abthropometric.short_term_goals
                            : ""
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3 className="fs-6 fw-bold">Long Term Goals </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("long_term_goals")}
                        defaultValue={
                          !!rehabData?.abthropometric &&
                          !!rehabData?.abthropometric.long_term_goals
                            ? rehabData?.abthropometric.long_term_goals
                            : ""
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3 className="fs-6 fw-bold">Treatment Plan </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("treatment_plan")}
                        defaultValue={
                          !!rehabData?.abthropometric &&
                          !!rehabData?.abthropometric.treatment_plan
                            ? rehabData?.abthropometric.treatment_plan
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

export default Form2;
