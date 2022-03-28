import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form8 = ({ appointmentId }) => {
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
  const submit_form8 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        gait_assesment: {
          foot_flat_ankle: data.foot_flat_ankle.toString(),
          heel_strike_trunk: data.heel_strike_trunk.toString(),
          acceleration_knee: data.acceleration_knee.toString(),
          heel_strike_ankle: data.heel_strike_ankle.toString(),
          heel_of_ankle: data.heel_of_ankle.toString(),
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          acceleration_hip: data.acceleration_hip.toString(),
          long_term_goals: data.long_term_goals,
          heel_strike_knee: data.heel_strike_knee.toString(),
          identified_problems: data.identified_problems,
          acceleration_ankle: data.acceleration_ankle.toString(),
          foot_flat_knee: data.foot_flat_knee.toString(),
          foot_flat_hip: data.foot_flat_hip.toString(),
          heel_strike_hip: data.heel_strike_hip.toString(),
          foot_flat_trunk: data.foot_flat_trunk.toString(),
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
              <form onSubmit={handleSubmit(submit_form8)}>
                <div className="gen-form-table mt-4 mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">Gait Assessment</p>
                  </div>
                  <table className="table table-bordered border-dark">
                    <tr className="text-center">
                      <th></th>
                      <th className="py-3">Ankle</th>
                      <th className="py-3">Knee</th>
                      <th className="py-3">Hip</th>
                      <th className="py-3">Trunk</th>
                    </tr>
                    <tr>
                      <td rowSpan="3">Heel Strike To Foot Flat</td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Foot Slap"
                              {...register("heel_strike_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_ankle
                                )?.includes("Foot Slap")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Foot Slap</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Knee Hyperextension"
                              {...register("heel_strike_knee")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_knee
                                )?.includes("Knee Hyperextension")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Knee Hyperextension</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Excessive Flexion"
                              {...register("heel_strike_hip")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_hip
                                )?.includes("Excessive Flexion")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Excessive Flexion</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Lateral Trunk Lean"
                              {...register("heel_strike_trunk")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_trunk
                                )?.includes("Lateral Trunk Lean")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Lateral Trunk Lean</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Toes First"
                              {...register("heel_strike_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_ankle
                                )?.includes("Toes First")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Toes First</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Limited Flexion"
                              {...register("heel_strike_hip")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_hip
                                )?.includes("Limited Flexion")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Limited Flexion</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Backward Trunk Lean"
                              {...register("heel_strike_trunk")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_trunk
                                )?.includes("Backward Trunk Lean")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Backward Trunk Lean</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Foot Flat"
                              {...register("heel_strike_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_ankle
                                )?.includes("Foot Flat")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Foot Flat</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Forward Trunk Lean"
                              {...register("heel_strike_trunk")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_trunk
                                )?.includes("Forward Trunk Lean")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Forward Trunk Lean</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan="5">Foot Flat To Mid Stance</td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Excessive Positional"
                              {...register("foot_flat_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .foot_flat_ankle
                                )?.includes("Excessive Positional")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Excessive Positional</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Knee Hyper Extension"
                              {...register("foot_flat_knee")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .foot_flat_knee
                                )?.includes("Knee Hyper Extension")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Knee Hyper Extension</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Limited Hip Extension"
                              {...register("foot_flat_hip")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .foot_flat_hip
                                )?.includes("Limited Hip Extension")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Limited Hip Extension</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Palnter Flexion"
                              {...register("foot_flat_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .foot_flat_ankle
                                )?.includes("Palnter Flexion")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Palnter Flexion</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Internal Rotation"
                              {...register("foot_flat_trunk")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .foot_flat_trunk
                                )?.includes("Internal Rotation")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Internal Rotation</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Heel Lift in Mid Stance"
                              {...register("foot_flat_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .foot_flat_ankle
                                )?.includes("Heel Lift in Mid Stance")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Heel Lift in Mid Stance</p>
                          </div>
                        </div>
                      </td>
                      <td></td>

                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="External Rotation"
                              {...register("foot_flat_hip")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .foot_flat_hip
                                )?.includes("External Rotation")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>External Rotation</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Excessive Dorsiflexion"
                              {...register("foot_flat_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .foot_flat_ankle
                                )?.includes("Excessive Dorsiflexion")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Excessive Dorsiflexion</p>
                          </div>
                        </div>
                      </td>
                      <td></td>

                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Abduction"
                              {...register("foot_flat_hip")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .foot_flat_hip
                                )?.includes("Abduction")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Abduction</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Toe Clawing"
                              {...register("foot_flat_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_knee
                                )?.includes("Knee Hyperextension")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Toe Clawing</p>
                          </div>
                        </div>
                      </td>
                      <td></td>

                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Adduction"
                              {...register("foot_flat_hip")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .foot_flat_hip
                                )?.includes("Adduction")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Adduction</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td rowSpan="3">Heel Off To Toe Off</td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="No Roll Off"
                              {...register("heel_of_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_of_ankle
                                )?.includes("No Roll Off")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>No Roll Off</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Insufficient Transfer of Excessive Knee Flexion"
                              {...register("heel_of_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_of_ankle
                                )?.includes(
                                  "Insufficient Transfer of Excessive Knee Flexion"
                                )
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>
                              Insufficient Transfer of Excessive Knee Flexion
                            </p>
                          </div>
                        </div>
                      </td>
                      <td></td>

                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Weight From Lateral Heel to Medial Forefoot"
                              {...register("heel_of_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_of_ankle
                                )?.includes(
                                  "Weight From Lateral Heel to Medial Forefoot"
                                )
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Weight From Lateral Heel to Medial Forefoot</p>
                          </div>
                        </div>
                      </td>
                      <td></td>

                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td rowSpan="3">Acceleration To Mid Swing</td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Toe Drag Excessive Knee Flexion"
                              {...register("acceleration_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .acceleration_ankle
                                )?.includes("Toe Drag Excessive Knee Flexion")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Toe Drag Excessive Knee Flexion</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Circumduction"
                              {...register("acceleration_hip")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .acceleration_hip
                                )?.includes("Circumduction")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Circumduction</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Varus"
                              {...register("acceleration_ankle")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_knee
                                )?.includes("Knee Hyperextension")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Varus</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Limited Knee Flexion"
                              {...register("acceleration_knee")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_knee
                                )?.includes("Knee Hyperextension")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Limited Knee Flexion</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Hip Hiking"
                              {...register("acceleration_hip")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_knee
                                )?.includes("Knee Hyperextension")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Hip Hiking</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Limited Knee Flexion"
                              {...register("acceleration_knee")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_knee
                                )?.includes("Knee Hyperextension")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Limited Knee Flexion</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Excessive Hip Flexion"
                              {...register("acceleration_hip")}
                              defaultChecked={
                                !!appointment?.rehab?.gait_assesment &&
                                makeArrfromString(
                                  appointment?.rehab?.gait_assesment
                                    .heel_strike_knee
                                )?.includes("Knee Hyperextension")
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p>Excessive Hip Flexion</p>
                          </div>
                        </div>
                      </td>
                      <td></td>
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
                          !!appointment?.rehab?.gait_assesment &&
                          !!appointment?.rehab?.gait_assesment
                            .identified_problems
                            ? appointment?.rehab?.gait_assesment
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
                          !!appointment?.rehab?.gait_assesment &&
                          !!appointment?.rehab?.gait_assesment.short_term_goals
                            ? appointment?.rehab?.gait_assesment
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
                          !!appointment?.rehab?.gait_assesment &&
                          !!appointment?.rehab?.gait_assesment.long_term_goals
                            ? appointment?.rehab?.gait_assesment.long_term_goals
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
                          !!appointment?.rehab?.gait_assesment &&
                          !!appointment?.rehab?.gait_assesment.treatment_plan
                            ? appointment?.rehab?.gait_assesment.treatment_plan
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

export default Form8;
