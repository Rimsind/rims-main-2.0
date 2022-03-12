import Image from "next/image";
import Link from "next/link";
const NursingSideBar = (props) => {
  const { data } = props;
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
                  src={data?.profile_image?.url || "/assets/images/profile.png"}
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
                  <Link href="/nursing-homes/dashboard">
                    <a>
                      <i className="fas fa-columns"></i>
                      <span>Dashboard</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status2}>
                  <Link href="/nursing-homes/manage-doctors">
                    <a>
                      <i className="fas fa-bookmark"></i>
                      <span>Manage Doctors</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status3}>
                  <Link href="/nursing-homes/page-content-editor">
                    <a>
                      <i className="fas fa-list-alt"></i>
                      <span>Page Content Editor</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status4}>
                  <Link href="/nursing-homes/profile-settings">
                    <a>
                      <i className="fas fa-user-cog"></i>
                      <span>View / Update Profiles</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status5}>
                  <Link href="/nursing-homes/privacy-settings">
                    <a>
                      <i className="fas fa-lock"></i>
                      <span>Change Password</span>
                    </a>
                  </Link>
                </li>

                <li className={props.status6}>
                  <Link href="/nursing-homes/advance-settings">
                    <a>
                      <i className="fas fa-user-cog"></i>
                      <span>Advance Settings</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <a>
                    <i className="fas fa-sign-out-alt"></i>
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

export default NursingSideBar;
