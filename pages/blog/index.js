import Image from "next/image";

const Index = () => {
  return (
    <>
      <section className="section-blog">
        <div
          className="blog-breadcrumb-banner"
          style={{
            background: "url('/assets/images/background_image_03.jpg')",
            height: "450px",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="container">
            <div className="post-categories-marker">
              <a className="marker" href="#">
                Business
              </a>
            </div>
            <a href="#">
              <div className="blog-banner-title">
                <h6
                  style={{
                    fontSize: "35px",
                    fontVariant: "small-caps",
                    color: " #001038",
                    fontWeight: "700",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h6>
              </div>
            </a>
            <div className="blog-banner-sub-title mt-3">
              <p style={{ fontSize: "15px" }}>
                Nulla a nisl non sem pretium pellentesque. Sed a mauris
                scelerisque, volutpat nibh et,
                <br /> faucibus urna. Aliquam facilisis dictum odio vel maximus.
              </p>
            </div>
            <div className="blog-banner-lower-content">
              <div className="row align-items-center">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
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
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                  <div className="blog-post-time d-flex align-items-center">
                    <i className="fas fa-clock"></i>
                    <h6 className="ms-2" style={{ marginTop: "6px" }}>
                      18th May, 2022
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-banner-btn-content mt-4">
              <div className="blog-read-more-btn">
                <a className="read-now-link" href="#">
                  Read Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-lower">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                <div className="left-blog-content">
                  <div className="left-latest-blog-title">
                    <h6 className="title">Latest Blog</h6>
                    <h4 className="sub-title">Don&apos;t miss daily news</h4>
                  </div>
                  <div className="left-latest-blog-content">
                    {/* Blog Post Item */}
                    <div className="list-post fl-wrap">
                      <div className="row align-items-center">
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
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
                                    <i
                                      className="fas fa-long-arrow-right p-3 rounded-circle"
                                      style={{
                                        backgroundColor: "#73042b",
                                        color: "white",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 mt-2 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                          <div className="list-post-content">
                            <div className="post-categories-marker">
                              <a className="marker" href="#">
                                Business
                              </a>
                            </div>
                            <div className="list-post-title">
                              <a href="#" className="post-title">
                                Goodwin must Break Clarkson hold on Flags
                              </a>
                            </div>
                            <div className="blog-banner-lower-content">
                              <div className="row align-items-center">
                                <div className="col-12">
                                  <div className="blog-post-time d-flex align-items-center">
                                    <i className="fas fa-clock"></i>
                                    <h6
                                      className="ms-2"
                                      style={{ marginTop: "6px" }}
                                    >
                                      18th May, 2022
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="blog-banner-sub-title mt-3">
                              <p style={{ fontSize: "14px" }}>
                                Nulla a nisl non sem pretium pellentesque. Sed a
                                mauris scelerisque, volutpat nibh et. Sed a
                                mauris scelerisque, volutpat nibh et
                              </p>
                            </div>
                            <div className="blog-banner-lower-content">
                              <div className="row align-items-center">
                                <div className="col-6">
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
                                <div className="col-6 text-end">
                                  <div className="blog-post-time">
                                    <i className="fas fa-comments-alt"></i>
                                    <span className="ms-1 me-2">56</span>
                                    <i className="fas fa-eye"></i>
                                    <span className="ms-1 me-2">56</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Blog Post Item */}
                    <div className="list-post fl-wrap">
                      <div className="row align-items-center">
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
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
                                    <i
                                      className="fas fa-long-arrow-right p-3 rounded-circle"
                                      style={{
                                        backgroundColor: "#73042b",
                                        color: "white",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 mt-2 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                          <div className="list-post-content">
                            <div className="post-categories-marker">
                              <a className="marker" href="#">
                                Business
                              </a>
                            </div>
                            <div className="list-post-title">
                              <a href="#" className="post-title">
                                Goodwin must Break Clarkson hold on Flags
                              </a>
                            </div>
                            <div className="blog-banner-lower-content">
                              <div className="row align-items-center">
                                <div className="col-12">
                                  <div className="blog-post-time d-flex align-items-center">
                                    <i className="fas fa-clock"></i>
                                    <h6
                                      className="ms-2"
                                      style={{ marginTop: "6px" }}
                                    >
                                      18th May, 2022
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="blog-banner-sub-title mt-3">
                              <p style={{ fontSize: "14px" }}>
                                Nulla a nisl non sem pretium pellentesque. Sed a
                                mauris scelerisque, volutpat nibh et. Sed a
                                mauris scelerisque, volutpat nibh et
                              </p>
                            </div>
                            <div className="blog-banner-lower-content">
                              <div className="row align-items-center">
                                <div className="col-6">
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
                                <div className="col-6 text-end">
                                  <div className="blog-post-time">
                                    <i className="fas fa-comments-alt"></i>
                                    <span className="ms-1 me-2">56</span>
                                    <i className="fas fa-eye"></i>
                                    <span className="ms-1 me-2">56</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Blog Post Item */}
                    <div className="list-post fl-wrap">
                      <div className="row align-items-center">
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
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
                                    <i
                                      className="fas fa-long-arrow-right p-3 rounded-circle"
                                      style={{
                                        backgroundColor: "#73042b",
                                        color: "white",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 mt-2 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                          <div className="list-post-content">
                            <div className="post-categories-marker">
                              <a className="marker" href="#">
                                Business
                              </a>
                            </div>
                            <div className="list-post-title">
                              <a href="#" className="post-title">
                                Goodwin must Break Clarkson hold on Flags
                              </a>
                            </div>
                            <div className="blog-banner-lower-content">
                              <div className="row align-items-center">
                                <div className="col-12">
                                  <div className="blog-post-time d-flex align-items-center">
                                    <i className="fas fa-clock"></i>
                                    <h6
                                      className="ms-2"
                                      style={{ marginTop: "6px" }}
                                    >
                                      18th May, 2022
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="blog-banner-sub-title mt-3">
                              <p style={{ fontSize: "14px" }}>
                                Nulla a nisl non sem pretium pellentesque. Sed a
                                mauris scelerisque, volutpat nibh et. Sed a
                                mauris scelerisque, volutpat nibh et
                              </p>
                            </div>
                            <div className="blog-banner-lower-content">
                              <div className="row align-items-center">
                                <div className="col-6">
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
                                <div className="col-6 text-end">
                                  <div className="blog-post-time">
                                    <i className="fas fa-comments-alt"></i>
                                    <span className="ms-1 me-2">56</span>
                                    <i className="fas fa-eye"></i>
                                    <span className="ms-1 me-2">56</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Blog Post Item */}
                    <div className="list-post fl-wrap">
                      <div className="row align-items-center">
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
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
                                    <i
                                      className="fas fa-long-arrow-right p-3 rounded-circle"
                                      style={{
                                        backgroundColor: "#73042b",
                                        color: "white",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 mt-2 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                          <div className="list-post-content">
                            <div className="post-categories-marker">
                              <a className="marker" href="#">
                                Business
                              </a>
                            </div>
                            <div className="list-post-title">
                              <a href="#" className="post-title">
                                Goodwin must Break Clarkson hold on Flags
                              </a>
                            </div>
                            <div className="blog-banner-lower-content">
                              <div className="row align-items-center">
                                <div className="col-12">
                                  <div className="blog-post-time d-flex align-items-center">
                                    <i className="fas fa-clock"></i>
                                    <h6
                                      className="ms-2"
                                      style={{ marginTop: "6px" }}
                                    >
                                      18th May, 2022
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="blog-banner-sub-title mt-3">
                              <p style={{ fontSize: "14px" }}>
                                Nulla a nisl non sem pretium pellentesque. Sed a
                                mauris scelerisque, volutpat nibh et. Sed a
                                mauris scelerisque, volutpat nibh et
                              </p>
                            </div>
                            <div className="blog-banner-lower-content">
                              <div className="row align-items-center">
                                <div className="col-6">
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
                                <div className="col-6 text-end">
                                  <div className="blog-post-time">
                                    <i className="fas fa-comments-alt"></i>
                                    <span className="ms-1 me-2">56</span>
                                    <i className="fas fa-eye"></i>
                                    <span className="ms-1 me-2">56</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Blog Post Item */}
                    <div className="list-post fl-wrap">
                      <div className="row align-items-center">
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
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
                                    <i
                                      className="fas fa-long-arrow-right p-3 rounded-circle"
                                      style={{
                                        backgroundColor: "#73042b",
                                        color: "white",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 mt-2 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                          <div className="list-post-content">
                            <div className="post-categories-marker">
                              <a className="marker" href="#">
                                Business
                              </a>
                            </div>
                            <div className="list-post-title">
                              <a href="#" className="post-title">
                                Goodwin must Break Clarkson hold on Flags
                              </a>
                            </div>
                            <div className="blog-banner-lower-content">
                              <div className="row align-items-center">
                                <div className="col-12">
                                  <div className="blog-post-time d-flex align-items-center">
                                    <i className="fas fa-clock"></i>
                                    <h6
                                      className="ms-2"
                                      style={{ marginTop: "6px" }}
                                    >
                                      18th May, 2022
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="blog-banner-sub-title mt-3">
                              <p style={{ fontSize: "14px" }}>
                                Nulla a nisl non sem pretium pellentesque. Sed a
                                mauris scelerisque, volutpat nibh et. Sed a
                                mauris scelerisque, volutpat nibh et
                              </p>
                            </div>
                            <div className="blog-banner-lower-content">
                              <div className="row align-items-center">
                                <div className="col-6">
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
                                <div className="col-6 text-end">
                                  <div className="blog-post-time">
                                    <i className="fas fa-comments-alt"></i>
                                    <span className="ms-1 me-2">56</span>
                                    <i className="fas fa-eye"></i>
                                    <span className="ms-1 me-2">56</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="left-blog-banner">
                    <Image
                      src="/assets/images/background_image_03.jpg"
                      height={300}
                      width={1000}
                      alt="Blog Ad Banner For Rims"
                    />
                  </div>
                  <div className="left-blog-read-more">
                    <div className="d-grid gap-2">
                      <button className="btn btn-dark">Read More</button>
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

export default Index;
