const SocialHistory = () => {
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

  return (
    <>
      <div className="accordion-item border rounded mt-2">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button border-0 bg-primary collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={{ color: "aliceblue" }}
          >
            <div className="row align-items-center">
              <div className="col-md-12">
                Social History & Living Environment
              </div>
            </div>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body text-muted">
            <form>
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">
                      Where do you live?
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {live_where.map((item, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="live_where"
                                value={item}
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
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">
                      With whom do you live?
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {live_with.map((item, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="live_with"
                                value={item}
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
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-centent-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">
                      Does your home have?
                    </h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {home_haves.map((item, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="home_haves"
                                value={item}
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
                          <div className="col-md-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="homeHave"
                              value="value9"
                            />
                          </div>
                          <div className="col-md-11">
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
                                  name="homeHaveText"
                                  placeholder=""
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
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-centent-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">How Many Steps?</h3>
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
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3 className="fs-6 fs-bold text-dark">Do You Use?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {do_uses.map((item, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="do_uses"
                                value={item}
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
              <div
                className="child-gen-form mt-3 mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <h3 className="fs-6 fs-bold text-dark">Cultural / Religious</h3>
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
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="child-gen-form-heading mb-3">
                <h5 className="fs-5 fs-bold text-dark">
                  Social / Health Habits
                </h5>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <h3 className="fs-6 fs-bold text-dark">
                        Do You Smoke Tobacco?
                      </h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="smokeTobacco"
                                value="No"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="smokeTobacco"
                                value="Occasionaly"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Occasionaly</p>
                            </div>
                          </div>
                        </div>
                        {/* <div className="col-md-3" >
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="smokeTobacco"
                                value="Occasionaly"
                                defaultChecked={
                                  !!socialHistory &&
                                  socialHistory.smokeTobacco === "Occasionaly"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">Occasionaly</p>
                            </div>
                          </div>
                        </div> */}
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="smokeTobacco"
                                value="Socially"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Socially</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="smokeTobacco"
                                value="Heavily"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Heavily</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <h3 className="fs-6 fs-bold text-dark">
                        Do You Drink Alcohol?
                      </h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="drinkAlcohol"
                                value="No"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="drinkAlcohol"
                                value="Occasionaly"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Occasionaly</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="drinkAlcohol"
                                value="Socially"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Socially</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="drinkAlcohol"
                                value="Heavily"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Heavily</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row ">
                    <div className="col-md-3">
                      <h3 className="fs-6 fs-bold text-dark">Excercise?</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exercise"
                                value="No"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exercise"
                                value="Yes"
                              />
                            </div>
                            <div className="col-md-8">
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
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-6">
                          <p className="space-x-4">How many minutes per day?</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            name="exerciseDurationDailyInMin"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form-soft-button">
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <div
                      className="right-button"
                      style={{ textAlign: "right" }}
                    >
                      <button type="submit" className="btn btn-success">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialHistory;
