import { BreadCrums } from "components/common/index";
import PathologySideBar from "components/common/PathologySideBar";

const AdvanceSettings = () => {
  return (
    <>
      <section className="patho-advance-setting">
        <div className="main-wrapper">
          <BreadCrums
            title="Home / Dashboard / Advance-Settings"
            title1="Advance Settings"
          />
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <PathologySideBar />

                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div className="card">
                    <div className="card-body">
                      <p>
                        Do you want to delete the account? Please press below
                        &quot;Delete&quot; button
                      </p>
                      {/* <div
                        className="pt-3 pb-2 ps-4 mt-3 rounded"
                        style={{ background: "#f5474785" }}
                      >
                        <p className="text-danger fs-5 fw-bold lh-1">
                          Request Submitted Succesfully. Your account will be
                          deleted within 14 days.
                        </p>
                      </div> */}

                      <button
                        type="button"
                        className="btn btn-secondary shadow"
                      >
                        Delete Account
                      </button>

                      <div className="row">
                        <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="delete-form mt-5">
                            <form>
                              <div className="mb-3">
                                <label className="mb-2">
                                  Why you delete your account?
                                </label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option
                                    name="deleteReasonList"
                                    defaultValue="Select Any One"
                                    selected
                                  >
                                    Select Any One
                                  </option>
                                  <option value="Mind has been change">
                                    Mind has been change
                                  </option>
                                  <option value="Find better option">
                                    Find better option
                                  </option>
                                  <option value="Doctor fees very high">
                                    Doctor fees very high
                                  </option>
                                  <option value="Just kidding">
                                    Just kidding
                                  </option>
                                  <option value="Software is not user friendly">
                                    Software is not user friendly
                                  </option>
                                </select>
                              </div>
                              <div className="mb-3">
                                <label className="mb-2">
                                  Describe reason (optional)
                                </label>
                                <textarea
                                  className="form-control"
                                  name="describeDeleteReason"
                                ></textarea>
                              </div>
                              <div className="complain-submit-btn">
                                <button
                                  type="submit"
                                  className="btn btn-danger"
                                >
                                  Request For Delete
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-xxl-6"></div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="card">
                    <div className="card-body">
                      <div
                        className="pt-3 pb-2 ps-4 mt-3 rounded"
                        style={{ background: "#f5474785" }}
                      >
                        <p className="text-danger fs-5 fw-bold lh-1">
                          Request Submitted Succesfully. Your account will be
                          deleted within 14 days.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvanceSettings;
