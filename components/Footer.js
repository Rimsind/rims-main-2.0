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
        <div className="container">
          <div className="row align-items-end">
            <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 ">
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
            <div className="col-lg-9 col-xl-9 col-xxl-9">
              <div className="row g-0">
                <div className="col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 ">
                  <div className="patient_sec">
                    <p>About</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <Link href="/contact">
                          <a style={{ fontSize: "14px" }}>Contact Us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <a style={{ fontSize: "14px" }}>About Us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a style={{ fontSize: "14px" }}>Career</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                  <div className="patient_sec">
                    <p>Help</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <Link href="/">
                          <a style={{ fontSize: "14px" }}>Payment</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <a style={{ fontSize: "14px" }}>Cancellation</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a style={{ fontSize: "14px" }}>Complains</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                  <div className="patient_sec">
                    <p>Policy</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <Link href="/terms-condition">
                          <a style={{ fontSize: "14px" }}>Terms & Conditions</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/privacy-policy">
                          <a style={{ fontSize: "14px" }}>Privacy Policy</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a style={{ fontSize: "14px" }}>Refund</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 ">
                  <div className="patient_sec">
                    <p>Quick Links</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <Link href="/doctors/login">
                          <a style={{ fontSize: "14px" }}>Doctor Login</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/polyclinics/login">
                          <a style={{ fontSize: "14px" }}>Polyclinic Login</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/nursing-homes/login">
                          <a style={{ fontSize: "14px" }}>Nursing Home Login</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a style={{ fontSize: "14px" }}>Hospital Login</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" col-6 col-sm-3 col-md-3 col-lg-4 col-xl-4 col-xxl-4">
                  <div className="doctor_sec">
                    <p>Registered Office</p>
                    <ul style={{ marginLeft: "-35px" }}>
                      <li>
                        <i className="fas fa-map-marker-alt topbar_lft_icn pe-2"></i>
                        <a
                          className="topbar_links"
                          style={{ fontSize: "14px" }}
                        >
                          Module-208, Webel IT Park, City Center, Haldia West
                          Bengal, 721657
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-mobile topbar_lft_icn pe-2"></i>
                        <Link href="tel:+918597394414">
                          <a
                            className="topbar_links"
                            style={{ fontSize: "14px" }}
                          >
                            +91 8597-3944-14
                          </a>
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-envelope topbar_lft_icn pe-2"></i>
                        <Link href="mailto:rimsind@gmail.com">
                          <a
                            className="topbar_links"
                            style={{ fontSize: "14px" }}
                          >
                            rimsind21@gmail.com
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
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
      <section
        className="section-copyright"
        style={{ backgroundColor: "#15558d", color: "#fff" }}
      >
        <div className="container">
          <div className="row pt-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center text-sm-center text-md-center text-lg-start text-xl-start text-xxl-start">
              <p>
                &copy; Copyright
                <span className="ms-2">Rehab Integrated Medical Solutions</span>
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center text-sm-center text-md-center text-lg-end text-xl-end text-xxl-end">
              <Image
                src="/assets/images/payment-method.png"
                height="20px"
                width="400px"
                alt="Payment Method"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
