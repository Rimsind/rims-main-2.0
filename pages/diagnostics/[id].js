import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import Carousel from "react-elastic-carousel";
import { DiagnosticsCategory, TestCard } from "components/common";
import Link from "next/link";

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
                    <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start">
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
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start">
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
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start">
                      <div className="diag-ribbon-inner-item">
                        <div className="row align-items-center">
                          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                            <div className="diag-ribbon-inner-item-icon mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
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
                          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9 col-xxl-9">
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
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start">
                      <div className="diag-ribbon-inner-item">
                        <div className="row align-items-center">
                          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                            <div className="diag-ribbon-inner-item-icon mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
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
                          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9 col-xxl-9">
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
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start">
                      <div className="diag-ribbon-inner-item">
                        <div className="row align-items-center">
                          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                            <div className="diag-ribbon-inner-item-icon mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
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
                          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9 col-xxl-9">
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
              <div className="container-fluid">
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
                <div className="row align-items-start mt-5 carousel-styling">
                  <Carousel
                    breakPoints={breakPoints}
                    enableAutoPlay
                    autoPlaySpeed={1500}
                  >
                    {data?.test_packages?.map((items, index) => (
                      <TestCard data={items} key={index} clinicId={id} />
                    ))}
                  </Carousel>
                </div>
                <div className="section-diag-btn text-center">
                  <Link href={`/diagnostics/test-list?id=${id}`}>
                    <a className="btn btn-primary">View All Tests</a>
                  </Link>
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
                <div className="row carousel-styling my-5">
                  <DiagnosticsCategory
                    url="/assets/images/diagnostics/heart.png"
                    title="Heart"
                  />
                  <DiagnosticsCategory
                    url="/assets/images/diagnostics/endocrine.png"
                    title="Thyroid"
                  />
                  <DiagnosticsCategory
                    url="/assets/images/diagnostics/liver.png"
                    title="Liver"
                  />
                  <DiagnosticsCategory
                    url="/assets/images/diagnostics/lungs.png"
                    title="Lungs"
                  />
                  <DiagnosticsCategory
                    url="/assets/images/diagnostics/infertility.png"
                    title="Infertility"
                  />
                  <DiagnosticsCategory
                    url="/assets/images/diagnostics/kidney.png"
                    title="Kidney"
                  />
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
              <div className="container-fluid">
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
                <div className="row align-items-start mt-5 carousel-styling">
                  <Carousel
                    breakPoints={breakPoints}
                    enableAutoPlay
                    autoPlaySpeed={1500}
                  >
                    {data?.test_packages?.map((items, index) => (
                      <TestCard data={items} key={index} clinicId={id} />
                    ))}
                  </Carousel>
                </div>
                <div className="section-diag-btn text-center">
                  <Link href={`/diagnostics/test-list?id=${id}`}>
                    <a className="btn btn-primary">View All Tests</a>
                  </Link>
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
                  <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <div className="process-box-1 first">
                      <div className="process-box-header">
                        <i className="fas fa-vial icon"></i>
                      </div>
                      <div className="process-box-body">
                        <h5 className="heading-font-bold">Select Your Test</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
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
                  <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
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
                  <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
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
                  <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
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
                  <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
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
              className="diag-contact-banner pt-5 "
              style={{
                background:
                  "url(/assets/images/diagnostics/contact-diag-banner.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                    <Image
                      src="/assets/images/diagnostics/contact-item-img.png"
                      height="320"
                      width="500"
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
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
