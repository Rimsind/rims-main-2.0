import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form4 = ({ appointmentId }) => {
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
  const submit_form4 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        arousal_assesment: {
          mini_mental_test: data.mini_mental_test,
          sustained: data.sustained,
          motivation_to_participate: data.motivation_to_participate,
          ability_to_recognise: data.ability_to_recognise,
          consciousness: data.consciousness,
          orientation: data.orientation,
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          judgement: data.judgement,
          communication: data.communication,
          preparation: data.preparation,
          alternating: data.alternating,
          identified_problems: data.identified_problems,
          production: data.production,
          focussed: data.focussed,
          selective: data.selective,
          attention: data.attention,
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
              <form onSubmit={handleSubmit(submit_form4)}>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Attention</h3>
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
                                {...register("attention")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .attention === "Normal"
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
                                {...register("attention")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .attention === "Impared"
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
                      <h3 className="fs-6">Focussed</h3>
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
                                {...register("focussed")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .focussed === "Normal"
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
                                {...register("focussed")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .focussed === "Impared"
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
                      <h3 className="fs-6">Sustained</h3>
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
                                {...register("sustained")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .sustained === "Normal"
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
                                {...register("sustained")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .sustained === "Impared"
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
                      <h3 className="fs-6">Selective</h3>
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
                                {...register("selective")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .selective === "Normal"
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
                                {...register("selective")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .selective === "Impared"
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
                      <h3 className="fs-6">Alternating</h3>
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
                                {...register("alternating")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .alternating === "Normal"
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
                                {...register("alternating")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .alternating === "Impared"
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
                      <h3 className="fs-6">Orientation</h3>
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
                                {...register("orientation")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .orientation === "Normal"
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
                                {...register("orientation")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .orientation === "Impared"
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
                      <h3 className="fs-6">
                        Ability To Recognise Time, Person, Place{" "}
                      </h3>
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
                                {...register("ability_to_recognise")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .ability_to_recognise === "Normal"
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
                                {...register("ability_to_recognise")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .ability_to_recognise === "Impared"
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
                    <div className="col-md-7">
                      <h3 className="fs-6">Consciousness</h3>
                    </div>
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="coma"
                                {...register("consciousness")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .consciousness === "coma"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Coma</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("consciousness")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .consciousness === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("consciousness")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .consciousness === "Impared"
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
                      <h3 className="fs-6">Motivation To Participate</h3>
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
                                {...register("motivation_to_participate")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .motivation_to_participate === "Normal"
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
                                {...register("motivation_to_participate")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .motivation_to_participate === "Impared"
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
                      <h3 className="fs-6">Communication</h3>
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
                                {...register("communication")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .communication === "Normal"
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
                                {...register("communication")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .communication === "Impared"
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
                  <p className="fs-5 fw-bold mt-4 mb-4">Problem Solving:</p>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Preparation</h3>
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
                                {...register("preparation")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .preparation === "Normal"
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
                                {...register("preparation")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .preparation === "Impared"
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
                      <h3 className="fs-6">Production</h3>
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
                                {...register("production")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .production === "Normal"
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
                                {...register("production")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .production === "Impared"
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
                      <h3 className="fs-6">Judgement</h3>
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
                                {...register("judgement")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .judgement === "Normal"
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
                                {...register("judgement")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .judgement === "Impared"
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
                  <p className="fs-5 fw-bold mt-4 mb-4">Short Term Memory:</p>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3 className="fs-6">Mini Mental Test</h3>
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
                                {...register("mini_mental_test")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .mini_mental_test === "Normal"
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
                                {...register("mini_mental_test")}
                                defaultChecked={
                                  !!appointment?.rehab?.arousal_assesment &&
                                  appointment?.rehab?.arousal_assesment
                                    .mini_mental_test === "Impared"
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
                          !!appointment?.rehab?.arousal_assesment &&
                          !!appointment?.rehab?.arousal_assesment
                            .identified_problems
                            ? appointment?.rehab?.arousal_assesment
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
                          !!appointment?.rehab?.arousal_assesment &&
                          !!appointment?.rehab?.arousal_assesment
                            .short_term_goals
                            ? appointment?.rehab?.arousal_assesment
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
                          !!appointment?.rehab?.arousal_assesment &&
                          !!appointment?.rehab?.arousal_assesment
                            .long_term_goals
                            ? appointment?.rehab?.arousal_assesment
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
                          !!appointment?.rehab?.arousal_assesment &&
                          !!appointment?.rehab?.arousal_assesment.treatment_plan
                            ? appointment?.rehab?.arousal_assesment
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

export default Form4;
