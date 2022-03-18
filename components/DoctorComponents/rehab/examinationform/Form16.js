import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form16 = ({ appointmentId }) => {
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
  const submit_form16 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        ventilation_respiration_gas_exchange: {
          identified_problems: data.identified_problems,
          short_term_goals: data.short_term_goals,
          long_term_goals: data.long_term_goals,
          treatment_plan: data.treatment_plan,
          chest_wall_text: data.chest_wall_text,
          chest_wall_value: data.chest_wall_value,
          phonation_text: data.phonation_text,
          phonation_value: data.phonation_value,
          pulmonary_related_text: data.pulmonary_related_text,
          pulmonary_related_value: data.pulmonary_related_value,
          pulmonary_vital_text: data.pulmonary_vital_text,
          pulmonary_vital_value: data.pulmonary_vital_value,
          thoracoabdominal_text: data.thoracoabdominal_text,
          thoracoabdominal_value: data.thoracoabdominal_value,
          presence_level_text: data.presence_level_text,
          presence_level_value: data.presence_level_value,
          protect_airways_text: data.protect_airways_text,
          protect_airways_value: data.protect_airways_value,
          gas_exchange_text: data.gas_exchange_text,
          gas_exchange_value: data.gas_exchange_value,
          ventilatory_mechanism_text: data.ventilatory_mechanism_text,
          ventilatory_mechanism_value: data.ventilatory_mechanism_value,
          breath_voice_text: data.breath_voice_text,
          breath_voice_value: data.breath_voice_value,
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
      {" "}
      <div className="general-information-form relative p-6 flex-auto">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <form onSubmit={handleSubmit(submit_form16)}>
                <div className="gen-form-table mt-4">
                  <table className="table table-bordered">
                    <tr>
                      <th></th>
                      <th></th>
                      <th>WNL</th>
                      <th>NA</th>
                    </tr>

                    <tr>
                      <td>CHEST WALL AND RELATED STRUCTURES</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("chest_wall_text")}
                            defaultValue={
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange &&
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .chest_wall_text
                                ? appointment?.rehab
                                    ?.ventilation_respiration_gas_exchange
                                    .chest_wall_text
                                : ""
                            }
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="WNL"
                          {...register("chest_wall_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .chest_wall_value === "WNL"
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="NA"
                          {...register("chest_wall_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .chest_wall_value === "NA"
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>PHONATION</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("phonation_text")}
                            defaultValue={
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange &&
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .phonation_text
                                ? appointment?.rehab
                                    ?.ventilation_respiration_gas_exchange
                                    .phonation_text
                                : ""
                            }
                          />
                        </p>
                      </td>

                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="WNL"
                          {...register("phonation_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .phonation_value === "WNL"
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="NA"
                          {...register("phonation_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .phonation_value === "NA"
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>PULMONARY RELATED SYMPTOMS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("pulmonary_related_text")}
                            defaultValue={
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange &&
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .pulmonary_related_text
                                ? appointment?.rehab
                                    ?.ventilation_respiration_gas_exchange
                                    .pulmonary_related_text
                                : ""
                            }
                          />
                        </p>
                      </td>

                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="WNL"
                          {...register("pulmonary_related_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .pulmonary_related_value === "WNL"
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="NA"
                          {...register("pulmonary_related_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .pulmonary_related_value === "NA"
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>PULMONARY VITAL SIGNS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("pulmonary_vital_text")}
                            defaultValue={
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange &&
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .pulmonary_vital_text
                                ? appointment?.rehab
                                    ?.ventilation_respiration_gas_exchange
                                    .pulmonary_vital_text
                                : ""
                            }
                          />
                        </p>
                      </td>

                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="WNL"
                          {...register("pulmonary_vital_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .pulmonary_vital_value === "WNL"
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="NA"
                          {...register("pulmonary_vital_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .pulmonary_vital_value === "NA"
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>THORACOABDOMINAL VENTILATORY PATTERNS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("thoracoabdominal_text")}
                            defaultValue={
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange &&
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .thoracoabdominal_text
                                ? appointment?.rehab
                                    ?.ventilation_respiration_gas_exchange
                                    .thoracoabdominal_text
                                : ""
                            }
                          />
                        </p>
                      </td>

                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="WNL"
                          {...register("thoracoabdominal_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .thoracoabdominal_value === "WNL"
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="NA"
                          {...register("thoracoabdominal_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .thoracoabdominal_value === "NA"
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>PRESENCE AND LEVEL OF CYANOSIS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("presence_level_text")}
                            defaultValue={
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange &&
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .presence_level_text
                                ? appointment?.rehab
                                    ?.ventilation_respiration_gas_exchange
                                    .presence_level_text
                                : ""
                            }
                          />
                        </p>
                      </td>

                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="WNL"
                          {...register("presence_level_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .presence_level_value === "WNL"
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="NA"
                          {...register("presence_level_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .presence_level_value === "NA"
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Ability to clear and protect airways</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("protect_airways_text")}
                            defaultValue={
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange &&
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .protect_airways_text
                                ? appointment?.rehab
                                    ?.ventilation_respiration_gas_exchange
                                    .protect_airways_text
                                : ""
                            }
                          />
                        </p>
                      </td>

                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="WNL"
                          {...register("protect_airways_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .protect_airways_value === "WNL"
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="NA"
                          {...register("protect_airways_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .protect_airways_value === "NA"
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Gas exchange and oxygen level/transport</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("gas_exchange_text")}
                            defaultValue={
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange &&
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .gas_exchange_text
                                ? appointment?.rehab
                                    ?.ventilation_respiration_gas_exchange
                                    .gas_exchange_text
                                : ""
                            }
                          />
                        </p>
                      </td>

                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="WNL"
                          {...register("gas_exchange_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .gas_exchange_value === "WNL"
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="NA"
                          {...register("gas_exchange_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .gas_exchange_value === "NA"
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>pulmonary function and ventilatory mechanism</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("ventilatory_mechanism_text")}
                            defaultValue={
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange &&
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .ventilatory_mechanism_text
                                ? appointment?.rehab
                                    ?.ventilation_respiration_gas_exchange
                                    .ventilatory_mechanism_text
                                : ""
                            }
                          />
                        </p>
                      </td>

                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="WNL"
                          {...register("ventilatory_mechanism_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .ventilatory_mechanism_value === "WNL"
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="NA"
                          {...register("ventilatory_mechanism_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .ventilatory_mechanism_value === "NA"
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>BREATH AND VOICE SOUNDS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("breath_voice_text")}
                            defaultValue={
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange &&
                              !!appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .breath_voice_text
                                ? appointment?.rehab
                                    ?.ventilation_respiration_gas_exchange
                                    .breath_voice_text
                                : ""
                            }
                          />
                        </p>
                      </td>

                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="WNL"
                          {...register("breath_voice_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .breath_voice_value === "WNL"
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="NA"
                          {...register("breath_voice_value")}
                          defaultChecked={
                            !!appointment?.rehab
                              ?.ventilation_respiration_gas_exchange &&
                            appointment?.rehab
                              ?.ventilation_respiration_gas_exchange
                              .breath_voice_value === "NA"
                          }
                        />
                      </td>
                    </tr>
                  </table>
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
                          !!appointment?.rehab
                            ?.ventilation_respiration_gas_exchange &&
                          !!appointment?.rehab
                            ?.ventilation_respiration_gas_exchange
                            .identified_problems
                            ? appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
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
                          !!appointment?.rehab
                            ?.ventilation_respiration_gas_exchange &&
                          !!appointment?.rehab
                            ?.ventilation_respiration_gas_exchange
                            .short_term_goals
                            ? appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
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
                          !!appointment?.rehab
                            ?.ventilation_respiration_gas_exchange &&
                          !!appointment?.rehab
                            ?.ventilation_respiration_gas_exchange
                            .long_term_goals
                            ? appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
                                .long_term_goals
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
                          !!appointment?.rehab
                            ?.ventilation_respiration_gas_exchange &&
                          !!appointment?.rehab
                            ?.ventilation_respiration_gas_exchange
                            .treatment_plan
                            ? appointment?.rehab
                                ?.ventilation_respiration_gas_exchange
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

export default Form16;
