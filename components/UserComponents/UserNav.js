import Link from "next/link";
import Image from "next/image";

const UserNav = (props) => {
  const { patient } = props;

  return (
    <>
      <div className="col-sm-12 col-md-12 col-lg-4 col-xl-3 left-nav">
        <div className="profile-sidebar left-nav">
          <div className="widget-profile pro-widget-content">
            {patient ? (
              <>
                <div className="profile-info-widget">
                  <a href="#" className="booking-doc-img">
                    <Image
                      height="145"
                      width="145"
                      src={patient?.image?.url || "/assets/images/profile.png"}
                      alt="User Image"
                    />
                  </a>
                  <div className="profile-det-info">
                    <h3>
                      {patient?.first_name} {patient?.last_name}
                    </h3>
                    <div className="patient-details">
                      <h5>
                        <i className="fas fa-birthday-cake"></i>
                        {patient?.age} years old, {patient?.gender}
                      </h5>
                      <h5 className="mb-0">
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        {patient?.address?.city}, {patient?.address?.state}
                      </h5>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="profile-info-widget">
                  <div className="doc-img card-img-loader-sec mb-3"></div>
                  <div className="profile-det-info">
                    <p className="placeholder-glow">
                      <span className="placeholder col-8 bg-primary"></span>
                      <span className="placeholder col-9 bg-secondary"></span>
                      <span className="placeholder col-6 bg-secondary"></span>
                    </p>
                  </div>
                </div>
              </>
            )}
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
                {/* <li className={props.status3}>
                  <Link href="/user/orders">
                    <a>
                      <i className="fas fa-list-alt"></i>
                      <span>My Medicine Orders</span>
                      <small className="unread-msg">7</small>
                    </a>
                  </Link>
                </li> */}
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
