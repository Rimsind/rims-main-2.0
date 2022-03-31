import Image from "next/image";
import Link from "next/link";
import { useAuth } from "context";
import NavBar from "./NavBar";

const MainHeader = () => {
  const { auth, logOut, profile } = useAuth();

  return (
    <>
      <section className="upper-main-mrq bg-primary pt-2">
        <div className="container-fluid">
          <marquee behavior="self">
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
              {/* <div className="topbar-items">
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
                              {profile?.name} {profile?.firstName}{" "}
                              {profile?.lastName}
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
              </div> */}

              {!!auth?.token && !!auth?.user ? (
                <div className="profile-hover-dropdown">
                  <button className="profile-hover-dropbtn">
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
                  </button>
                  <div className="profile-hover-dropdown-content">
                    <div className="user-header align-items-center">
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
                        {auth?.user?.role?.id === 1 ? (
                          <h6>
                            {profile?.title}.{profile?.first_name}
                            {profile?.last_name}
                          </h6>
                        ) : (
                          <></>
                        )}{" "}
                        {auth?.user?.role?.id === 3 ? (
                          <h6>
                            Dr.{profile?.firstName} {profile?.lastName}
                          </h6>
                        ) : (
                          <></>
                        )}{" "}
                        {auth?.user?.role?.id === 6 ? (
                          <h6>{profile?.name}</h6>
                        ) : (
                          <></>
                        )}{" "}
                        {auth?.user?.role?.id === 7 ? (
                          <h6>{profile?.name}</h6>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
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
                  </div>
                </div>
              ) : (
                <li className="nav-item ms-2">
                  <Link href="/user/login">
                    <button className="nav-link login_font btn bg-custom-login text-light">
                      LOGIN / SIGNUP
                    </button>
                  </Link>
                </li>
              )}
            </div>
          </div>
        </div>
      </section>
      <NavBar />
    </>
  );
};

export default MainHeader;
