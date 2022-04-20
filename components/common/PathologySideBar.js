import Image from "next/image";
import Link from "next/link";

const PathologySideBar = () => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 sticky-xl-top sticky-xxl-top">
        <div className="profile-sidebar sticky-xl-top sticky-xxl-top">
          <div className="widget-profile pro-widget-content">
            <div className="profile-info-widget py-3">
              <a href="#" className="booking-doc-img">
                <Image
                  height="145"
                  width="145"
                  src={"/assets/images/alternate/alt-user-2.png"}
                  alt="User Image"
                />
              </a>
              <div className="profile-det-info">
                {/* <h3>{data?.name}</h3> */}
                <h3 className="fs-5">Haldia Pathology</h3>
                <div className="patient-details">
                  <h5 className="mb-0">
                    <i className="fas fa-map-marker-alt"></i> Haldia , West
                    Bengal
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-widget">
            <nav className="dashboard-menu">
              <ul>
                <li>
                  <Link href="/pathology/dashboard">
                    <a>
                      <i className="fas fa-tachometer"></i>
                      <span>Dashboard</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/pathology/appointments">
                    <a>
                      <i className="fas fa-tasks-alt"></i>
                      <span>Appointments</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/pathology/patient-referrals">
                    <a>
                      <i className="fas fa-pencil-alt"></i>
                      <span>Patient Referral</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/pathology/facilities">
                    <a>
                      <i className="fas fa-pencil-alt"></i>
                      <span>Facilities</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/pathology/profile-settings">
                    <a>
                      <i className="fas fa-user-cog"></i>
                      <span>View / Update Profiles</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/pathology/privacy-settings">
                    <a>
                      <i className="fas fa-key"></i>
                      <span>Change Password</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/pathology/advance-settings">
                    <a>
                      <i className="fas fa-cogs"></i>
                      <span>Advance Settings</span>
                    </a>
                  </Link>
                </li>

                {/* <li>
                  <a className="text-danger">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default PathologySideBar;
