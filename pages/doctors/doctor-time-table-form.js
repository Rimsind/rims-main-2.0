import { BreadCrums } from "components/common";
import { DoctorSidebar } from "components/DoctorComponents";
import Link from "next/link";

const DoctorTimeTableForm = () => {
  return (
    <>
      <section className="section-doc-tm-tbl-frm">
        <div className="main-wrapper">
          <BreadCrums
            title="Home / Doctor / Doctor-Time-Table-Form"
            title1="Doctor Time Table Form"
          />

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <DoctorSidebar />

                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div className="card">
                    <div className="card-header">
                      <span className="fs-6 fw-bold">
                        Add New Time Table Form
                      </span>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row align-items-baseline border-bottom border-1 pb-3">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                            <div className="row align-items-baseline">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                                <p className="fs-6">Select Location Type:</p>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="location"
                                    id="polyclinic"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="polyclinic"
                                  >
                                    Polyclinics
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="location"
                                    id="nursing-homes"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="nursing-homes"
                                  >
                                    Nursing Homes
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="location"
                                    id="hospital"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="hospital"
                                  >
                                    Hospital
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Fees Ex: ₹500"
                            />
                          </div>
                        </div>
                        <div className="row border-bottom border-1 pt-3 pb-3 mt-2">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                            <div className="row align-items-center">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="form-floating mb-3">
                                  <input
                                    type="Date"
                                    className="form-control"
                                    id="floatingDate"
                                  />
                                  <label htmlFor="floatingDate">Date</label>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="form-floating mb-3">
                                  <input
                                    type="Time"
                                    className="form-control"
                                    id="floatingTimeStart"
                                  />
                                  <label htmlFor="floatingTimeStart">
                                    Time Start
                                  </label>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="form-floating mb-3">
                                  <input
                                    type="Time"
                                    className="form-control"
                                    id="floatingTimeEnd"
                                  />
                                  <label htmlFor="floatingTimeEnd">
                                    Time End
                                  </label>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="form-floating mb-3">
                                  <input
                                    type="Number"
                                    className="form-control"
                                    id="floatingSeat"
                                    placeholder="Seat"
                                  />
                                  <label htmlFor="floatingSeat">Seat</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0 text-end">
                            <Link href="/doctors/doctor-time-table-form">
                              <a className="btn btn-primary fs-6 px-5 py-3 shadow-sm">
                                <i className="fas fa-plus me-2"></i>Add
                              </a>
                            </Link>
                          </div>
                        </div>
                      </form>
                      <div className="form-table my-3">
                        <div className="table-responsive">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Sl No.</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time Start</th>
                                <th scope="col">Time End</th>
                                <th scope="col">Seat</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>01</td>
                                <td>23-04-2022</td>
                                <td>9:30 A.M.</td>
                                <td>6:00 P.M.</td>
                                <td>100</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="submit-section text-end mt-5">
                        <input
                          type="submit"
                          className="btn btn-primary submit-btn"
                          value="Save Changes"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorTimeTableForm;
