import { BreadCrums, PolyclinicTimetableCard } from "components/common/index";

const NursingHomeId = () => {
  return (
    <>
      <main class="main">
        <BreadCrums
          title="Home / Nursing-Home Details"
          title1="Nursing-Home Details"
        />
        <div class="content">
          <div class="container">
            <div class="card">
              <div class="card-body">
                <div class="doctor-widget">
                  <div class="doc-info-left">
                    <div class="doctor-img poly-img">
                      <a href="doctor-profile.html">
                        <img
                          src="/assets/images/polyclinic.jpg"
                          class="img-fluid"
                          alt="User Image"
                        />
                      </a>
                    </div>
                    <div class="doc-info-cont">
                      <h4 class="doc-name">
                        <a href="doctor-profile.html">Haldia Nurshing Home</a>
                      </h4>
                      <p class="doc-speciality">Haldia, West Bengal</p>
                      <i class="far fa-envelope"></i>
                      haldianurshinghome@gmail.com
                      <div class="clinic-details"></div>
                      <div class="clinic-services">
                        <span>Dental Fillings</span>
                        <span> Whitneing</span>
                        <span> Whitneing</span>
                      </div>
                    </div>
                  </div>
                  <div class="doc-info-right">
                    <div class="clini-infos">
                      <ul>
                        <li>
                          <i class="fas fa-mobile"></i> 987456321
                        </li>
                        <li>
                          <i class="far fa-clock"></i>
                          10:00 A.M to 8:00 P.M
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Haldia, WB
                        </li>
                      </ul>
                    </div>
                    <div class="doctor-action">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-white fav-btn"
                      >
                        <i class="far fa-bookmark"></i>
                      </a>
                      <a href="chat.html" class="btn btn-white msg-btn">
                        <i class="far fa-comment-alt"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="btn btn-white call-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <i class="fas fa-phone"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="btn btn-white call-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#video_call"
                      >
                        <i class="fas fa-video"></i>
                      </a>
                    </div>
                    <div class="clinic-booking"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card details_tab">
              <div class="card-body pt-0">
                <nav class="user-tabs mb-4">
                  <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#doc_overview"
                        data-bs-toggle="tab"
                      >
                        Overview
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#doc_doctor"
                        data-bs-toggle="tab"
                      >
                        Doctors
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#doc_locations"
                        data-bs-toggle="tab"
                      >
                        Locations
                      </a>
                    </li>
                  </ul>
                </nav>

                <div class="tab-content pt-0">
                  <div
                    role="tabpanel"
                    id="doc_overview"
                    class="tab-pane fade active show"
                  >
                    <div class="row">
                      <div class="col-md-12 col-lg-9">
                        <div class="widget about-widget">
                          <h4 class="widget-title">About Me</h4>
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
                    <div class="nurshing-facilty">
                      <div class="row">
                        <div class="col-lg-3 col-md-4">
                          <div class="special-box text-center">
                            <div class="special-body">
                              <img
                                src="/assets/images/shapes/spec.png"
                                alt=""
                              />
                              <h4>Regular Bed</h4>
                              <a href="booking.html" class="spc-book">
                                Book now <i class="fas fa-caret-right"></i>
                              </a>
                            </div>
                            <div class="row row-sm special-footer">
                              <div class="col-6 text-start">
                                <a href="#" class="doc-count">
                                  124 <span>Doctors</span>
                                </a>
                              </div>
                              <div class="col-6 text-end">
                                <a href="#" class="clin-count">
                                  24 <span>Clinics</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-4">
                          <div class="special-box text-center">
                            <div class="special-body">
                              <img
                                src="/assets/images/shapes/spec-01.png"
                                alt=""
                              />
                              <h4>ICU Bed</h4>
                              <a href="booking.html" class="spc-book">
                                Book now <i class="fas fa-caret-right"></i>
                              </a>
                            </div>
                            <div class="row row-sm special-footer">
                              <div class="col-6 text-start">
                                <a href="#" class="doc-count">
                                  124 <span>Doctors</span>
                                </a>
                              </div>
                              <div class="col-6 text-end">
                                <a href="#" class="clin-count">
                                  24 <span>Clinics</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-4">
                          <div class="special-box text-center">
                            <div class="special-body">
                              <img
                                src="/assets/images/shapes/spec-02.png"
                                alt=""
                              />
                              <h4>Ambulance</h4>
                              <a href="booking.html" class="spc-book">
                                Book now <i class="fas fa-caret-right"></i>
                              </a>
                            </div>
                            <div class="row row-sm special-footer">
                              <div class="col-6 text-start">
                                <a href="#" class="doc-count">
                                  124 <span>Doctors</span>
                                </a>
                              </div>
                              <div class="col-6 text-end">
                                <a href="#" class="clin-count">
                                  24 <span>Clinics</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-4">
                          <div class="special-box text-center">
                            <div class="special-body">
                              <img
                                src="/assets/images/shapes/spec-04.png"
                                alt=""
                              />
                              <h4>Icu Ambulance</h4>
                              <a href="booking.html" class="spc-book">
                                Book now <i class="fas fa-caret-right"></i>
                              </a>
                            </div>
                            <div class="row row-sm special-footer">
                              <div class="col-6 text-start">
                                <a href="#" class="doc-count">
                                  124 <span>Doctors</span>
                                </a>
                              </div>
                              <div class="col-6 text-end">
                                <a href="#" class="clin-count">
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
                    class="tab-pane fade show"
                  >
                    <PolyclinicTimetableCard />
                  </div>

                  <div role="tabpanel" id="doc_locations" class="tab-pane fade">
                    <div class="poly-location d-flex justify-content-between">
                      <div class="poly-address">
                        <div class="contact-section poly-location">
                          <div class="contact-box">
                            <div class="infor-img">
                              <div class="image-circle">
                                <i class="fas fa-phone-alt"></i>
                              </div>
                            </div>
                            <div class="infor-details">
                              <label>Phone Number</label>
                              <p>+152 534-468-854</p>
                            </div>
                          </div>
                          <div class="contact-box">
                            <div class="infor-img">
                              <div class="image-circle bg-cus-primary">
                                <i class="fas fa-envelope"></i>
                              </div>
                            </div>
                            <div class="infor-details">
                              <label>Email</label>
                              <p>demo.rimsind@gmail.com</p>
                            </div>
                          </div>
                          <div class="contact-box">
                            <div class="infor-img">
                              <div class="image-circle">
                                <i class="fas fa-map-marker-alt"></i>
                              </div>
                            </div>
                            <div class="infor-details">
                              <label>Location</label>
                              <p>
                                C/54 Northwest Freeway,Suite 558, Houston, USA
                                485
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="poly-map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59162.79901960036!2d88.05869855798426!3d22.062026721715704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0cb35788045%3A0x58f6d5c69f0de04d!2sHaldia%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1642855030171!5m2!1sen!2sin"
                          width="400"
                          height="300"
                          style={{ border: "0" }}
                          allowfullscreen=""
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
