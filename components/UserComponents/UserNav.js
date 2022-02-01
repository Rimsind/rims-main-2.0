import Link from "next/link";
import Image from "next/image";
const UserNav = (props) => {
  return (
    <>
      <div className="col-md-5 col-lg-4 col-xl-3 sticky-top">
        <div className="profile-sidebar sticky-top">
          <div className="widget-profile pro-widget-content">
            <div className="profile-info-widget">
              <a href="#" className="booking-doc-img">
                <Image
                  height="145"
                  width="145"
                  src="/user_assets/img/doctors/doctor-thumb-01.jpg"
                  alt="User Image"
                />
              </a>
              <div className="profile-det-info">
                <h3>Richard Wilson</h3>
                <div className="patient-details">
                  <h5>
                    <i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38
                    years
                  </h5>
                  <h5 className="mb-0">
                    <i className="fas fa-map-marker-alt"></i> Newyork, USA
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-widget">
            <nav className="dashboard-menu">
              <ul>
                <li className={props.status1}>
                  <Link href="/user/">
                    <a>
                      <i className="fas fa-columns"></i>
                      <span>Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li className={props.status2}>
                  <Link href="/user/appointments">
                    <a>
                      <i className="fas fa-bookmark"></i>
                      <span>My Appointments</span>
                    </a>
                  </Link>
                </li>
                <li className={props.status3}>
                  <Link href="/user/orders">
                    <a>
                      <i className="fas fa-list-alt"></i>
                      <span>My Medicine Orders</span>
                      <small className="unread-msg">7</small>
                    </a>
                  </Link>
                </li>
                <li className={props.status4}>
                  <Link href="/user/profile-settings">
                    <a>
                      <i className="fas fa-user-cog"></i>
                      <span>View / Update Profiles</span>
                    </a>
                  </Link>
                </li>
                <li className={props.status5}>
                  <Link href="/user/medical-information">
                    <a href="medical-info.html">
                      <i className="fas fa-user-cog"></i>
                      <span>Medical Information</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status6}>
                  <Link href="/user/privacy-settings">
                    <a>
                      <i className="fas fa-lock"></i>
                      <span>Change Password</span>
                    </a>
                  </Link>
                </li>
                <li className={props.status7}>
                  <Link href="/user/advance-settings">
                    <a>
                      <i className="fas fa-user-cog"></i>
                      <span>Advance Settings</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/user">
                    <a>
                      <i className="fas fa-sign-out-alt"></i>
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
