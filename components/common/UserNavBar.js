const UserNavBar = () => {
  return (
    <>
      {" "}
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
                    <i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years
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
                <li class="active">
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
    </>
  );
};

export default UserNavBar;
