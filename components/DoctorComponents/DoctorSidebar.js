import Link from "next/link";
import Image from "next/image";
import { useAuth } from "context";

const DoctorSidebar = (props) => {
  const { logOut } = useAuth();
  const { data } = props;

  return (
    <>
      <div className="col-sm-12 col-md-12 col-lg-4 col-xl-3 left-nav">
        <div className="profile-sidebar left-nav">
          <div className="widget-profile pro-widget-content">
            {data ? (
              <>
                <div className="profile-info-widget my-4">
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
                    <h3 className="fs-5 mb-2">
                      Dr. {data?.firstName} {data?.lastName}
                    </h3>
                    <div className="data-details">
                      <h5>
                        <Image
                          height="20"
                          width="20"
                          src={
                            data?.specialty?.image?.url ||
                            "/assets/images/alternate/alt-specialty.png"
                          }
                          alt="User Image"
                        />{" "}
                        {data?.specialty?.name}
                      </h5>
                      <h5 className="mb-0">
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        {data?.address?.city}, {data?.address?.state}
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
                  <Link href="/doctors/dashboard">
                    <a>
                      <i className="fas fa-columns"></i>
                      <span>Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li className={props.status2}>
                  <Link href="/doctors/appointments/">
                    <a>
                      <i className="fas fa-bookmark"></i>
                      <span>My Appointments</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status4}>
                  <Link href="/doctors/profile-settings">
                    <a>
                      <i className="fas fa-user-cog"></i>
                      <span>View / Update Profiles</span>
                    </a>
                  </Link>
                </li>
                {/* <li className={props.status5}>
                  <Link href="/doctors/my-patients">
                    <a href="medical-info.html">
                      <i className="fas fa-user-cog"></i>
                      <span>My Patients</span>
                    </a>
                  </Link>
                </li> */}

                <li className={props.status6}>
                  <Link href="/doctors/privacy-settings">
                    <a>
                      <i className="fas fa-lock"></i>
                      <span>Change Password</span>
                    </a>
                  </Link>
                </li>
                <li className={props.status7}>
                  <Link href="/doctors/advance-settings">
                    <a>
                      <i className="fas fa-user-cog"></i>
                      <span>Advance Settings</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <button className="btn" onClick={logOut}>
                    <i className="fas fa-sign-out-alt ms-2 me-2 text-danger"></i>
                    <span className="text-danger">Logout</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorSidebar;
