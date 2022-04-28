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
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img poly-img">
                        <a href="doctor-profile.html">
                          <Image
                            height="130"
                            width="145"
                            src={"/assets/images/alternate/alt-hospital.png"}
                            className="img-fluid"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile.html">Haldia Pathology</a>
                        </h4>
                        <p className="doc-speciality">Haldia, West Bengal</p>
                        <i className="far fa-envelope"></i>{" "}
                        haldiapathology@gmail.com
                        <div className="clinic-details"></div>
                        <div className="clinic-services">
                          <span>X-Ray</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="fas fa-mobile"></i> 894 563 2148
                          </li>
                          <li>
                            <i className="far fa-clock"></i>
                            10:00 A.M to 05:00 P.M
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i> City
                            Center, Haldia, West Bengal
                          </li>
                        </ul>
                      </div>
                      <div className="doctor-action">
                        <a className="btn btn-white fav-btn disabled">
                          <i className="far fa-bookmark"></i>
                        </a>
                        <a
                          href="chat.html"
                          className="btn btn-white msg-btn disabled"
                        >
                          <i className="far fa-comment-alt"></i>
                        </a>
                        <a
                          className="btn btn-white call-btn disabled"
                          data-bs-toggle="modal"
                          data-bs-target="#voice_call"
                        >
                          <i className="fas fa-phone"></i>
                        </a>
                        <a
                          className="btn btn-white call-btn disabled"
                          data-bs-toggle="modal"
                          data-bs-target="#video_call"
                        >
                          <i className="fas fa-video"></i>
                        </a>
                      </div>
                      <div className="clinic-booking"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card details_tab">
                <div className="card-body pt-0">
                  <nav className="user-tabs mb-4">
                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#doc_overview"
                          data-bs-toggle="tab"
                        >
                          Overview
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#doc_doctor"
                          data-bs-toggle="tab"
                        >
                          Doctors
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#doc_locations"
                          data-bs-toggle="tab"
                        >
                          Locations
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <div className="tab-content pt-0">
                    <div
                      role="tabpanel"
                      id="doc_overview"
                      className="tab-pane fade active show"
                    >
                      <div className="row">
                        <div className="col-md-12 col-lg-9">
                          <div className="widget about-widget">
                            <h4 className="widget-title">About Me</h4>
                            <p>Hello this is about section.</p>
                          </div>
                        </div>
                      </div>
                      <div className="nurshing-facilty">
                        <div className="row">
                          <div className="col-12 co-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3">
                            <div className="dashboard-card border-bottom-0 mb-5">
                              <div className="row align-items-center">
                                <div className="col-3">
                                  <div className="dashboard-card-icon">
                                    <Image
                                      src="/assets/images/Regular-Bed.png"
                                      height="50px"
                                      width="50px"
                                      alt="Regular Bed"
                                    />
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="dashboard-card-main-title">
                                    <p>X-Ray</p>
                                  </div>
                                </div>
                                <div className="col-5 text-end">
                                  <p
                                    className="badge bg-primary fw-lighter border border-1 border-secondary"
                                    style={{ fontSize: "13px" }}
                                  >
                                    Available
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 co-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3">
                            <div className="dashboard-card border-bottom-0 mb-5">
                              <div className="row align-items-center">
                                <div className="col-3">
                                  <div className="dashboard-card-icon">
                                    <Image
                                      src="/assets/images/Regular-Bed.png"
                                      height="50px"
                                      width="50px"
                                      alt="Regular Bed"
                                    />
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="dashboard-card-main-title">
                                    <p>X-Ray</p>
                                  </div>
                                </div>
                                <div className="col-5 text-end">
                                  <p
                                    className="badge bg-primary fw-lighter border border-1 border-secondary"
                                    style={{ fontSize: "13px" }}
                                  >
                                    Available
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 co-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3">
                            <div className="dashboard-card border-bottom-0 mb-5">
                              <div className="row align-items-center">
                                <div className="col-3">
                                  <div className="dashboard-card-icon">
                                    <Image
                                      src="/assets/images/Regular-Bed.png"
                                      height="50px"
                                      width="50px"
                                      alt="Regular Bed"
                                    />
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="dashboard-card-main-title">
                                    <p>X-Ray</p>
                                  </div>
                                </div>
                                <div className="col-5 text-end">
                                  <p
                                    className="badge bg-primary fw-lighter border border-1 border-secondary"
                                    style={{ fontSize: "13px" }}
                                  >
                                    Available
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 co-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3">
                            <div className="dashboard-card border-bottom-0 mb-5">
                              <div className="row align-items-center">
                                <div className="col-3">
                                  <div className="dashboard-card-icon">
                                    <Image
                                      src="/assets/images/Regular-Bed.png"
                                      height="50px"
                                      width="50px"
                                      alt="Regular Bed"
                                    />
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="dashboard-card-main-title">
                                    <p>X-Ray</p>
                                  </div>
                                </div>
                                <div className="col-5 text-end">
                                  <p
                                    className="badge bg-primary fw-lighter border border-1 border-secondary"
                                    style={{ fontSize: "13px" }}
                                  >
                                    Available
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 co-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3">
                            <div className="dashboard-card border-bottom-0 mb-5">
                              <div className="row align-items-center">
                                <div className="col-3">
                                  <div className="dashboard-card-icon">
                                    <Image
                                      src="/assets/images/Regular-Bed.png"
                                      height="50px"
                                      width="50px"
                                      alt="Regular Bed"
                                    />
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="dashboard-card-main-title">
                                    <p>X-Ray</p>
                                  </div>
                                </div>
                                <div className="col-5 text-end">
                                  <p
                                    className="badge bg-primary fw-lighter border border-1 border-secondary"
                                    style={{ fontSize: "13px" }}
                                  >
                                    Available
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 co-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3">
                            <div className="dashboard-card border-bottom-0 mb-5">
                              <div className="row align-items-center">
                                <div className="col-3">
                                  <div className="dashboard-card-icon">
                                    <Image
                                      src="/assets/images/Regular-Bed.png"
                                      height="50px"
                                      width="50px"
                                      alt="Regular Bed"
                                    />
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="dashboard-card-main-title">
                                    <p>X-Ray</p>
                                  </div>
                                </div>
                                <div className="col-5 text-end">
                                  <p
                                    className="badge bg-primary fw-lighter border border-1 border-secondary"
                                    style={{ fontSize: "13px" }}
                                  >
                                    Available
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 co-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3">
                            <div className="dashboard-card border-bottom-0 mb-5">
                              <div className="row align-items-center">
                                <div className="col-3">
                                  <div className="dashboard-card-icon">
                                    <Image
                                      src="/assets/images/Regular-Bed.png"
                                      height="50px"
                                      width="50px"
                                      alt="Regular Bed"
                                    />
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="dashboard-card-main-title">
                                    <p>X-Ray</p>
                                  </div>
                                </div>
                                <div className="col-5 text-end">
                                  <p
                                    className="badge bg-danger fw-lighter border border-1 border-secondary"
                                    style={{ fontSize: "13px" }}
                                  >
                                    Not Available
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 co-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3">
                            <div className="dashboard-card border-bottom-0 mb-5">
                              <div className="row align-items-center">
                                <div className="col-3">
                                  <div className="dashboard-card-icon">
                                    <Image
                                      src="/assets/images/Regular-Bed.png"
                                      height="50px"
                                      width="50px"
                                      alt="Regular Bed"
                                    />
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="dashboard-card-main-title">
                                    <p>X-Ray</p>
                                  </div>
                                </div>
                                <div className="col-5 text-end">
                                  <p
                                    className="badge bg-danger fw-lighter border border-1 border-secondary"
                                    style={{ fontSize: "13px" }}
                                  >
                                    Not Available
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div
                      role="tabpanel"
                      id="doc_doctor"
                      className="tab-pane fade show"
                    >
                      {data?.doctors?.map((items, index) => (
                            <PolyclinicTimetableCard
                              schedule={items}
                              key={index}
                            />
                          ))}
              
                    </div> */}

                    <div
                      role="tabpanel"
                      id="doc_locations"
                      className="tab-pane fade"
                    >
                      <div className="poly-location d-flex justify-content-between flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row py-4 px-3">
                        <div className="poly-address">
                          <div className="contact-section poly-location">
                            <div className="contact-box">
                              <div className="infor-img">
                                <div className="image-circle">
                                  <i className="fas fa-phone-alt"></i>
                                </div>
                              </div>
                              <div className="infor-details">
                                <label>Phone Number</label>
                                <p>+91 894 563 2148</p>
                              </div>
                            </div>
                            <div className="contact-box">
                              <div className="infor-img">
                                <div className="image-circle bg-cus-primary">
                                  <i className="fas fa-envelope"></i>
                                </div>
                              </div>
                              <div className="infor-details">
                                <label>Email</label>
                                <p>haldiapathology@gmail.com</p>
                              </div>
                            </div>
                            <div className="contact-box">
                              <div className="infor-img">
                                <div className="image-circle">
                                  <i className="fas fa-map-marker-alt"></i>
                                </div>
                              </div>
                              <div className="infor-details">
                                <label>Location</label>
                                <p>
                                  City Center, Haldia, West Bengal, India, PIN -{" "}
                                  721657
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="poly-map">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.656727869912!2d88.07755181541289!3d22.062722957051058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0c7d1cdc935%3A0xdc5e28eac9b1b75b!2sWebel%20IT%20Park!5e0!3m2!1sen!2sin!4v1650523791124!5m2!1sen!2sin"
                            width="300"
                            height="300"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                          ></iframe>
                        </div>
                      </div>
                    </div>
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
