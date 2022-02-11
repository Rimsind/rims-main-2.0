import { BreadCrums, VerifyCard } from "components/common";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Schedule = () => {
  const { doctorId, polyclinicId, fee } = useRouter().query;
  const { data: doctor } = useSWR(`${apiUrl}/doctors/${doctorId}`, fetcher);
  const { data: polyclinic } = useSWR(
    `${apiUrl}/polyclinics/${polyclinicId}`,
    fetcher
  );

  const [date, setDate] = useState();

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Schedule" title1="Schedule" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <VerifyCard
                  doctorDetails={doctor}
                  polyclinicDetails={polyclinic}
                />
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-6">
                    <h4 className="mb-1">11 November 2019</h4>
                    <p className="text-muted">Monday</p>
                  </div>
                  <div className="col-12 col-sm-8 col-md-6 text-sm-end">
                    <div className="date-picker mb-3">
                      <input
                        type="date"
                        className="form-control"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="card booking-schedule schedule-widget">
                  <div className="schedule-cont">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="time-slot row mb-2">
                          <div className="col-2 col-md-2  col-xl-2 col-lg-2 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:00 AM"
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
                              >
                                9:00 AM - 9:15 AM
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="submit-section proceed-btn text-end">
                  <Link
                    href={`/checkout?doctorId=${doctorId}&&polyclinicId=${polyclinicId}&&fee=${fee}&&date=${date}`}
                  >
                    <a className="btn btn-primary submit-btn">Next</a>
                  </Link>
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
