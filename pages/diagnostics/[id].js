import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import Carousel from "react-elastic-carousel";
import { TestCard } from "components/common";

const Details = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/diagnostic-centers/${id}`, fetcher);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 1 },
    { width: 768, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <section className="section-patho-details">
        <main className="main">
          <div className="page-wrapper">
            <div
              className="diag-slider"
              style={{
                background:
                  "linear-gradient(45deg, black, transparent), url(/assets/images/diagnostics/diag-banner-img.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "600px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="container">
                <div className="diag-slider-inner">
                  <div className="row g-2 align-items-start">
                    <div className="col-2">
                      <Image
                        src={
                          data?.image?.url || "/assets/images/polyclinic.jpg"
                        }
                        height="150px"
                        width="150px"
                        alt="Hello"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="col-10">
                      <h6 className="text-light" style={{ fontSize: "45px" }}>
                        {data?.name}
                      </h6>
                      <h6 className="text-light" style={{ fontSize: "25px" }}>
                        {data?.city}, {data?.state}
                      </h6>
                      <h6 className="mt-4">
                        <span
                          className="text-light ms-1"
                          style={{ fontSize: "19px" }}
                        >
                          +91 {data?.phone}
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
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
                                {data?.street_address} {data?.city},{" "}
                                {data?.state}, {data?.country}. Pin-{" "}
                                {data?.pincode}
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
                                +91 {data?.phone}
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
                              <p className="fs-6 text-light">{data?.email}</p>
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
                <div className="row align-items-start mt-5 carousel-style">
                  <Carousel
                    breakPoints={breakPoints}
                    enableAutoPlay
                    autoPlaySpeed={1500}
                  >
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                  </Carousel>
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
                          src="/assets/images/diagnostics/infertility.png"
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
                        <Image
                          src="/assets/images/diagnostics/kidney.png"
                          className="img-fluid"
                          height="80px"
                          width="80px"
                          alt="Speciality"
                          style={{ zIndex: "9999" }}
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
                  <Carousel
                    breakPoints={breakPoints}
                    enableAutoPlay
                    autoPlaySpeed={1500}
                  >
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                  </Carousel>
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
              className="diag-contact-banner pt-5 mb-1"
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
                      +91 {data?.phone}
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
