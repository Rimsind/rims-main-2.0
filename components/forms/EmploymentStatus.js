const EmploymentStatus = () => {
  const work_involves = [
    "Prolonged Standing",
    "Working with bent neck",
    "Lifting light object",
    "Prolonged Sitting",
    "Frequent typing",
    "Lifting heavy object",
    "Prolonged Walking",
    "Repetitive overhead work",
    "Prolonged Driving",
    "Excessive reaching",
    "Carrying heavy object",
    "Prolonged forward bending",
    "Frequent hand grasping",
    "Repetitive pushing/pulling",
    "Exposure to",
    "Climbing ladders",
    "Repetitive arm motions",
    "Excessive stair climbing",
    "Repetitive foot motions",
    "Others",
  ];

  return (
    <>
      <form>
        <div
          className="gen-form mb-3"
          style={{ borderBottom: "1px solid #bbbaba" }}
        >
          <div className="row justify-content-between align-items-start">
            <div className="col-md-3">
              <h3 className="fs-6 fs-bold text-dark">Work Status</h3>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="workStatus"
                        value="Work Full Time"
                      />
                    </div>
                    <div className="col-md-9">
                      <p className="space-x-4">Work Full Time</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="workStatus"
                        value="Work Part Time"
                      />
                    </div>
                    <div className="col-md-10">
                      <p className="space-x-4">Work Part Time</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="workStatus"
                        value="Work Light Duty"
                      />
                    </div>
                    <div className="col-md-9">
                      <p className="space-x-4">Work Light Duty</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="workStatus"
                        value="Homemaker"
                      />
                    </div>
                    <div className="col-md-10">
                      <p className="space-x-4">Homemaker</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="workStatus"
                        value="Retired"
                      />
                    </div>
                    <div className="col-md-10">
                      <p className="space-x-4">Retired</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="workStatus"
                        value="Disabled"
                      />
                    </div>
                    <div className="col-md-10">
                      <p className="space-x-4">Disabled</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="workStatus"
                        value="Unemployed"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="space-x-4">Unemployed</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="workStatus"
                        value="Student"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="space-x-4">Student</p>
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
          <div className="row justify-content-between align-items-center mb-3">
            <div className="col-md-3">
              <h3 className="fs-6 fs-bold text-dark">Occupation?</h3>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                name="occupation"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="gen-form mb-3">
          <div className="row justify-centent-between align-items-start">
            <div className="col-md-3">
              <h3 className="fs-6 fs-bold text-dark">
                Your Work Involves (Check all that apply)
              </h3>
            </div>
            <div className="col-md-9">
              <div className="row">
                {work_involves.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="workInvolves"
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
              <div className="right-button" style={{ textAlign: "right" }}>
                <button type="submit" className="btn btn-success">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EmploymentStatus;
