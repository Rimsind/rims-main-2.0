import { BreadCrums } from "components/common/index";
import Image from "next/image";

const Details = () => {
  return (
    <>
      <section className="section-patho-details">
        <main className="main">
          <BreadCrums
            title="Home / Diagnostics Details"
            title1="Diagnostics Details"
          />
          <div className="page-wrapper">
            <div className="diag-banner">
              <Image
                src="/assets/images/main.jpg"
                width="2000px"
                height="500px"
                alt="Main Slider"
              />
            </div>
            <div
              className="diag-ribbon"
              style={{
                marginTop: "-8px",
                backgroundColor: "#427cc5",
                paddingTop: "50px",
                paddingBottom: "50px",
              }}
            >
              <div className="container">
                <div className="diag-ribbon-inner">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="diag-ribbon-inner-item">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="diag-ribbon-inner-item-icon">
                              <i
                                className="far fa-map-marker-alt bg-light rounded-circle"
                                style={{
                                  padding: "25px 30px 25px 30px",
                                  fontSize: "30px",
                                  color: "#427cc5",
                                }}
                              ></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="diag-ribbon-inner-item-con">
                              <h6
                                className="text-light"
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "500",
                                }}
                              >
                                Address
                              </h6>
                              <p className="fs-6 text-light">
                                City Center, Haldia, WB, India
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="diag-ribbon-inner-item">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="diag-ribbon-inner-item-icon">
                              <i
                                className="far fa-mobile-android-alt bg-light rounded-circle"
                                style={{
                                  padding: "25px 30px 25px 30px",
                                  fontSize: "30px",
                                  color: "#427cc5",
                                }}
                              ></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="diag-ribbon-inner-item-con">
                              <h6
                                className="text-light"
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "500",
                                }}
                              >
                                Mobile
                              </h6>
                              <p className="fs-6 text-light">
                                +91 8945 6321 85
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="diag-ribbon-inner-item">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="diag-ribbon-inner-item-icon">
                              <i
                                className="far fa-envelope bg-light rounded-circle"
                                style={{
                                  padding: "25px",
                                  fontSize: "30px",
                                  color: "#427cc5",
                                }}
                              ></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="diag-ribbon-inner-item-con">
                              <h6
                                className="text-light"
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "500",
                                }}
                              >
                                Email ID
                              </h6>
                              <p className="fs-6 text-light">
                                haldiadiagnostics@gmail.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="diag-test-card py-5">
              <div className="container">
                <div className="diag-test-card-title">
                  <h6
                    className="text-center"
                    style={{
                      fontSize: "30px",
                      fontWeight: "500",
                      fontFamily: "ubuntu",
                    }}
                  >
                    Popular Test Procedures
                  </h6>
                  <p
                    className="text-center mt-2"
                    style={{
                      fontSize: "18px",
                      fontFamily: "poppins",
                    }}
                  >
                    There live the blind texts separated they right at the coast
                    of the Semantics.
                  </p>
                </div>
                <div className="row align-items-start mt-5">
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="diag-test-card-inner-item">
                          <h6 className="fs-5" style={{ color: "#427cc5" }}>
                            Malaria Test
                          </h6>
                          <h6 className="text-black pt-2">
                            Pre Test Information
                          </h6>
                          <p className="text-secondary">
                            No special prparation is required for the test.
                          </p>
                          <h6 className="text-black pt-2">Report Delivery</h6>
                          <p className="text-secondary">Same Day</p>
                          <h6
                            className="text-black pt-2"
                            style={{
                              fontSize: "18px",
                              fontFamily: "roboto",
                              fontWeight: "600",
                            }}
                          >
                            Includes:
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Blood Glucose
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Liver Functioning
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Heart Health
                            </li>
                          </ul>
                          <h6
                            className="mb-5"
                            style={{
                              fontSize: "30px",
                              fontWeight: "500",
                              fontFamily: "roboto",
                            }}
                          >
                            ₹300
                          </h6>
                          <div className="test-card-btn-grp">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  View Details
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="diag-test-card-inner-item">
                          <h6 className="fs-5" style={{ color: "#427cc5" }}>
                            Malaria Test
                          </h6>
                          <h6 className="text-black pt-2">
                            Pre Test Information
                          </h6>
                          <p className="text-secondary">
                            No special prparation is required for the test.
                          </p>
                          <h6 className="text-black pt-2">Report Delivery</h6>
                          <p className="text-secondary">Same Day</p>
                          <h6
                            className="text-black pt-2"
                            style={{
                              fontSize: "18px",
                              fontFamily: "roboto",
                              fontWeight: "600",
                            }}
                          >
                            Includes:
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Blood Glucose
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Liver Functioning
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Heart Health
                            </li>
                          </ul>
                          <h6
                            className="mb-5"
                            style={{
                              fontSize: "30px",
                              fontWeight: "500",
                              fontFamily: "roboto",
                            }}
                          >
                            ₹300
                          </h6>
                          <div className="test-card-btn-grp">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  View Details
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="diag-test-card-inner-item">
                          <h6 className="fs-5" style={{ color: "#427cc5" }}>
                            Malaria Test
                          </h6>
                          <h6 className="text-black pt-2">
                            Pre Test Information
                          </h6>
                          <p className="text-secondary">
                            No special prparation is required for the test.
                          </p>
                          <h6 className="text-black pt-2">Report Delivery</h6>
                          <p className="text-secondary">Same Day</p>
                          <h6
                            className="text-black pt-2"
                            style={{
                              fontSize: "18px",
                              fontFamily: "roboto",
                              fontWeight: "600",
                            }}
                          >
                            Includes:
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Blood Glucose
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Liver Functioning
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Heart Health
                            </li>
                          </ul>
                          <h6
                            className="mb-5"
                            style={{
                              fontSize: "30px",
                              fontWeight: "500",
                              fontFamily: "roboto",
                            }}
                          >
                            ₹300
                          </h6>
                          <div className="test-card-btn-grp">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  View Details
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="diag-test-card-inner-item">
                          <h6 className="fs-5" style={{ color: "#427cc5" }}>
                            Malaria Test
                          </h6>
                          <h6 className="text-black pt-2">
                            Pre Test Information
                          </h6>
                          <p className="text-secondary">
                            No special prparation is required for the test.
                          </p>
                          <h6 className="text-black pt-2">Report Delivery</h6>
                          <p className="text-secondary">Same Day</p>
                          <h6
                            className="text-black pt-2"
                            style={{
                              fontSize: "18px",
                              fontFamily: "roboto",
                              fontWeight: "600",
                            }}
                          >
                            Includes:
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Blood Glucose
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Liver Functioning
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Heart Health
                            </li>
                          </ul>
                          <h6
                            className="mb-5"
                            style={{
                              fontSize: "30px",
                              fontWeight: "500",
                              fontFamily: "roboto",
                            }}
                          >
                            ₹300
                          </h6>
                          <div className="test-card-btn-grp">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  View Details
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-diag-btn text-center">
                  <button className="btn btn-primary">View All Tests</button>
                </div>
              </div>
            </div>
            <div className="diag-middle-banner">
              <Image
                src="/assets/images/diagnostics/diag-banner.jpg"
                width="2000px"
                height="400px"
                alt="Main Slider"
              />
            </div>
            <div className="diag-common-test my-5">
              <div className="container">
                <div className="diag-test-card-title">
                  <h6
                    className="text-center"
                    style={{
                      fontSize: "30px",
                      fontWeight: "500",
                      fontFamily: "ubuntu",
                    }}
                  >
                    Most Common Tests
                  </h6>
                  <p
                    className="text-center mt-2"
                    style={{
                      fontSize: "18px",
                      fontFamily: "poppins",
                    }}
                  >
                    There live the blind texts separated they right at the coast
                    of the Semantics.
                  </p>
                </div>
                <div className="row align-items-center mt-5">
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src="/assets/images/diagnostics/heart.png"
                          className="img-fluid"
                          height="80px"
                          width="80px"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p className="fs-5" style={{ marginLeft: "-40px" }}>
                        Heart
                      </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src="/assets/images/diagnostics/endocrine.png"
                          className="img-fluid"
                          height="80px"
                          width="80px"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p className="fs-5" style={{ marginLeft: "-40px" }}>
                        Thyroid
                      </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src="/assets/images/diagnostics/liver.png"
                          className="img-fluid"
                          height="80px"
                          width="80px"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p className="fs-5" style={{ marginLeft: "-40px" }}>
                        Liver
                      </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src="/assets/images/diagnostics/lungs.png"
                          className="img-fluid"
                          height="80px"
                          width="80px"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p className="fs-5" style={{ marginLeft: "-40px" }}>
                        Lungs
                      </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src="/assets/images/diagnostics/heart.png"
                          className="img-fluid"
                          height="80px"
                          width="80px"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p className="fs-5" style={{ marginLeft: "-40px" }}>
                        Infertility
                      </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="speicality-item text-center">
                      <div className="speicality-img">
                        <img
                          src="/assets/images/diagnostics/heart.png"
                          className="img-fluid"
                          height="80px"
                          width="80px"
                          alt="Speciality"
                        />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p className="fs-5" style={{ marginLeft: "-40px" }}>
                        Kidney
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="diag-test-card py-5"
              style={{
                background:
                  "url(/assets/images/diagnostics/card-banner-diag.jpg)",
              }}
            >
              <div className="container">
                <div className="diag-test-card-title">
                  <h6
                    className="text-center"
                    style={{
                      fontSize: "30px",
                      fontWeight: "500",
                      fontFamily: "ubuntu",
                    }}
                  >
                    Top Health Checkup Packages
                  </h6>
                  <p
                    className="text-center mt-2"
                    style={{
                      fontSize: "18px",
                      fontFamily: "poppins",
                    }}
                  >
                    There live the blind texts separated they right at the coast
                    of the Semantics.
                  </p>
                </div>
                <div className="row align-items-start mt-5">
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="diag-test-card-inner-item">
                          <h6 className="fs-5" style={{ color: "#427cc5" }}>
                            Malaria Test
                          </h6>
                          <h6 className="text-black pt-2">
                            Pre Test Information
                          </h6>
                          <p className="text-secondary">
                            No special prparation is required for the test.
                          </p>
                          <h6 className="text-black pt-2">Report Delivery</h6>
                          <p className="text-secondary">Same Day</p>
                          <h6
                            className="text-black pt-2"
                            style={{
                              fontSize: "18px",
                              fontFamily: "roboto",
                              fontWeight: "600",
                            }}
                          >
                            Includes:
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Blood Glucose
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Liver Functioning
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Heart Health
                            </li>
                          </ul>
                          <h6
                            className="mb-5"
                            style={{
                              fontSize: "30px",
                              fontWeight: "500",
                              fontFamily: "roboto",
                            }}
                          >
                            ₹300
                          </h6>
                          <div className="test-card-btn-grp">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  View Details
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="diag-test-card-inner-item">
                          <h6 className="fs-5" style={{ color: "#427cc5" }}>
                            Malaria Test
                          </h6>
                          <h6 className="text-black pt-2">
                            Pre Test Information
                          </h6>
                          <p className="text-secondary">
                            No special prparation is required for the test.
                          </p>
                          <h6 className="text-black pt-2">Report Delivery</h6>
                          <p className="text-secondary">Same Day</p>
                          <h6
                            className="text-black pt-2"
                            style={{
                              fontSize: "18px",
                              fontFamily: "roboto",
                              fontWeight: "600",
                            }}
                          >
                            Includes:
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Blood Glucose
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Liver Functioning
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Heart Health
                            </li>
                          </ul>
                          <h6
                            className="mb-5"
                            style={{
                              fontSize: "30px",
                              fontWeight: "500",
                              fontFamily: "roboto",
                            }}
                          >
                            ₹300
                          </h6>
                          <div className="test-card-btn-grp">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  View Details
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="diag-test-card-inner-item">
                          <h6 className="fs-5" style={{ color: "#427cc5" }}>
                            Malaria Test
                          </h6>
                          <h6 className="text-black pt-2">
                            Pre Test Information
                          </h6>
                          <p className="text-secondary">
                            No special prparation is required for the test.
                          </p>
                          <h6 className="text-black pt-2">Report Delivery</h6>
                          <p className="text-secondary">Same Day</p>
                          <h6
                            className="text-black pt-2"
                            style={{
                              fontSize: "18px",
                              fontFamily: "roboto",
                              fontWeight: "600",
                            }}
                          >
                            Includes:
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Blood Glucose
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Liver Functioning
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Heart Health
                            </li>
                          </ul>
                          <h6
                            className="mb-5"
                            style={{
                              fontSize: "30px",
                              fontWeight: "500",
                              fontFamily: "roboto",
                            }}
                          >
                            ₹300
                          </h6>
                          <div className="test-card-btn-grp">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  View Details
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="diag-test-card-inner-item">
                          <h6 className="fs-5" style={{ color: "#427cc5" }}>
                            Malaria Test
                          </h6>
                          <h6 className="text-black pt-2">
                            Pre Test Information
                          </h6>
                          <p className="text-secondary">
                            No special prparation is required for the test.
                          </p>
                          <h6 className="text-black pt-2">Report Delivery</h6>
                          <p className="text-secondary">Same Day</p>
                          <h6
                            className="text-black pt-2"
                            style={{
                              fontSize: "18px",
                              fontFamily: "roboto",
                              fontWeight: "600",
                            }}
                          >
                            Includes:
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Blood Glucose
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Liver Functioning
                            </li>
                            <li>
                              <i className="far fa-check me-1 text-secondary"></i>
                              Heart Health
                            </li>
                          </ul>
                          <h6
                            className="mb-5"
                            style={{
                              fontSize: "30px",
                              fontWeight: "500",
                              fontFamily: "roboto",
                            }}
                          >
                            ₹300
                          </h6>
                          <div className="test-card-btn-grp">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  View Details
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  style={{
                                    padding: "15px 8px",
                                    border: "1px solid #000",
                                    background: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-diag-btn text-center">
                  <button className="btn btn-primary">View All Tests</button>
                </div>
              </div>
            </div>
            <div className="diag-common-test my-5">
              <div className="container">
                <div className="diag-test-card-title">
                  <h6
                    className="text-center"
                    style={{
                      fontSize: "30px",
                      fontWeight: "500",
                      fontFamily: "ubuntu",
                    }}
                  >
                    Simple & Quick Process
                  </h6>
                  <p
                    className="text-center mt-2"
                    style={{
                      fontSize: "18px",
                      fontFamily: "poppins",
                    }}
                  >
                    There live the blind texts separated they right at the coast
                    of the Semantics.
                  </p>
                </div>
                <div className="row g-0 mt-5">
                  <div className="col-2">
                    <div className="process-box-1 first">
                      <div className="process-box-header">
                        <i className="fas fa-vial icon"></i>
                      </div>
                      <div className="process-box-body">
                        <h5 className="heading-font-bold">Select Your Test</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="process-box-1">
                      <div className="process-box-header">
                        <i className="fas fa-home icon"></i>
                      </div>
                      <div className="process-box-body">
                        <h5 className="heading-font-bold">
                          Select Home Collection Option
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="process-box-1">
                      <div className="process-box-header">
                        <i className="fas fa-credit-card icon"></i>
                      </div>
                      <div className="process-box-body">
                        <h5 className="heading-font-bold">
                          Select Time, Date & Pay Online
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="process-box-1">
                      <div className="process-box-header">
                        <i className="fas fa-biking-mountain icon"></i>
                      </div>
                      <div className="process-box-body">
                        <h5 className="heading-font-bold">
                          Our Collection Agent Visit You
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="process-box-1">
                      <div className="process-box-header">
                        <i className="fas fa-microscope icon"></i>
                      </div>
                      <div className="process-box-body">
                        <h5 className="heading-font-bold">
                          Testing Done At Lab
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="process-box-1 last">
                      <div className="process-box-header">
                        <i className="fas fa-ballot icon"></i>
                      </div>
                      <div className="process-box-body">
                        <h5 className="heading-font-bold">
                          View/Download Your Report Online
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="diag-contact-banner pt-5"
              style={{
                background:
                  "url(/assets/images/diagnostics/contact-diag-banner.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-7">
                    <img
                      src="/assets/images/diagnostics/contact-item-img.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-5">
                    <h4
                      className="text-light mb-2"
                      style={{ fontSize: "20px" }}
                    >
                      For All Your Diagnostic Needs
                    </h4>
                    <h3
                      className="text-light mt-3 mb-5"
                      style={{ fontSize: "30px" }}
                    >
                      Trust the leaders in diagnostic since 1990
                    </h3>
                    <button className="btn btn-light text-dark fs-6">
                      +91 8945 6325 23
                    </button>
                  </div>
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
