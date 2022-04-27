import PathologySideBar from "components/common/PathologySideBar";
import { BreadCrums } from "components/common";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <section className="patho-appoinments">
        <div className="main-wrapper">
          <BreadCrums
            title="Home / Dashboard / My Appointments"
            title1="My Appointments"
          />
          <div className="content mb-3">
            <div className="container-fluid">
              <div className="row">
                <PathologySideBar />
                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div
                    className="card-filter rounded-pill p-4 mb-2"
                    style={{ backgroundColor: "#372c7ee6" }}
                  >
                    <div className="row align-items-end p-2 rounded-1">
                      <div className="col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
                        <div className="row align-items-center">
                          <div className="col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-1">
                            <lable className="text-light">
                              Filter By Polyclinic:
                            </lable>
                          </div>
                          <div className="col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-1">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Polyclinic</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3">
                        <div className="row align-items-center">
                          <div className="col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-1">
                            <lable className="text-light">
                              Filter By status:
                            </lable>
                          </div>
                          <div className="col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-1">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select status</option>
                              <option value="false">Pending</option>
                              <option value="true">Completed</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3">
                        <div className="row align-items-center">
                          <div className="col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-1">
                            <lable className="text-light">
                              Filter By Date:
                            </lable>
                          </div>
                          <div className="col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-1">
                            <input type="date" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-2 col-xxl-2 text-center text-md-end text-lg-end text-xl-end text-xxl-end">
                        <button className="btn btn-light">
                          <i className="far fa-redo-alt me-2"></i>Reset
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Sl No.</th>
                              <th>#App-Id</th>
                              <th>Patient Name</th>
                              <th>Age</th>
                              <th>Apointment Time</th>
                              <th>Fee</th>
                              <th>Status</th>
                              <th>Upload Report</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <tr>
                              <td
                                colSpan={8}
                                className="text-danger text-center"
                              >
                                No Appointments Found !!
                              </td>
                            </tr> */}
                            <tr>
                              <td>01</td>
                              <td>#App001</td>
                              <td>Rabindra</td>
                              <td>25</td>
                              <td>10:25 A.M</td>
                              <td>₹500</td>
                              <td>Completed</td>
                              <td className="text-start">
                                <div className="input-group">
                                  <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile02"
                                  />
                                  <label
                                    className="input-group-text bg-primary-light"
                                    htmlFor="inputGroupFile02"
                                  >
                                    Upload
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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

export default Index;
