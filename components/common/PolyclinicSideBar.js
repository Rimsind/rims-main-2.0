import { useAuth } from "context";
import Image from "next/image";
import Link from "next/link";
const PolyclinicSideBar = (props) => {
  const { logOut } = useAuth();
  const { data } = props;
  return (
    <>
      <div className="col-md-12 col-lg-4 col-xl-3 col-xxl-3 sticky-xl-top sticky-xxl-top">
        <div className="profile-sidebar sticky-xl-top sticky-xxl-top">
          <div className="widget-profile pro-widget-content">
            <div className="profile-info-widget py-3">
              <a href="#" className="booking-doc-img">
                <Image
                  height="145"
                  width="145"
                  src={
                    data?.image?.url ||
                    "/assets/images/alternate/alt-user-2.png"
                  }
                  alt="User Image"
                />
              </a>
              <div className="profile-det-info">
                <h3>{data?.name}</h3>
                <div className="patient-details">
                  <h5 className="mb-0">
                    <i className="fas fa-map-marker-alt"></i> {data?.city},{" "}
                    {data?.state}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-widget">
            <nav className="dashboard-menu">
              <ul>
                <li className={props.status1}>
                  <Link href="/polyclinics/dashboard">
                    <a>
                      <i className="fas fa-columns"></i>
                      <span>Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li className={props.status7}>
                  <Link href="/polyclinics/appointments">
                    <a>
                      <i className="fas fa-bookmark"></i>
                      <span>Appointments</span>
                    </a>
                  </Link>
                </li>
                <li className={props.status2}>
                  <Link href="/polyclinics/manage-doctors">
                    <a>
                      <i className="fas fa-bookmark"></i>
                      <span>Manage Doctors</span>
                    </a>
                  </Link>
                </li>

                {/* <li className={props.status3}>
                  <Link href="/polyclinics/page-content-editor">
                    <a>
                      <i className="fas fa-list-alt"></i>
                      <span>Page Content Editor</span>
                    </a>
                  </Link>
                </li> */}

                <li className={props.status4}>
                  <Link href="/polyclinics/profile-settings">
                    <a>
                      <i className="fas fa-user-cog"></i>
                      <span>View / Update Profiles</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status5}>
                  <Link href="/polyclinics/privacy-settings">
                    <a>
                      <i className="fas fa-lock"></i>
                      <span>Change Password</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status6}>
                  <Link href="/polyclinics/advance-settings">
                    <a>
                      <i className="fas fa-user-cog"></i>
                      <span>Advance Settings</span>
                    </a>
                  </Link>
                </li>

                {/* <li>
                  <button className="btn" onClick={logOut}>
                    <i className="fas fa-sign-out-alt ms-2 me-2 text-danger"></i>
                    <span className="text-danger">Logout</span>
                  </button>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolyclinicSideBar;
