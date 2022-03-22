import Image from "next/image";
import Link from "next/link";
import { useAuth } from "context";
import Script from "next/script";
const TestNav = () => {
  const { auth, logOut, profile } = useAuth();

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
      <section className="upper-main-mrq bg-primary pt-2">
        <div className="container-fluid">
          <marquee direction="left" behavior="alternate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            magna pulvinar
          </marquee>
        </div>
      </section>
      <section className="main-nav pt-2">
        <div className="container-fluid">
          <div className="nav-topbar d-flex justify-content-between align-items-center">
            <div className="brand-logo">
              <Link href="/">
                <a className="navbar-brand me-auto">
                  <Image
                    height="70"
                    width="100"
                    className="logo"
                    src="/assets/images/logo-dark.png"
                    alt=""
                  />
                </a>
              </Link>
            </div>

            <div className="topbar-right-items d-flex justify-content-between align-items-center">
              <div className="topbar-items item-none">
                <a className="items-icon me-3 fs-6" href="#">
                  <i className="fad fa-phone fs-5 fw-bold text-danger me-2"></i>
                  <span className="large-screen">987-564-231</span>
                  <span className="small-screen">Call</span>
                </a>
              </div>
              <div className="topbar-items item-none">
                <a className="items-icon me-3 fs-6" href="#">
                  <i className="fad fa-phone-plus fs-5 fw-bold text-danger me-2"></i>
                  <span className="large-screen">Request A Call</span>
                </a>
              </div>
              <div className="topbar-items item-none">
                <a className="items-icon me-3 fs-6" href="#">
                  <i className="fad fa-calendar-alt fs-5 fw-bold text-danger me-2"></i>
                  <span className="large-screen">Book Appointment</span>
                  <span className="small-screen">Appt.</span>
                </a>
              </div>
              <div className="topbar-items item-none">
                <a className="items-icon me-3 fs-6" href="#">
                  <i className="fad fa-map-marker-alt fs-5 fw-bold text-danger me-2"></i>
                  <span className="large-screen">Clinic Locator</span>
                  <span className="small-screen">Locator</span>
                </a>
              </div>
              <div className="topbar-items item-none">
                <a className="items-icon-end fs-6" href="#">
                  <i className="fad fa-vial fs-5 fw-bold text-danger me-2"></i>
                  <span className="large-screen">Sample Collection</span>
                  <span className="small-screen">Sample</span>
                </a>
              </div>
              <div className="topbar-items">
                {!!auth?.token && !!auth?.user ? (
                  <>
                    <li className="nav-item dropdown has-arrow logged-item">
                      <a
                        href="#"
                        className="dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                      >
                        <span className="user-img">
                          <Image
                            className="rounded-circle "
                            src={
                              profile?.image?.url ||
                              "/assets/images/alternate/alt-user-2.png"
                            }
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
                              src={
                                profile?.image?.url ||
                                "/assets/images/alternate/alt-user-2.png"
                              }
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="user-text">
                            <h6>
                              {profile?.first_name} {profile?.last_name}
                              {profile?.name}
                            </h6>
                          </div>
                        </div>
                        {auth?.user?.role?.id === 6 ? (
                          <>
                            <Link href="/polyclinics/dashboard">
                              <a className="dropdown-item">Dashboard</a>
                            </Link>

                            <button className="dropdown-item" onClick={logOut}>
                              Logout
                            </button>
                          </>
                        ) : (
                          <></>
                        )}
                        {auth?.user?.role?.id === 7 ? (
                          <>
                            <Link href="/nursing-homes/dashboard">
                              <a className="dropdown-item">Dashboard</a>
                            </Link>

                            <button className="dropdown-item" onClick={logOut}>
                              Logout
                            </button>
                          </>
                        ) : (
                          <></>
                        )}
                        {auth?.user?.role?.id === 3 ? (
                          <>
                            <Link href="/doctors/dashboard">
                              <a className="dropdown-item">Dashboard</a>
                            </Link>
                            <Link href="/doctors/profile-settings">
                              <a className="dropdown-item">Profile Settings</a>
                            </Link>
                            <button className="dropdown-item" onClick={logOut}>
                              Logout
                            </button>
                          </>
                        ) : (
                          <></>
                        )}
                        {auth?.user?.role?.id === 1 ? (
                          <>
                            <Link href="/user/">
                              <a className="dropdown-item">Dashboard</a>
                            </Link>
                            <Link href="/user/profile-settings">
                              <a className="dropdown-item">Profile Settings</a>
                            </Link>
                            <button className="dropdown-item" onClick={logOut}>
                              Logout
                            </button>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item ms-2">
                      <Link href="/user/login">
                        <button className="nav-link login_font btn bg-custom-login text-light">
                          LOGIN / SIGNUP
                        </button>
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light custom-bg">
          <div className="container-fluid">
            <a className="nav-link navbar-link find-doctor fs-6 text-white">
              Find Doctor
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a
                      className="nav-link navbar-link text-white"
                      aria-current="page"
                    >
                      <i className="fad fa-home"></i> Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/doctors">
                    <a className="nav-link navbar-link text-white">Doctors</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/polyclinics">
                    <a className="nav-link navbar-link text-white">
                      Polyclinics
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/nursing-homes">
                    <a className="nav-link navbar-link text-white">
                      Nursing Homes
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/hospitals">
                    <a className="nav-link navbar-link text-white">Hospital</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"http://medshop.rimsind.com/"} passHref>
                    <a className="nav-link navbar-link text-white">Pharmacy</a>
                  </Link>
                </li>
                <li className="nav-item nav-items-end">
                  <Link href="/contact">
                    <a className="nav-link navbar-link text-white">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default TestNav;
