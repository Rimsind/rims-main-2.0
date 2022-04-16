import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form3 = ({ appointmentId, rehabData }) => {
  const { auth } = useAuth();
  const { register, handleSubmit } = useForm();
  const submit_form3 = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        rehab: {
          ...rehabData,
          circulatory_assesment: {
            physiological_response: data.physiological_response,
            peripheral_venous: data.peripheral_venous,
            presence_of_bruits: data.presence_of_bruits,
            identified_problems: data.identified_problems,
            short_term_goals: data.short_term_goals,
            traetment_plan: data.traetment_plan,
            long_term_goals: data.long_term_goals,
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
              <form onSubmit={handleSubmit(submit_form3)}>
                <div className="gen-form mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">
                      Circulatory Assessment Includes Arterial / Venous /
                      Lymphetic System
                    </p>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3 className="fs-6 fw-bold">
                        Physiological response to position change
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("physiological_response")}
                        defaultValue={
                          !!rehabData?.circulatory_assesment &&
                          !!rehabData?.circulatory_assesment
                            .physiological_response
                            ? rehabData?.circulatory_assesment
                                .physiological_response
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3 className="fs-6 fw-bold">
                        Peripheral venous, arterial and lymphatic circulation
                        assessment, skincolour and nail changes.
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("peripheral_venous")}
                        defaultValue={
                          !!rehabData?.circulatory_assesment &&
                          !!rehabData?.circulatory_assesment.peripheral_venous
                            ? rehabData?.circulatory_assesment.peripheral_venous
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3 className="fs-6 fw-bold">
                        Presence of bruits, abnormal heart sounds, rate or
                        rhytm,vital signs at rest
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("presence_of_bruits")}
                        defaultValue={
                          !!rehabData?.circulatory_assesment &&
                          !!rehabData?.circulatory_assesment.presence_of_bruits
                            ? rehabData?.circulatory_assesment
                                .presence_of_bruits
                            : ""
                        }
                      />
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
                          !!rehabData?.circulatory_assesment &&
                          !!rehabData?.circulatory_assesment.identified_problems
                            ? rehabData?.circulatory_assesment
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
                      <h3 className="fs-6 fw-bold">Short Term Goals </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("short_term_goals")}
                        defaultValue={
                          !!rehabData?.circulatory_assesment &&
                          !!rehabData?.circulatory_assesment.short_term_goals
                            ? rehabData?.circulatory_assesment.short_term_goals
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
                          !!rehabData?.circulatory_assesment &&
                          !!rehabData?.circulatory_assesment.long_term_goals
                            ? rehabData?.circulatory_assesment.long_term_goals
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
                        {...register("traetment_plan")}
                        defaultValue={
                          !!rehabData?.circulatory_assesment &&
                          !!rehabData?.circulatory_assesment.traetment_plan
                            ? rehabData?.circulatory_assesment.traetment_plan
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

export default Form3;
