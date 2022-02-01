import Link from "next/link";
const UserNav = (props) => {
  return (
    <>
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
                <li class={props.status1}>
                  <Link href="/user/">
                    <a>
                      <i class="fas fa-columns"></i>
                      <span>Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li class={props.status2}>
                  <Link href="/user/appointments">
                    <a>
                      <i class="fas fa-bookmark"></i>
                      <span>My Appointments</span>
                    </a>
                  </Link>
                </li>
                <li class={props.status3}>
                  <Link href="/user/orders">
                    <a>
                      <i class="fas fa-list-alt"></i>
                      <span>My Medicine Orders</span>
                      <small class="unread-msg">7</small>
                    </a>
                  </Link>
                </li>
                <li class={props.status4}>
                  <Link href="/user/profile-settings">
                    <a>
                      <i class="fas fa-user-cog"></i>
                      <span>View / Update Profiles</span>
                    </a>
                  </Link>
                </li>
                <li class={props.status5}>
                  <Link href="/user/medical-information">
                    <a href="medical-info.html">
                      <i class="fas fa-user-cog"></i>
                      <span>Medical Information</span>
                    </a>
                  </Link>
                </li>

                <li class={props.status6}>
                  <Link href="/user/privacy-settings">
                    <a>
                      <i class="fas fa-lock"></i>
                      <span>Change Password</span>
                    </a>
                  </Link>
                </li>
                <li class={props.status7}>
                  <Link href="/user/advance-settings">
                    <a>
                      <i class="fas fa-user-cog"></i>
                      <span>Advance Settings</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/user">
                    <a>
                      <i class="fas fa-sign-out-alt"></i>
                      <span>Logout</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNav;
