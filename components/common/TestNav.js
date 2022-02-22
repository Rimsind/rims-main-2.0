import Image from "next/image";
import Link from "next/link";

const TestNav = () => {
  return (
    <>
      <section className="main-nav">
        <div className="container-fluid">
          <div className="nav-topbar d-flex justify-content-between align-items-center">
            <div className="brand-logo">
              <a className="navbar-brand me-auto" href="#">
                <Image
                  height="80"
                  width="100"
                  className="logo"
                  src="/assets/images/logo-dark.png"
                  alt=""
                />
              </a>
            </div>
            <div className="topbar-right-items d-flex justify-content-between align-items-center">
              <div className="topbar-items">
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
            </div>
          </div>
        </div>
      </section>
      <section className="main-header">
        <nav class="navbar navbar-expand-lg navbar-light custom-bg">
          <div class="container-fluid">
            <a className="nav-link navbar-link find-doctor fs-6 text-white">
              Find Doctor
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                  <Link href="/">
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
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
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
