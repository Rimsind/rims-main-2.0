import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form14 = ({ appointmentId, rehabData }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const submit_form14 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...rehabData,
        orthotic_assessment: {
          type_of_device: data.orthotic_type_of_device,
          alignment_fitting: data.orthotic_alignment_fitting,
          patinet_ability: data.orthotic_patinet_ability,
          level_of_safety: data.orthotic_level_of_safety,
          movement_analysis: data.orthotic_movement_analysis,
          functional_effect: data.orthotic_functional_effect,
        },
        prosthetic_assessment: {
          type_of_device: data.prosthetic_type_of_device,
          alignment_fitting: data.prosthetic_alignment_fitting,
          patinet_ability: data.prosthetic_patinet_ability,
          level_of_safety: data.prosthetic_level_of_safety,
          movement_analysis: data.prosthetic_movement_analysis,
          functional_effect: data.prosthetic_functional_effect,
        },
        adaptive_equipment_assessment: {
          type_of_device: data.adaptive_type_of_device,
          alignment_fitting: data.adaptive_alignment_fitting,
          patinet_ability: data.adaptive_patinet_ability,
          level_of_safety: data.adaptive_level_of_safety,
          movement_analysis: data.adaptive_movement_analysis,
          functional_effect: data.adaptive_functional_effect,
        },
        wheel_chair_assessment: {
          A: data.A,
          B: data.B,
          C: data.C,
          E: data.E,
          F: data.F,
          G: data.G,
          H: data.H,
          I: data.I,
          J: data.J,
          K: data.K,
          L: data.L,
          M: data.M,
          D1: data.D1,
          N: data.N,
          D2: data.D2,
          O: data.O,
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          identified_problems: data.identified_problems,
          type: data.type,
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
              <form onSubmit={handleSubmit(submit_form14)}>
                <div className="gen-form mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">
                      Orthotic And Prosthetic Assessment
                    </p>
                  </div>
                  <h3 className="fs-6 fw-bold py-2">ORTHOTIC ASSESSMENT</h3>

                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">*</div>
                        <div className="col-md-6">
                          <h3 className="fs-6">TYPE OF DEVICE:</h3>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("orthotic_type_of_device")}
                            defaultValue={
                              !!rehabData?.orthotic_assessment &&
                              !!rehabData?.orthotic_assessment.type_of_device
                                ? rehabData?.orthotic_assessment.type_of_device
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>ALIGNMENT AND FITTING OF ORTHOSIS</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("orthotic_alignment_fitting")}
                            defaultValue={
                              !!rehabData?.orthotic_assessment &&
                              !!rehabData?.orthotic_assessment.alignment_fitting
                                ? rehabData?.orthotic_assessment
                                    .alignment_fitting
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>movement analysis with and without device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("orthotic_movement_analysis")}
                            defaultValue={
                              !!rehabData?.orthotic_assessment &&
                              !!rehabData?.orthotic_assessment.movement_analysis
                                ? rehabData?.orthotic_assessment
                                    .movement_analysis
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Patinet ability and care of the device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("orthotic_patinet_ability")}
                            defaultValue={
                              !!rehabData?.orthotic_assessment &&
                              !!rehabData?.orthotic_assessment.patinet_ability
                                ? rehabData?.orthotic_assessment.patinet_ability
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>
                            Functional effect and benefits of use of the device
                          </p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("orthotic_functional_effect")}
                            defaultValue={
                              !!rehabData?.orthotic_assessment &&
                              !!rehabData?.orthotic_assessment.functional_effect
                                ? rehabData?.orthotic_assessment
                                    .functional_effect
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Level of safety of the devices</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("orthotic_level_of_safety")}
                            defaultValue={
                              !!rehabData?.orthotic_assessment &&
                              !!rehabData?.orthotic_assessment.level_of_safety
                                ? rehabData?.orthotic_assessment.level_of_safety
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h3 className="general-information-form-title font-bold">
                    PROSTHETIC ASSESSMENT
                  </h3>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">*</div>
                        <div className="col-md-6">
                          <h3 className="fs-6">TYPE OF PROSTHESIS:</h3>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("prosthetic_type_of_device")}
                            defaultValue={
                              !!rehabData?.prosthetic_assessment &&
                              !!rehabData?.prosthetic_assessment.type_of_device
                                ? rehabData?.prosthetic_assessment
                                    .type_of_device
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>ALIGNMENT AND FITTING OF ORTHOSIS</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("prosthetic_alignment_fitting")}
                            defaultValue={
                              !!rehabData?.prosthetic_assessment &&
                              !!rehabData?.prosthetic_assessment
                                .alignment_fitting
                                ? rehabData?.prosthetic_assessment
                                    .alignment_fitting
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>movement analysis with and without device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("prosthetic_movement_analysis")}
                            defaultValue={
                              !!rehabData?.prosthetic_assessment &&
                              !!rehabData?.prosthetic_assessment
                                .movement_analysis
                                ? rehabData?.prosthetic_assessment
                                    .movement_analysis
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Patinet ability and care of the device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("prosthetic_patinet_ability")}
                            defaultValue={
                              !!rehabData?.prosthetic_assessment &&
                              !!rehabData?.prosthetic_assessment.patinet_ability
                                ? rehabData?.prosthetic_assessment
                                    .patinet_ability
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>
                            Functional effect and benefits of use of the device
                          </p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("prosthetic_functional_effect")}
                            defaultValue={
                              !!rehabData?.prosthetic_assessment &&
                              !!rehabData?.prosthetic_assessment
                                .functional_effect
                                ? rehabData?.prosthetic_assessment
                                    .functional_effect
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Level of safety of the devices</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("prosthetic_level_of_safety")}
                            defaultValue={
                              !!rehabData?.prosthetic_assessment &&
                              !!rehabData?.prosthetic_assessment.level_of_safety
                                ? rehabData?.prosthetic_assessment
                                    .level_of_safety
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h3 className="general-information-form-title font-bold">
                    ADAPTIVE EQUIPMENT ASSESSMENT
                  </h3>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">*</div>
                        <div className="col-md-6">
                          <h3 className="fs-6">TYPE OF DEVICE:</h3>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("adaptive_type_of_device")}
                            defaultValue={
                              !!rehabData?.adaptive_equipment_assessment &&
                              !!rehabData?.adaptive_equipment_assessment
                                .type_of_device
                                ? rehabData?.adaptive_equipment_assessment
                                    .type_of_device
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>ALIGNMENT AND FITTING OF ORTHOSIS</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("adaptive_alignment_fitting")}
                            defaultValue={
                              !!rehabData?.adaptive_equipment_assessment &&
                              !!rehabData?.adaptive_equipment_assessment
                                .alignment_fitting
                                ? rehabData?.adaptive_equipment_assessment
                                    .alignment_fitting
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>movement analysis with and without device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("adaptive_movement_analysis")}
                            defaultValue={
                              !!rehabData?.adaptive_equipment_assessment &&
                              !!rehabData?.adaptive_equipment_assessment
                                .movement_analysis
                                ? rehabData?.adaptive_equipment_assessment
                                    .movement_analysis
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Patinet ability and care of the device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("adaptive_patinet_ability")}
                            defaultValue={
                              !!rehabData?.adaptive_equipment_assessment &&
                              !!rehabData?.adaptive_equipment_assessment
                                .patinet_ability
                                ? rehabData?.adaptive_equipment_assessment
                                    .patinet_ability
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>
                            Functional effect and benefits of use of the device
                          </p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("adaptive_functional_effect")}
                            defaultValue={
                              !!rehabData?.adaptive_equipment_assessment &&
                              !!rehabData?.adaptive_equipment_assessment
                                .functional_effect
                                ? rehabData?.adaptive_equipment_assessment
                                    .functional_effect
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Level of safety of the devices</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("adaptive_level_of_safety")}
                            defaultValue={
                              !!rehabData?.adaptive_equipment_assessment &&
                              !!rehabData?.adaptive_equipment_assessment
                                .level_of_safety
                                ? rehabData?.adaptive_equipment_assessment
                                    .level_of_safety
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h3 className="general-information-form-title font-bold">
                    WHEEL CHAIR ASSESSMENT
                  </h3>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Manual"
                            {...register("type")}
                            defaultChecked={
                              !!rehabData?.wheel_chair_assessment &&
                              rehabData?.wheel_chair_assessment.type ===
                                "Manual"
                            }
                          />
                        </div>
                        <div className="col-md-11">
                          <p>Manual</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="MOTORIZED"
                            {...register("type")}
                            defaultChecked={
                              !!rehabData?.wheel_chair_assessment &&
                              rehabData?.wheel_chair_assessment.type ===
                                "MOTORIZED"
                            }
                          />
                        </div>
                        <div className="col-md-11">
                          <p>MOTORIZED</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="None"
                            {...register("type")}
                            defaultChecked={
                              !!rehabData?.wheel_chair_assessment &&
                              rehabData?.wheel_chair_assessment.type === "None"
                            }
                          />
                        </div>
                        <div className="col-md-11">
                          <p>None</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>A: Shoulder Width</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("A")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.A
                                ? rehabData?.wheel_chair_assessment.A
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>B: Chest Width</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("B")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.B
                                ? rehabData?.wheel_chair_assessment.B
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>C: Chect Depth (Front-Back)</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("C")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.C
                                ? rehabData?.wheel_chair_assessment.C
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>D1: Hip Width</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("D1")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.D1
                                ? rehabData?.wheel_chair_assessment.D1
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>D2: Degree of Hip Flexion</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("D2")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.D2
                                ? rehabData?.wheel_chair_assessment.D2
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>E: Between Knees</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("E")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.E
                                ? rehabData?.wheel_chair_assessment.E
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>F: Top to Head</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("F")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.F
                                ? rehabData?.wheel_chair_assessment.F
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>G: Occiput</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("G")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.G
                                ? rehabData?.wheel_chair_assessment.G
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>H: Top To Shoulder</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("H")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.H
                                ? rehabData?.wheel_chair_assessment.H
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>I: Acromium Process(Tip to Shoulder)</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("I")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.I
                                ? rehabData?.wheel_chair_assessment.I
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>J: Infeior Angie of Scapula</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("J")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.J
                                ? rehabData?.wheel_chair_assessment.J
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>K: Elbow</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("K")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.K
                                ? rehabData?.wheel_chair_assessment.K
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>L: Liac Crest</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("L")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.L
                                ? rehabData?.wheel_chair_assessment.L
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>M: Sacrum to Popliteal Fossa</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("M")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.M
                                ? rehabData?.wheel_chair_assessment.M
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>N: Knee to Heel</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("N")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.N
                                ? rehabData?.wheel_chair_assessment.N
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-8">
                          <p>O: Foot Length</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("O")}
                            defaultValue={
                              !!rehabData?.wheel_chair_assessment &&
                              !!rehabData?.wheel_chair_assessment.O
                                ? rehabData?.wheel_chair_assessment.O
                                : ""
                            }
                          />
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
                          !!rehabData?.wheel_chair_assessment &&
                          !!rehabData?.wheel_chair_assessment
                            .identified_problems
                            ? rehabData?.wheel_chair_assessment
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
                          !!rehabData?.wheel_chair_assessment &&
                          !!rehabData?.wheel_chair_assessment.long_term_goals
                            ? rehabData?.wheel_chair_assessment.long_term_goals
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
                          !!rehabData?.wheel_chair_assessment &&
                          !!rehabData?.wheel_chair_assessment.long_term_goals
                            ? rehabData?.wheel_chair_assessment.long_term_goals
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
                          !!rehabData?.wheel_chair_assessment &&
                          !!rehabData?.wheel_chair_assessment.treatment_plan
                            ? rehabData?.wheel_chair_assessment.treatment_plan
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

export default Form14;
