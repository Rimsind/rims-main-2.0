const Footer = () => {
  return (
    <>
      {" "}
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="footer_logo">
                <img src="/assets/images/logo-dark.png" />
              </div>
              <div class="footer_para">
                <p class="ft_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora saepe quaerat atque eaque dolor ab eos at quod
                  aspernatur, explicabo quia reprehenderit eius, cupiditate
                  voluptatem. Excepturi illum assumenda eaque laboriosam.
                </p>
              </div>
              <div class="footer_social">
                <ul class="footer_list">
                  <li>
                    <i class="fab fa-facebook-f social_icn"></i>
                  </li>
                  <li>
                    <i class="fab fa-instagram social_icn"></i>
                  </li>
                  <li>
                    <i class="fab fa-twitter social_icn"></i>
                  </li>
                  <li>
                    <i class="fab fa-youtube social_icn"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="patient_sec">
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
            <div class="col-md-3">
              <div class="doctor_sec">
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
            <div class="col-md-3">
              <div class="contact_info">
                <p>Contact Us</p>
                <ul>
                  <li>
                    <i class="fas fa-map-marker-alt topbar_lft_icn"></i>
                    <a href="#" class="topbar_links">
                      Citycenter, Haldia
                    </a>
                  </li>
                  <li>
                    <i class="fas fa-mobile topbar_lft_icn"></i>
                    <a href="#" class="topbar_links">
                      987456321
                    </a>
                  </li>
                  <li>
                    <i class="far fa-envelope topbar_lft_icn"></i>
                    <a href="#" class="topbar_links">
                      mail@riimsindia.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
