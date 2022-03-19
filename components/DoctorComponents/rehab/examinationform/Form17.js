import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form17 = ({ appointmentId }) => {
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
  const submit_form17 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        wound_assessment: {
          slough: data.slough,
          size: data.size,
          depth: data.depth,
          color: data.color,
          recucing_relieving_devices: data.recucing_relieving_devices,
          undermining: data.undermining,
          epitheliazation_in_process: data.epitheliazation_in_process,
          describe_device: data.describe_device,
          dressing_tobe_used: data.dressing_tobe_used,
          barriers_to_progress: data.barriers_to_progress,
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          describe_surrounding_tissue: data.describe_surrounding_tissue,
          signs_of_infection: data.signs_of_infection,
          location: data.location,
          type_of_ulcer: data.type_of_ulcer,
          pain: data.pain,
          amount: data.amount,
          identified_problems: data.identified_problems,
          odor: data.odor,
          positioning_concerns: data.positioning_concerns,
          thickness_of_ulcer: data.thickness_of_ulcer,
          tunnelling: data.tunnelling,
          granulation_tissue: data.granulation_tissue,
          stage: data.stage,
          necrotic_tissue: data.necrotic_tissue,
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
              <form onSubmit={handleSubmit(submit_form17)}>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Location:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("location")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment.location
                                ? appointment?.rehab?.wound_assessment.location
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Tyoe of Ulcer:</p>
                        </div>
                        <div className="col-md-6">
                          <select
                            className="form-select"
                            aria-label=" example"
                            {...register("type_of_ulcer")}
                          >
                            <option selected>Select</option>
                            <option value="Pressure ulcer">
                              Pressure ulcer
                            </option>
                            <option value="Stasis ulcer">Stasis ulcer</option>
                            <option value="Surgical wound">
                              Surgical wound
                            </option>
                            <option value="Wound due to trauma">
                              Wound due to trauma
                            </option>
                            <option value="Arterial ulcer">
                              Arterial ulcer
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Stage:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("stage")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment.stage
                                ? appointment?.rehab?.wound_assessment.stage
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Thickness of Non-Pressure Ulcer:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("thickness_of_ulcer")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment
                                .thickness_of_ulcer
                                ? appointment?.rehab?.wound_assessment
                                    .thickness_of_ulcer
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
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Size:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("size")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment.size
                                ? appointment?.rehab?.wound_assessment.size
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Depth:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("depth")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment.depth
                                ? appointment?.rehab?.wound_assessment.depth
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Tunneling:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("tunnelling")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment.tunnelling
                                ? appointment?.rehab?.wound_assessment
                                    .tunnelling
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Undermining:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("undermining")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment.undermining
                                ? appointment?.rehab?.wound_assessment
                                    .undermining
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
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Necrotic Tissue (%):</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("necrotic_tissue")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment
                                .necrotic_tissue
                                ? appointment?.rehab?.wound_assessment
                                    .necrotic_tissue
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Slough (%):</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("slough")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment.slough
                                ? appointment?.rehab?.wound_assessment.slough
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Granulation Tissue (%):</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("granulation_tissue")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment
                                .granulation_tissue
                                ? appointment?.rehab?.wound_assessment
                                    .granulation_tissue
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Epitheliazation in Process?</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("epitheliazation_in_process")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment
                                .epitheliazation_in_process
                                ? appointment?.rehab?.wound_assessment
                                    .epitheliazation_in_process
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <h3 className="mt-4 mb-4 text-center">Exudate</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Amount:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("amount")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment.amount
                                ? appointment?.rehab?.wound_assessment.amount
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Color:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("color")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment.color
                                ? appointment?.rehab?.wound_assessment.color
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Odor:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("odor")}
                            defaultValue={
                              !!appointment?.rehab?.wound_assessment &&
                              !!appointment?.rehab?.wound_assessment.odor
                                ? appointment?.rehab?.wound_assessment.odor
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <h3 className="mt-4 mb-4 text-center">PAIN</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="In Wound site?"
                            {...register("pain")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment.pain ===
                                "In Wound site?"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>In Wound site?</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="In Surrounding Tissue?"
                            {...register("pain")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment.pain ===
                                "In Surrounding Tissue?"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>In Surrounding Tissue?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">Describe surrounding tissue:</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("describe_surrounding_tissue")}
                        defaultValue={
                          !!appointment?.rehab?.wound_assessment &&
                          !!appointment?.rehab?.wound_assessment
                            .describe_surrounding_tissue
                            ? appointment?.rehab?.wound_assessment
                                .describe_surrounding_tissue
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <h3 className="mt-4 mb-4 text-center">Signs of infection</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Erythema"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "Erythema"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Erythema</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Induration"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "Induration"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Induration</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Cellulitis"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "Cellulitis"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Cellulitis</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Tenderness"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "Tenderness"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Tenderness</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Uncharacteristic odor"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "Uncharacteristic odor"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Uncharacteristic odor</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Increased Exudate"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "Increased Exudate"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Increased Exudate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Edema"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "Edema"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Edema</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Increased Heart Rate"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "Increased Heart Rate"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Increased Heart Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Bpm"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "Bpm"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Bpm</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="High blood pressure"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "High blood pressure"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>High blood pressure</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Other"
                            {...register("signs_of_infection")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .signs_of_infection === "Other"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Other</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <h3 className="mt-4 mb-4 text-center">
                    Presence of Pressure Recucing / Relieving Devices
                  </h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Bed"
                            {...register("recucing_relieving_devices")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .recucing_relieving_devices === "Bed"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Bed</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Wheelchair"
                            {...register("recucing_relieving_devices")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .recucing_relieving_devices === "Wheelchair"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Wheelchair</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Other"
                            {...register("recucing_relieving_devices")}
                            defaultChecked={
                              !!appointment?.rehab?.wound_assessment &&
                              appointment?.rehab?.wound_assessment
                                .recucing_relieving_devices === "Other"
                            }
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Other</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">Describe device in place:</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("describe_device")}
                        defaultValue={
                          !!appointment?.rehab?.wound_assessment &&
                          !!appointment?.rehab?.wound_assessment.describe_device
                            ? appointment?.rehab?.wound_assessment
                                .describe_device
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">Positioning Concerns:</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("positioning_concerns")}
                        defaultValue={
                          !!appointment?.rehab?.wound_assessment &&
                          !!appointment?.rehab?.wound_assessment
                            .positioning_concerns
                            ? appointment?.rehab?.wound_assessment
                                .positioning_concerns
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">Dressing to be used:</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("dressing_tobe_used")}
                        defaultValue={
                          !!appointment?.rehab?.wound_assessment &&
                          !!appointment?.rehab?.wound_assessment
                            .dressing_tobe_used
                            ? appointment?.rehab?.wound_assessment
                                .dressing_tobe_used
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">Barriers to Progress:</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("barriers_to_progress")}
                        defaultValue={
                          !!appointment?.rehab?.wound_assessment &&
                          !!appointment?.rehab?.wound_assessment
                            .barriers_to_progress
                            ? appointment?.rehab?.wound_assessment
                                .barriers_to_progress
                            : ""
                        }
                      />
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
                          !!appointment?.rehab?.wound_assessment &&
                          !!appointment?.rehab?.wound_assessment
                            .identified_problems
                            ? appointment?.rehab?.wound_assessment
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
                          !!appointment?.rehab?.wound_assessment &&
                          !!appointment?.rehab?.wound_assessment
                            .short_term_goals
                            ? appointment?.rehab?.wound_assessment
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
                          !!appointment?.rehab?.wound_assessment &&
                          !!appointment?.rehab?.wound_assessment.long_term_goals
                            ? appointment?.rehab?.wound_assessment
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
                          !!appointment?.rehab?.wound_assessment &&
                          !!appointment?.rehab?.wound_assessment.treatment_plan
                            ? appointment?.rehab?.wound_assessment
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

export default Form17;
