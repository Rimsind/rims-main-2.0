import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form1 = ({ appointmentId }) => {
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
  const submit_form1 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        aerobicCapacity: {
          angina: data.angina,
          oximetry: data.oximetry,
          describe_short_term_goals: data.describe_short_term_goals,
          sounds: data.sounds,
          shortTerm_transfer_task: data.shortTerm_transfer_task,
          during_bed_mobility: data.during_bed_mobility,
          gas_exchange: data.gas_exchange,
          shortTerm_ambulation_task: data.shortTerm_ambulation_task,
          blood_pressure: data.blood_pressure,
          respiratory_rhythm: data.respiratory_rhythm,
          shortTerm_standarized_test: data.shortTerm_standarized_test,
          shortTerm_at_rpe: data.shortTerm_at_rpe,
          breath_voice_sounds: data.breath_voice_sounds,
          cyanosis: data.cyanosis,
          claudication: data.claudication,
          respiratory_rate: data.respiratory_rate,
          rhythm: data.rhythm,
          identified_problems: data.identified_problems,
          during_standarized_test: data.during_standarized_test,
          heart_rate: data.heart_rate,
          respiratory_pattern: data.respiratory_pattern,
          during_transfer_task: data.during_transfer_task,
          at_rpe: data.at_rpe,
          shortTerm_bed_mobility: data.shortTerm_bed_mobility,
          during_ambulation_task: data.during_ambulation_task,
          longTerm_bed_mobility: data.longTerm_bed_mobility,
          longTerm_transfer_task: data.longTerm_transfer_task,
          longTerm_Ambulation_task: data.longTerm_Ambulation_task,
          longTerm_Standarized_test: data.longTerm_Standarized_test,
          longTerm_at_rpe: data.longTerm_at_rpe,
          longTerm_description: data.longTerm_description,
          aerobic_capacity_retraining:
            data.aerobic_capacity_retraining.toString(),
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
      console.log(err.message);
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

  const retrainingList = [
    "Bed Mobility Task",
    "Transfer Task",
    "ADL Task",
    "IADL Task",
    "Ambulation Task",
    "Treadmill Task",
    "Step Test Task",
    "Wheelchair Mobility Task",
  ];

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
              <form onSubmit={handleSubmit(submit_form1)}>
                <div>
                  <div className="gen-form mb-3">
                    <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                      <p className="fs-4 text-light lh-1 pt-2">
                        Aerobic Capacity with Functional Mobility Skill
                        Assessment
                      </p>
                    </div>
                    <div className="row align-items-start mb-3">
                      <div className="col-md-9">
                        <h3 className="fs-6 fw-bold">
                          Aerobic capacity during bed mobility (modified borg
                          RPE scale)
                        </h3>
                      </div>
                      <div className="col-md-3">
                        <select
                          className="form-select"
                          aria-label="default example"
                          {...register("during_bed_mobility")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .during_bed_mobility
                            }
                          >
                            {!!appointment?.rehab?.aerobicCapacity &&
                            appointment?.rehab?.aerobicCapacity
                              .during_bed_mobility
                              ? appointment?.rehab?.aerobicCapacity
                                  .during_bed_mobility
                              : "Select"}
                          </option>
                          <option value="0 - Nothing at all">
                            0 - Nothing at all
                          </option>
                          <option value="0.5 - Just noticeable">
                            0.5 - Just noticeable
                          </option>
                          <option value="1 - Very light">1 - Very light</option>
                          <option value="2 - Light">2 - Light</option>
                          <option value="3 - Moderate">3 - Moderate</option>
                          <option value="4 - Somewhat heavy">
                            4 - Somewhat heavy
                          </option>
                          <option value="5 - Heavy">5 - Heavy</option>
                          <option value="6">6</option>
                          <option value="7 - Very heavy">7 - Very heavy</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10 - Very, very heavy">
                            10 - Very, very heavy
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-start mb-3">
                      <div className="col-md-9">
                        <h3 className="fs-6 fw-bold">
                          Aerobic capacity during transfer task (modified borg
                          RPE scale)
                        </h3>
                      </div>
                      <div className="col-md-3">
                        <select
                          className="form-select"
                          aria-label="default example"
                          {...register("during_transfer_task")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .during_transfer_task
                            }
                          >
                            {!!appointment?.rehab?.aerobicCapacity &&
                            appointment?.rehab?.aerobicCapacity
                              .during_transfer_task
                              ? appointment?.rehab?.aerobicCapacity
                                  .during_transfer_task
                              : "Select"}
                          </option>
                          <option value="0 - Nothing at all">
                            0 - Nothing at all
                          </option>
                          <option value="0.5 - Just noticeable">
                            0.5 - Just noticeable
                          </option>
                          <option value="1 - Very light">1 - Very light</option>
                          <option value="2 - Light">2 - Light</option>
                          <option value="3 - Moderate">3 - Moderate</option>
                          <option value="4 - Somewhat heavy">
                            4 - Somewhat heavy
                          </option>
                          <option value="5 - Heavy">5 - Heavy</option>
                          <option value="6">6</option>
                          <option value="7 - Very heavy">7 - Very heavy</option>
                          <option value="7 - Very heavy">8</option>
                          <option value="9">9</option>
                          <option value="10 - Very, very heavy">
                            10 - Very, very heavy
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-start mb-3">
                      <div className="col-md-9">
                        <h3 className="fs-6 fw-bold">
                          Aerobic capacity during Ambulation task (modified borg
                          RPE scale)
                        </h3>
                      </div>
                      <div className="col-md-3">
                        <select
                          className="form-select"
                          aria-label="default example"
                          {...register("during_ambulation_task")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .during_ambulation_task
                            }
                          >
                            {!!appointment?.rehab?.aerobicCapacity &&
                            appointment?.rehab?.aerobicCapacity
                              .during_ambulation_task
                              ? appointment?.rehab?.aerobicCapacity
                                  .during_ambulation_task
                              : "Select"}
                          </option>
                          <option value="0 - Nothing at all">
                            0 - Nothing at all
                          </option>
                          <option value="0.5 - Just noticeable">
                            0.5 - Just noticeable
                          </option>
                          <option value="1 - Very light">1 - Very light</option>
                          <option value="2 - Light">2 - Light</option>
                          <option value="3 - Moderate">3 - Moderate</option>
                          <option value="4 - Somewhat heavy">
                            4 - Somewhat heavy
                          </option>
                          <option value="5 - Heavy">5 - Heavy</option>
                          <option value="6">6</option>
                          <option value="7 - Very heavy">7 - Very heavy</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10 - Very, very heavy">
                            10 - Very, very heavy
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="gen-form mb-3">
                    <div className="row justify-content-between align-items-start">
                      <div className="col-md-7">
                        <h3 className="fs-6 fw-bold">
                          Aerobic Capacity during standarized test includes
                        </h3>
                      </div>
                      <div className="col-md-2">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          {...register("during_standarized_test")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .during_standarized_test
                            }
                          >
                            {!!appointment?.rehab?.aerobicCapacity &&
                            appointment?.rehab?.aerobicCapacity
                              .during_standarized_test
                              ? appointment?.rehab?.aerobicCapacity
                                  .during_standarized_test
                              : "Select"}
                          </option>
                          <option value="3 Mint Walk Test">
                            3 Mint Walk Test
                          </option>
                          <option value="6 Mint Walk Test">
                            6 Mint Walk Test
                          </option>
                          <option value="9 Mint Walk Test">
                            9 Mint Walk Test
                          </option>
                          <option value="12 Mint Walk Test">
                            12 Mint Walk Test
                          </option>
                          <option value="Treadmill Test">Treadmill Test</option>
                          <option value="WC Mobility Test">
                            WC Mobility Test
                          </option>
                          <option value="Step Test">Step Test</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <p className="fs-6 fw-bold text-center">at RPE</p>
                      </div>
                      <div className="col-md-2">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          {...register("at_rpe")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity.at_rpe
                            }
                          >
                            {!!appointment?.rehab?.aerobicCapacity &&
                            appointment?.rehab?.aerobicCapacity.at_rpe
                              ? appointment?.rehab?.aerobicCapacity.at_rpe
                              : "Select"}
                          </option>
                          <option value="0 - Nothing at all">
                            0 - Nothing at all
                          </option>
                          <option value="0.5 - Just noticeable">
                            0.5 - Just noticeable
                          </option>
                          <option value="1 - Very light">1 - Very light</option>
                          <option value="2 - Light">2 - Light</option>
                          <option value="3 - Moderate">3 - Moderate</option>
                          <option value="4 - Somewhat heavy">
                            4 - Somewhat heavy
                          </option>
                          <option value="5 - Heavy">5 - Heavy</option>
                          <option value="6">6</option>
                          <option value="7 - Very heavy">7 - Very heavy</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10 - Very, very heavy">
                            10 - Very, very heavy
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-center mb-4">
                    <div className="col-md-12">
                      <h3 className="fs-6 fw-bold">
                        Cardiovascular and pulmonary signs and symptoms related
                        to increase oxygen demand
                      </h3>
                    </div>
                  </div>
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Blood pressure</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Text Area"
                                name="blood_pressure"
                                {...register("blood_pressure")}
                                defaultValue={
                                  !!appointment?.rehab?.aerobicCapacity &&
                                  !!appointment?.rehab?.aerobicCapacity
                                    .blood_pressure
                                    ? appointment?.rehab?.aerobicCapacity
                                        .blood_pressure
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">
                                    Breath & voice sounds
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("breath_voice_sounds")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!appointment?.rehab?.aerobicCapacity &&
                                    appointment?.rehab?.aerobicCapacity
                                      .breath_voice_sounds
                                  }
                                >
                                  {!!appointment?.rehab?.aerobicCapacity &&
                                  appointment?.rehab?.aerobicCapacity
                                    .breath_voice_sounds
                                    ? appointment?.rehab?.aerobicCapacity
                                        .breath_voice_sounds
                                    : "Select"}
                                </option>
                                <option value="Normal">Normal</option>
                                <option value="Abnormal">Abnormal</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Heart Rate</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Text Area"
                                name="heart_rate"
                                {...register("heart_rate")}
                                defaultValue={
                                  !!appointment?.rehab?.aerobicCapacity &&
                                  !!appointment?.rehab?.aerobicCapacity
                                    .heart_rate
                                    ? appointment?.rehab?.aerobicCapacity
                                        .heart_rate
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Cyanosis</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("cyanosis")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!appointment?.rehab?.aerobicCapacity &&
                                    appointment?.rehab?.aerobicCapacity.cyanosis
                                  }
                                >
                                  {!!appointment?.rehab?.aerobicCapacity &&
                                  appointment?.rehab?.aerobicCapacity.cyanosis
                                    ? appointment?.rehab?.aerobicCapacity
                                        .cyanosis
                                    : "Select"}
                                </option>
                                <option value="Central Cyanosis">
                                  Central Cyanosis
                                </option>
                                <option value="Peripheral Cyanosis">
                                  Peripheral Cyanosis
                                </option>
                                <option value="Differential Cyanosis">
                                  Differential Cyanosis
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Rhythm</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("rhythm")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!appointment?.rehab?.aerobicCapacity &&
                                    appointment?.rehab?.aerobicCapacity.rhythm
                                  }
                                >
                                  {!!appointment?.rehab?.aerobicCapacity &&
                                  appointment?.rehab?.aerobicCapacity.rhythm
                                    ? appointment?.rehab?.aerobicCapacity.rhythm
                                    : "Select"}
                                </option>
                                <option value="Normal">Normal</option>
                                <option value="Abnormal">Abnormal</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Gas Exchange</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("gas_exchange")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!appointment?.rehab?.aerobicCapacity &&
                                    appointment?.rehab?.aerobicCapacity
                                      .gas_exchange
                                  }
                                >
                                  {!!appointment?.rehab?.aerobicCapacity &&
                                  appointment?.rehab?.aerobicCapacity
                                    .gas_exchange
                                    ? appointment?.rehab?.aerobicCapacity
                                        .gas_exchange
                                    : "Select"}
                                </option>
                                <option value="Normal">Normal</option>
                                <option value="Abnormal">Abnormal</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Sounds</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("sounds")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!appointment?.rehab?.aerobicCapacity &&
                                    appointment?.rehab?.aerobicCapacity.sounds
                                  }
                                >
                                  {!!appointment?.rehab?.aerobicCapacity &&
                                  appointment?.rehab?.aerobicCapacity.sounds
                                    ? appointment?.rehab?.aerobicCapacity.sounds
                                    : "Select"}
                                </option>
                                <option value="Normal">Normal</option>
                                <option value="Abnormal">Abnormal</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">
                                    Respiratory pattern
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("respiratory_pattern")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!appointment?.rehab?.aerobicCapacity &&
                                    appointment?.rehab?.aerobicCapacity
                                      .respiratory_pattern
                                  }
                                >
                                  {!!appointment?.rehab?.aerobicCapacity &&
                                  appointment?.rehab?.aerobicCapacity
                                    .respiratory_pattern
                                    ? appointment?.rehab?.aerobicCapacity
                                        .respiratory_pattern
                                    : "Select"}
                                </option>
                                <option value="Apnea">Apnea</option>
                                <option value="Eupnea">Eupnea</option>
                                <option value="Orthopnea">Orthopnea</option>
                                <option value="Dyspnea">Dyspnea</option>
                                <option value="Hyperpnea">Hyperpnea</option>
                                <option value="Hyperventilation">
                                  Hyperventilation
                                </option>
                                <option value="Hypoventilation">
                                  Hypoventilation
                                </option>
                                <option value="TachypneaKussmaul's respiration">
                                  TachypneaKussmaul&apos;s respiration
                                </option>
                                <option value="Cheyne-stokes respiration">
                                  Cheyne-stokes respiration
                                </option>
                                <option value="Blot's respiration">
                                  Blot&apos;s respiration
                                </option>
                                <option value="Apneustic breathing">
                                  Apneustic breathing
                                </option>
                                <option value="Central neurogenic hyperventilation">
                                  Central neurogenic hyperventilation
                                </option>
                                <option value="Central neurogenic hypoventilation">
                                  Central neurogenic hypoventilation
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Angina</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("angina")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!appointment?.rehab?.aerobicCapacity &&
                                    appointment?.rehab?.aerobicCapacity.angina
                                  }
                                >
                                  {!!appointment?.rehab?.aerobicCapacity &&
                                  appointment?.rehab?.aerobicCapacity.angina
                                    ? appointment?.rehab?.aerobicCapacity.angina
                                    : "Select"}
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Respiratory Rate</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Text Area"
                                name="respiratory_rate"
                                {...register("respiratory_rate")}
                                defaultValue={
                                  !!appointment?.rehab?.aerobicCapacity &&
                                  !!appointment?.rehab?.aerobicCapacity
                                    .respiratory_rate
                                    ? appointment?.rehab?.aerobicCapacity
                                        .respiratory_rate
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Claudication</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("claudication")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!appointment?.rehab?.aerobicCapacity &&
                                    appointment?.rehab?.aerobicCapacity
                                      .claudication
                                  }
                                >
                                  {!!appointment?.rehab?.aerobicCapacity &&
                                  appointment?.rehab?.aerobicCapacity
                                    .claudication
                                    ? appointment?.rehab?.aerobicCapacity
                                        .claudication
                                    : "Select"}
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">
                                    Respiratory Rhythm
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("respiratory_rhythm")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!appointment?.rehab?.aerobicCapacity &&
                                    appointment?.rehab?.aerobicCapacity
                                      .respiratory_rhythm
                                  }
                                >
                                  {!!appointment?.rehab?.aerobicCapacity &&
                                  appointment?.rehab?.aerobicCapacity
                                    .respiratory_rhythm
                                    ? appointment?.rehab?.aerobicCapacity
                                        .respiratory_rhythm
                                    : "Select"}
                                </option>
                                <option value="Normal">Normal</option>
                                <option value="Abnormal">Abnormal</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Oximetry (%)</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Text Area"
                                name="oximetry"
                                {...register("oximetry")}
                                defaultValue={
                                  !!appointment?.rehab?.aerobicCapacity &&
                                  !!appointment?.rehab?.aerobicCapacity.oximetry
                                    ? appointment?.rehab?.aerobicCapacity
                                        .oximetry
                                    : ""
                                }
                              />
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
                      <h3 className="fs-6 fw-bold">Identified Problems</h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("identified_problems")}
                        defaultValue={
                          !!appointment?.rehab?.aerobicCapacity &&
                          !!appointment?.rehab?.aerobicCapacity
                            .identified_problems
                            ? appointment?.rehab?.aerobicCapacity
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
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for bed
                            mobility task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("shortTerm_bed_mobility")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!appointment?.rehab?.aerobicCapacity &&
                                appointment?.rehab?.aerobicCapacity
                                  .shortTerm_bed_mobility
                              }
                            >
                              {!!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .shortTerm_bed_mobility
                                ? appointment?.rehab?.aerobicCapacity
                                    .shortTerm_bed_mobility
                                : "Select"}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for
                            transfer task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("shortTerm_transfer_task")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!appointment?.rehab?.aerobicCapacity &&
                                appointment?.rehab?.aerobicCapacity
                                  .shortTerm_transfer_task
                              }
                            >
                              {!!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .shortTerm_transfer_task
                                ? appointment?.rehab?.aerobicCapacity
                                    .shortTerm_transfer_task
                                : "Select"}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for
                            ambulation task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("shortTerm_ambulation_task")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!appointment?.rehab?.aerobicCapacity &&
                                appointment?.rehab?.aerobicCapacity
                                  .shortTerm_ambulation_task
                              }
                            >
                              {!!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .shortTerm_ambulation_task
                                ? appointment?.rehab?.aerobicCapacity
                                    .shortTerm_ambulation_task
                                : "Select"}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row justify-content-between align-items-start">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate during standarized
                          </label>
                        </div>
                        <div className="col-md-2">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("shortTerm_standarized_test")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!appointment?.rehab?.aerobicCapacity &&
                                appointment?.rehab?.aerobicCapacity
                                  .shortTerm_standarized_test
                              }
                            >
                              {!!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .shortTerm_standarized_test
                                ? appointment?.rehab?.aerobicCapacity
                                    .shortTerm_standarized_test
                                : "Select"}
                            </option>
                            <option value="3 Mint Walk Test">
                              3 Mint Walk Test
                            </option>
                            <option value="6 Mint Walk Test">
                              6 Mint Walk Test
                            </option>
                            <option value="9 Mint Walk Test">
                              9 Mint Walk Test
                            </option>
                            <option value="12 Mint Walk Test">
                              12 Mint Walk Test
                            </option>
                            <option value="Treadmill Test">
                              Treadmill Test
                            </option>
                            <option value="WC Mobility Test">
                              WC Mobility Test
                            </option>
                            <option value="Step Test">Step Test</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <p className="fs-6 fw-bold text-center">at RPE</p>
                        </div>
                        <div className="col-md-2">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("shortTerm_at_rpe")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!appointment?.rehab?.aerobicCapacity &&
                                appointment?.rehab?.aerobicCapacity
                                  .shortTerm_at_rpe
                              }
                            >
                              {!!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .shortTerm_at_rpe
                                ? appointment?.rehab?.aerobicCapacity
                                    .shortTerm_at_rpe
                                : "Select"}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("describe_short_term_goals")}
                        defaultValue={
                          !!appointment?.rehab?.aerobicCapacity &&
                          !!appointment?.rehab?.aerobicCapacity
                            .describe_short_term_goals
                            ? appointment?.rehab?.aerobicCapacity
                                .describe_short_term_goals
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
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for bed
                            mobility task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("longTerm_bed_mobility")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!appointment?.rehab?.aerobicCapacity &&
                                appointment?.rehab?.aerobicCapacity
                                  .longTerm_bed_mobility
                              }
                            >
                              {!!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .longTerm_bed_mobility
                                ? appointment?.rehab?.aerobicCapacity
                                    .longTerm_bed_mobility
                                : "Select"}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for
                            transfer task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("longTerm_transfer_task")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!appointment?.rehab?.aerobicCapacity &&
                                appointment?.rehab?.aerobicCapacity
                                  .longTerm_transfer_task
                              }
                            >
                              {!!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .longTerm_transfer_task
                                ? appointment?.rehab?.aerobicCapacity
                                    .longTerm_transfer_task
                                : "Select"}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for
                            ambulation task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("longTerm_Ambulation_task")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!appointment?.rehab?.aerobicCapacity &&
                                appointment?.rehab?.aerobicCapacity
                                  .longTerm_Ambulation_task
                              }
                            >
                              {!!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .longTerm_Ambulation_task
                                ? appointment?.rehab?.aerobicCapacity
                                    .longTerm_Ambulation_task
                                : "Select"}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row justify-content-between align-items-start">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate during standarized
                          </label>
                        </div>
                        <div className="col-md-2">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("longTerm_Standarized_test")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!appointment?.rehab?.aerobicCapacity &&
                                appointment?.rehab?.aerobicCapacity
                                  .longTerm_Standarized_test
                              }
                            >
                              {!!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .longTerm_Standarized_test
                                ? appointment?.rehab?.aerobicCapacity
                                    .longTerm_Standarized_test
                                : "Select"}
                            </option>
                            <option value="3 Mint Walk Test">
                              3 Mint Walk Test
                            </option>
                            <option value="6 Mint Walk Test">
                              6 Mint Walk Test
                            </option>
                            <option value="9 Mint Walk Test">
                              9 Mint Walk Test
                            </option>
                            <option value="12 Mint Walk Test">
                              12 Mint Walk Test
                            </option>
                            <option value="Treadmill Test">
                              Treadmill Test
                            </option>
                            <option value="WC Mobility Test">
                              WC Mobility Test
                            </option>
                            <option value="Step Test">Step Test</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <p className="fs-6 fw-bold text-center">at RPE</p>
                        </div>
                        <div className="col-md-2">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("longTerm_at_rpe")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!appointment?.rehab?.aerobicCapacity &&
                                appointment?.rehab?.aerobicCapacity
                                  .longTerm_at_rpe
                              }
                            >
                              {!!appointment?.rehab?.aerobicCapacity &&
                              appointment?.rehab?.aerobicCapacity
                                .longTerm_at_rpe
                                ? appointment?.rehab?.aerobicCapacity
                                    .longTerm_at_rpe
                                : "Select"}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("longTerm_description")}
                        defaultValue={
                          !!appointment?.rehab?.aerobicCapacity &&
                          !!appointment?.rehab?.aerobicCapacity
                            .longTerm_description
                            ? appointment?.rehab?.aerobicCapacity
                                .longTerm_description
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
                      <div className="row align-items-start">
                        <div className="col-md-2">
                          <label className="mb-3 fs-6 fw-bold">
                            Aerobic capacity retraining for
                          </label>
                        </div>
                        <div className="col-md-10">
                          <div className="row mb-3">
                            {retrainingList.map((items, index) => (
                              <div className="col-md-3" key={index}>
                                <div className="form check form-check-inline">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value={items}
                                    defaultChecked={
                                      !!appointment?.rehab?.aerobicCapacity &&
                                      makeArrfromString(
                                        appointment?.rehab?.aerobicCapacity
                                          .aerobic_capacity_retraining
                                      )?.includes(items)
                                    }
                                    {...register("aerobic_capacity_retraining")}
                                  />
                                  <label className="ps-2">{items}</label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("treatment_plan")}
                        defaultValue={
                          !!appointment?.rehab?.aerobicCapacity &&
                          !!appointment?.rehab?.aerobicCapacity.treatment_plan
                            ? appointment?.rehab?.aerobicCapacity.treatment_plan
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

export default Form1;
