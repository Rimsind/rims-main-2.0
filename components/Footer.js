import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer
        className="footer"
        style={{
          backgroundImage: "url(/assets/images/footer-background-texture.jpg)",
          backgroundColor: "#15558d",
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-end">
            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2 ">
              <div className="text-center">
                <div className="footer_logo">
                  <Image
                    height="100"
                    width="150"
                    src="/assets/images/logo-white.png"
                    alt=""
                  />
                </div>
                <div className="footer_para mt-3">
                  <p className="ft_para text-light">
                    REHAB INTEGRATED MEDICAL SOLUTION
                  </p>
                </div>
                <div className="footer_social">
                  <ul className="footer_list justify-content-center">
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
            <div className="col-lg-10 col-xl-10 col-xxl-10">
              <div className="row g-0">
                <div className="col-6 col-sm-3 col-md-3 col-lg-1 col-xl-1 col-xxl-1 ">
                  <div className="patient_sec">
                    <p>About</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Career
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-md-3 col-lg-1 col-xl-1 col-xxl-1">
                  <div className="patient_sec">
                    <p>Help</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Payment
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Shipping
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Return
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Cancellation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-md-3 col-lg-1 col-xl-1 col-xxl-1">
                  <div className="patient_sec">
                    <p>Policy</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Terms Condition
                        </a>
                      </li>

                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Disclaimer
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-md-3 col-lg-1 col-xl-1 col-xxl-1 ">
                  <div className="patient_sec">
                    <p>Social</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          YouTube
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" col-6 col-sm-3 col-md-3 col-lg-1 col-xl-1 col-xxl-1">
                  <div className="doctor_sec">
                    <p>For Patients</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Search Doctors
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Register
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Booking
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" col-6 col-sm-3 col-md-3 col-lg-1 col-xl-1 col-xxl-1">
                  <div className="doctor_sec">
                    <p>For Doctors</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Register
                        </a>
                      </li>

                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" col-6 col-sm-3 col-md-3 col-lg-1 col-xl-1 col-xxl-1">
                  <div className="doctor_sec">
                    <p>Polyclinic</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Register
                        </a>
                      </li>

                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" col-6 col-sm-3 col-md-3 col-lg-1 col-xl-1 col-xxl-1">
                  <div className="doctor_sec">
                    <p>Nursing Home</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Register
                        </a>
                      </li>

                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" col-6 col-sm-3 col-md-3 col-lg-1 col-xl-1 col-xxl-1">
                  <div className="doctor_sec">
                    <p>Hospital</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Register
                        </a>
                      </li>

                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" col-6 col-sm-3 col-md-3 col-lg-1 col-xl-1 col-xxl-1">
                  <div className="doctor_sec">
                    <p>Pharmacy</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Order
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ fontSize: "14px" }}>
                          Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                  <div className="doctor_sec">
                    <p>Contact Us</p>
                    <ul>
                      <li>
                        <i className="fas fa-map-marker-alt topbar_lft_icn pe-2"></i>
                        <a href="#" className="topbar_links">
                          Module-208, Webel IT Park, City Center, Haldia West
                          Bengal, 721657
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-mobile topbar_lft_icn pe-2"></i>
                        <a href="#" className="topbar_links">
                          +91 8597-3944-14
                        </a>
                      </li>
                      <li>
                        <i className="far fa-envelope topbar_lft_icn pe-2"></i>
                        <a href="#" className="topbar_links">
                          rimsind@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className=" col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                  <div className="doctor_sec">
                    <p>Contact Us</p>
                    <ul>
                      <li>
                        <i className="fas fa-map-marker-alt topbar_lft_icn pe-2"></i>
                        <a href="#" className="topbar_links">
                          Module-208, Webel IT Park, City Center, Haldia West
                          Bengal, 721657
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-mobile topbar_lft_icn pe-2"></i>
                        <a href="#" className="topbar_links">
                          +91 8597-3944-14
                        </a>
                      </li>
                      <li>
                        <i className="far fa-envelope topbar_lft_icn pe-2"></i>
                        <a href="#" className="topbar_links">
                          rimsind@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
              <div className="admn_btn">
                <Link href="/administration">
                  <a className="btn btn-primary">Administrative</a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
