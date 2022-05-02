import { BreadCrums } from "components/common/index";
const TestDetails = () => {
  return (
    <>
      <div className="main">
        <BreadCrums
          title="Home / Diagnostics / Diagnostics-Details"
          title1="Diagnostics Details"
        />
        <section className="diag-details">
          <div className="container">
            <div className="diag-details-inner py-4 px-4">
              <ul className="nav nav-tabs nav-tabs-solid">
                <li className="nav-item me-3">
                  <a
                    className="nav-link active"
                    href="#solid-justified-tab1"
                    data-bs-toggle="tab"
                  >
                    Info for Patient
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a
                    className="nav-link"
                    href="#solid-justified-tab2"
                    data-bs-toggle="tab"
                  >
                    Test Included
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a
                    className="nav-link"
                    href="#solid-justified-tab3"
                    data-bs-toggle="tab"
                  >
                    Info for Doctor
                  </a>
                </li>
              </ul>
              <div className="tab-content py-5 px-5">
                <div className="tab-pane show active" id="solid-justified-tab1">
                  <div className="tab-content-test-title">
                    <h6 className="text-info pb-4" style={{ fontSize: "20px" }}>
                      C-REACTIVE PROTEIN CRP (QUANTITATIVE) Test In Hyderabad
                    </h6>
                  </div>
                  <div className="tab-content-test-content">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <i
                              className="far fa-vial text-muted"
                              style={{ fontSize: "16px" }}
                            ></i>
                            <span
                              className="ms-2"
                              style={{
                                fontSize: "16px",
                                color: "#000",
                                fontWeight: "400",
                              }}
                            >
                              Test Type
                            </span>
                          </div>
                          <div className="col-6">
                            <h6 style={{ fontSize: "16px", fontWeight: "400" }}>
                              Blood
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <i
                              className="far fa-info-circle text-muted"
                              style={{ fontSize: "16px" }}
                            ></i>
                            <span
                              className="ms-2"
                              style={{
                                fontSize: "16px",
                                color: "#000",
                                fontWeight: "400",
                              }}
                            >
                              Pre-test Information
                            </span>
                          </div>
                          <div className="col-6">
                            <h6 style={{ fontSize: "16px", fontWeight: "400" }}>
                              No special preparation is required for the test.
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <i
                              className="far fa-ballot-check text-muted"
                              style={{ fontSize: "16px" }}
                            ></i>
                            <span
                              className="ms-2"
                              style={{
                                fontSize: "16px",
                                color: "#000",
                                fontWeight: "400",
                              }}
                            >
                              Report Delivery
                            </span>
                          </div>
                          <div className="col-6">
                            <h6 style={{ fontSize: "16px", fontWeight: "400" }}>
                              Same Day
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <i
                              className="far fa-atom text-muted"
                              style={{ fontSize: "16px" }}
                            ></i>
                            <span
                              className="ms-2"
                              style={{
                                fontSize: "16px",
                                color: "#000",
                                fontWeight: "400",
                              }}
                            >
                              Components
                            </span>
                          </div>
                          <div className="col-6">
                            <h6 style={{ fontSize: "16px", fontWeight: "400" }}>
                              -
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <i
                              className="far fa-money-bill-wave text-muted"
                              style={{ fontSize: "16px" }}
                            ></i>
                            <span
                              className="ms-2"
                              style={{
                                fontSize: "16px",
                                color: "#000",
                                fontWeight: "400",
                              }}
                            >
                              Price
                            </span>
                          </div>
                          <div className="col-6">
                            <h6
                              style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                fontFamily: "roboto",
                              }}
                            >
                              ₹ 400
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="add-to-cart-diag-btn">
                      <div className="row align-items-center">
                        <div className="col-3"></div>
                        <div className="col-6">
                          <div className="d-grid gap-2 text-center">
                            <button
                              className="btn book-btn"
                              style={{
                                fontSize: "18px",
                                background: "#73042b !important",
                                borderColor: "#73042b !important",
                              }}
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                        <div className="col-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="solid-justified-tab2">
                  <p>Not Available</p>
                </div>
                <div className="tab-pane" id="solid-justified-tab3">
                  <div className="tab-content-test-title">
                    <h6 className="text-info" style={{ fontSize: "20px" }}>
                      Info for Doctor
                    </h6>
                  </div>
                  <p>Not Available</p>
                </div>
              </div>
              <div className="back-to-list-diag-btn text-center py-4">
                <button>Back To List</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TestDetails;
