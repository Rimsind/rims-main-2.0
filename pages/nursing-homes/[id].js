import { BreadCrums, PolyclinicTimetableCard } from "components/common/index";
import Image from "next/image";
const NursingHomeId = () => {
  return (
    <>
      <main className="main">
        <BreadCrums
          title="Home / Nursing-Home Details"
          title1="Nursing-Home Details"
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
                          src="/assets/images/polyclinic.jpg"
                          className="img-fluid"
                          alt="User Image"
                        />
                      </a>
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">
                        <a href="doctor-profile.html">Haldia Nurshing Home</a>
                      </h4>
                      <p className="doc-speciality">Haldia, West Bengal</p>
                      <i className="far fa-envelope"></i>
                      haldianurshinghome@gmail.com
                      <div className="clinic-details"></div>
                      <div className="clinic-services">
                        <span>Dental Fillings</span>
                        <span> Whitneing</span>
                        <span> Whitneing</span>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="fas fa-mobile"></i> 987456321
                        </li>
                        <li>
                          <i className="far fa-clock"></i>
                          10:00 A.M to 8:00 P.M
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Haldia, WB
                        </li>
                      </ul>
                    </div>
                    <div className="doctor-action">
                      <a href="#" className="btn btn-white fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                      <a href="chat.html" className="btn btn-white msg-btn">
                        <i className="far fa-comment-alt"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-white call-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <i className="fas fa-phone"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-white call-btn"
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
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#doc_doctor"
                        data-bs-toggle="tab"
                      >
                        Doctors
                      </a>
                    </li>
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
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="nurshing-facilty">
                      <div className="row">
                        <div className="col-lg-3 col-md-4">
                          <div className="special-box text-center">
                            <div className="special-body">
                              <Image
                                height="45"
                                width="45"
                                src="/assets/images/shapes/spec.png"
                                alt=""
                              />
                              <h4>Regular Bed</h4>
                              <a href="booking.html" className="spc-book">
                                Book now <i className="fas fa-caret-right"></i>
                              </a>
                            </div>
                            <div className="row row-sm special-footer">
                              <div className="col-6 text-start">
                                <a href="#" className="doc-count">
                                  124 <span>Doctors</span>
                                </a>
                              </div>
                              <div className="col-6 text-end">
                                <a href="#" className="clin-count">
                                  24 <span>Clinics</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                          <div className="special-box text-center">
                            <div className="special-body">
                              <Image
                                height="45"
                                width="45"
                                src="/assets/images/shapes/spec-01.png"
                                alt=""
                              />
                              <h4>ICU Bed</h4>
                              <a href="booking.html" className="spc-book">
                                Book now <i className="fas fa-caret-right"></i>
                              </a>
                            </div>
                            <div className="row row-sm special-footer">
                              <div className="col-6 text-start">
                                <a href="#" className="doc-count">
                                  124 <span>Doctors</span>
                                </a>
                              </div>
                              <div className="col-6 text-end">
                                <a href="#" className="clin-count">
                                  24 <span>Clinics</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                          <div className="special-box text-center">
                            <div className="special-body">
                              <Image
                                height="45"
                                width="45"
                                src="/assets/images/shapes/spec-02.png"
                                alt=""
                              />
                              <h4>Ambulance</h4>
                              <a href="booking.html" className="spc-book">
                                Book now <i className="fas fa-caret-right"></i>
                              </a>
                            </div>
                            <div className="row row-sm special-footer">
                              <div className="col-6 text-start">
                                <a href="#" className="doc-count">
                                  124 <span>Doctors</span>
                                </a>
                              </div>
                              <div className="col-6 text-end">
                                <a href="#" className="clin-count">
                                  24 <span>Clinics</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                          <div className="special-box text-center">
                            <div className="special-body">
                              <Image
                                height="45"
                                width="45"
                                src="/assets/images/shapes/spec-04.png"
                                alt=""
                              />
                              <h4>Icu Ambulance</h4>
                              <a href="booking.html" className="spc-book">
                                Book now <i className="fas fa-caret-right"></i>
                              </a>
                            </div>
                            <div className="row row-sm special-footer">
                              <div className="col-6 text-start">
                                <a href="#" className="doc-count">
                                  124 <span>Doctors</span>
                                </a>
                              </div>
                              <div className="col-6 text-end">
                                <a href="#" className="clin-count">
                                  24 <span>Clinics</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    role="tabpanel"
                    id="doc_doctor"
                    className="tab-pane fade show"
                  >
                    <PolyclinicTimetableCard />
                  </div>

                  <div
                    role="tabpanel"
                    id="doc_locations"
                    className="tab-pane fade"
                  >
                    <div className="poly-location d-flex justify-content-between">
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
                              <p>+152 534-468-854</p>
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
                              <p>demo.rimsind@gmail.com</p>
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
                                C/54 Northwest Freeway,Suite 558, Houston, USA
                                485
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="poly-map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59162.79901960036!2d88.05869855798426!3d22.062026721715704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0cb35788045%3A0x58f6d5c69f0de04d!2sHaldia%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1642855030171!5m2!1sen!2sin"
                          width="400"
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
    </>
  );
};

export default NursingHomeId;
