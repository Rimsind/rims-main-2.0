import Link from "next/link";
import Image from "next/image";
import { useAuth } from "context";

const AuthNav = () => {
  const { auth, logOut, profile } = useAuth();

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <Image
                src="/assets/images/logo-dark.png"
                width="80px"
                height="60px"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item current active">
                  <Link href="/doctors/dashboard">
                    <a className="nav-link">
                      <span className="fs-6 text-dark">Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/doctors/appointments">
                    <a className="nav-link">
                      <span className="fs-6 text-dark">Appointments</span>
                    </a>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link href="/doctors/my-patients">
                    <a className="nav-link">
                      <span className="fs-6 text-dark">My Patients</span>
                    </a>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link href="/doctors/time-table">
                    <a className="nav-link">
                      <span className="fs-6 text-dark">Time Table</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/doctors/profile-settings">
                    <a className="nav-link">
                      <span className="fs-6 text-dark">Profile Settings</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown has-arrow">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                  >
                    <span className="user-img">
                      <Image
                        className="rounded-circle"
                        src={
                          profile?.image?.url ||
                          "/assets/images/alternate/alt-user-2.png"
                        }
                        alt="profile Image"
                        height="50"
                        width="50"
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu custom-dropdown-menu">
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <Image
                          src={
                            profile?.image?.url ||
                            "/assets/images/alternate/alt-user-2.png"
                          }
                          alt="profile Image"
                          className="avatar-img rounded-circle"
                          height="40"
                          width="40"
                        />
                      </div>
                      <div className="user-text">
                        <h6>
                          Dr. {profile?.firstName} {profile?.lastName}
                        </h6>
                        <p className="text-muted mb-0">
                          {profile?.specialty?.name}
                        </p>
                      </div>
                    </div>
                    <a
                      className="dropdown-item"
                      href="doc-profile-setting.html"
                    >
                      My Profile
                    </a>
                    <a className="dropdown-item" href="doc-time.html">
                      Time Table
                    </a>
                    <button className="dropdown-item" onClick={logOut}>
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AuthNav;
