import { BreadCrums, VerifyCard } from "components/common";

import { useRouter } from "next/router";
import { useState } from "react";

const Schedule = () => {
  const { doctor, polyclinic, fee } = useRouter().query;
  const [data, setData] = useState();
  console.log(data);

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Schedule" title1="Schedule" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <VerifyCard />
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
                  {/* <div className="schedule-header">
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
                  </div> */}

                  <div className="schedule-cont">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="time-slot row mb-2">
                          <div className="col-2 col-md-2  col-xl-2 col-lg-2 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:00 AM"
                                onClick={(e) => setData(e.target.value)}
                              >
                                9:00 AM - 9:15 AM
                              </button>
                            </div>
                          </div>
                          <div className="col-2 col-md-2  col-xl-2 col-lg-2 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:00 AM"
                                onClick={(e) => setData(e.target.value)}
                              >
                                9:00 AM - 9:15 AM
                              </button>
                            </div>
                          </div>
                          <div className="col-2 col-md-2  col-xl-2 col-lg-2 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:00 AM"
                                onClick={(e) => setData(e.target.value)}
                              >
                                9:00 AM - 9:15 AM
                              </button>
                            </div>
                          </div>
                          <div className="col-2 col-md-2  col-xl-2 col-lg-2 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:00 AM"
                                onClick={(e) => setData(e.target.value)}
                              >
                                9:00 AM - 9:15 AM
                              </button>
                            </div>
                          </div>
                          <div className="col-2 col-md-2  col-xl-2 col-lg-2 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:00 AM"
                                onClick={(e) => setData(e.target.value)}
                              >
                                9:00 AM - 9:15 AM
                              </button>
                            </div>
                          </div>
                          <div className="col-2 col-md-2  col-xl-2 col-lg-2 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:00 AM"
                                onClick={(e) => setData(e.target.value)}
                              >
                                9:00 AM - 9:15 AM
                              </button>
                            </div>
                          </div>
                          <div className="col-2 col-md-2  col-xl-2 col-lg-2 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:00 AM"
                                onClick={(e) => setData(e.target.value)}
                              >
                                9:00 AM - 9:15 AM
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <div className="time-slot row mb-2">
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              10:30 AM - 10:45 AM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              10:45 AM - 11:00 AM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              11:00 AM - 11:15 AM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              11:15 AM - 11:30 AM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              11:30 AM - 11:45 AM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              11:45 AM - 12:00 PM
                            </button>
                          </div>
                        </div> */}
                        {/* <div className="time-slot row mb-2">
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              12:00 PM - 12:15 PM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              12:15 PM - 12:30 PM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              12:30 PM - 12:45 PM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              12:45 PM - 01:00 PM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              01:00 PM - 01:15 PM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              01:15 PM - 01:30 PM
                            </button>
                          </div>
                        </div> */}
                        {/* <div className="time-slot row mb-2">
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              01:30 PM - 01:45 PM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              01:45 PM - 02:00 PM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              02:00 PM - 02:15 PM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              02:15 PM - 02:30 PM
                            </button>
                          </div>
                          <div className="schd-item me-2">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              02:30 PM - 02:45 PM
                            </button>
                          </div>
                          <div className="schd-item">
                            <button
                              className="btn btn-primary rounded-1"
                              value="9:00 AM"
                              onClick={(e) => setData(e.target.value)}
                            >
                              02:45 PM - 03:00 PM
                            </button>
                          </div>
                        </div> */}
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
