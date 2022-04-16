import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form5 = ({ appointmentId, rehabData }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const submit_form5 = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        rehab: {
          ...rehabData,
          cranial_peripheral_assesment: {
            trochlear: data.trochlear,
            peripheral_nerve_nxamination: data.peripheral_nerve_nxamination,
            hypoglossal: data.hypoglossal,
            occulomotor: data.occulomotor,
            olfactory: data.olfactory,
            optic: data.optic,
            short_term_goals: data.short_term_goals,
            treatment_plan: data.treatment_plan,
            long_term_goals: data.long_term_goals,
            accessory: data.accessory,
            trigeminal: data.trigeminal,
            facial_nerve: data.facial_nerve,
            vestibulocohlear: data.vestibulocohlear,
            identified_problems: data.identified_problems,
            abducens: data.abducens,
            vagus: data.vagus,
            glossophoryngeal: data.glossophoryngeal,
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
              <form onSubmit={handleSubmit(submit_form5)}>
                <div className="gen-form mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">
                      Cranial And Peripheral Nerve Assessment
                    </p>
                  </div>
                  <p className="fs-5 fw-bold mt-4 mb-4">
                    Cranial Nerve Examination:
                  </p>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Olfactory</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("olfactory")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .olfactory === "Normal"
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
                                {...register("olfactory")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .olfactory === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Optic</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("optic")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .optic === "Normal"
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
                                {...register("optic")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .optic === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Occulomotor</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("occulomotor")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .occulomotor === "Normal"
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
                                {...register("occulomotor")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .occulomotor === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Trochlear</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("trochlear")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .trochlear === "Normal"
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
                                {...register("trochlear")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .trochlear === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Trigeminal</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("trigeminal")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .trigeminal === "Normal"
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
                                {...register("trigeminal")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .trigeminal === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Abducens</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("abducens")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .abducens === "Normal"
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
                                {...register("abducens")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .abducens === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Facial Nerve</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("facial_nerve")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .facial_nerve === "Normal"
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
                                {...register("facial_nerve")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .facial_nerve === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Vestibulocohlear </h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("vestibulocohlear")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .vestibulocohlear === "Normal"
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
                                {...register("vestibulocohlear")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .vestibulocohlear === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Glossophoryngeal</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("glossophoryngeal")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .glossophoryngeal === "Normal"
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
                                {...register("glossophoryngeal")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .glossophoryngeal === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Vagus</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("vagus")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .vagus === "Normal"
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
                                {...register("vagus")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .vagus === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Accessory</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("accessory")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .accessory === "Normal"
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
                                {...register("accessory")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .accessory === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Hypoglossal</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("hypoglossal")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .hypoglossal === "Normal"
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
                                {...register("hypoglossal")}
                                defaultChecked={
                                  !!rehabData?.cranial_peripheral_assesment &&
                                  rehabData?.cranial_peripheral_assesment
                                    .hypoglossal === "Impared"
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
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <h3 className="fs-6">Peripheral Nerve Examination</h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("peripheral_nerve_nxamination")}
                        defaultValue={
                          !!rehabData?.cranial_peripheral_assesment &&
                          !!rehabData?.cranial_peripheral_assesment
                            .peripheral_nerve_nxamination
                            ? rehabData?.cranial_peripheral_assesment
                                .peripheral_nerve_nxamination
                            : ""
                        }
                      ></textarea>
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
                          !!rehabData?.cranial_peripheral_assesment &&
                          !!rehabData?.cranial_peripheral_assesment
                            .identified_problems
                            ? rehabData?.cranial_peripheral_assesment
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
                          !!rehabData?.cranial_peripheral_assesment &&
                          !!rehabData?.cranial_peripheral_assesment
                            .short_term_goals
                            ? rehabData?.cranial_peripheral_assesment
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
                          !!rehabData?.cranial_peripheral_assesment &&
                          !!rehabData?.cranial_peripheral_assesment
                            .long_term_goals
                            ? rehabData?.cranial_peripheral_assesment
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
                          !!rehabData?.cranial_peripheral_assesment &&
                          !!rehabData?.cranial_peripheral_assesment
                            .treatment_plan
                            ? rehabData?.cranial_peripheral_assesment
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

export default Form5;
