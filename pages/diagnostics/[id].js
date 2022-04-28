import { BreadCrums } from "components/common/index";
import Image from "next/image";

const Details = () => {
  return (
    <>
      <section className="section-patho-details">
        <main className="main">
          <BreadCrums
            title="Home / Pathology Details"
            title1="Pathology Details"
          />
          <div className="content">
            <div className="container">
              <div className="diag-banner-img">
                <div
                  className="doctor-left-profile-inner"
                  style={{
                    background:
                      "url(/assets/images/banner-diagonostic-center.jpg)",
                    position: "relative",
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderBottom: "5px solid #15558d",
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <div
                    className="doc-lft-prof"
                    style={{
                      position: "absolute",
                      marginTop: "220px",
                      marginLeft: "577px",
                    }}
                  >
                    <Image
                      height="140"
                      width="140"
                      src={"/assets/images/alternate/alt-hospital.png"}
                      style={{
                        height: "15rem",
                        background: "#0b6ea5",
                        padding: "10px",
                      }}
                      className="img-fluid border border-1 rounded-circle bg-light"
                      alt="User Image"
                    />
                  </div>
                  {/* <div
                    className="doc-lft-prof"
                    style={{
                      position: "absolute",
                      marginTop: "220px",
                      marginLeft: "855px",
                    }}
                  >
                    <Image
                      height="140"
                      width="140"
                      src={"/assets/images/alternate/alt-hospital.png"}
                      style={{
                        height: "15rem",
                        background: "#0b6ea5",
                        padding: "10px",
                      }}
                      className="img-fluid border border-1 rounded-circle bg-light"
                      alt="User Image"
                    />
                  </div> */}
                </div>
              </div>
              <div className="diag-banner-title">
                <h6
                  className="fs-4 fw-bold  text-center"
                  style={{ marginTop: "70px", color: "#15558d" }}
                >
                  Apollo Diagnostics Center
                </h6>
              </div>
              <div className="diag-banner-sub-title">
                <h6 className="fs-6 fst-italic text-secondary text-center">
                  City Center, Haldia, WB, India
                </h6>
                <h6 className="fs-6 text-muted text-center">
                  <span style={{ color: "#15558d" }}>
                    <i className="fas fa-mobile"></i>
                  </span>
                  <span className=" ms-2" style={{ color: "#15558d" }}>
                    +91 8945 6325 85
                  </span>
                </h6>
                <h6 className="fs-6 text-muted text-center">
                  <span style={{ color: "#15558d" }}>
                    <i className="fas fa-clock"></i>
                  </span>
                  <span className=" ms-2" style={{ color: "#15558d" }}>
                    09:30 AM - 09:30 PM
                  </span>
                </h6>
              </div>
              <div
                className="diag-speciality mt-5"
                style={{ background: "#e7e7e7c7", padding: "20px" }}
              >
                <div className="row align-items-center">
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="">
                        <img
                          src="/assets/images/diagnostics/heart.jpg"
                          className="img-fluid"
                          alt="Speciality"
                        />
                      </div>
                      <div className="speciality-item-name">
                        <h6 className="fs-6 mt-3">Heart</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="">
                        <img
                          src="/assets/images/diagnostics/thyroid.jpg"
                          className="img-fluid"
                          alt="Speciality"
                        />
                      </div>
                      <div className="speciality-item-name">
                        <h6 className="fs-6 mt-3">Thyroid</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="">
                        <img
                          src="/assets/images/diagnostics/liver.jpg"
                          className="img-fluid"
                          alt="Speciality"
                        />
                      </div>
                      <div className="speciality-item-name">
                        <h6 className="fs-6 mt-3">Liver</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="">
                        <img
                          src="/assets/images/diagnostics/lungs.jpg"
                          className="img-fluid"
                          alt="Speciality"
                        />
                      </div>
                      <div className="speciality-item-name">
                        <h6 className="fs-6 mt-3">Lungs</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="">
                        <img
                          src="/assets/images/diagnostics/infertility.jpg"
                          className="img-fluid"
                          alt="Speciality"
                        />
                      </div>
                      <div className="speciality-item-name">
                        <h6 className="fs-6 mt-3">Infertility</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="">
                        <img
                          src="/assets/images/diagnostics/kidney.jpg"
                          className="img-fluid"
                          alt="Speciality"
                        />
                      </div>
                      <div className="speciality-item-name">
                        <h6 className="fs-6 mt-3">Kidney</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="diag-step-work text-center py-4 px-3"
                style={{ background: "#00abb285" }}
              >
                <div className="diag-step-work-inner">
                  <h6
                    className="fs-5"
                    style={{
                      marginBottom: "-50px",
                      color: "#004581",
                      fontWeight: "600",
                    }}
                  >
                    HOW DOES HOME SAMPLE COLLECTION WORK?
                  </h6>
                  {/* <div className="row align-items-center my-5">
                    <div className="col">
                      <div className="col-inner">
                        <i className="far fa-vial fs-1"></i>
                        <h6 className="fw-bold mt-2">SELECT YOUR TEST</h6>
                      </div>
                    </div>

                    <div className="col">
                      <div className="col-inner">
                        <i className="far fa-home fs-1"></i>
                        <h6 className="fw-bold mt-2">
                          SELECT HOME COLLECTION OPTION
                        </h6>
                      </div>
                    </div>

                    <div className="col">
                      <div className="col-inner">
                        <i className="far fa-credit-card fs-1"></i>
                        <h6 className="fw-bold mt-2">
                          SELECT TIME, DATE <br /> & PAY ONLINE
                        </h6>
                      </div>
                    </div>

                    <div className="col">
                      <div className="col-inner">
                        <i className="far fa-biking-mountain fs-1"></i>
                        <h6 className="fw-bold mt-2">
                          OUR COLLECTION <br /> AGENT VISIT YOU
                        </h6>
                      </div>
                    </div>

                    <div className="col">
                      <div className="col-inner">
                        <i className="far fa-microscope fs-1"></i>
                        <h6 className="fw-bold mt-2">
                          TESTING DONE <br /> AT LAB
                        </h6>
                      </div>
                    </div>

                    <div className="col">
                      <div className="col-inner">
                        <i className="far fa-ballot-check fs-1"></i>
                        <h6 className="fw-bold mt-2">
                          VIEW/DOWNLOAD <br /> YOUR REPORT ONLINE
                        </h6>
                      </div>
                    </div>
                  </div> */}
                  <div className="step-img">
                    <Image
                      src="/assets/images/diagnostics/diag.png"
                      height="300px"
                      width="900px"
                      alt="Step Image"
                    />
                  </div>
                  <div className="row align-items-center">
                    <div className="col-2"></div>
                    <div className="col-8">
                      <p
                        className="fs-6 text-dark"
                        style={{ marginTop: "-50px" }}
                      >
                        Avail home collection through an easy 6-stage process.
                        Visit our website and select the prescribed test. Choose
                        the Home Collection option. Select the time and date,
                        then pay online or pay after availing our service. Our
                        collection agent will visit you and take a sample, while
                        following all the necessary precautions. We will perform
                        the required tests at our state-of-our-art lab. Once the
                        results arrive, you can view or download your report
                        online. Taking a test couldn’t be easier or safer than
                        at Apollo Diagnostics.
                      </p>
                    </div>
                    <div className="col-2"></div>
                  </div>
                </div>
              </div>
              <div className="book-home-sample">
                <div className="row align-items-center">
                  <div className="col-4"></div>
                  <div className="col-4">
                    <div className="d-grid gap-2">
                      <button
                        style={{
                          background: "#15558d",
                          color: "white",
                          padding: "15px 20px 15px 20px",
                          border: "none",
                          borderRadius: "0 0 6px 6px",
                        }}
                      >
                        BOOK YOUR HOME SAMPLE COLLECTION NOW
                      </button>
                    </div>
                  </div>
                  <div className="col-4"></div>
                </div>
              </div>
              <div className="diag-common-test mt-5">
                <div className="diag-test-title">
                  <h6
                    className="text-center mb-4"
                    style={{ fontSize: "25px", fontWeight: "500" }}
                  >
                    Top Common Test
                  </h6>
                </div>
                <div className="row align-items-center">
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="test-card">
                          <div className="test-card-inner">
                            <h6
                              className="text-info"
                              style={{ fontSize: "17px" }}
                            >
                              LIPID PROFILE
                            </h6>
                            <h6 className="fw-bold">Pre Test Information</h6>
                            <p>
                              No special preparation is required for the test.
                            </p>
                            <h6 className="fw-bold">Report Delivary</h6>
                            <p>Same Day</p>
                            <h6
                              className="fs-4"
                              style={{ fontFamily: "ubuntu" }}
                            >
                              ₹300
                            </h6>
                          </div>
                        </div>
                        <div className="test-card-button mt-5">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>View Details</button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>Add to Cart</button>
                              </div>
                            </div>
                          </div>
                          <div className="test-card-msg text-center mt-2">
                            <h6>
                              <span className="text-danger">
                                <i className="far fa-home"></i>
                              </span>
                              <span className="ms-1">
                                Home Collection Available
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="test-card">
                          <div className="test-card-inner">
                            <h6
                              className="text-info"
                              style={{ fontSize: "17px" }}
                            >
                              LIPID PROFILE
                            </h6>
                            <h6 className="fw-bold">Pre Test Information</h6>
                            <p>
                              No special preparation is required for the test.
                            </p>
                            <h6 className="fw-bold">Report Delivary</h6>
                            <p>Same Day</p>
                            <h6
                              className="fs-4"
                              style={{ fontFamily: "ubuntu" }}
                            >
                              ₹300
                            </h6>
                          </div>
                        </div>
                        <div className="test-card-button mt-5">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>View Details</button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>Add to Cart</button>
                              </div>
                            </div>
                          </div>
                          <div className="test-card-msg text-center mt-2">
                            <h6>
                              <span className="text-danger">
                                <i className="far fa-home"></i>
                              </span>
                              <span className="ms-1">
                                Home Collection Available
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="test-card">
                          <div className="test-card-inner">
                            <h6
                              className="text-info"
                              style={{ fontSize: "17px" }}
                            >
                              LIPID PROFILE
                            </h6>
                            <h6 className="fw-bold">Pre Test Information</h6>
                            <p>
                              No special preparation is required for the test.
                            </p>
                            <h6 className="fw-bold">Report Delivary</h6>
                            <p>Same Day</p>
                            <h6
                              className="fs-4"
                              style={{ fontFamily: "ubuntu" }}
                            >
                              ₹300
                            </h6>
                          </div>
                        </div>
                        <div className="test-card-button mt-5">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>View Details</button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>Add to Cart</button>
                              </div>
                            </div>
                          </div>
                          <div className="test-card-msg text-center mt-2">
                            <h6>
                              <span className="text-danger">
                                <i className="far fa-home"></i>
                              </span>
                              <span className="ms-1">
                                Home Collection Available
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="test-card">
                          <div className="test-card-inner">
                            <h6
                              className="text-info"
                              style={{ fontSize: "17px" }}
                            >
                              LIPID PROFILE
                            </h6>
                            <h6 className="fw-bold">Pre Test Information</h6>
                            <p>
                              No special preparation is required for the test.
                            </p>
                            <h6 className="fw-bold">Report Delivary</h6>
                            <p>Same Day</p>
                            <h6
                              className="fs-4"
                              style={{ fontFamily: "ubuntu" }}
                            >
                              ₹300
                            </h6>
                          </div>
                        </div>
                        <div className="test-card-button mt-5">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>View Details</button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>Add to Cart</button>
                              </div>
                            </div>
                          </div>
                          <div className="test-card-msg text-center mt-2">
                            <h6>
                              <span className="text-danger">
                                <i className="far fa-home"></i>
                              </span>
                              <span className="ms-1">
                                Home Collection Available
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="diag-test-card-all-test-btn text-center mb-5">
                  <button
                    className="btn"
                    style={{
                      padding: "15px 30px",
                      background: "#15558d",
                      color: "white",
                    }}
                  >
                    View All Tests
                  </button>
                </div>
              </div>
              <div className="diag-common-test mt-5">
                <div className="diag-test-title">
                  <h6
                    className="text-center mb-4"
                    style={{ fontSize: "25px", fontWeight: "500" }}
                  >
                    Top Health Checkup Packages
                  </h6>
                </div>
                <div className="row align-items-center">
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="test-card">
                          <div className="test-card-inner">
                            <h6
                              className="text-info"
                              style={{ fontSize: "17px" }}
                            >
                              LIPID PROFILE
                            </h6>
                            <h6 className="fw-bold">Pre Test Information</h6>
                            <p>
                              No special preparation is required for the test.
                            </p>
                            <h6 className="fw-bold">Report Delivary</h6>
                            <p>Same Day</p>
                            <h6
                              className="fs-4"
                              style={{ fontFamily: "ubuntu" }}
                            >
                              ₹300
                            </h6>
                          </div>
                        </div>
                        <div className="test-card-button mt-5">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>View Details</button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>Add to Cart</button>
                              </div>
                            </div>
                          </div>
                          <div className="test-card-msg text-center mt-2">
                            <h6>
                              <span className="text-danger">
                                <i className="far fa-home"></i>
                              </span>
                              <span className="ms-1">
                                Home Collection Available
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="test-card">
                          <div className="test-card-inner">
                            <h6
                              className="text-info"
                              style={{ fontSize: "17px" }}
                            >
                              LIPID PROFILE
                            </h6>
                            <h6 className="fw-bold">Pre Test Information</h6>
                            <p>
                              No special preparation is required for the test.
                            </p>
                            <h6 className="fw-bold">Report Delivary</h6>
                            <p>Same Day</p>
                            <h6
                              className="fs-4"
                              style={{ fontFamily: "ubuntu" }}
                            >
                              ₹300
                            </h6>
                          </div>
                        </div>
                        <div className="test-card-button mt-5">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>View Details</button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>Add to Cart</button>
                              </div>
                            </div>
                          </div>
                          <div className="test-card-msg text-center mt-2">
                            <h6>
                              <span className="text-danger">
                                <i className="far fa-home"></i>
                              </span>
                              <span className="ms-1">
                                Home Collection Available
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="test-card">
                          <div className="test-card-inner">
                            <h6
                              className="text-info"
                              style={{ fontSize: "17px" }}
                            >
                              LIPID PROFILE
                            </h6>
                            <h6 className="fw-bold">Pre Test Information</h6>
                            <p>
                              No special preparation is required for the test.
                            </p>
                            <h6 className="fw-bold">Report Delivary</h6>
                            <p>Same Day</p>
                            <h6
                              className="fs-4"
                              style={{ fontFamily: "ubuntu" }}
                            >
                              ₹300
                            </h6>
                          </div>
                        </div>
                        <div className="test-card-button mt-5">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>View Details</button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>Add to Cart</button>
                              </div>
                            </div>
                          </div>
                          <div className="test-card-msg text-center mt-2">
                            <h6>
                              <span className="text-danger">
                                <i className="far fa-home"></i>
                              </span>
                              <span className="ms-1">
                                Home Collection Available
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="test-card">
                          <div className="test-card-inner">
                            <h6
                              className="text-info"
                              style={{ fontSize: "17px" }}
                            >
                              LIPID PROFILE
                            </h6>
                            <h6 className="fw-bold">Pre Test Information</h6>
                            <p>
                              No special preparation is required for the test.
                            </p>
                            <h6 className="fw-bold">Report Delivary</h6>
                            <p>Same Day</p>
                            <h6
                              className="fs-4"
                              style={{ fontFamily: "ubuntu" }}
                            >
                              ₹300
                            </h6>
                          </div>
                        </div>
                        <div className="test-card-button mt-5">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>View Details</button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="test-card-btn">
                                <button>Add to Cart</button>
                              </div>
                            </div>
                          </div>
                          <div className="test-card-msg text-center mt-2">
                            <h6>
                              <span className="text-danger">
                                <i className="far fa-home"></i>
                              </span>
                              <span className="ms-1">
                                Home Collection Available
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="diag-test-card-all-test-btn text-center mb-5">
                  <button
                    className="btn"
                    style={{
                      padding: "15px 30px",
                      background: "#15558d",
                      color: "white",
                    }}
                  >
                    View All Health Checkup Packages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Details;
