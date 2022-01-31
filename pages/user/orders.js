import { BreadCrums } from "components/common";
const Orders = () => {
  return (
    <>
      <div class="main-wrapper">
        <BreadCrums title="Home / Dashboard / Orders" title1="Orders" />

        <div class="content">
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
                        <li>
                          <a href="appoinments.html">
                            <i class="fas fa-bookmark"></i>
                            <span>My Appointments</span>
                          </a>
                        </li>
                        <li class="active">
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
                <div class="row">
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="card card-table mb-0">
                          <div class="card-body">
                            <div class="table-responsive">
                              <table class="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Order Id</th>
                                    <th>Pharmacy Name</th>
                                    <th class="text-center">Quantity</th>
                                    <th class="text-center">Amount</th>
                                    <th>Payment Gateway</th>
                                    <th>Status</th>
                                    <th>Order date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547890
                                      </a>
                                    </td>
                                    <td>Medlife Medical</td>
                                    <td class="text-center">2</td>
                                    <td class="text-center">$150</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span class="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      11 Nov 2019
                                      <span class="d-block text-info">
                                        10.00 AM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547891
                                      </a>
                                    </td>
                                    <td>Medlife Medical</td>
                                    <td class="text-center">4</td>
                                    <td class="text-center">$200</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span class="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      3 Nov 2019
                                      <span class="d-block text-info">
                                        11.00 AM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547892
                                      </a>
                                    </td>
                                    <td>Medlife Medical</td>
                                    <td class="text-center">1</td>
                                    <td class="text-center">$75</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span class="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      1 Nov 2019
                                      <span class="d-block text-info">
                                        1.00 PM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547893
                                      </a>
                                    </td>
                                    <td>PharmaMed Medical</td>
                                    <td class="text-center">2</td>
                                    <td class="text-center">$100</td>
                                    <td>Paystack</td>
                                    <td>
                                      <span class="badge badge-warning">
                                        Shipped
                                      </span>
                                    </td>
                                    <td>
                                      30 Oct 2019
                                      <span class="d-block text-info">
                                        9.00 AM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547894
                                      </a>
                                    </td>
                                    <td>PharmaMed Medical</td>
                                    <td class="text-center">5</td>
                                    <td class="text-center">$350</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span class="badge badge-warning">
                                        Shipped
                                      </span>
                                    </td>
                                    <td>
                                      28 Oct 2019
                                      <span class="d-block text-info">
                                        6.00 PM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547895
                                      </a>
                                    </td>
                                    <td>The Pill Club Medical</td>
                                    <td class="text-center">1</td>
                                    <td class="text-center">$250</td>
                                    <td>Paypal</td>
                                    <td>
                                      <span class="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      27 Oct 2019
                                      <span class="d-block text-info">
                                        8.00 AM
                                      </span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
