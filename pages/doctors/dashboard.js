import { BreadCrums, AuthNav } from "components/common/index";

import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { UserPageLoader } from "components/Loaders";
import { DoctorSidebar } from "components/DoctorComponents";
import { withAuth } from "helpers/withAuth";
const Dashboard = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  const { data: appointments } = useSWR(
    `${apiUrl}/appointments?doctor=${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if (day < 10) {
    var newDay = "0" + day;
  } else {
    var newDay = day;
  }
  if (month < 10) {
    var newMonth = "0" + month;
  } else {
    var newMonth = month;
  }
  const previousDay = newDay - 1;
  const nextDay = newDay + 1;
  const currentDate = year + "-" + newMonth + "-" + newDay;
  const previousDate = year + "-" + newMonth + "-" + previousDay;
  const nextDate = year + "-" + newMonth + "-" + nextDay;

  const todaysAppointment = appointments?.filter((items) => {
    if (items?.date.includes(currentDate)) {
      return items;
    }
  });
  const yesterdayAppointment = appointments?.filter((items) => {
    if (items?.date.includes(previousDate)) {
      return items;
    }
  });
  const tommorowAppointment = appointments?.filter((items) => {
    if (items?.date.includes(nextDate)) {
      return items;
    }
  });
  const appointmentCompleted = appointments?.filter((items) => {
    if (
      items?.date.includes(currentDate) &&
      items?.appointment_status?.toString().includes("true")
    ) {
      return items;
    }
  });
  const appointmentPending = appointments?.filter((items) => {
    if (
      items?.date.includes(currentDate) &&
      items?.appointment_status?.toString().includes("false")
    ) {
      return items;
    }
  });

  return (
    <>
      <div className="main-wrapper">
        <BreadCrums title="Home / Doctor / Dashboard" title1="Doctor" />

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <DoctorSidebar status1="active" data={data} />
              {data ? (
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-9">
                  <div
                    className="dashboard-welcome-text rounded"
                    style={{
                      background: "url(/assets/images/stethoscope.jpg)",
                      height: "154px",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div className="banner-title ms-5">
                      <h6 className="fs-3 text-light fst-italic">
                        Hello Dr. {data?.firstName} {data?.lastName}
                      </h6>
                    </div>
                    <div className="banner-sub-title ms-5">
                      <p
                        className="text-light fst-italic"
                        style={{ fontSize: "15px" }}
                      >
                        Welcome to RIMS Dashboard.
                        <br />
                        Here are your important tasks and reports.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-3 patient-dashboard-top">
                      <div className="dashboard-card">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="dashboard-card-icon shadow">
                              <i className="fas fa-user-injured"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="dashboard-card-title">
                              <p>My Patients</p>
                            </div>
                          </div>
                        </div>

                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="dashboard-card-number text-start">
                              <p>{appointments?.length}</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="dashboard-card-number text-end">
                              <div className="left-para-date">
                                <span
                                  className="badge rounded-pill bg-primary fw-normal shadow"
                                  style={{ fontSize: "15px" }}
                                >
                                  <i className="fas fa-circle text-light me-1"></i>
                                  Live
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-3 patient-dashboard-top">
                      <div className="dashboard-card">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="dashboard-card-icon shadow">
                              <i className="fas fa-clinic-medical"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="dashboard-card-title">
                              <p>My Clinics</p>
                            </div>
                          </div>
                        </div>

                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="dashboard-card-number text-start">
                              <p>{data?.booking_schedule?.length}</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="dashboard-card-number text-end">
                              <div className="left-para-date">
                                <span
                                  className="badge rounded-pill bg-primary fw-normal shadow"
                                  style={{ fontSize: "15px" }}
                                >
                                  <i className="fas fa-circle text-light me-1"></i>
                                  Live
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-3 patient-dashboard-top">
                      <div className="dashboard-card">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="dashboard-card-icon shadow">
                              <i className="fas fa-calendar-alt"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="dashboard-card-title">
                              <p>Yesterday&apos;s Appointments </p>
                            </div>
                          </div>
                        </div>

                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="dashboard-card-number text-start">
                              <p>{yesterdayAppointment?.length}</p>
                            </div>
                          </div>
                          {/* <div className="col-6">
                            <div className="dashboard-card-number text-end">
                              <div className="left-para-date">
                                <span className="badge rounded-pill bg-warning fs-6">
                                  Pending
                                </span>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>{" "}
                    <div className="col-12 col-md-6 col-lg-6 col-xl-3 patient-dashboard-top">
                      <div className="dashboard-card">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="dashboard-card-icon shadow">
                              <i className="fas fa-calendar-edit"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="dashboard-card-title">
                              <p>Tommorow&apos;s Appointments </p>
                            </div>
                          </div>
                        </div>

                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="dashboard-card-number text-start">
                              <p>{tommorowAppointment?.length}</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="dashboard-card-number text-end">
                              <div className="left-para-date">
                                <span
                                  className="badge rounded-pill bg-primary fw-normal shadow"
                                  style={{ fontSize: "15px" }}
                                >
                                  <i className="fas fa-circle text-light me-1"></i>
                                  Live
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-3 patient-dashboard-top">
                      <div className="dashboard-card">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="dashboard-card-icon shadow">
                              <i className="fas fa-calendar-week"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="dashboard-card-title">
                              <p>Today&apos;s Appointments</p>
                            </div>
                          </div>
                        </div>

                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="dashboard-card-number text-start">
                              <p>{todaysAppointment?.length}</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="dashboard-card-number text-end">
                              <div className="left-para-date">
                                <span
                                  className="badge rounded-pill bg-info fs-6 fw-normal shadow"
                                  style={{ fontSize: "15px" }}
                                >
                                  <i className="fas fa-layer-group me-1"></i>
                                  Total
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-3 patient-dashboard-top">
                      <div className="dashboard-card">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="dashboard-card-icon shadow">
                              <i className="fas fa-calendar-check"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="dashboard-card-title">
                              <p>Today&apos;s Appointments </p>
                            </div>
                          </div>
                        </div>

                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="dashboard-card-number text-start">
                              <p>{appointmentCompleted?.length}</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="dashboard-card-number text-end">
                              <div className="left-para-date">
                                <span
                                  className="badge rounded-pill bg-success fw-normal shadow"
                                  style={{ fontSize: "15px" }}
                                >
                                  <i className="fas fa-check-circle me-1"></i>
                                  Completed
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-3 patient-dashboard-top">
                      <div className="dashboard-card">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="dashboard-card-icon shadow">
                              <i className="fas fa-calendar-exclamation"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="dashboard-card-title">
                              <p>Today&apos;s Appointments </p>
                            </div>
                          </div>
                        </div>

                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="dashboard-card-number text-start">
                              <p>{appointmentPending?.length}</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="dashboard-card-number text-end">
                              <div className="left-para-date">
                                <span
                                  className="badge rounded-pill fw-normal shadow"
                                  style={{
                                    background: "#ff7600",
                                    fontSize: "15px",
                                  }}
                                >
                                  <i className="fas fa-hourglass-start me-1"></i>
                                  Pending
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-3 patient-dashboard-top">
                      <div className="dashboard-card">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="dashboard-card-icon shadow">
                              <i className="fas fa-calendar-times"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="dashboard-card-title">
                              <p>Today&apos;s Appointments </p>
                            </div>
                          </div>
                        </div>

                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="dashboard-card-number text-start">
                              <p>{tommorowAppointment?.length}</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="dashboard-card-number text-end">
                              <div className="left-para-date">
                                <span
                                  className="badge rounded-pill bg-danger fw-normal shadow"
                                  style={{ fontSize: "15px" }}
                                >
                                  <i className="fas fa-times-circle text-light me-1"></i>
                                  Cancelled
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <UserPageLoader />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Dashboard);
