import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="left_top">
                <ul className="top_list">
                  <li>
                    <i className="fas fa-map-marker-alt topbar_lft_icn"></i>
                    <a href="#" className="topbar_links">
                      Citycenter, Haldia
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-mobile topbar_lft_icn"></i>
                    <a href="#" className="topbar_links">
                      987456321
                    </a>
                  </li>
                  <li>
                    <i className="far fa-envelope topbar_lft_icn"></i>
                    <a href="#" className="topbar_links">
                      mail@riimsindia.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right_top text-end">
                <ul className="top_list">
                  <li>
                    <i className="fab fa-facebook-f social_icn"></i>
                  </li>
                  <li>
                    <i className="fab fa-instagram social_icn"></i>
                  </li>
                  <li>
                    <i className="fab fa-twitter social_icn"></i>
                  </li>
                  <li>
                    <i className="fab fa-youtube social_icn"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand me-auto" href="#">
              <Image
                height="80"
                width="120"
                className="logo"
                src="/assets/images/logo-dark.png"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link active" aria-current="page">
                      HOME
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/doctors">
                    <a className="nav-link">DOCTORS</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/polyclinics">
                    <a className="nav-link">POLYCLINICS</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/nursing-homes">
                    <a className="nav-link">NURSHING HOMES</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">PHARMACY</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link">CONTACT</a>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto d-flex align-items-center">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-phone-alt"></i> Contact: +1 315 369
                    5943
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link login_font" href="#">
                    LOGIN / SIGNUP
                  </a>
                </li>
                <li className="nav-item dropdown has-arrow logged-item">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                  >
                    <span className="user-img">
                      <Image
                        className="rounded-circle "
                        src="/assets/images/profile.png"
                        width="35"
                        height="35"
                        alt="Darren Elder"
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <Image
                          height="100"
                          width="100"
                          src="/assets/images/profile.png"
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="user-text">
                        <h6>Darren Elder</h6>
                        <p className="text-muted mb-0">Doctor</p>
                      </div>
                    </div>
                    <Link href="/user/">
                      <a className="dropdown-item">Dashboard</a>
                    </Link>
                    <Link href="/user/profile-settings">
                      <a className="dropdown-item">Profile Settings</a>
                    </Link>
                    <a className="dropdown-item" href="login.html">
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
