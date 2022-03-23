import { BreadCrums, AuthNav } from "components/common/index";

import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { UserPageLoader } from "components/Loaders";
import { DoctorSidebar } from "components/DoctorComponents";
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
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card heart-rate"
                        style={{ backgroundColor: "#ff000054" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-1.png"
                              alt=""
                            />
                          </div>
                          <h5>Total Patient</h5>
                          <h6>100</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card body-temp"
                        style={{ backgroundColor: "#006bff63" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-2.png"
                              alt=""
                            />
                          </div>
                          <h5>Patient Under Treatment</h5>
                          <h6>50</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card glucose-lvl "
                        style={{ backgroundColor: "#e74e8473" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-3.png"
                              alt=""
                            />
                          </div>
                          <h5>Glucose Level</h5>
                          <h6>
                            {data?.vitalSigns?.glucose} <sub>mg/dl</sub>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card blood-presr"
                        style={{ backgroundColor: "#75ff7087" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-4.png"
                              alt=""
                            />
                          </div>
                          <h5>Blood Pressure</h5>
                          <h6>
                            {data?.vitalSigns?.bloodPressure} <sub>mmHg</sub>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card bmi"
                        style={{ backgroundColor: "#fff7d9" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-6.png"
                              alt=""
                            />
                          </div>
                          <h5>BMI</h5>
                          <h6>{data?.vitalSigns?.bmi}</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card oxygen-lvl"
                        style={{ backgroundColor: "#80ffd4" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-8.png"
                              alt=""
                            />
                          </div>
                          <h5>Oxygen Level</h5>
                          <h6>{data?.vitalSigns?.oxygen}%</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card dimension"
                        style={{ backgroundColor: "#fff599" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-5.png"
                              alt=""
                            />
                          </div>
                          <h5>Dimensions</h5>
                          <h6>
                            {data?.vitalSigns?.height} <sub>Cm</sub> -{" "}
                            {data?.vitalSigns?.weight} <sub>Kg</sub>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card resp-rate"
                        style={{ backgroundColor: "#83ffff75" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-13.png"
                              alt=""
                            />
                          </div>
                          <h5>Respiratory rate</h5>
                          <h6>
                            {data?.vitalSigns?.respiration} <sub>BPM</sub>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="card">
                    <div className="card-body pt-0">
                      <nav className="user-tabs mb-4">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#pat_appointments"
                              data-bs-toggle="tab"
                            >
                              Appointments
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#pat_prescriptions"
                              data-bs-toggle="tab"
                            >
                              Prescriptions
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#pat_medical_records"
                              data-bs-toggle="tab"
                            >
                              <span className="med-records">
                                Medical Records
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#pat_billing"
                              data-bs-toggle="tab"
                            >
                              Billing
                            </a>
                          </li>
                        </ul>
                      </nav>

                      <div className="tab-content pt-0">
                        <div
                          id="pat_appointments"
                          className="tab-pane fade show active"
                        >
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Doctor</th>
                                      <th>Appt Date</th>
                                      <th>Booking Date</th>
                                      <th>Amount</th>
                                      <th>Follow Up</th>
                                      <th>Status</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="doctor-profile.html"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <Image
                                              height="50"
                                              width="50"
                                              className="avatar-img rounded-circle"
                                              src="/user_assets/img/doctors/doctor-thumb-01.jpg"
                                              alt="User Image"
                                            />
                                          </a>
                                          <a href="doctor-profile.html">
                                            Dr. Ruby Perrin <span>Dental</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        14 Nov 2019
                                        <span className="d-block text-info">
                                          10.00 AM
                                        </span>
                                      </td>
                                      <td>12 Nov 2019</td>
                                      <td>$160</td>
                                      <td>16 Nov 2019</td>
                                      <td>
                                        <span className="badge rounded-pill bg-success-light">
                                          Confirm
                                        </span>
                                      </td>
                                      <td className="text-end">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-primary-light"
                                          >
                                            <i className="fas fa-print"></i>{" "}
                                            Print
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye"></i> View
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="user_dash_banner">
                    <Image
                      height="500"
                      width="2000"
                      src="/user_assets/img/slide1.jpg"
                      alt=""
                    />
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

export default Dashboard;
