import axios from "axios";
import useSWR from "swr";
import { useAuth } from "context";
import { useRouter } from "next/router";
import { apiUrl } from "config/api";
import { useForm } from "react-hook-form";

const SocialHistory = ({ patientId, socialHistory }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const updateSocialHistory = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        socialHistory: {
          homeStepsIn: data.homeStepsIn,
          homeStepsOut: data.homeStepsOut,
          culturalBelief: data.culturalBelief,
          smokeTobacco: data.smokeTobacco,
          drinkAlcohol: data.drinkAlcohol,
          exercise: data.exercise,
          exerciseNoInWeek: data.exerciseNoInWeek,
          exerciseDurationDailyInMin: data.exerciseDurationDailyInMin,
          live_where: data.live_where.toString(),
          live_with: data.live_with.toString(),
          home_haves: data.home_haves.toString(),
          do_uses: data.do_uses.toString(),
        },
      };
      console.log(payload);

      const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      alert("Social History Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  const live_where = [
    "Private Home",
    "Rented Home",
    "Extended Care",
    "Duplex",
    "Apartment",
    "Flat",
    "Homeless",
    "Others",
  ];

  const live_with = [
    "Alone",
    "Relative(s)",
    "Friend(s)",
    "Child or Children",
    "Spouse",
    "Oldage Home",
    "Partner",
    "Brother(s)",
    "Sister(s)",
    "Others",
  ];

  const home_haves = [
    "One Level",
    "Two Level",
    "Multi Level",
    "Stairs, No Railing",
    "Ramps",
    "Elevation",
    "Elevators",
    "Stairs, Railing",
    "Uneven Terrain",
    "Others",
  ];

  const do_uses = [
    "Forearm Crutches",
    "Axillary Crutches",
    "Standard Walker",
    "Manual Wheelchair",
    "Quad Cane",
    "Regular Cane",
    "Front Wheel Walker",
    "Motorized Wheelchair",
    "Four Wheel Walker with Seat",
    "Glasses",
    "Left Hearing Aid",
    "Right Hearing Aid",
    "Others",
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
      <div className="general-information-form">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <form onSubmit={handleSubmit(updateSocialHistory)}>
                <div className="gen-form mb-3">
                  <div className="row">
                    <div className="col-md-3">
                      <p className="fs-5 fw-bold">Where do you live?</p>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        {live_where?.map((item, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="live_where"
                                  id="flexRadioDefault1"
                                  {...register("live_where")}
                                  value={item}
                                  defaultChecked={
                                    !!socialHistory &&
                                    makeArrfromString(
                                      socialHistory.live_where
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row">
                    <div className="col-md-3">
                      <p className="fs-5 fw-bold">With whom do you live?</p>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        {live_with?.map((item, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="live_with"
                                  id="flexRadioDefault1"
                                  {...register("live_with")}
                                  value={item}
                                  defaultChecked={
                                    !!socialHistory &&
                                    makeArrfromString(
                                      socialHistory.live_with
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row">
                    <div className="col-md-3">
                      <p className="fs-5 fw-bold">Does your home have?</p>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        {home_haves?.map((item, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="home_haves"
                                  id="flexRadioDefault1"
                                  {...register("home_haves")}
                                  value={item}
                                  defaultChecked={
                                    !!socialHistory &&
                                    makeArrfromString(
                                      socialHistory.home_haves
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="col-md-9">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="row justify-centent-between align-items-center">
                                <div className="col-md-5">
                                  <p className="space-x-4">
                                    Any Obstacles (List):
                                  </p>
                                </div>
                                <div className="col-md-7">
                                  <input
                                    type="text"
                                    className="form-control"
                                    {...register("homeHaveText")}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row">
                    <div className="col-md-3">
                      <p className="fs-5 fw-bold">How Many Steps?</p>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-8">
                              <p className="space-x-4">
                                No. Steps Outside The Home:
                              </p>
                            </div>
                            <div className="col-md-4">
                              <input
                                type="number"
                                className="form-control"
                                name="homeStepsOut"
                                {...register("homeStepsOut")}
                                defaultValue={
                                  !!socialHistory &&
                                  !!socialHistory.homeStepsOut
                                    ? socialHistory.homeStepsOut
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-8">
                              <p className="space-x-4">
                                No. Steps Inside The Home:
                              </p>
                            </div>
                            <div className="col-md-4">
                              <input
                                type="number"
                                className="form-control"
                                name="homeStepsIn"
                                {...register("homeStepsIn")}
                                defaultValue={
                                  !!socialHistory && !!socialHistory.homeStepsIn
                                    ? socialHistory.homeStepsIn
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
                  <div className="row">
                    <div className="col-md-3">
                      <p className="fs-5 fw-bold">Do You Use?</p>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        {do_uses?.map((item, index) => (
                          <div className="col-md-3" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="do_uses"
                                  id="flexRadioDefault1"
                                  value={item}
                                  {...register("do_uses")}
                                  defaultChecked={
                                    !!socialHistory &&
                                    makeArrfromString(
                                      socialHistory.do_uses
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="child-gen-form mt-3 mb-3">
                    <h3>Cultural / Religious</h3>
                    <div className="row">
                      <div className="col-md-4">
                        <p className="space-x-4">
                          Any cultural or religious beliefs or wishes that might
                          affect care?
                        </p>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="culturalBelief"
                          {...register("culturalBelief")}
                          defaultValue={
                            !!socialHistory && !!socialHistory.culturalBelief
                              ? socialHistory.culturalBelief
                              : ""
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="child-gen-form-heading mb-3">
                  <p className="fs-6">Social / Health Habits</p>
                  <div className="gen-form mb-3">
                    <div className="row">
                      <div className="col-md-3">
                        <p className="fs-5 fw-bold">Do You Smoke Tobacco?</p>
                      </div>
                      <div className="col-md-9">
                        <div className="row">
                          <div
                            className="col-md-3"
                            {...register("smokeTobacco")}
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="smokeTobacco"
                                  id="flexRadioDefault1"
                                  value="No"
                                  defaultChecked={
                                    !!socialHistory &&
                                    socialHistory.smokeTobacco === "No"
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">No</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-3"
                            {...register("smokeTobacco")}
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="smokeTobacco"
                                  id="flexRadioDefault1"
                                  value="Occasionally"
                                  defaultChecked={
                                    !!socialHistory &&
                                    socialHistory.smokeTobacco ===
                                      "Occasionally"
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">Occasionally</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-3"
                            {...register("smokeTobacco")}
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="smokeTobacco"
                                  id="flexRadioDefault1"
                                  value="Socially"
                                  defaultChecked={
                                    !!socialHistory &&
                                    socialHistory.smokeTobacco === "Socially"
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">Socialy</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-3"
                            {...register("smokeTobacco")}
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="smokeTobacco"
                                  id="flexRadioDefault1"
                                  value="Heavily"
                                  defaultChecked={
                                    !!socialHistory &&
                                    socialHistory.smokeTobacco === "Heavily"
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">Heavily</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gen-form mb-3">
                    <div className="row">
                      <div className="col-md-3">
                        <p className="fs-5 fw-bold">Do You Drink Alcohol?</p>
                      </div>
                      <div className="col-md-9">
                        <div className="row">
                          <div
                            className="col-md-3"
                            {...register("drinkAlcohol")}
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="drinkAlcohol"
                                  id="flexRadioDefault1"
                                  value="No"
                                  defaultChecked={
                                    !!socialHistory &&
                                    socialHistory.drinkAlcohol === "No"
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">No</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-3"
                            {...register("drinkAlcohol")}
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="drinkAlcohol"
                                  id="flexRadioDefault1"
                                  value="Occasionally"
                                  defaultChecked={
                                    !!socialHistory &&
                                    socialHistory.drinkAlcohol ===
                                      "Occasionally"
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">Occasionally</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-3"
                            {...register("drinkAlcohol")}
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="drinkAlcohol"
                                  id="flexRadioDefault1"
                                  value="Socially"
                                  defaultChecked={
                                    !!socialHistory &&
                                    socialHistory.drinkAlcohol === "Socially"
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">Socialy</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-3"
                            {...register("drinkAlcohol")}
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="drinkAlcohol"
                                  id="flexRadioDefault1"
                                  value="Heavily"
                                  defaultChecked={
                                    !!socialHistory &&
                                    socialHistory.drinkAlcohol === "Heavily"
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">Heavily</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gen-form mb-3">
                    <div className="row ">
                      <div className="col-md-3">
                        <p className="fs-5 fw-bold">Excercise?</p>
                      </div>
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-3" {...register("exercise")}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exercise"
                                  id="flexRadioDefault1"
                                  value="No"
                                  defaultChecked={
                                    !!socialHistory &&
                                    socialHistory.exercise === "No"
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">No</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3" {...register("exercise")}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exercise"
                                  id="flexRadioDefault1"
                                  value="Yes"
                                  defaultChecked={
                                    !!socialHistory &&
                                    socialHistory.exercise === "Yes"
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">Yes</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6"></div>
                        </div>
                        <div className="row justify-centent-between align-items-center mb-3">
                          <div className="col-md-6">
                            <p className="space-x-4">
                              If yes how many times per week?
                            </p>
                          </div>
                          <div className="col-md-6">
                            <input
                              type="number"
                              className="form-control"
                              name="exerciseNoInWeek"
                              {...register("exerciseNoInWeek")}
                              defaultValue={
                                !!socialHistory &&
                                !!socialHistory.exerciseNoInWeek
                                  ? socialHistory.exerciseNoInWeek
                                  : ""
                              }
                            />
                          </div>
                        </div>
                        <div className="row justify-centent-between align-items-center mb-3">
                          <div className="col-md-6">
                            <p className="space-x-4">
                              How many minutes per day?
                            </p>
                          </div>
                          <div className="col-md-6">
                            <input
                              type="number"
                              className="form-control"
                              name="exerciseDurationDailyInMin"
                              {...register("exerciseDurationDailyInMin")}
                              defaultValue={
                                !!socialHistory &&
                                !!socialHistory.exerciseDurationDailyInMin
                                  ? socialHistory.exerciseDurationDailyInMin
                                  : ""
                              }
                            />
                          </div>
                        </div>
                        {/* <div className="row justify-centent-between align-items-center">
                        <div className="col-md-6">
                          <p className="space-x-4">
                            (Beyond normal daily activities & Chores)?
                          </p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Describe exercise or activity"
                          />
                        </div>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form-soft-button mt-3 text-end">
                  <button type="submit" className="btn btn-success">
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

export default SocialHistory;
