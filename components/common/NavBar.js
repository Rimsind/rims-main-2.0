import { useAuth } from "context";
import Link from "next/link";

const NavBar = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth?.user?.role?.id === 3 ? (
        <section className="doctor-main-header">
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
                    <Link href="/doctors/auth/dashboard">
                      <a className="nav-link navbar-link text-white">
                        Dashboard
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/doctors/appointments">
                      <a className="nav-link navbar-link text-white">
                        My Appointments
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/doctors/auth/profile-settings">
                      <a className="nav-link navbar-link text-white">
                        View / Update Profiles
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/doctors/auth/privacy-settings">
                      <a className="nav-link navbar-link text-white">
                        Change Password
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item nav-items-end">
                    <Link href="/doctors/auth/advance-settings">
                      <a className="nav-link navbar-link text-white">
                        Advance Settings
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="nav-item">
                    <Link href="/">
                      <a
                        className="nav-link navbar-link text-white"
                        aria-current="page"
                      >
                        <i className="fad fa-home"></i> Back To Home Page
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      ) : (
        <section className="main-header">
          <nav className="navbar navbar-expand-lg navbar-light custom-bg">
            <div className="container-fluid">
              <Link href="/doctors">
                <a className="nav-link navbar-link find-doctor fs-6 text-white">
                  Find Doctor
                </a>
              </Link>
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
                      <a className="nav-link navbar-link text-white">
                        Hospital
                      </a>
                    </Link>
                  </li>{" "}
                  <li className="nav-item">
                    <Link href="/diagnostics">
                      <a className="nav-link navbar-link text-white">
                        Diagnostic Centers
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link href={"http://medshop.rimsind.com/"} passHref>
                      <a
                        className="nav-link navbar-link text-white"
                        target="_blank"
                      >
                        Pharmacy
                      </a>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link href="/comming-soon">
                      <a className="nav-link navbar-link text-white">
                        Pharmacy
                      </a>
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
              </div>
            </div>
          </nav>
        </section>
      )}
    </>
  );
};

export default NavBar;
