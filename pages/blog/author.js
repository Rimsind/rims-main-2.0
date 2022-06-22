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
              <div className="left-latest-blog-title">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h6 className="title">Mark Rose Articles:</h6>
                    <h4 className="sub-title">Don&apos;t miss daily news</h4>
                  </div>
                  <div className="col-4">
                    <div className="author-blog-post-time-table">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Latest</option>
                        <option value="1">Most Read</option>
                        <option value="3">Most Viewed</option>
                        <option value="2">Most Commented</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-6">
                  <div className="card shadow-sm" style={{ padding: "13px" }}>
                    <div className="more-blog-sec">
                      <div
                        className="more-blog-sec-image"
                        style={{
                          background: "url(/assets/images/main.jpg)",
                          height: "120px",
                          backgroundSize: "cover",
                          borderRadius: "5px",
                        }}
                      >
                        <div className="post-categories-marker">
                          <a className="marker" href="#">
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="more-blog-sec-content">
                        <a href="#">
                          <div className="blog-banner-title mt-2">
                            <h6
                              style={{
                                fontSize: "15px",
                                color: " #001038",
                                fontWeight: "600",
                                lineHeight: "1.5",
                              }}
                            >
                              Neque porro quisquam est qui dolorem ipsum quia
                              dolor sit amet.
                            </h6>
                          </div>
                        </a>
                        <div className="blog-banner-lower-content mb-3">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <a className="author-link" href="#">
                                <div className="banner-author-content d-flex align-items-center">
                                  <div className="author-content-image">
                                    <Image
                                      src="/assets/images/alternate/doctor-male.png"
                                      className="rounded-circle bg-light"
                                      height={20}
                                      width={20}
                                      alt="Author Avatar Image"
                                    />
                                  </div>
                                  <div className="author-content-name ms-2">
                                    <h6
                                      style={{
                                        fontSize: "15px",
                                        fontVariant: "small-caps",
                                        marginTop: "6px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      By Mark Rose
                                    </h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="blog-post-time d-flex align-items-center">
                                <i className="fas fa-clock"></i>
                                <h6
                                  className="ms-2"
                                  style={{
                                    marginTop: "6px",
                                    fontSize: "13px",
                                  }}
                                >
                                  18th May, 2022
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-blog-para">
                          <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque auctor, augue id consectetur
                            aliquam, eros lorem fringilla nibh, quis facilisis
                            lorem sapien nec ligula.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a className="card-footer-link" href="#">
                      <div className="card-footer">
                        <span
                          className="text-light"
                          style={{ fontSize: "14px" }}
                        >
                          Read More
                        </span>
                        <i
                          className="fal fa-arrow-right ms-2 text-light"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-6">
                  <div className="card shadow-sm" style={{ padding: "13px" }}>
                    <div className="more-blog-sec">
                      <div
                        className="more-blog-sec-image"
                        style={{
                          background: "url(/assets/images/main.jpg)",
                          height: "120px",
                          backgroundSize: "cover",
                          borderRadius: "5px",
                        }}
                      >
                        <div className="post-categories-marker">
                          <a className="marker" href="#">
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="more-blog-sec-content">
                        <a href="#">
                          <div className="blog-banner-title mt-2">
                            <h6
                              style={{
                                fontSize: "15px",
                                color: " #001038",
                                fontWeight: "600",
                                lineHeight: "1.5",
                              }}
                            >
                              Neque porro quisquam est qui dolorem ipsum quia
                              dolor sit amet.
                            </h6>
                          </div>
                        </a>
                        <div className="blog-banner-lower-content mb-3">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <a className="author-link" href="#">
                                <div className="banner-author-content d-flex align-items-center">
                                  <div className="author-content-image">
                                    <Image
                                      src="/assets/images/alternate/doctor-male.png"
                                      className="rounded-circle bg-light"
                                      height={20}
                                      width={20}
                                      alt="Author Avatar Image"
                                    />
                                  </div>
                                  <div className="author-content-name ms-2">
                                    <h6
                                      style={{
                                        fontSize: "15px",
                                        fontVariant: "small-caps",
                                        marginTop: "6px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      By Mark Rose
                                    </h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="blog-post-time d-flex align-items-center">
                                <i className="fas fa-clock"></i>
                                <h6
                                  className="ms-2"
                                  style={{
                                    marginTop: "6px",
                                    fontSize: "13px",
                                  }}
                                >
                                  18th May, 2022
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-blog-para">
                          <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque auctor, augue id consectetur
                            aliquam, eros lorem fringilla nibh, quis facilisis
                            lorem sapien nec ligula.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a className="card-footer-link" href="#">
                      <div className="card-footer">
                        <span
                          className="text-light"
                          style={{ fontSize: "14px" }}
                        >
                          Read More
                        </span>
                        <i
                          className="fal fa-arrow-right ms-2 text-light"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-6">
                  <div className="card shadow-sm" style={{ padding: "13px" }}>
                    <div className="more-blog-sec">
                      <div
                        className="more-blog-sec-image"
                        style={{
                          background: "url(/assets/images/main.jpg)",
                          height: "120px",
                          backgroundSize: "cover",
                          borderRadius: "5px",
                        }}
                      >
                        <div className="post-categories-marker">
                          <a className="marker" href="#">
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="more-blog-sec-content">
                        <a href="#">
                          <div className="blog-banner-title mt-2">
                            <h6
                              style={{
                                fontSize: "15px",
                                color: " #001038",
                                fontWeight: "600",
                                lineHeight: "1.5",
                              }}
                            >
                              Neque porro quisquam est qui dolorem ipsum quia
                              dolor sit amet.
                            </h6>
                          </div>
                        </a>
                        <div className="blog-banner-lower-content mb-3">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <a className="author-link" href="#">
                                <div className="banner-author-content d-flex align-items-center">
                                  <div className="author-content-image">
                                    <Image
                                      src="/assets/images/alternate/doctor-male.png"
                                      className="rounded-circle bg-light"
                                      height={20}
                                      width={20}
                                      alt="Author Avatar Image"
                                    />
                                  </div>
                                  <div className="author-content-name ms-2">
                                    <h6
                                      style={{
                                        fontSize: "15px",
                                        fontVariant: "small-caps",
                                        marginTop: "6px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      By Mark Rose
                                    </h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="blog-post-time d-flex align-items-center">
                                <i className="fas fa-clock"></i>
                                <h6
                                  className="ms-2"
                                  style={{
                                    marginTop: "6px",
                                    fontSize: "13px",
                                  }}
                                >
                                  18th May, 2022
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-blog-para">
                          <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque auctor, augue id consectetur
                            aliquam, eros lorem fringilla nibh, quis facilisis
                            lorem sapien nec ligula.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a className="card-footer-link" href="#">
                      <div className="card-footer">
                        <span
                          className="text-light"
                          style={{ fontSize: "14px" }}
                        >
                          Read More
                        </span>
                        <i
                          className="fal fa-arrow-right ms-2 text-light"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-6">
                  <div className="card shadow-sm" style={{ padding: "13px" }}>
                    <div className="more-blog-sec">
                      <div
                        className="more-blog-sec-image"
                        style={{
                          background: "url(/assets/images/main.jpg)",
                          height: "120px",
                          backgroundSize: "cover",
                          borderRadius: "5px",
                        }}
                      >
                        <div className="post-categories-marker">
                          <a className="marker" href="#">
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="more-blog-sec-content">
                        <a href="#">
                          <div className="blog-banner-title mt-2">
                            <h6
                              style={{
                                fontSize: "15px",
                                color: " #001038",
                                fontWeight: "600",
                                lineHeight: "1.5",
                              }}
                            >
                              Neque porro quisquam est qui dolorem ipsum quia
                              dolor sit amet.
                            </h6>
                          </div>
                        </a>
                        <div className="blog-banner-lower-content mb-3">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <a className="author-link" href="#">
                                <div className="banner-author-content d-flex align-items-center">
                                  <div className="author-content-image">
                                    <Image
                                      src="/assets/images/alternate/doctor-male.png"
                                      className="rounded-circle bg-light"
                                      height={20}
                                      width={20}
                                      alt="Author Avatar Image"
                                    />
                                  </div>
                                  <div className="author-content-name ms-2">
                                    <h6
                                      style={{
                                        fontSize: "15px",
                                        fontVariant: "small-caps",
                                        marginTop: "6px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      By Mark Rose
                                    </h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="blog-post-time d-flex align-items-center">
                                <i className="fas fa-clock"></i>
                                <h6
                                  className="ms-2"
                                  style={{
                                    marginTop: "6px",
                                    fontSize: "13px",
                                  }}
                                >
                                  18th May, 2022
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-blog-para">
                          <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque auctor, augue id consectetur
                            aliquam, eros lorem fringilla nibh, quis facilisis
                            lorem sapien nec ligula.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a className="card-footer-link" href="#">
                      <div className="card-footer">
                        <span
                          className="text-light"
                          style={{ fontSize: "14px" }}
                        >
                          Read More
                        </span>
                        <i
                          className="fal fa-arrow-right ms-2 text-light"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-6">
                  <div className="card shadow-sm" style={{ padding: "13px" }}>
                    <div className="more-blog-sec">
                      <div
                        className="more-blog-sec-image"
                        style={{
                          background: "url(/assets/images/main.jpg)",
                          height: "120px",
                          backgroundSize: "cover",
                          borderRadius: "5px",
                        }}
                      >
                        <div className="post-categories-marker">
                          <a className="marker" href="#">
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="more-blog-sec-content">
                        <a href="#">
                          <div className="blog-banner-title mt-2">
                            <h6
                              style={{
                                fontSize: "15px",
                                color: " #001038",
                                fontWeight: "600",
                                lineHeight: "1.5",
                              }}
                            >
                              Neque porro quisquam est qui dolorem ipsum quia
                              dolor sit amet.
                            </h6>
                          </div>
                        </a>
                        <div className="blog-banner-lower-content mb-3">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <a className="author-link" href="#">
                                <div className="banner-author-content d-flex align-items-center">
                                  <div className="author-content-image">
                                    <Image
                                      src="/assets/images/alternate/doctor-male.png"
                                      className="rounded-circle bg-light"
                                      height={20}
                                      width={20}
                                      alt="Author Avatar Image"
                                    />
                                  </div>
                                  <div className="author-content-name ms-2">
                                    <h6
                                      style={{
                                        fontSize: "15px",
                                        fontVariant: "small-caps",
                                        marginTop: "6px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      By Mark Rose
                                    </h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="blog-post-time d-flex align-items-center">
                                <i className="fas fa-clock"></i>
                                <h6
                                  className="ms-2"
                                  style={{
                                    marginTop: "6px",
                                    fontSize: "13px",
                                  }}
                                >
                                  18th May, 2022
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-blog-para">
                          <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque auctor, augue id consectetur
                            aliquam, eros lorem fringilla nibh, quis facilisis
                            lorem sapien nec ligula.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a className="card-footer-link" href="#">
                      <div className="card-footer">
                        <span
                          className="text-light"
                          style={{ fontSize: "14px" }}
                        >
                          Read More
                        </span>
                        <i
                          className="fal fa-arrow-right ms-2 text-light"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-6">
                  <div className="card shadow-sm" style={{ padding: "13px" }}>
                    <div className="more-blog-sec">
                      <div
                        className="more-blog-sec-image"
                        style={{
                          background: "url(/assets/images/main.jpg)",
                          height: "120px",
                          backgroundSize: "cover",
                          borderRadius: "5px",
                        }}
                      >
                        <div className="post-categories-marker">
                          <a className="marker" href="#">
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="more-blog-sec-content">
                        <a href="#">
                          <div className="blog-banner-title mt-2">
                            <h6
                              style={{
                                fontSize: "15px",
                                color: " #001038",
                                fontWeight: "600",
                                lineHeight: "1.5",
                              }}
                            >
                              Neque porro quisquam est qui dolorem ipsum quia
                              dolor sit amet.
                            </h6>
                          </div>
                        </a>
                        <div className="blog-banner-lower-content mb-3">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <a className="author-link" href="#">
                                <div className="banner-author-content d-flex align-items-center">
                                  <div className="author-content-image">
                                    <Image
                                      src="/assets/images/alternate/doctor-male.png"
                                      className="rounded-circle bg-light"
                                      height={20}
                                      width={20}
                                      alt="Author Avatar Image"
                                    />
                                  </div>
                                  <div className="author-content-name ms-2">
                                    <h6
                                      style={{
                                        fontSize: "15px",
                                        fontVariant: "small-caps",
                                        marginTop: "6px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      By Mark Rose
                                    </h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="blog-post-time d-flex align-items-center">
                                <i className="fas fa-clock"></i>
                                <h6
                                  className="ms-2"
                                  style={{
                                    marginTop: "6px",
                                    fontSize: "13px",
                                  }}
                                >
                                  18th May, 2022
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-blog-para">
                          <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque auctor, augue id consectetur
                            aliquam, eros lorem fringilla nibh, quis facilisis
                            lorem sapien nec ligula.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a className="card-footer-link" href="#">
                      <div className="card-footer">
                        <span
                          className="text-light"
                          style={{ fontSize: "14px" }}
                        >
                          Read More
                        </span>
                        <i
                          className="fal fa-arrow-right ms-2 text-light"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-6">
                  <div className="card shadow-sm" style={{ padding: "13px" }}>
                    <div className="more-blog-sec">
                      <div
                        className="more-blog-sec-image"
                        style={{
                          background: "url(/assets/images/main.jpg)",
                          height: "120px",
                          backgroundSize: "cover",
                          borderRadius: "5px",
                        }}
                      >
                        <div className="post-categories-marker">
                          <a className="marker" href="#">
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="more-blog-sec-content">
                        <a href="#">
                          <div className="blog-banner-title mt-2">
                            <h6
                              style={{
                                fontSize: "15px",
                                color: " #001038",
                                fontWeight: "600",
                                lineHeight: "1.5",
                              }}
                            >
                              Neque porro quisquam est qui dolorem ipsum quia
                              dolor sit amet.
                            </h6>
                          </div>
                        </a>
                        <div className="blog-banner-lower-content mb-3">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <a className="author-link" href="#">
                                <div className="banner-author-content d-flex align-items-center">
                                  <div className="author-content-image">
                                    <Image
                                      src="/assets/images/alternate/doctor-male.png"
                                      className="rounded-circle bg-light"
                                      height={20}
                                      width={20}
                                      alt="Author Avatar Image"
                                    />
                                  </div>
                                  <div className="author-content-name ms-2">
                                    <h6
                                      style={{
                                        fontSize: "15px",
                                        fontVariant: "small-caps",
                                        marginTop: "6px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      By Mark Rose
                                    </h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="blog-post-time d-flex align-items-center">
                                <i className="fas fa-clock"></i>
                                <h6
                                  className="ms-2"
                                  style={{
                                    marginTop: "6px",
                                    fontSize: "13px",
                                  }}
                                >
                                  18th May, 2022
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-blog-para">
                          <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque auctor, augue id consectetur
                            aliquam, eros lorem fringilla nibh, quis facilisis
                            lorem sapien nec ligula.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a className="card-footer-link" href="#">
                      <div className="card-footer">
                        <span
                          className="text-light"
                          style={{ fontSize: "14px" }}
                        >
                          Read More
                        </span>
                        <i
                          className="fal fa-arrow-right ms-2 text-light"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-6">
                  <div className="card shadow-sm" style={{ padding: "13px" }}>
                    <div className="more-blog-sec">
                      <div
                        className="more-blog-sec-image"
                        style={{
                          background: "url(/assets/images/main.jpg)",
                          height: "120px",
                          backgroundSize: "cover",
                          borderRadius: "5px",
                        }}
                      >
                        <div className="post-categories-marker">
                          <a className="marker" href="#">
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="more-blog-sec-content">
                        <a href="#">
                          <div className="blog-banner-title mt-2">
                            <h6
                              style={{
                                fontSize: "15px",
                                color: " #001038",
                                fontWeight: "600",
                                lineHeight: "1.5",
                              }}
                            >
                              Neque porro quisquam est qui dolorem ipsum quia
                              dolor sit amet.
                            </h6>
                          </div>
                        </a>
                        <div className="blog-banner-lower-content mb-3">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <a className="author-link" href="#">
                                <div className="banner-author-content d-flex align-items-center">
                                  <div className="author-content-image">
                                    <Image
                                      src="/assets/images/alternate/doctor-male.png"
                                      className="rounded-circle bg-light"
                                      height={20}
                                      width={20}
                                      alt="Author Avatar Image"
                                    />
                                  </div>
                                  <div className="author-content-name ms-2">
                                    <h6
                                      style={{
                                        fontSize: "15px",
                                        fontVariant: "small-caps",
                                        marginTop: "6px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      By Mark Rose
                                    </h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="blog-post-time d-flex align-items-center">
                                <i className="fas fa-clock"></i>
                                <h6
                                  className="ms-2"
                                  style={{
                                    marginTop: "6px",
                                    fontSize: "13px",
                                  }}
                                >
                                  18th May, 2022
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="single-blog-para">
                          <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque auctor, augue id consectetur
                            aliquam, eros lorem fringilla nibh, quis facilisis
                            lorem sapien nec ligula.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a className="card-footer-link" href="#">
                      <div className="card-footer">
                        <span
                          className="text-light"
                          style={{ fontSize: "14px" }}
                        >
                          Read More
                        </span>
                        <i
                          className="fal fa-arrow-right ms-2 text-light"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="author-blog-lower-part">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="author-pagination">
                      <nav>
                        <ul className="pagination">
                          <li className="page-item disabled">
                            <a
                              className="page-link"
                              href="#"
                              // style={{
                              //   backgroundColor: "#15558ddb",
                              //   color: "white",
                              // }}
                            >
                              Previous
                            </a>
                          </li>
                          <li className="page-item active">
                            <a
                              className="page-link"
                              href="#"
                              style={{
                                backgroundColor: "#15558ddb",
                                color: "white",
                                borderColor: "#eee",
                              }}
                            >
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              style={{
                                backgroundColor: "white",
                                color: "#15558d",
                              }}
                            >
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              style={{
                                backgroundColor: "#15558d",
                                color: "white",
                              }}
                            >
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <button className="btn btn-dark">
                      <span className="me-2">
                        <i
                          className="far fa-redo-alt"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </span>
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-latest-section mt-5">
            <div className="left-latest-blog-title">
              <h6 className="title">Related Blogs</h6>
              <h4 className="sub-title">Don&apos;t miss daily news</h4>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-4">
                <div className="card shadow-sm" style={{ padding: "13px" }}>
                  <div className="more-blog-sec">
                    <div
                      className="more-blog-sec-image"
                      style={{
                        background: "url(/assets/images/main.jpg)",
                        height: "120px",
                        backgroundSize: "cover",
                        borderRadius: "5px",
                      }}
                    >
                      <div className="post-categories-marker">
                        <a className="marker" href="#">
                          Business
                        </a>
                      </div>
                    </div>
                    <div className="more-blog-sec-content">
                      <a href="#">
                        <div className="blog-banner-title mt-2">
                          <h6
                            style={{
                              fontSize: "15px",
                              color: " #001038",
                              fontWeight: "600",
                              lineHeight: "1.5",
                            }}
                          >
                            Neque porro quisquam est qui dolorem ipsum quia
                            dolor sit amet.
                          </h6>
                        </div>
                      </a>
                      <div className="blog-banner-lower-content mb-3">
                        <div className="row align-items-center">
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <a className="author-link" href="#">
                              <div className="banner-author-content d-flex align-items-center">
                                <div className="author-content-image">
                                  <Image
                                    src="/assets/images/alternate/doctor-male.png"
                                    className="rounded-circle bg-light"
                                    height={20}
                                    width={20}
                                    alt="Author Avatar Image"
                                  />
                                </div>
                                <div className="author-content-name ms-2">
                                  <h6
                                    style={{
                                      fontSize: "15px",
                                      fontVariant: "small-caps",
                                      marginTop: "6px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    By Mark Rose
                                  </h6>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="blog-post-time d-flex align-items-center">
                              <i className="fas fa-clock"></i>
                              <h6
                                className="ms-2"
                                style={{
                                  marginTop: "6px",
                                  fontSize: "13px",
                                }}
                              >
                                18th May, 2022
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-blog-para">
                        <p style={{ textAlign: "justify" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque auctor, augue id consectetur
                          aliquam, eros lorem fringilla nibh, quis facilisis
                          lorem sapien nec ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a className="card-footer-link" href="#">
                    <div className="card-footer">
                      <span className="text-light" style={{ fontSize: "14px" }}>
                        Read More
                      </span>
                      <i
                        className="fal fa-arrow-right ms-2 text-light"
                        style={{ fontSize: "12px" }}
                      ></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-4">
                <div className="card shadow-sm" style={{ padding: "13px" }}>
                  <div className="more-blog-sec">
                    <div
                      className="more-blog-sec-image"
                      style={{
                        background: "url(/assets/images/main.jpg)",
                        height: "120px",
                        backgroundSize: "cover",
                        borderRadius: "5px",
                      }}
                    >
                      <div className="post-categories-marker">
                        <a className="marker" href="#">
                          Business
                        </a>
                      </div>
                    </div>
                    <div className="more-blog-sec-content">
                      <a href="#">
                        <div className="blog-banner-title mt-2">
                          <h6
                            style={{
                              fontSize: "15px",
                              color: " #001038",
                              fontWeight: "600",
                              lineHeight: "1.5",
                            }}
                          >
                            Neque porro quisquam est qui dolorem ipsum quia
                            dolor sit amet.
                          </h6>
                        </div>
                      </a>
                      <div className="blog-banner-lower-content mb-3">
                        <div className="row align-items-center">
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <a className="author-link" href="#">
                              <div className="banner-author-content d-flex align-items-center">
                                <div className="author-content-image">
                                  <Image
                                    src="/assets/images/alternate/doctor-male.png"
                                    className="rounded-circle bg-light"
                                    height={20}
                                    width={20}
                                    alt="Author Avatar Image"
                                  />
                                </div>
                                <div className="author-content-name ms-2">
                                  <h6
                                    style={{
                                      fontSize: "15px",
                                      fontVariant: "small-caps",
                                      marginTop: "6px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    By Mark Rose
                                  </h6>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="blog-post-time d-flex align-items-center">
                              <i className="fas fa-clock"></i>
                              <h6
                                className="ms-2"
                                style={{
                                  marginTop: "6px",
                                  fontSize: "13px",
                                }}
                              >
                                18th May, 2022
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-blog-para">
                        <p style={{ textAlign: "justify" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque auctor, augue id consectetur
                          aliquam, eros lorem fringilla nibh, quis facilisis
                          lorem sapien nec ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a className="card-footer-link" href="#">
                    <div className="card-footer">
                      <span className="text-light" style={{ fontSize: "14px" }}>
                        Read More
                      </span>
                      <i
                        className="fal fa-arrow-right ms-2 text-light"
                        style={{ fontSize: "12px" }}
                      ></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-4">
                <div className="card shadow-sm" style={{ padding: "13px" }}>
                  <div className="more-blog-sec">
                    <div
                      className="more-blog-sec-image"
                      style={{
                        background: "url(/assets/images/main.jpg)",
                        height: "120px",
                        backgroundSize: "cover",
                        borderRadius: "5px",
                      }}
                    >
                      <div className="post-categories-marker">
                        <a className="marker" href="#">
                          Business
                        </a>
                      </div>
                    </div>
                    <div className="more-blog-sec-content">
                      <a href="#">
                        <div className="blog-banner-title mt-2">
                          <h6
                            style={{
                              fontSize: "15px",
                              color: " #001038",
                              fontWeight: "600",
                              lineHeight: "1.5",
                            }}
                          >
                            Neque porro quisquam est qui dolorem ipsum quia
                            dolor sit amet.
                          </h6>
                        </div>
                      </a>
                      <div className="blog-banner-lower-content mb-3">
                        <div className="row align-items-center">
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <a className="author-link" href="#">
                              <div className="banner-author-content d-flex align-items-center">
                                <div className="author-content-image">
                                  <Image
                                    src="/assets/images/alternate/doctor-male.png"
                                    className="rounded-circle bg-light"
                                    height={20}
                                    width={20}
                                    alt="Author Avatar Image"
                                  />
                                </div>
                                <div className="author-content-name ms-2">
                                  <h6
                                    style={{
                                      fontSize: "15px",
                                      fontVariant: "small-caps",
                                      marginTop: "6px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    By Mark Rose
                                  </h6>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="blog-post-time d-flex align-items-center">
                              <i className="fas fa-clock"></i>
                              <h6
                                className="ms-2"
                                style={{
                                  marginTop: "6px",
                                  fontSize: "13px",
                                }}
                              >
                                18th May, 2022
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-blog-para">
                        <p style={{ textAlign: "justify" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque auctor, augue id consectetur
                          aliquam, eros lorem fringilla nibh, quis facilisis
                          lorem sapien nec ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a className="card-footer-link" href="#">
                    <div className="card-footer">
                      <span className="text-light" style={{ fontSize: "14px" }}>
                        Read More
                      </span>
                      <i
                        className="fal fa-arrow-right ms-2 text-light"
                        style={{ fontSize: "12px" }}
                      ></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Author;
