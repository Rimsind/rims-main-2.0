import { BreadCrums, DoctorTimetableCard } from "components/common/index";
const DoctorId = () => {
  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Doctor Details" title1="Doctor Details" />
        <div className="content">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <img
                        src="/assets/images/smair-barman.jpg"
                        className="img-fluid"
                        alt="User Image"
                      />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">Dr. Samir Barman</h4>
                      <p className="doc-speciality">
                        25 years experience, Consultant Rehabilitation
                      </p>
                      <h5 className="doc-department">
                        <i className="fas fa-user-tag"></i>
                        Medicine
                      </h5>
                      <i className="far fa-envelope mb-3"></i>
                      samirbarman112@gmail.com
                      <div className="clinic-services">
                        <span>
                          <i className="fab fa-skype"></i> Skype Id:
                          aryajana@0124
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="fas fa-certificate"></i> MBBS
                        </li>

                        <li>
                          <i className="fas fa-map-marker-alt"></i> City Center,
                          Haldia, WB
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> ₹300 - ₹1000
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                    </div>
                    <div className="doctor-action">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-white fav-btn"
                      >
                        <i className="far fa-bookmark"></i>
                      </a>
                      <a href="chat.html" className="btn btn-white msg-btn">
                        <i className="far fa-comment-alt"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-white call-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <i className="fas fa-phone"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
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
                        href="#doc_locations"
                        data-bs-toggle="tab"
                      >
                        Locations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#doc_overview"
                        data-bs-toggle="tab"
                      >
                        Overview
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="tab-content pt-0">
                  <div
                    role="tabpanel"
                    id="doc_locations"
                    className="tab-pane fade show active"
                  >
                    <div className="location-list">
                      <DoctorTimetableCard />
                      <DoctorTimetableCard />
                    </div>
                  </div>

                  <div
                    role="tabpanel"
                    id="doc_overview"
                    className="tab-pane fade"
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

                        <div className="widget education-widget">
                          <h4 className="widget-title">Education</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">
                                      American Dental Medical University
                                    </a>
                                    <div>BDS</div>
                                    <span className="time">1998 - 2003</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">
                                      American Dental Medical University
                                    </a>
                                    <div>MDS</div>
                                    <span className="time">2003 - 2005</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="widget experience-widget">
                          <h4 className="widget-title">Work & Experience</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">
                                      Glowing Smiles Family Dental Clinic
                                    </a>
                                    <span className="time">
                                      2010 - Present (5 years)
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">
                                      Comfort Care Dental Clinic
                                    </a>
                                    <span className="time">
                                      2007 - 2010 (3 years)
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">
                                      Dream Smile Dental Practice
                                    </a>
                                    <span className="time">
                                      2005 - 2007 (2 years)
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
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

export default DoctorId;
