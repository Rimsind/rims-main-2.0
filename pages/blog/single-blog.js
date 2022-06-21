import { BreadCrums } from "components/common";
import Image from "next/image";

const SingleBlog = () => {
  return (
    <>
      <section className="section-single-blog">
        <BreadCrums title="Home / Blog / Blog Name" title1="Blog Name" />
        <div className="container">
          <div className="single-blog-inner-item my-5">
            <div className="row align-items-start ">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                <div className="left-blog-content">
                  <div className="left-inner-item">
                    <div
                      className="blog-breadcrumb-banner"
                      style={{
                        backgroundImage:
                          "url('/assets/images/background_image_03.jpg')",
                        height: "300px",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="blog-single-content my-4 border-bottom border-1">
                      <div className="post-categories-marker">
                        <a className="marker" href="#">
                          Business
                        </a>
                      </div>
                      <div className="single-blog-title">
                        <h6
                          style={{
                            fontSize: "35px",
                            fontVariant: "small-caps",
                            color: " #001038",
                            fontWeight: "700",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </h6>
                      </div>

                      <div className="blog-banner-lower-content">
                        <div className="row align-items-center">
                          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <a className="author-link" href="#">
                              <div className="banner-author-content d-flex align-items-center">
                                <div className="author-content-image">
                                  <Image
                                    src="/assets/images/alternate/doctor-male.png"
                                    className="rounded-circle bg-light"
                                    height={40}
                                    width={40}
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
                          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="blog-post-time d-flex align-items-center">
                              <i className="fas fa-clock"></i>
                              <h6 className="ms-2" style={{ marginTop: "6px" }}>
                                18th May, 2022
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-single-para">
                      <p className="fs-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque auctor, augue id consectetur aliquam, eros
                        lorem fringilla nibh, quis facilisis lorem sapien nec
                        ligula. Aenean non risus dictum, interdum erat id,
                        commodo lorem. Aliquam laoreet viverra iaculis.
                        Pellentesque venenatis dignissim leo fringilla pretium.
                        Duis ullamcorper, urna vel eleifend ornare, mauris lacus
                        condimentum leo, ac bibendum quam dolor vitae nulla. In
                        a felis euismod, bibendum felis sit amet, congue nisi.
                        Vestibulum non ultricies justo. Nunc volutpat volutpat
                        enim a eleifend. Phasellus ac euismod nulla. Sed
                        venenatis nisi at urna pretium mattis quis ut sem.
                      </p>
                      <p className="fs-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque auctor, augue id consectetur aliquam, eros
                        lorem fringilla nibh, quis facilisis lorem sapien nec
                        ligula. Aenean non risus dictum, interdum erat id,
                        commodo lorem. Aliquam laoreet viverra iaculis.
                        Pellentesque venenatis dignissim leo fringilla pretium.
                        Duis ullamcorper, urna vel eleifend ornare, mauris lacus
                        condimentum leo, ac bibendum quam dolor vitae nulla. In
                        a felis euismod, bibendum felis sit amet, congue nisi.
                        Vestibulum non ultricies justo. Nunc volutpat volutpat
                        enim a eleifend. Phasellus ac euismod nulla. Sed
                        venenatis nisi at urna pretium mattis quis ut sem.
                      </p>
                    </div>
                    <div className="blog-latest-section mt-5">
                      <div className="left-latest-blog-title">
                        <h6 className="title">Related Blogs</h6>
                        <h4 className="sub-title">
                          Don&apos;t miss daily news
                        </h4>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 col-xxl-6">
                          <div
                            className="card shadow-sm"
                            style={{ padding: "13px" }}
                          >
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
                                      Neque porro quisquam est qui dolorem ipsum
                                      quia dolor sit amet.
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
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque auctor, augue
                                    id consectetur aliquam, eros lorem fringilla
                                    nibh, quis facilisis lorem sapien nec
                                    ligula.
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
                          <div
                            className="card shadow-sm"
                            style={{ padding: "13px" }}
                          >
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
                                      Neque porro quisquam est qui dolorem ipsum
                                      quia dolor sit amet.
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
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque auctor, augue
                                    id consectetur aliquam, eros lorem fringilla
                                    nibh, quis facilisis lorem sapien nec
                                    ligula.
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 sticky-top mt-3 mt-sm-3 mt-md-3 mt-lg-0 mt-xl-0 mt-xxl-0">
                <div className="right-blog-content">
                  <div className="right-blog-tab">
                    <ul className="nav nav-tabs blog-tabs blog-tabs-solid nav-tabs-solid blog-justified nav-justified">
                      <li className="nav-item">
                        <a
                          className="nav-link blog-link active"
                          href="#solid-justified-tab1"
                          data-bs-toggle="tab"
                        >
                          Recent News
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#solid-justified-tab2"
                          data-bs-toggle="tab"
                        >
                          Popular News
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content p-0">
                      <div
                        className="tab-pane show active"
                        id="solid-justified-tab1"
                      >
                        <div className="post-widget-container fl-wrap">
                          <div className="post-widget-item fl-wrap">
                            <div className="list-post-right fl-wrap">
                              <div className="row align-items-center">
                                <div className="col-4 col-sm-3 col-md-4 col-lg-5 col-xl-4 col-xxl-4">
                                  <div className="list-post-media">
                                    <a href="#">
                                      <div className="bg-wrap">
                                        <Image
                                          src="/assets/images/clinic/clinic-6.jpg"
                                          className="bg-image"
                                          height={350}
                                          width={500}
                                          alt="blog Image"
                                        />
                                        <div className="bg-middle-item">
                                          <div className="middle-item-icon">
                                            <i className="fas fa-long-arrow-right text-dark"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-8 col-sm-9 col-md-8 col-lg-7 col-xl-8 col-xxl-8">
                                  <div className="list-post-content-right">
                                    <div className="list-post-title">
                                      <a
                                        href="#"
                                        className="post-title"
                                        style={{
                                          fontSize: "13px",
                                          paddingBottom: "4px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        Goodwin must Break Clarkson
                                      </a>
                                    </div>

                                    <div className="blog-banner-lower-content">
                                      <div className="row align-items-center">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6 ">
                                          <div className="blog-post-time d-flex align-items-center">
                                            <i className="fas fa-clock"></i>
                                            <h6
                                              className="ms-2"
                                              style={{
                                                marginTop: "6px",
                                                fontSize: "10px",
                                              }}
                                            >
                                              18th May, 2022
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                                          <div className="blog-post-time">
                                            <i className="fas fa-comments-alt"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                            <i className="fas fa-eye"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-widget-item fl-wrap">
                            <div className="list-post-right fl-wrap">
                              <div className="row align-items-center">
                                <div className="col-4 col-sm-3 col-md-4 col-lg-5 col-xl-4 col-xxl-4">
                                  <div className="list-post-media">
                                    <a href="#">
                                      <div className="bg-wrap">
                                        <Image
                                          src="/assets/images/clinic/clinic-6.jpg"
                                          className="bg-image"
                                          height={350}
                                          width={500}
                                          alt="blog Image"
                                        />
                                        <div className="bg-middle-item">
                                          <div className="middle-item-icon">
                                            <i className="fas fa-long-arrow-right text-dark"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-8 col-sm-9 col-md-8 col-lg-7 col-xl-8 col-xxl-8">
                                  <div className="list-post-content-right">
                                    <div className="list-post-title">
                                      <a
                                        href="#"
                                        className="post-title"
                                        style={{
                                          fontSize: "13px",
                                          paddingBottom: "4px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        Goodwin must Break Clarkson
                                      </a>
                                    </div>

                                    <div className="blog-banner-lower-content">
                                      <div className="row align-items-center">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6 ">
                                          <div className="blog-post-time d-flex align-items-center">
                                            <i className="fas fa-clock"></i>
                                            <h6
                                              className="ms-2"
                                              style={{
                                                marginTop: "6px",
                                                fontSize: "10px",
                                              }}
                                            >
                                              18th May, 2022
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                                          <div className="blog-post-time">
                                            <i className="fas fa-comments-alt"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                            <i className="fas fa-eye"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-widget-item fl-wrap">
                            <div className="list-post-right fl-wrap">
                              <div className="row align-items-center">
                                <div className="col-4 col-sm-3 col-md-4 col-lg-5 col-xl-4 col-xxl-4">
                                  <div className="list-post-media">
                                    <a href="#">
                                      <div className="bg-wrap">
                                        <Image
                                          src="/assets/images/clinic/clinic-6.jpg"
                                          className="bg-image"
                                          height={350}
                                          width={500}
                                          alt="blog Image"
                                        />
                                        <div className="bg-middle-item">
                                          <div className="middle-item-icon">
                                            <i className="fas fa-long-arrow-right text-dark"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-8 col-sm-9 col-md-8 col-lg-7 col-xl-8 col-xxl-8">
                                  <div className="list-post-content-right">
                                    <div className="list-post-title">
                                      <a
                                        href="#"
                                        className="post-title"
                                        style={{
                                          fontSize: "13px",
                                          paddingBottom: "4px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        Goodwin must Break Clarkson
                                      </a>
                                    </div>

                                    <div className="blog-banner-lower-content">
                                      <div className="row align-items-center">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6 ">
                                          <div className="blog-post-time d-flex align-items-center">
                                            <i className="fas fa-clock"></i>
                                            <h6
                                              className="ms-2"
                                              style={{
                                                marginTop: "6px",
                                                fontSize: "10px",
                                              }}
                                            >
                                              18th May, 2022
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                                          <div className="blog-post-time">
                                            <i className="fas fa-comments-alt"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                            <i className="fas fa-eye"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-widget-item fl-wrap">
                            <div className="list-post-right fl-wrap">
                              <div className="row align-items-center">
                                <div className="col-4 col-sm-3 col-md-4 col-lg-5 col-xl-4 col-xxl-4">
                                  <div className="list-post-media">
                                    <a href="#">
                                      <div className="bg-wrap">
                                        <Image
                                          src="/assets/images/clinic/clinic-6.jpg"
                                          className="bg-image"
                                          height={350}
                                          width={500}
                                          alt="blog Image"
                                        />
                                        <div className="bg-middle-item">
                                          <div className="middle-item-icon">
                                            <i className="fas fa-long-arrow-right text-dark"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-8 col-sm-9 col-md-8 col-lg-7 col-xl-8 col-xxl-8">
                                  <div className="list-post-content-right">
                                    <div className="list-post-title">
                                      <a
                                        href="#"
                                        className="post-title"
                                        style={{
                                          fontSize: "13px",
                                          paddingBottom: "4px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        Goodwin must Break Clarkson
                                      </a>
                                    </div>

                                    <div className="blog-banner-lower-content">
                                      <div className="row align-items-center">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6 ">
                                          <div className="blog-post-time d-flex align-items-center">
                                            <i className="fas fa-clock"></i>
                                            <h6
                                              className="ms-2"
                                              style={{
                                                marginTop: "6px",
                                                fontSize: "10px",
                                              }}
                                            >
                                              18th May, 2022
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                                          <div className="blog-post-time">
                                            <i className="fas fa-comments-alt"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                            <i className="fas fa-eye"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
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
                      <div className="tab-pane" id="solid-justified-tab2">
                        <div className="post-widget-container fl-wrap">
                          <div className="post-widget-item fl-wrap">
                            <div className="list-post-right fl-wrap">
                              <div className="row align-items-center">
                                <div className="col-4 col-sm-3 col-md-4 col-lg-5 col-xl-4 col-xxl-4">
                                  <div className="list-post-media">
                                    <a href="#">
                                      <div className="bg-wrap">
                                        <Image
                                          src="/assets/images/clinic/clinic-6.jpg"
                                          className="bg-image"
                                          height={350}
                                          width={500}
                                          alt="blog Image"
                                        />
                                        <div className="bg-middle-item">
                                          <div className="middle-item-icon">
                                            <i className="fas fa-long-arrow-right text-dark"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-8 col-sm-9 col-md-8 col-lg-7 col-xl-8 col-xxl-8">
                                  <div className="list-post-content-right">
                                    <div className="list-post-title">
                                      <a
                                        href="#"
                                        className="post-title"
                                        style={{
                                          fontSize: "13px",
                                          paddingBottom: "4px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        Goodwin must Break Clarkson
                                      </a>
                                    </div>

                                    <div className="blog-banner-lower-content">
                                      <div className="row align-items-center">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6 ">
                                          <div className="blog-post-time d-flex align-items-center">
                                            <i className="fas fa-clock"></i>
                                            <h6
                                              className="ms-2"
                                              style={{
                                                marginTop: "6px",
                                                fontSize: "10px",
                                              }}
                                            >
                                              18th May, 2022
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                                          <div className="blog-post-time">
                                            <i className="fas fa-comments-alt"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                            <i className="fas fa-eye"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-widget-item fl-wrap">
                            <div className="list-post-right fl-wrap">
                              <div className="row align-items-center">
                                <div className="col-4 col-sm-3 col-md-4 col-lg-5 col-xl-4 col-xxl-4">
                                  <div className="list-post-media">
                                    <a href="#">
                                      <div className="bg-wrap">
                                        <Image
                                          src="/assets/images/clinic/clinic-6.jpg"
                                          className="bg-image"
                                          height={350}
                                          width={500}
                                          alt="blog Image"
                                        />
                                        <div className="bg-middle-item">
                                          <div className="middle-item-icon">
                                            <i className="fas fa-long-arrow-right text-dark"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-8 col-sm-9 col-md-8 col-lg-7 col-xl-8 col-xxl-8">
                                  <div className="list-post-content-right">
                                    <div className="list-post-title">
                                      <a
                                        href="#"
                                        className="post-title"
                                        style={{
                                          fontSize: "13px",
                                          paddingBottom: "4px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        Goodwin must Break Clarkson
                                      </a>
                                    </div>

                                    <div className="blog-banner-lower-content">
                                      <div className="row align-items-center">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6 ">
                                          <div className="blog-post-time d-flex align-items-center">
                                            <i className="fas fa-clock"></i>
                                            <h6
                                              className="ms-2"
                                              style={{
                                                marginTop: "6px",
                                                fontSize: "10px",
                                              }}
                                            >
                                              18th May, 2022
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                                          <div className="blog-post-time">
                                            <i className="fas fa-comments-alt"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                            <i className="fas fa-eye"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-widget-item fl-wrap">
                            <div className="list-post-right fl-wrap">
                              <div className="row align-items-center">
                                <div className="col-4 col-sm-3 col-md-4 col-lg-5 col-xl-4 col-xxl-4">
                                  <div className="list-post-media">
                                    <a href="#">
                                      <div className="bg-wrap">
                                        <Image
                                          src="/assets/images/clinic/clinic-6.jpg"
                                          className="bg-image"
                                          height={350}
                                          width={500}
                                          alt="blog Image"
                                        />
                                        <div className="bg-middle-item">
                                          <div className="middle-item-icon">
                                            <i className="fas fa-long-arrow-right text-dark"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-8 col-sm-9 col-md-8 col-lg-7 col-xl-8 col-xxl-8">
                                  <div className="list-post-content-right">
                                    <div className="list-post-title">
                                      <a
                                        href="#"
                                        className="post-title"
                                        style={{
                                          fontSize: "13px",
                                          paddingBottom: "4px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        Goodwin must Break Clarkson
                                      </a>
                                    </div>

                                    <div className="blog-banner-lower-content">
                                      <div className="row align-items-center">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6 ">
                                          <div className="blog-post-time d-flex align-items-center">
                                            <i className="fas fa-clock"></i>
                                            <h6
                                              className="ms-2"
                                              style={{
                                                marginTop: "6px",
                                                fontSize: "10px",
                                              }}
                                            >
                                              18th May, 2022
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                                          <div className="blog-post-time">
                                            <i className="fas fa-comments-alt"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                            <i className="fas fa-eye"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-widget-item fl-wrap">
                            <div className="list-post-right fl-wrap">
                              <div className="row align-items-center">
                                <div className="col-4 col-sm-3 col-md-4 col-lg-5 col-xl-4 col-xxl-4">
                                  <div className="list-post-media">
                                    <a href="#">
                                      <div className="bg-wrap">
                                        <Image
                                          src="/assets/images/clinic/clinic-6.jpg"
                                          className="bg-image"
                                          height={350}
                                          width={500}
                                          alt="blog Image"
                                        />
                                        <div className="bg-middle-item">
                                          <div className="middle-item-icon">
                                            <i className="fas fa-long-arrow-right text-dark"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-8 col-sm-9 col-md-8 col-lg-7 col-xl-8 col-xxl-8">
                                  <div className="list-post-content-right">
                                    <div className="list-post-title">
                                      <a
                                        href="#"
                                        className="post-title"
                                        style={{
                                          fontSize: "13px",
                                          paddingBottom: "4px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        Goodwin must Break Clarkson
                                      </a>
                                    </div>

                                    <div className="blog-banner-lower-content">
                                      <div className="row align-items-center">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6 ">
                                          <div className="blog-post-time d-flex align-items-center">
                                            <i className="fas fa-clock"></i>
                                            <h6
                                              className="ms-2"
                                              style={{
                                                marginTop: "6px",
                                                fontSize: "10px",
                                              }}
                                            >
                                              18th May, 2022
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                                          <div className="blog-post-time">
                                            <i className="fas fa-comments-alt"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
                                            <i className="fas fa-eye"></i>
                                            <span className="ms-1 me-2">
                                              56
                                            </span>
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
                  </div>
                  <div className="right-blog-follow-social">
                    <div className="widget-title">
                      <h6>Follow Us</h6>
                    </div>
                    <div className="row g-0 align-items-center">
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <a href="#" target="_blank">
                          <div className="social-box">
                            <i
                              className="fab fa-facebook-f"
                              style={{ color: "#3C579C" }}
                            ></i>
                            <span style={{ color: "#6c757d" }}>
                              Likes
                              <b className="ms-2" style={{ color: "#000" }}>
                                2640
                              </b>
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <a href="#" target="_blank">
                          <div className="social-box">
                            <i
                              className="fab fa-twitter"
                              style={{ color: "#39A1F8" }}
                            ></i>
                            <span style={{ color: "#6c757d" }}>
                              Followers
                              <b className="ms-2" style={{ color: "#000" }}>
                                1640
                              </b>
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <a href="#" target="_blank">
                          <div className="social-box">
                            <i
                              className="fab fa-youtube"
                              style={{ color: "#e93314" }}
                            ></i>
                            <span style={{ color: "#6c757d" }}>
                              Followers
                              <b className="ms-2" style={{ color: "#000" }}>
                                26K
                              </b>
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <a href="#" target="_blank">
                          <div className="social-box">
                            <i
                              className="fab fa-instagram"
                              style={{ color: "#c862dc" }}
                            ></i>
                            <span style={{ color: "#6c757d" }}>
                              Followers
                              <b className="ms-2" style={{ color: "#000" }}>
                                2240
                              </b>
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="right-blog-follow-social">
                    <div className="widget-title">
                      <h6>Popular Tag</h6>
                    </div>
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="post-categories-marker-left">
                          <a className="marker" href="#">
                            #Business
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="post-categories-marker-left">
                          <a className="marker" href="#">
                            #Doctor
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="post-categories-marker-left">
                          <a className="marker" href="#">
                            #Nurse
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="post-categories-marker-left">
                          <a className="marker" href="#">
                            #Hospital
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="post-categories-marker-left">
                          <a className="marker" href="#">
                            #NursingHome
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="post-categories-marker-left">
                          <a className="marker" href="#">
                            #Polyclinic
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="post-categories-marker-left">
                          <a className="marker" href="#">
                            #DiagnosticCenter
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
      </section>
    </>
  );
};

export default SingleBlog;
