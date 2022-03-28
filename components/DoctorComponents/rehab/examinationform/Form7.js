import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
const Form7 = ({ appointmentId }) => {
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
  const submit_form7 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        postural_assessment: {
          fett: data.feet.toString(),
          knee: data.knee.toString(),
          pelvis: data.pelvis.toString(),
          lower_back: data.lower_back.toString(),
          upper_back: data.upper_back.toString(),
          thorax: data.thorax.toString(),
          spine: data.spine.toString(),
          abdomen: data.abdomen.toString(),
          shoulder: data.shoulder.toString(),
          head: data.head.toString(),
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
  const feetList = [
    "Hammer toes",
    "Hallux valgus",
    "Low ant arch",
    "Ant foot varus",
    "Pronated",
    "Supinated",
    "Flat Long arch",
    "Pigeon toes",
    "Medial Rotation",
    "Lat rotation",
    "Knock Knees",
  ];
  const kneeList = ["Hyperextension", "Flexion", "Bowlegs", "Tibial torsion"];
  const pelvisList = [
    "Leg in postural adduction",
    "Rotation",
    "Tilt",
    "Deviation",
  ];

  const lowBackList = ["Lordosis", "Flat Back", "Kyphosis", "Operation"];
  const upperBackList = [
    "Kyphosis",
    "Flat UP back",
    "Scaulae abducted",
    "Scalulae Elevated",
  ];
  const thoraxList = [
    "Depressed chest",
    "Elevated chest",
    "Rotation",
    "Deviation",
  ];
  const spineList = ["Total Curved", "Lumbar", "Thoracic", "Cervical"];
  const abdomenList = ["Protruding", "Scars"];
  const shoulderList = ["Low", "High", "Forward", "Med Rotated"];
  const headList = ["Forward", "Torticollis", "Tilt", "Rotation"];

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
              <form onSubmit={handleSubmit(submit_form7)}>
                <div className="gen-form mb-3">
                  <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
                    <p className="fs-4 text-light lh-1 pt-2">
                      Postural Assessment
                    </p>
                  </div>
                  <p className="fs-5 fw-bold mt-4 mb-4">Segmental Alignment:</p>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3 className="fs-6">Feet</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {feetList.map((items, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("feet")}
                                defaultChecked={
                                  !!appointment?.rehab?.postural_assessment &&
                                  makeArrfromString(
                                    appointment?.rehab?.postural_assessment.fett
                                  )?.includes(items)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {items}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3 className="fs-6">Knee</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {kneeList.map((items, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("knee")}
                                defaultChecked={
                                  !!appointment?.rehab?.postural_assessment &&
                                  makeArrfromString(
                                    appointment?.rehab?.postural_assessment.knee
                                  )?.includes(items)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {items}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3 className="fs-6">Pelvis</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {pelvisList.map((items, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("pelvis")}
                                defaultChecked={
                                  !!appointment?.rehab?.postural_assessment &&
                                  makeArrfromString(
                                    appointment?.rehab?.postural_assessment
                                      .pelvis
                                  )?.includes(items)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {items}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3 className="fs-6">Lowback</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {lowBackList.map((items, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("lower_back")}
                                defaultChecked={
                                  !!appointment?.rehab?.postural_assessment &&
                                  makeArrfromString(
                                    appointment?.rehab?.postural_assessment
                                      .lower_back
                                  )?.includes(items)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {items}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3 className="fs-6">Upperback</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {upperBackList.map((items, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("upper_back")}
                                defaultChecked={
                                  !!appointment?.rehab?.postural_assessment &&
                                  makeArrfromString(
                                    appointment?.rehab?.postural_assessment
                                      .upper_back
                                  )?.includes(items)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {items}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3 className="fs-6">Thorax</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {thoraxList.map((items, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("thorax")}
                                defaultChecked={
                                  !!appointment?.rehab?.postural_assessment &&
                                  makeArrfromString(
                                    appointment?.rehab?.postural_assessment
                                      .thorax
                                  )?.includes(items)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {items}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3 className="fs-6">Spine</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {spineList.map((items, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("spine")}
                                defaultChecked={
                                  !!appointment?.rehab?.postural_assessment &&
                                  makeArrfromString(
                                    appointment?.rehab?.postural_assessment
                                      .spine
                                  )?.includes(items)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {items}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3 className="fs-6">Abdomen</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {abdomenList.map((items, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("abdomen")}
                                defaultChecked={
                                  !!appointment?.rehab?.postural_assessment &&
                                  makeArrfromString(
                                    appointment?.rehab?.postural_assessment
                                      .abdomen
                                  )?.includes(items)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {items}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3 className="fs-6">Shoulder</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {shoulderList.map((items, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("shoulder")}
                                defaultChecked={
                                  !!appointment?.rehab?.postural_assessment &&
                                  makeArrfromString(
                                    appointment?.rehab?.postural_assessment
                                      .shoulder
                                  )?.includes(items)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {items}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3 className="fs-6">Head</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {headList.map((items, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("head")}
                                defaultChecked={
                                  !!appointment?.rehab?.postural_assessment &&
                                  makeArrfromString(
                                    appointment?.rehab?.postural_assessment.head
                                  )?.includes(items)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {items}
                              </label>
                            </div>
                          </div>
                        ))}
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
                          !!appointment?.rehab?.postural_assessment &&
                          !!appointment?.rehab?.postural_assessment
                            .identified_problems
                            ? appointment?.rehab?.postural_assessment
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
                          !!appointment?.rehab?.postural_assessment &&
                          !!appointment?.rehab?.postural_assessment
                            .short_term_goals
                            ? appointment?.rehab?.postural_assessment
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
                          !!appointment?.rehab?.postural_assessment &&
                          !!appointment?.rehab?.postural_assessment
                            .long_term_goals
                            ? appointment?.rehab?.postural_assessment
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
                          !!appointment?.rehab?.postural_assessment &&
                          !!appointment?.rehab?.postural_assessment
                            .treatment_plan
                            ? appointment?.rehab?.postural_assessment
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

export default Form7;
