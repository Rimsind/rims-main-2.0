import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / My Appointments"
          title1="My Appointments"
        />

        <div className="content mb-3">
          <div className="container-fluid">
            <div className="row">
              <UserNav status2="active" />

              <div className="col-md-7 col-lg-8 col-xl-9">
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
                                    height="145"
                                    width="145"
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
                                  <i className="fas fa-print"></i> Print
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
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <Image
                                    height="145"
                                    width="145"
                                    className="avatar-img rounded-circle"
                                    src="/user_assets/img/doctors/doctor-thumb-02.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="doctor-profile.html">
                                  Dr. Darren Elder <span>Dental</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              12 Nov 2019
                              <span className="d-block text-info">8.00 PM</span>
                            </td>
                            <td>12 Nov 2019</td>
                            <td>$250</td>
                            <td>14 Nov 2019</td>
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
                                  <i className="fas fa-print"></i> Print
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
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <Image
                                    height="145"
                                    width="145"
                                    className="avatar-img rounded-circle"
                                    src="/user_assets/img/doctors/doctor-thumb-03.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="doctor-profile.html">
                                  Dr. Deborah Angel <span>Cardiology</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              11 Nov 2019
                              <span className="d-block text-info">
                                11.00 AM
                              </span>
                            </td>
                            <td>10 Nov 2019</td>
                            <td>$400</td>
                            <td>13 Nov 2019</td>
                            <td>
                              <span className="badge rounded-pill bg-danger-light">
                                Cancelled
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="table-action">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-sm bg-primary-light"
                                >
                                  <i className="fas fa-print"></i> Print
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
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <Image
                                    height="145"
                                    width="145"
                                    className="avatar-img rounded-circle"
                                    src="/user_assets/img/doctors/doctor-thumb-04.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="doctor-profile.html">
                                  Dr. Sofia Brient <span>Urology</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              10 Nov 2019
                              <span className="d-block text-info">3.00 PM</span>
                            </td>
                            <td>10 Nov 2019</td>
                            <td>$350</td>
                            <td>12 Nov 2019</td>
                            <td>
                              <span className="badge rounded-pill bg-warning-light">
                                Pending
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="table-action">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-sm bg-primary-light"
                                >
                                  <i className="fas fa-print"></i> Print
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
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <Image
                                    height="145"
                                    width="145"
                                    className="avatar-img rounded-circle"
                                    src="/user_assets/img/doctors/doctor-thumb-05.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="doctor-profile.html">
                                  Dr. Marvin Campbell
                                  <span>Ophthalmology</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              9 Nov 2019
                              <span className="d-block text-info">7.00 PM</span>
                            </td>
                            <td>8 Nov 2019</td>
                            <td>$75</td>
                            <td>11 Nov 2019</td>
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
                                  <i className="fas fa-print"></i> Print
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
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <Image
                                    height="145"
                                    width="145"
                                    className="avatar-img rounded-circle"
                                    src="/user_assets/img/doctors/doctor-thumb-06.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="doctor-profile.html">
                                  Dr. Katharine Berthold
                                  <span>Orthopaedics</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              8 Nov 2019
                              <span className="d-block text-info">9.00 AM</span>
                            </td>
                            <td>6 Nov 2019</td>
                            <td>$175</td>
                            <td>10 Nov 2019</td>
                            <td>
                              <span className="badge rounded-pill bg-danger-light">
                                Cancelled
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="table-action">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-sm bg-primary-light"
                                >
                                  <i className="fas fa-print"></i> Print
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
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <Image
                                    height="145"
                                    width="145"
                                    className="avatar-img rounded-circle"
                                    src="/user_assets/img/doctors/doctor-thumb-07.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="doctor-profile.html">
                                  Dr. Linda Tobin <span>Neurology</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              8 Nov 2019
                              <span className="d-block text-info">6.00 PM</span>
                            </td>
                            <td>6 Nov 2019</td>
                            <td>$450</td>
                            <td>10 Nov 2019</td>
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
                                  <i className="fas fa-print"></i> Print
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
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <Image
                                    height="145"
                                    width="145"
                                    className="avatar-img rounded-circle"
                                    src="/user_assets/img/doctors/doctor-thumb-08.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="doctor-profile.html">
                                  Dr. Paul Richard <span>Dermatology</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              7 Nov 2019
                              <span className="d-block text-info">9.00 PM</span>
                            </td>
                            <td>7 Nov 2019</td>
                            <td>$275</td>
                            <td>9 Nov 2019</td>
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
                                  <i className="fas fa-print"></i> Print
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
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <Image
                                    height="145"
                                    width="145"
                                    className="avatar-img rounded-circle"
                                    src="/user_assets/img/doctors/doctor-thumb-09.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="doctor-profile.html">
                                  Dr. John Gibbs <span>Dental</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              6 Nov 2019
                              <span className="d-block text-info">8.00 PM</span>
                            </td>
                            <td>4 Nov 2019</td>
                            <td>$600</td>
                            <td>8 Nov 2019</td>
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
                                  <i className="fas fa-print"></i> Print
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
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <Image
                                    height="145"
                                    width="145"
                                    className="avatar-img rounded-circle"
                                    src="/user_assets/img/doctors/doctor-thumb-10.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="doctor-profile.html">
                                  Dr. Olga Barlow <span>Dental</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              5 Nov 2019
                              <span className="d-block text-info">5.00 PM</span>
                            </td>
                            <td>1 Nov 2019</td>
                            <td>$100</td>
                            <td>7 Nov 2019</td>
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
                                  <i className="fas fa-print"></i> Print
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
        </div>
      </div>
    </>
  );
};

export default Index;
