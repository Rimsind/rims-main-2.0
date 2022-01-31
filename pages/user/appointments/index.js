import { BreadCrums } from "components/common";

const Index = () => {
  return (
    <>
      <div class="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / My Appointments"
          title1="My Appointments"
        />

        <div class="content mb-3">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 col-lg-4 col-xl-3 sticky-top">
                <div class="profile-sidebar sticky-top">
                  <div class="widget-profile pro-widget-content">
                    <div class="profile-info-widget">
                      <a href="#" class="booking-doc-img">
                        <img
                          src="/user_assets/img/doctors/doctor-thumb-01.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div class="profile-det-info">
                        <h3>Richard Wilson</h3>
                        <div class="patient-details">
                          <h5>
                            <i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38
                            years
                          </h5>
                          <h5 class="mb-0">
                            <i class="fas fa-map-marker-alt"></i> Newyork, USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="dashboard-widget">
                    <nav class="dashboard-menu">
                      <ul>
                        <li>
                          <a href="patient-dashboard.html">
                            <i class="fas fa-columns"></i>
                            <span>Dashboard</span>
                          </a>
                        </li>
                        <li class="active">
                          <a href="appoinments.html">
                            <i class="fas fa-bookmark"></i>
                            <span>My Appointments</span>
                          </a>
                        </li>
                        <li>
                          <a href="medicine-order.html">
                            <i class="fas fa-list-alt"></i>
                            <span>My Medicine Orders</span>
                            <small class="unread-msg">7</small>
                          </a>
                        </li>
                        <li>
                          <a href="update-profile.html">
                            <i class="fas fa-user-cog"></i>
                            <span>View / Update Profiles</span>
                          </a>
                        </li>
                        <li>
                          <a href="medical-info.html">
                            <i class="fas fa-user-cog"></i>
                            <span>Medical Information</span>
                          </a>
                        </li>

                        <li>
                          <a href="change-password.html">
                            <i class="fas fa-lock"></i>
                            <span>Change Password</span>
                          </a>
                        </li>
                        <li>
                          <a href="advance-setting.html">
                            <i class="fas fa-user-cog"></i>
                            <span>Advance Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="patient-dashboard.html">
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div class="col-md-7 col-lg-8 col-xl-9">
                <div class="card card-table mb-0">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-hover table-center mb-0">
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
                              <h2 class="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  class="avatar avatar-sm me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
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
                              <span class="d-block text-info">10.00 AM</span>
                            </td>
                            <td>12 Nov 2019</td>
                            <td>$160</td>
                            <td>16 Nov 2019</td>
                            <td>
                              <span class="badge rounded-pill bg-success-light">
                                Confirm
                              </span>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-primary-light"
                                >
                                  <i class="fas fa-print"></i> Print
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-info-light"
                                >
                                  <i class="far fa-eye"></i> View
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  class="avatar avatar-sm me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
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
                              <span class="d-block text-info">8.00 PM</span>
                            </td>
                            <td>12 Nov 2019</td>
                            <td>$250</td>
                            <td>14 Nov 2019</td>
                            <td>
                              <span class="badge rounded-pill bg-success-light">
                                Confirm
                              </span>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-primary-light"
                                >
                                  <i class="fas fa-print"></i> Print
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-info-light"
                                >
                                  <i class="far fa-eye"></i> View
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  class="avatar avatar-sm me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
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
                              <span class="d-block text-info">11.00 AM</span>
                            </td>
                            <td>10 Nov 2019</td>
                            <td>$400</td>
                            <td>13 Nov 2019</td>
                            <td>
                              <span class="badge rounded-pill bg-danger-light">
                                Cancelled
                              </span>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-primary-light"
                                >
                                  <i class="fas fa-print"></i> Print
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-info-light"
                                >
                                  <i class="far fa-eye"></i> View
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  class="avatar avatar-sm me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
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
                              <span class="d-block text-info">3.00 PM</span>
                            </td>
                            <td>10 Nov 2019</td>
                            <td>$350</td>
                            <td>12 Nov 2019</td>
                            <td>
                              <span class="badge rounded-pill bg-warning-light">
                                Pending
                              </span>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-primary-light"
                                >
                                  <i class="fas fa-print"></i> Print
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-info-light"
                                >
                                  <i class="far fa-eye"></i> View
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  class="avatar avatar-sm me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
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
                              <span class="d-block text-info">7.00 PM</span>
                            </td>
                            <td>8 Nov 2019</td>
                            <td>$75</td>
                            <td>11 Nov 2019</td>
                            <td>
                              <span class="badge rounded-pill bg-success-light">
                                Confirm
                              </span>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-primary-light"
                                >
                                  <i class="fas fa-print"></i> Print
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-info-light"
                                >
                                  <i class="far fa-eye"></i> View
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  class="avatar avatar-sm me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
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
                              <span class="d-block text-info">9.00 AM</span>
                            </td>
                            <td>6 Nov 2019</td>
                            <td>$175</td>
                            <td>10 Nov 2019</td>
                            <td>
                              <span class="badge rounded-pill bg-danger-light">
                                Cancelled
                              </span>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-primary-light"
                                >
                                  <i class="fas fa-print"></i> Print
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-info-light"
                                >
                                  <i class="far fa-eye"></i> View
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  class="avatar avatar-sm me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
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
                              <span class="d-block text-info">6.00 PM</span>
                            </td>
                            <td>6 Nov 2019</td>
                            <td>$450</td>
                            <td>10 Nov 2019</td>
                            <td>
                              <span class="badge rounded-pill bg-success-light">
                                Confirm
                              </span>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-primary-light"
                                >
                                  <i class="fas fa-print"></i> Print
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-info-light"
                                >
                                  <i class="far fa-eye"></i> View
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  class="avatar avatar-sm me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
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
                              <span class="d-block text-info">9.00 PM</span>
                            </td>
                            <td>7 Nov 2019</td>
                            <td>$275</td>
                            <td>9 Nov 2019</td>
                            <td>
                              <span class="badge rounded-pill bg-success-light">
                                Confirm
                              </span>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-primary-light"
                                >
                                  <i class="fas fa-print"></i> Print
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-info-light"
                                >
                                  <i class="far fa-eye"></i> View
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  class="avatar avatar-sm me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
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
                              <span class="d-block text-info">8.00 PM</span>
                            </td>
                            <td>4 Nov 2019</td>
                            <td>$600</td>
                            <td>8 Nov 2019</td>
                            <td>
                              <span class="badge rounded-pill bg-success-light">
                                Confirm
                              </span>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-primary-light"
                                >
                                  <i class="fas fa-print"></i> Print
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-info-light"
                                >
                                  <i class="far fa-eye"></i> View
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="doctor-profile.html"
                                  class="avatar avatar-sm me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
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
                              <span class="d-block text-info">5.00 PM</span>
                            </td>
                            <td>1 Nov 2019</td>
                            <td>$100</td>
                            <td>7 Nov 2019</td>
                            <td>
                              <span class="badge rounded-pill bg-success-light">
                                Confirm
                              </span>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-primary-light"
                                >
                                  <i class="fas fa-print"></i> Print
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-info-light"
                                >
                                  <i class="far fa-eye"></i> View
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
