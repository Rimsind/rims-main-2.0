import { BreadCrums } from "components/common";
const Schedule = () => {
  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Schedule" title1="Schedule" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="fs-6 fw-bold">Doctor Details</p>
                        <div className="booking-doc-info d-flex mb-3">
                          <a
                            href="doctor-profile.html"
                            className="booking-doc-img"
                          >
                            <img
                              src="assets/images/doctors/doctor-thumb-01.jpg"
                              alt="User Image"
                            />
                          </a>
                          <div className="booking-info">
                            <h6 className="fs-6 fw-bold">
                              <a href="doctor-profile.html">Dr. Bappa Kamila</a>
                            </h6>
                            <h6 className="text-muted fs-6">MBBS</h6>
                            <h5 className="doc-department fs-6">
                              <i className="fas fa-user-tag"></i>
                              Heart
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="fs-6 fw-bold">Clinic Details</p>
                        <div className="booking-doc-info d-flex">
                          <a
                            href="doctor-profile.html"
                            className="booking-doc-img"
                          >
                            <img
                              src="/assets/images/card_image.jpg"
                              alt="User Image"
                            />
                          </a>
                          <div className="booking-info">
                            <h6 className="fs-6 fw-bold">
                              <a href="doctor-profile.html">
                                Mediland Nursing Home
                              </a>
                            </h6>
                            <p className="text-muted fs-6">
                              HPL Link Road, Haldia, West Bengal
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-6">
                    <h4 className="mb-1">11 November 2019</h4>
                    <p className="text-muted">Monday</p>
                  </div>
                  <div className="col-12 col-sm-8 col-md-6 text-sm-end">
                    <div className="date-picker mb-3">
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="card booking-schedule schedule-widget">
                  <div className="schedule-header">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="day-slot">
                          <ul>
                            <li className="left-arrow">
                              <a href="#">
                                <i className="fa fa-chevron-left"></i>
                              </a>
                            </li>
                            <li>
                              <span>Mon</span>
                              <span className="slot-date">
                                11 Nov
                                <small className="slot-year">2019</small>
                              </span>
                            </li>
                            <li>
                              <span>Tue</span>
                              <span className="slot-date">
                                12 Nov
                                <small className="slot-year">2019</small>
                              </span>
                            </li>
                            <li>
                              <span>Wed</span>
                              <span className="slot-date">
                                13 Nov
                                <small className="slot-year">2019</small>
                              </span>
                            </li>
                            <li>
                              <span>Thu</span>
                              <span className="slot-date">
                                14 Nov
                                <small className="slot-year">2019</small>
                              </span>
                            </li>
                            <li>
                              <span>Fri</span>
                              <span className="slot-date">
                                15 Nov
                                <small className="slot-year">2019</small>
                              </span>
                            </li>
                            <li>
                              <span>Sat</span>
                              <span className="slot-date">
                                16 Nov
                                <small className="slot-year">2019</small>
                              </span>
                            </li>
                            <li>
                              <span>Sun</span>
                              <span className="slot-date">
                                17 Nov
                                <small className="slot-year">2019</small>
                              </span>
                            </li>
                            <li className="right-arrow">
                              <a href="#">
                                <i className="fa fa-chevron-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="schedule-cont">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="time-slot">
                          <ul className="clearfix">
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing selected" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="submit-section proceed-btn text-end">
                  <a
                    href="general_problem.html"
                    className="btn btn-primary submit-btn"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Schedule;
