import { BreadCrums } from "components/common";
import Image from "next/image";

const Author = () => {
  return (
    <>
      <section className="section-author">
        <BreadCrums title="Home / Blog / Author Name" title1="Author Name" />
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 sticky-top py-4">
              <div className="left-author-profile">
                <div className="left-author-profile-inner">
                  <div className="left_fix-bar fl-wrap">
                    <div className="portfolio-card-wrap fl-wrap">
                      <div className="portfolio-card-media fl-wrap">
                        <div className="row align-items-start">
                          <div className="col-4">
                            <Image
                              src="/user_assets/img/clinic/clinic-6.jpg"
                              height={100}
                              width={100}
                              alt="Author Profile Image"
                              className="rounded"
                            />
                          </div>
                          <div className="col-8">
                            <div className="portfolio-card-media-content">
                              <h4>Mark Rose</h4>
                              <h5>8 Years of Membdership</h5>
                            </div>
                            <div className="portfolio-card-stats">
                              <ul className="list-unstyled">
                                <li className="text-center">
                                  <span style={{ color: "#73042b" }}>27</span>{" "}
                                  Articles
                                </li>
                                <li className="text-center">
                                  <span style={{ color: "#73042b" }}>1576</span>{" "}
                                  Views
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-card-content">
                        <h4>About</h4>
                        <p>
                          In a professional context it often happens that
                          private or corporate clients corder a publication to
                          be made and presented with the actual content still
                          not being ready. Think of a news blog that’s filled
                          with content hourly on the day of going live.
                        </p>
                        <p>
                          Filled with content hourly on the day of going live.
                        </p>
                        <div className="pc-contacts">
                          <ul>
                            <li>
                              <span
                                style={{
                                  color: "#73042b",
                                  paddingRight: "10px",
                                }}
                              >
                                Write -
                              </span>
                              <a
                                href="mailto:info@rimsind.com"
                                className="text-black"
                              >
                                info@rimsind.com
                              </a>
                            </li>
                            <li>
                              <span
                                style={{
                                  color: "#73042b",
                                  paddingRight: "10px",
                                }}
                              >
                                Call -
                              </span>
                              <a
                                href="tel:+919874563210"
                                className="text-black"
                              >
                                +91 987 456 3210
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="profile-card-footer fl-wrap">
                        <div className="row align-items-center">
                          <div className="col-4">
                            <div className="portfolio-card-footer-title">
                              Follow:
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="profile-card-social">
                              <div className="row align-items-center">
                                <div
                                  className="col-3"
                                  style={{ borderLeft: "1px solid #eee" }}
                                >
                                  <div className="profile-card-social-icon">
                                    <a href="#" target="_blank">
                                      <i
                                        className="fab fa-facebook-f"
                                        style={{ color: "#73042b" }}
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="col-3"
                                  style={{ borderLeft: "1px solid #eee" }}
                                >
                                  <div className="profile-card-social-icon">
                                    <a href="#" target="_blank">
                                      <i
                                        className="fab fa-twitter"
                                        style={{ color: "#73042b" }}
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="col-3"
                                  style={{ borderLeft: "1px solid #eee" }}
                                >
                                  <div className="profile-card-social-icon">
                                    <a href="#" target="_blank">
                                      <i
                                        className="fab fa-instagram"
                                        style={{ color: "#73042b" }}
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="col-3"
                                  style={{ borderLeft: "1px solid #eee" }}
                                >
                                  <div className="profile-card-social-icon">
                                    <a href="#" target="_blank">
                                      <i
                                        className="fab fa-youtube"
                                        style={{ color: "#73042b" }}
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
              <p>Hello World</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Author;
