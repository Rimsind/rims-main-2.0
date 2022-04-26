import { useForm } from "react-hook-form";

import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
import { scoreList } from "pages/api/rehabData";
const Form11 = ({ appointmentId, rehabData }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const submit_form11 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...rehabData,
        manual_muscle_assesment: {
          hip_flexion_score: data.hip_flexion_score,
          hip_flexion_strength: data.hip_flexion_strength,
          hip_extension_score: data.hip_extension_score,
          hip_extension_strength: data.hip_extension_strength,
          hip_abduction_score: data.hip_abduction_score,
          hip_abduction_strength: data.hip_abduction_strength,
          hip_externalRotation_score: data.hip_externalRotation_score,
          hip_externalRotation_strength: data.hip_externalRotation_strength,
          hip_internalRotation_score: data.hip_internalRotation_score,
          hip_internalRotation_strength: data.hip_internalRotation_strength,
          knee_flexion_score: data.knee_flexion_score,
          knee_flexion_strength: data.knee_flexion_strength,
          knee_extension_score: data.knee_extension_score,
          knee_extension_strength: data.knee_extension_strength,
          knee_straightLegRaise_score: data.knee_straightLegRaise_score,
          ankle_dorsiflexion_score: data.ankle_dorsiflexion_score,
          ankle_dorsiflexion_strength: data.ankle_dorsiflexion_strength,
          knee_straightLegRaise_strength: data.knee_straightLegRaise_strength,
          ankle_planterflexion_score: data.ankle_planterflexion_score,
          ankle_planterflexion_strength: data.ankle_planterflexion_strength,
          ankle_inversion_score: data.ankle_inversion_score,
          ankle_inversion_strength: data.ankle_inversion_strength,
          ankle_eversion_score: data.ankle_eversion_score,
          ankle_eversion_strength: data.ankle_eversion_strength,
          cervical_flexion_score: data.cervical_flexion_score,
          cervical_flexion_strength: data.cervical_flexion_strength,
          cervical_extension_score: data.cervical_extension_score,
          cervical_extension_strength: data.cervical_extension_strength,
          cervical_sideflexion_left_score: data.cervical_sideflexion_left_score,
          cervical_sideflexion_left_strength:
            data.cervical_sideflexion_left_strength,
          cervical_sideflexion_rigth_score:
            data.cervical_sideflexion_rigth_score,
          cervical_sideflexion_rigth_strength:
            data.cervical_sideflexion_rigth_strength,
          cervical_rotation_left_score: data.cervical_rotation_left_score,
          cervical_rotation_left_strength: data.cervical_rotation_left_strength,
          cervical_rotation_rigth_score: data.cervical_rotation_rigth_score,
          cervical_rotation_rigth_strength:
            data.cervical_rotation_rigth_strength,
          thoracic_flexion_score: data.thoracic_flexion_score,
          thoracic_flexion_strength: data.thoracic_flexion_strength,
          thoracic_extension_score: data.thoracic_extension_score,
          thoracic_extension_strength: data.thoracic_extension_strength,
          thoracic_sideFlexion_left_score: data.thoracic_sideFlexion_left_score,
          thoracic_sideFlexion_left_strength:
            data.thoracic_sideFlexion_left_strength,
          thoracic_sideFlexion_right_score:
            data.thoracic_sideFlexion_right_score,
          thoracic_sideFlexion_right_strength:
            data.thoracic_sideFlexion_right_strength,
          thoracic_rotation_left_score: data.thoracic_rotation_left_score,
          thoracic_rotation_left_strength: data.thoracic_rotation_left_strength,
          thoracic_rotation_right_score: data.thoracic_rotation_right_score,
          thoracic_rotation_rigth_strength:
            data.thoracic_rotation_rigth_strength,
          thoracic_kyposis_score: data.thoracic_kyposis_score,
          thoracic_kyposis_strength: data.thoracic_kyposis_strength,
          lumbar_sacralinclination_score: data.lumbar_sacralinclination_score,
          lumbar_sacralinclination_strength:
            data.lumbar_sacralinclination_strength,
          lumbar_standinglordosis_score: data.lumbar_standinglordosis_score,
          lumbar_standinglordosis_strength:
            data.lumbar_standinglordosis_strength,
          lumbar_standinghipflexion_score: data.lumbar_standinghipflexion_score,
          lumbar_standinghipflexion_strength:
            data.lumbar_standinghipflexion_strength,
          lumbar_flexionAMA_score: data.lumbar_flexionAMA_score,
          lumbar_flexionAMA_strength: data.lumbar_flexionAMA_strength,
          lumbar_extensionAMA_score: data.lumbar_extensionAMA_score,
          lumbar_extensionAMA_strength: data.lumbar_extensionAMA_strength,
          lumbar_flexion_curveangle_score: data.lumbar_flexion_curveangle_score,
          lumbar_flexion_curveangle_strength:
            data.lumbar_flexion_curveangle_strength,
          lumbar_extention_curveangle_score:
            data.lumbar_extention_curveangle_score,
          lumbar_extention_curveangle_strength:
            data.lumbar_extention_curveangle_strength,
          lumbar_sideflexion_left_score: data.lumbar_sideflexion_left_score,
          lumbar_sideflexion_left_strength:
            data.lumbar_sideflexion_left_strength,
          lumbar_sideflexion_right_score: data.lumbar_sideflexion_right_score,
          lumbar_sideflexion_right_strength:
            data.lumbar_sideflexion_right_strength,
          lumbar_rotation_left_score: data.lumbar_rotation_left_score,
          lumbar_rotation_left_strength: data.lumbar_rotation_left_strength,
          lumbar_rotation_right_score: data.lumbar_rotation_right_score,
          lumbar_rotation_right_strength: data.lumbar_rotation_right_strength,
          identified_problems: data.identified_problems,
          short_term_goals: data.short_term_goals,
          long_term_goals: data.long_term_goals,
          treatment_plan: data.treatment_plan,
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
              <form onSubmit={handleSubmit(submit_form11)}>
                <div className="gen-form-table mt-4 mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">
                      Manual Muscle Strength And Range of Motion Assessment
                    </p>
                  </div>
                  <table className="rehab-com-table">
                    <tr className="text-center">
                      <th></th>
                      <th></th>
                      <th className="text-center py-3">WNL Value</th>
                      <th className="text-center py-3">WFL Value</th>

                      <th className="text-center py-3">
                        Range Of Motion Score
                      </th>
                      <th className="text-center py-3">Strength</th>
                    </tr>

                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="5"
                        style={{ width: "70px" }}
                      >
                        HIP
                      </td>

                      <td>
                        <p>Flexion / Flexors</p>
                      </td>
                      <td>0-120</td>
                      <td>0-120</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .hip_flexion_score
                              ? rehabData?.manual_muscle_assesment
                                  .hip_flexion_score
                              : ""
                          }
                          {...register("hip_flexion_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("hip_flexion_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .hip_flexion_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .hip_flexion_strength
                              ? rehabData?.manual_muscle_assesment
                                  .hip_flexion_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>Extension / Extensors</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .hip_extension_score
                              ? rehabData?.manual_muscle_assesment
                                  .hip_extension_score
                              : ""
                          }
                          {...register("hip_extension_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("hip_extension_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .hip_extension_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .hip_extension_strength
                              ? rehabData?.manual_muscle_assesment
                                  .hip_extension_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>Abduction / Abductors</p>
                      </td>
                      <td>0-45</td>
                      <td>0-45</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .hip_abduction_score
                              ? rehabData?.manual_muscle_assesment
                                  .hip_abduction_score
                              : ""
                          }
                          {...register("hip_abduction_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("hip_abduction_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .hip_abduction_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .hip_abduction_strength
                              ? rehabData?.manual_muscle_assesment
                                  .hip_abduction_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>External Rotation / External Rotators</p>
                      </td>
                      <td>0-45</td>
                      <td>0-45</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .hip_externalRotation_score
                              ? rehabData?.manual_muscle_assesment
                                  .hip_externalRotation_score
                              : ""
                          }
                          {...register("hip_externalRotation_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("hip_externalRotation_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .hip_externalRotation_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .hip_externalRotation_strength
                              ? rehabData?.manual_muscle_assesment
                                  .hip_externalRotation_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>Internal Rotation / Internal Rotators</p>
                      </td>
                      <td>0-30</td>
                      <td>0-30</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .hip_internalRotation_score
                              ? rehabData?.manual_muscle_assesment
                                  .hip_internalRotation_score
                              : ""
                          }
                          {...register("hip_internalRotation_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("hip_internalRotation_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .hip_internalRotation_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .hip_internalRotation_strength
                              ? rehabData?.manual_muscle_assesment
                                  .hip_internalRotation_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>

                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="3"
                        style={{ width: "70px" }}
                      >
                        KNEE
                      </td>

                      <td>
                        <p>Flexion</p>
                      </td>
                      <td>0-145</td>
                      <td>0-145</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .knee_flexion_score
                              ? rehabData?.manual_muscle_assesment
                                  .knee_flexion_score
                              : ""
                          }
                          {...register("knee_flexion_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("knee_flexion_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .knee_flexion_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .knee_flexion_strength
                              ? rehabData?.manual_muscle_assesment
                                  .knee_flexion_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>Extension </p>
                      </td>
                      <td>145-0</td>
                      <td>145-0</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .knee_extension_score
                              ? rehabData?.manual_muscle_assesment
                                  .knee_extension_score
                              : ""
                          }
                          {...register("knee_extension_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("knee_extension_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .knee_extension_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .knee_extension_strength
                              ? rehabData?.manual_muscle_assesment
                                  .knee_extension_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>STRAIGHT LEG RAISE</p>
                      </td>
                      <td>0-90</td>
                      <td>0-90</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .knee_straightLegRaise_score
                              ? rehabData?.manual_muscle_assesment
                                  .knee_straightLegRaise_score
                              : ""
                          }
                          {...register("knee_straightLegRaise_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("knee_straightLegRaise_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .knee_straightLegRaise_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .knee_straightLegRaise_strength
                              ? rehabData?.manual_muscle_assesment
                                  .knee_straightLegRaise_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>

                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="4"
                        style={{ width: "70px" }}
                      >
                        ANKLE
                      </td>

                      <td>
                        <p>DORSIFLEXION/FLEXORS</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .ankle_dorsiflexion_score
                              ? rehabData?.manual_muscle_assesment
                                  .ankle_dorsiflexion_score
                              : ""
                          }
                          {...register("ankle_dorsiflexion_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("ankle_dorsiflexion_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .ankle_dorsiflexion_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .ankle_dorsiflexion_strength
                              ? rehabData?.manual_muscle_assesment
                                  .ankle_dorsiflexion_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>PLANTERFLEXION/FLEXORS</p>
                      </td>
                      <td>0-50</td>
                      <td>0-50</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .ankle_planterflexion_score
                              ? rehabData?.manual_muscle_assesment
                                  .ankle_planterflexion_score
                              : ""
                          }
                          {...register("ankle_planterflexion_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("ankle_planterflexion_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .ankle_planterflexion_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .ankle_planterflexion_strength
                              ? rehabData?.manual_muscle_assesment
                                  .ankle_planterflexion_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>INVERSION/INVERTORS</p>
                      </td>
                      <td>0-15</td>
                      <td>0-15</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .ankle_inversion_score
                              ? rehabData?.manual_muscle_assesment
                                  .ankle_inversion_score
                              : ""
                          }
                          {...register("ankle_inversion_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("ankle_inversion_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .ankle_inversion_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .ankle_inversion_strength
                              ? rehabData?.manual_muscle_assesment
                                  .ankle_inversion_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>EVERSION/EVERTORS</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .ankle_eversion_score
                              ? rehabData?.manual_muscle_assesment
                                  .ankle_eversion_score
                              : ""
                          }
                          {...register("ankle_eversion_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("ankle_eversion_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .ankle_eversion_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .ankle_eversion_strength
                              ? rehabData?.manual_muscle_assesment
                                  .ankle_eversion_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>

                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="6"
                        style={{ width: "70px" }}
                      >
                        CERVICAL
                      </td>

                      <td>
                        <p> FLEXION / FLEXORS</p>
                      </td>
                      <td>40-70</td>
                      <td>40-70</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .cervical_flexion_score
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_flexion_score
                              : ""
                          }
                          {...register("cervical_flexion_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("cervical_flexion_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .cervical_flexion_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .cervical_flexion_strength
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_flexion_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>EXTENSION / EXTENSORS</p>
                      </td>
                      <td>60-80</td>
                      <td>60-80</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .cervical_extension_score
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_extension_score
                              : ""
                          }
                          {...register("cervical_extension_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label=" example"
                          {...register("cervical_extension_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .cervical_extension_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .cervical_extension_strength
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_extension_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                      </td>
                      <td>40-50</td>
                      <td>40-50</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .cervical_sideflexion_left_score
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_sideflexion_left_score
                              : ""
                          }
                          {...register("cervical_sideflexion_left_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("cervical_sideflexion_left_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .cervical_sideflexion_left_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .cervical_sideflexion_left_strength
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_sideflexion_left_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                      </td>
                      <td>40-50</td>
                      <td>40-50</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .cervical_sideflexion_rigth_score
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_sideflexion_rigth_score
                              : ""
                          }
                          {...register("cervical_sideflexion_rigth_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("cervical_sideflexion_rigth_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .cervical_sideflexion_rigth_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .cervical_sideflexion_rigth_strength
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_sideflexion_rigth_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>ROTATION / ROTATORS (LEFT)</p>
                      </td>
                      <td>70-90</td>
                      <td>70-90</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .cervical_rotation_left_score
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_rotation_left_score
                              : ""
                          }
                          {...register("cervical_rotation_left_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("cervical_rotation_left_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .cervical_rotation_left_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .cervical_rotation_left_strength
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_rotation_left_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>ROTATION / ROTATORS (RIGHT)</p>
                      </td>
                      <td>70-90</td>
                      <td>70-90</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .cervical_rotation_rigth_score
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_rotation_rigth_score
                              : ""
                          }
                          {...register("cervical_rotation_rigth_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("cervical_rotation_rigth_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .cervical_rotation_rigth_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .cervical_rotation_rigth_strength
                              ? rehabData?.manual_muscle_assesment
                                  .cervical_rotation_rigth_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>

                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="7"
                        style={{ width: "70px" }}
                      >
                        THORACIC
                      </td>

                      <td>
                        <p> FLEXION / FLEXORS</p>
                      </td>
                      <td>20-30</td>
                      <td>20-30</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .thoracic_flexion_score
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_flexion_score
                              : ""
                          }
                          {...register("thoracic_flexion_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("thoracic_flexion_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .thoracic_flexion_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .thoracic_flexion_strength
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_flexion_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>EXTENSION / EXTENSORS</p>
                      </td>
                      <td>25-35</td>
                      <td>25-35</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .thoracic_extension_score
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_extension_score
                              : ""
                          }
                          {...register("thoracic_extension_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("thoracic_extension_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .thoracic_extension_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .thoracic_extension_strength
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_extension_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                      </td>
                      <td>20-25</td>
                      <td>20-25</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .thoracic_sideFlexion_left_score
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_sideFlexion_left_score
                              : ""
                          }
                          {...register("thoracic_sideFlexion_left_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("thoracic_sideFlexion_left_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .thoracic_sideFlexion_left_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .thoracic_sideFlexion_left_strength
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_sideFlexion_left_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                      </td>
                      <td>20-25</td>
                      <td>20-25</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .thoracic_sideFlexion_right_score
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_sideFlexion_right_score
                              : ""
                          }
                          {...register("thoracic_sideFlexion_right_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("thoracic_sideFlexion_right_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .thoracic_sideFlexion_right_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .thoracic_sideFlexion_right_strength
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_sideFlexion_right_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>ROTATION / ROTATORS (LEFT)</p>
                      </td>
                      <td>5-10</td>
                      <td>5-10</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .thoracic_rotation_left_score
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_rotation_left_score
                              : ""
                          }
                          {...register("thoracic_rotation_left_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("thoracic_rotation_left_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .thoracic_rotation_left_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .thoracic_rotation_left_strength
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_rotation_left_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>ROTATION / ROTATORS (RIGHT)</p>
                      </td>
                      <td>5-10</td>
                      <td>5-10</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .thoracic_rotation_right_score
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_rotation_right_score
                              : ""
                          }
                          {...register("thoracic_rotation_right_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("thoracic_rotation_rigth_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .thoracic_rotation_rigth_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .thoracic_rotation_rigth_strength
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_rotation_rigth_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#b4dcffa6" }}
                    >
                      <td>
                        <p>KYPOSIS POSTURE</p>
                      </td>
                      <td>30-40</td>
                      <td>30-40</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .thoracic_kyposis_score
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_kyposis_score
                              : ""
                          }
                          {...register("thoracic_kyposis_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("thoracic_kyposis_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .thoracic_kyposis_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .thoracic_kyposis_strength
                              ? rehabData?.manual_muscle_assesment
                                  .thoracic_kyposis_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>

                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="11"
                        style={{ width: "70px" }}
                      >
                        LUMBAR
                      </td>

                      <td>
                        <p> SACRAL INCLINATION ANGLE</p>
                      </td>
                      <td>15-30</td>
                      <td>15-30</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_sacralinclination_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_sacralinclination_score
                              : ""
                          }
                          {...register("lumbar_sacralinclination_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_sacralinclination_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .lumbar_sacralinclination_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_sacralinclination_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_sacralinclination_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>STANDING LORDOSIS</p>
                      </td>
                      <td>25-40</td>
                      <td>25-40</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_standinglordosis_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_standinglordosis_score
                              : ""
                          }
                          {...register("lumbar_standinglordosis_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_standinglordosis_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .lumbar_standinglordosis_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_standinglordosis_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_standinglordosis_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>STANDING HIP FLEXION</p>
                      </td>
                      <td>45-65</td>
                      <td>45-65</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_standinghipflexion_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_standinghipflexion_score
                              : ""
                          }
                          {...register("lumbar_standinghipflexion_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_standinghipflexion_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .hip_flexion_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_standinghipflexion_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_standinghipflexion_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>FLEXION (AMA method)</p>
                      </td>
                      <td>40-75</td>
                      <td>40-75</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_flexionAMA_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_flexionAMA_score
                              : ""
                          }
                          {...register("lumbar_flexionAMA_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_flexionAMA_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .lumbar_flexionAMA_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_flexionAMA_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_flexionAMA_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>EXTENSION (AMA method)</p>
                      </td>
                      <td>20-35</td>
                      <td>20-35</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_extensionAMA_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_extensionAMA_score
                              : ""
                          }
                          {...register("lumbar_extensionAMA_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_extensionAMA_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .lumbar_extensionAMA_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_extensionAMA_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_extensionAMA_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>FLEXION (curve angle method)</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_flexion_curveangle_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_flexion_curveangle_score
                              : ""
                          }
                          {...register("lumbar_flexion_curveangle_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_flexion_curveangle_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .lumbar_flexion_curveangle_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_flexion_curveangle_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_flexion_curveangle_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>EXTENSION (curve angle method)</p>
                      </td>
                      <td>60-75</td>
                      <td>60-75</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_extention_curveangle_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_extention_curveangle_score
                              : ""
                          }
                          {...register("lumbar_extention_curveangle_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_extention_curveangle_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .lumbar_extention_curveangle_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_extention_curveangle_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_extention_curveangle_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                      </td>
                      <td>15-35</td>
                      <td>15-35</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_sideflexion_left_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_sideflexion_left_score
                              : ""
                          }
                          {...register("lumbar_sideflexion_left_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_sideflexion_left_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .lumbar_sideflexion_left_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_sideflexion_left_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_sideflexion_left_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                      </td>
                      <td>15-35</td>
                      <td>15-35</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_sideflexion_right_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_sideflexion_right_score
                              : ""
                          }
                          {...register("lumbar_sideflexion_right_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_sideflexion_right_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .lumbar_sideflexion_right_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_sideflexion_right_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_sideflexion_right_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>ROTATION / ROTATORS (LEFT)</p>
                      </td>
                      <td>10-20</td>
                      <td>10-20</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_rotation_left_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_rotation_left_score
                              : ""
                          }
                          {...register("lumbar_rotation_left_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_rotation_left_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .lumbar_rotation_left_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_rotation_left_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_rotation_left_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#c1c7f3ab" }}
                    >
                      <td>
                        <p>ROTATION / ROTATORS (RIGHT)</p>
                      </td>
                      <td>10-20</td>
                      <td>10-20</td>
                      <td className="px-3 py-3">
                        <input
                          className="form-control border-1 border-dark"
                          type="text"
                          placeholder="Text Box"
                          defaultValue={
                            !!rehabData?.manual_muscle_assesment &&
                            !!rehabData?.manual_muscle_assesment
                              .lumbar_rotation_right_score
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_rotation_right_score
                              : ""
                          }
                          {...register("lumbar_rotation_right_score")}
                        />
                      </td>
                      <td className="px-3 py-3">
                        <select
                          className="form-select bg-light "
                          aria-label="example"
                          {...register("lumbar_rotation_right_strength")}
                        >
                          <option
                            defaultValue={
                              !!rehabData?.manual_muscle_assesment &&
                              rehabData?.manual_muscle_assesment
                                .lumbar_rotation_right_strength
                            }
                          >
                            {!!rehabData?.manual_muscle_assesment &&
                            rehabData?.manual_muscle_assesment
                              .lumbar_rotation_right_strength
                              ? rehabData?.manual_muscle_assesment
                                  .lumbar_rotation_right_strength
                              : ""}
                          </option>
                          {scoreList.map((items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  </table>
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
                          !!rehabData?.manual_muscle_assesment &&
                          !!rehabData?.manual_muscle_assesment
                            .identified_problems
                            ? rehabData?.manual_muscle_assesment
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
                          !!rehabData?.manual_muscle_assesment &&
                          !!rehabData?.manual_muscle_assesment.short_term_goals
                            ? rehabData?.manual_muscle_assesment
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
                          !!rehabData?.manual_muscle_assesment &&
                          !!rehabData?.manual_muscle_assesment.long_term_goals
                            ? rehabData?.manual_muscle_assesment.long_term_goals
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
                          !!rehabData?.manual_muscle_assesment &&
                          !!rehabData?.manual_muscle_assesment.treatment_plan
                            ? rehabData?.manual_muscle_assesment.treatment_plan
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

export default Form11;
