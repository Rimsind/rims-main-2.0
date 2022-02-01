const FunctionalStatus = () => {
  const option = ["Current", "Prior"];

  return (
    <>
      <div className="accordion-item border rounded mt-2">
        <h2 className="accordion-header" id="headingSix">
          <button
            className="accordion-button border-0 bg-primary collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
            style={{ color: "aliceblue" }}
          >
            <div className="row align-items-center">
              <div className="col-md-12">Current Functional Status</div>
            </div>
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body text-muted">
            <form>
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Current Functional Mobility
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Bed Mobility</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyBedMobility"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      Transfers (such as bed to chair, from bed to commode /
                      toilet)
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyTransfers"
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
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty with Walking / movement such as
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">On Ramps</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyRamps"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Gai (Walking)</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyGai"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      On Level Surfaces
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyLevelSurfaces"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">On Stairs</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyStairs"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      On Uneven Surfaces
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyUnevenSurfaces"
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
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Self-Care Activities Such As
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Bathing</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyBathing"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Dressing</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyDressing"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Toileting</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyToileting"
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
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Home Management Such As
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Household Chores</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyHouseholdChores"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Shopping</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyShopping"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      Driving / Transporting
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyDriving"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">
                      Care Of Dependents
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyCareOfDependents"
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
              <div className="gen-form mb-3">
                <div className="row justify-content-between align-items-start">
                  <h3 className="fs-5 fs-bold text-dark mb-3">
                    Any Difficulty With Community And Work Activities Such As
                  </h3>
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Work</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyWork"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">School</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultySchool"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Recreation</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyRecreation"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Sport</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultySport"
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
                  <div className="col-md-4">
                    <h3 className="fs-6 fs-bold text-dark">Play Activity</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {option.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="difficultyPlayActivity"
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

export default FunctionalStatus;
