import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
import { workBarrierList } from "pages/api/rehabData";
const Form13 = ({ appointmentId, rehabData }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const submit_form13 = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        rehab: {
          ...rehabData,
          environmental_barrier_assessmnet: {
            personal_care_provider: data.personal_care_provider,
            social_norms: data.social_norms,
            societal_attitudes: data.societal_attitudes,
            health_professionals: data.health_professionals,
            facilitators_assessmnet: data.facilitators_assessmnet,
            personal_assistants: data.personal_assistants,
            friends: data.friends,
            environmental_barriers: data.environmental_barriers,
            family_members: data.family_members,
            home_work_barrier: data.home_work_barrier.toString(),
            identified_problems: data.identified_problems,
            short_term_goals: data.short_term_goals,
            long_term_goals: data.long_term_goals,
            treatment_plans: data.treatment_plans,
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
              <form onSubmit={handleSubmit(submit_form13)}>
                <div className="gen-form mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">
                      Environmental Barrier Assessment
                    </p>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <h3 className="fs-6">ENVIRONMENTAL BARRIERS</h3>
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-select"
                        aria-label="default example"
                        {...register("environmental_barriers")}
                      >
                        <option
                          name="language"
                          defaultValue={
                            !!rehabData?.environmental_barrier_assessmnet &&
                            rehabData?.environmental_barrier_assessmnet
                              .environmental_barriers
                          }
                        >
                          {!!rehabData?.environmental_barrier_assessmnet &&
                          rehabData?.environmental_barrier_assessmnet
                            .environmental_barriers
                            ? rehabData?.environmental_barrier_assessmnet
                                .environmental_barriers
                            : "Select"}
                        </option>
                        <option value="0 No barrier">0 No barrier</option>
                        <option value="1 Mild barriers">1 Mild barriers</option>
                        <option value="2 Moderate barriers">
                          2 Moderate barriers
                        </option>
                        <option value="3 Severe barriers">
                          3 Severe barriers
                        </option>
                        <option value="4 Complete barriers">
                          4 Complete barriers
                        </option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <h3 className="fs-6">FACILITATORS ASSESSMNET</h3>
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-select"
                        aria-label="default example"
                        {...register("facilitators_assessmnet")}
                      >
                        <option
                          name="language"
                          defaultValue={
                            !!rehabData?.environmental_barrier_assessmnet &&
                            rehabData?.environmental_barrier_assessmnet
                              .facilitators_assessmnet
                          }
                        >
                          {!!rehabData?.environmental_barrier_assessmnet &&
                          rehabData?.environmental_barrier_assessmnet
                            .facilitators_assessmnet
                            ? rehabData?.environmental_barrier_assessmnet
                                .facilitators_assessmnet
                            : "Select"}
                        </option>
                        <option value="0 No facilitator">
                          0 No facilitator
                        </option>
                        <option value="+1 Mild facilitator">
                          +1 Mild facilitator
                        </option>
                        <option value="+2 Moderate facilitator">
                          +2 Moderate facilitator
                        </option>
                        <option value="+3 Severe facilitator">
                          +3 Severe facilitator
                        </option>
                        <option value="+4 Complete facilitator">
                          +4 Complete facilitator
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3 className="fs-6">
                        Individual attitudes of immediate family members
                      </h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("family_members")}
                        defaultValue={
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet
                            .family_members
                            ? rehabData?.environmental_barrier_assessmnet
                                .family_members
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3 className="fs-6">Individual attitudes of friends</h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("friends")}
                        defaultValue={
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet.friends
                            ? rehabData?.environmental_barrier_assessmnet
                                .friends
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3 className="fs-6">
                        Individual attitudes of personal care providers and
                      </h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("personal_care_provider")}
                        defaultValue={
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet
                            .personal_care_provider
                            ? rehabData?.environmental_barrier_assessmnet
                                .personal_care_provider
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3 className="fs-6">personal assistants</h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("personal_assistants")}
                        defaultValue={
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet
                            .personal_assistants
                            ? rehabData?.environmental_barrier_assessmnet
                                .personal_assistants
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3 className="fs-6">
                        Individual attitudes of health professionals
                      </h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("health_professionals")}
                        defaultValue={
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet
                            .health_professionals
                            ? rehabData?.environmental_barrier_assessmnet
                                .health_professionals
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3 className="fs-6">Societal attitudes</h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("societal_attitudes")}
                        defaultValue={
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet
                            .societal_attitudes
                            ? rehabData?.environmental_barrier_assessmnet
                                .societal_attitudes
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3 className="fs-6">
                        Social norms, practices and ideologies
                      </h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("social_norms")}
                        defaultValue={
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet
                            .social_norms
                            ? rehabData?.environmental_barrier_assessmnet
                                .social_norms
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center py-4">
                  <h3 className="general-information-form-title font-bold">
                    HOME AND WORK BARRIER ASSESSMNET
                  </h3>
                </div>

                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    {workBarrierList.map((items, index) => (
                      <div className="col-md-3" key={index}>
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={items}
                              {...register("home_work_barrier")}
                              defaultChecked={
                                !!rehabData?.environmental_barrier_assessmnet &&
                                makeArrfromString(
                                  rehabData?.environmental_barrier_assessmnet
                                    .home_work_barrier
                                )?.includes(items)
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">{items}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet
                            .identified_problems
                            ? rehabData?.environmental_barrier_assessmnet
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
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet
                            .short_term_goals
                            ? rehabData?.environmental_barrier_assessmnet
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
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet
                            .long_term_goals
                            ? rehabData?.environmental_barrier_assessmnet
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
                        {...register("treatment_plans")}
                        defaultValue={
                          !!rehabData?.environmental_barrier_assessmnet &&
                          !!rehabData?.environmental_barrier_assessmnet
                            .treatment_plans
                            ? rehabData?.environmental_barrier_assessmnet
                                .treatment_plans
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

export default Form13;
