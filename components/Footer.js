import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="footer_logo">
                <Image
                  height="100"
                  width="150"
                  src="/assets/images/logo-white.png"
                  alt=""
                />
              </div>
              <div className="footer_para">
                <p className="ft_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora saepe quaerat atque eaque dolor ab eos at quod
                  aspernatur, explicabo quia reprehenderit eius, cupiditate
                  voluptatem. Excepturi illum assumenda eaque laboriosam.
                </p>
              </div>
              <div className="footer_social">
                <ul className="footer_list">
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
            <div className="col-md">
              <div className="patient_sec">
                <p>For Patients</p>
                <ul>
                  <li>
                    <a href="#">Search for Doctors</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">Booking</a>
                  </li>
                  <li>
                    <a href="#">Patient Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="doctor_sec">
                <p>For Doctors</p>
                <ul>
                  <li>
                    <a href="#">Appointments</a>
                  </li>
                  <li>
                    <a href="#">Chat</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">Doctor Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="contact_info">
                <p>Contact Us</p>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt topbar_lft_icn pe-2"></i>
                    <a href="#" className="topbar_links">
                      Citycenter, Haldia
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-mobile topbar_lft_icn pe-2"></i>
                    <a href="#" className="topbar_links">
                      987456321
                    </a>
                  </li>
                  <li>
                    <i className="far fa-envelope topbar_lft_icn pe-2"></i>
                    <a href="#" className="topbar_links">
                      mail@riimsindia.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="admn_btn">
                <Link href="/administration">
                  <a className="btn btn-primary">Administrative</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
