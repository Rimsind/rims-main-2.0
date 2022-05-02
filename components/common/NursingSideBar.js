import Image from "next/image";
import Link from "next/link";
const NursingSideBar = (props) => {
  const { data } = props;
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
                  src={
                    data?.image?.url ||
                    "/assets/images/alternate/alt-user-2.png"
                  }
                  alt="User Image"
                />
              </a>
              <div className="profile-det-info">
                {/* <h3>{data?.name}</h3> */}
                <h3 className="fs-5">{data?.name}</h3>
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
                  <Link href="/nursing-homes/auth/dashboard">
                    <a>
                      <i className="fas fa-tachometer"></i>
                      <span>Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li className={props.status7}>
                  <Link href="/nursing-homes/appointments">
                    <a>
                      <i className="fas fa-tachometer"></i>
                      <span>My Appointments</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status2}>
                  <Link href="/nursing-homes/auth/manage-doctors">
                    <a>
                      <i className="fas fa-tasks-alt"></i>
                      <span>Manage Doctors</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status3}>
                  <Link href="/nursing-homes/auth/page-content-editor">
                    <a>
                      <i className="fas fa-pencil-alt"></i>
                      <span>Page Content Editor</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status4}>
                  <Link href="/nursing-homes/auth/profile-settings">
                    <a>
                      <i className="fas fa-user-cog"></i>
                      <span>View / Update Profiles</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status5}>
                  <Link href="/nursing-homes/auth/privacy-settings">
                    <a>
                      <i className="fas fa-key"></i>
                      <span>Change Password</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status6}>
                  <Link href="/nursing-homes/auth/advance-settings">
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

export default NursingSideBar;
