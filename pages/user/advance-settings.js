import { BreadCrums } from "components/common/index";
const AdvanvceSettings = () => {
  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / Advance-Settings"
          title1="Advance-Settings"
        />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 sticky-top">
                <div className="profile-sidebar sticky-top">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <img
                          src="/user_assets/img/doctors/doctor-thumb-01.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>Richard Wilson</h3>
                        <div className="patient-details">
                          <h5>
                            <i className="fas fa-birthday-cake"></i> 24 Jul
                            1983, 38 years
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt"></i> Newyork,
                            USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li>
                          <a href="patient-dashboard.html">
                            <i className="fas fa-columns"></i>
                            <span>Dashboard</span>
                          </a>
                        </li>
                        <li>
                          <a href="appoinments.html">
                            <i className="fas fa-bookmark"></i>
                            <span>My Appointments</span>
                          </a>
                        </li>
                        <li>
                          <a href="medicine-order.html">
                            <i className="fas fa-list-alt"></i>
                            <span>My Medicine Orders</span>
                            <small className="unread-msg">7</small>
                          </a>
                        </li>
                        <li>
                          <a href="update-profile.html">
                            <i className="fas fa-user-cog"></i>
                            <span>View / Update Profiles</span>
                          </a>
                        </li>
                        <li>
                          <a href="medical-info.html">
                            <i className="fas fa-user-cog"></i>
                            <span>Medical Information</span>
                          </a>
                        </li>

                        <li>
                          <a href="change-password.html">
                            <i className="fas fa-lock"></i>
                            <span>Change Password</span>
                          </a>
                        </li>
                        <li className="active">
                          <a href="advance-setting.html">
                            <i className="fas fa-user-cog"></i>
                            <span>Advance Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="patient-dashboard.html">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <p>
                      Do you want to delete the account? Please press below
                      "Delete" button
                    </p>
                    <button type="button" className="btn btn-danger shadow">
                      Delete Account
                    </button>
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

export default AdvanvceSettings;
