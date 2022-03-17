import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form2 = ({ appointmentId }) => {
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
  const submit_form2 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
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
      <div className="general-information-form relative p-6 flex-auto">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <form onSubmit={handleSubmit(submit_form2)}>
                <div className="gen-form">
                  <h3>Body composition assessment includes</h3>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3>Body Mass Index</h3>
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
                                  !!appointment?.rehab?.abthropometric &&
                                  !!appointment?.rehab?.abthropometric.height
                                    ? appointment?.rehab?.abthropometric.height
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
                                  !!appointment?.rehab?.abthropometric &&
                                  !!appointment?.rehab?.abthropometric.weight
                                    ? appointment?.rehab?.abthropometric.weight
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
                                  !!appointment?.rehab?.abthropometric &&
                                  !!appointment?.rehab?.abthropometric.bmi
                                    ? appointment?.rehab?.abthropometric.bmi
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
                      <h3>Impedence Measurement</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("impedence")}
                        defaultValue={
                          !!appointment?.rehab?.abthropometric &&
                          !!appointment?.rehab?.abthropometric.impedence
                            ? appointment?.rehab?.abthropometric.impedence
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3>Skin Fold Thickness Measurement</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("skin_fold")}
                        defaultValue={
                          !!appointment?.rehab?.abthropometric &&
                          !!appointment?.rehab?.abthropometric.skin_fold
                            ? appointment?.rehab?.abthropometric.skin_fold
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3>Body Dimension Includes</h3>

                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3>Girth Measurement </h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("body_dimension_grith")}
                        defaultValue={
                          !!appointment?.rehab?.abthropometric &&
                          !!appointment?.rehab?.abthropometric
                            .body_dimension_grith
                            ? appointment?.rehab?.abthropometric
                                .body_dimension_grith
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3>Length Measurement</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("body_dimension_length")}
                        defaultValue={
                          !!appointment?.rehab?.abthropometric &&
                          !!appointment?.rehab?.abthropometric
                            .body_dimension_length
                            ? appointment?.rehab?.abthropometric
                                .body_dimension_length
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="gen-form">
                  <div className="row align-items-start">
                    <div className="col-md-4">
                      <h3>Edema Measurement includes</h3>
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
                                !!appointment?.rehab?.abthropometric &&
                                !!appointment?.rehab?.abthropometric.edema_grith
                                  ? appointment?.rehab?.abthropometric
                                      .edema_grith
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
                                !!appointment?.rehab?.abthropometric &&
                                !!appointment?.rehab?.abthropometric
                                  .edema_palpation
                                  ? appointment?.rehab?.abthropometric
                                      .edema_palpation
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
                                !!appointment?.rehab?.abthropometric &&
                                !!appointment?.rehab?.abthropometric
                                  .edema_scales
                                  ? appointment?.rehab?.abthropometric
                                      .edema_scales
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
                                !!appointment?.rehab?.abthropometric &&
                                !!appointment?.rehab?.abthropometric
                                  .edema_volume
                                  ? appointment?.rehab?.abthropometric
                                      .edema_volume
                                  : ""
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3>Identified Problems</h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("identified_problems")}
                        defaultValue={
                          !!appointment?.rehab?.abthropometric &&
                          !!appointment?.rehab?.abthropometric
                            .identified_problems
                            ? appointment?.rehab?.abthropometric
                                .identified_problems
                            : ""
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3>Short Term Goals </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("short_term_goals")}
                        defaultValue={
                          !!appointment?.rehab?.abthropometric &&
                          !!appointment?.rehab?.abthropometric.short_term_goals
                            ? appointment?.rehab?.abthropometric
                                .short_term_goals
                            : ""
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3>Long Term Goals </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("long_term_goals")}
                        defaultValue={
                          !!appointment?.rehab?.abthropometric &&
                          !!appointment?.rehab?.abthropometric.long_term_goals
                            ? appointment?.rehab?.abthropometric.long_term_goals
                            : ""
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3>Treatment Plan </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("treatment_plan")}
                        defaultValue={
                          !!appointment?.rehab?.abthropometric &&
                          !!appointment?.rehab?.abthropometric.treatment_plan
                            ? appointment?.rehab?.abthropometric.treatment_plan
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
