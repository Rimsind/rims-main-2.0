import Image from "next/image";
import Link from "next/link";
const PremiumNursingHome = () => {
  return (
    <>
      <div className="hospital_details_nav sticky-top">
        <div className="bg-dark text-light">
          <ul className="list-unstyled d-flex justify-content-center align-items-center pt-4 pb-4 mb-0">
            <li className="me-2 border-end border-light pe-2">
              <a className="fs-6 text-light" href="#aboutUs">
                About Us
              </a>
            </li>
            <li className="me-2 border-end border-light pe-2">
              <a className="fs-6 text-light" href="#whyChooseUs">
                Why Choose Us
              </a>
            </li>
            <li className="me-2 border-end border-light pe-2">
              <a className="fs-6 text-light" href="#whatWeOffer">
                What We Offer
              </a>
            </li>
            <li className="me-2 border-end border-light pe-2">
              <a className="fs-6 text-light" href="#doctor">
                Doctors
              </a>
            </li>
            <li className="me-2 border-end border-light pe-2">
              <a className="fs-6 text-light" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="me-2">
              <a className="fs-6 text-light" href="#visit">
                Visit Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="hospital-details-main text"
        id="aboutUs"
        style={{
          background: "url(/user_assets/img/slider/slider-4.jpg)",
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p className="hospital-details-main-name border-bottom border-3 border-warning">
          Haldia Mediland Nursing Home
        </p>
        <div className="hospital-details-main-content">
          <p className="hospital-details-sub-name bg-custom-info px-2 py-2">
            24x7 Ready for Help
          </p>
        </div>
      </div>
      <div className="nursing-home-info">
        <div className="container">
          <div className="row bg-custom-nursing-home rounded align-items-center">
            <div className="col-5 text-center border-end border-light border-2">
              <div className="nursing-home-details-main-sub-heading">
                <p className="text-light fs-5">
                  Email ID: info.haldianursing-home@rims.com
                </p>
              </div>
            </div>
            <div className="col-3 text-center border-end border-light border-2">
              <div className="nursing-home-details-main-sub-heading">
                <p className=" text-light fs-5 ">Phone No: 987-456-321</p>
              </div>
            </div>
            <div className="col-2 text-center border-end border-light border-2">
              <div className="nursing-home-details-main-sub-heading">
                <p className="text-light fs-5 ">Opening: 10:00 A.M</p>
              </div>
            </div>
            <div className="col-2 text-center">
              <div className="nursing-home-details-main-sub-heading">
                <p className=" text-light fs-5 ">Closing: 10:00 P.M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nursing-home-service">
        <div className="container">
          <div className="nursing-service-heading text-center">
            <p>+ What We Do +</p>
            <p className="nursing-service-heading-name">
              We Take Care For Humanity <br /> Not For Money
            </p>
          </div>
          <div className="nursing-service-icon">
            <div className="row align-items-center">
              <div className="col">
                <div className="nursing-service-icon-item">
                  <i className="far fa-heartbeat"></i>
                </div>
                <div className="nursing-service-icon-con">
                  <p className="nursing-service-icon-con-name">Health Care</p>
                </div>
              </div>
              <div className="col">
                <div className="nursing-service-icon-item">
                  <i className="far fa-utensils-alt"></i>
                </div>
                <div className="nursing-service-icon-con">
                  <p className="nursing-service-icon-con-name">Food Care</p>
                </div>
              </div>
              <div className="col">
                <div className="nursing-service-icon-item">
                  <i className="far fa-utensils-alt"></i>
                </div>
                <div className="nursing-service-icon-con">
                  <p className="nursing-service-icon-con-name">Physical Care</p>
                </div>
              </div>
              <div className="col">
                <div className="nursing-service-icon-item">
                  <i className="far fa-chess"></i>
                </div>
                <div className="nursing-service-icon-con">
                  <p className="nursing-service-icon-con-name">Health Care</p>
                </div>
              </div>
              <div className="col">
                <div className="nursing-service-icon-item">
                  <i className="far fa-pizza-slice"></i>
                </div>
                <div className="nursing-service-icon-con">
                  <p className="nursing-service-icon-con-name">Health Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hospital-about my-4 mb-4" id="whyChooseUs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="why_choose_heading">
                <p className="fs-6">+ Learn About Nursing Home</p>
                <p className="why-choose-heading-main-head">Learn About Us</p>
              </div>
              <div className="why_choose_para mt-3 ms-2">
                <div>
                  <div className="row">
                    <div className="col-3">
                      <p className="bg-info py-4 px-5 text-light text-center">
                        <span className="fs-1">25</span>
                        <span className="fs-5">Years</span>
                      </p>
                    </div>
                    <div className="col-9">
                      <p className="fs-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis quis dignissim sapien. Nunc quam tellus, rhoncus
                        nec orci ac, auctor bibendum lacus. Nunc quam tellus,
                        rhoncus nec orci ac, auctor bibendum lacus.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis quis
                        dignissim sapien.
                      </p>
                    </div>
                  </div>
                  Nunc quam tellus, rhoncus nec orci ac, auctor bibendum lacus.
                  Nunc quam tellus, rhoncus nec orci ac, auctor bibendum lacus.
                  Nunc quam tellus, rhoncus nec orci ac, auctor bibendum lacus.
                  Nunc quam tellus, rhoncus nec orci ac, auctor bibendum lacus.
                </div>
              </div>
            </div>
            <div className="col-6">
              <Image
                alt="Hospital About Image"
                src="/user_assets/img/features/feature-01.jpg"
                width="700px"
                height="500px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hospital-facilities mt-5" id="whatWeOffer">
        <div className="container">
          <div className="hospital-facilities-content">
            <div className="row align-items-start">
              <div className="col-6">
                <div className="hospital-facilities-left-content">
                  <Image
                    src="/user_assets/img/img-01.jpg"
                    alt="Hospital Facilities Image"
                    height="500px"
                    width="700px"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="hospital-facilities-right-center">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div
                        className="hospital-details-item"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "138px",
                          marginBottom: "20px",
                          background: "url(/user_assets/img/blog-1.jpg)",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="main_heading">
                          <p className="main_heading-para">Regular Bed</p>
                          <div className="d-flex align-items-center">
                            <p className="total_para me-3 text-success">
                              Total -
                              <span className="text-dark total_para_count">
                                20
                              </span>
                            </p>
                            <p className="avlble_para text-danger">
                              Available -
                              <span className="text-dark total_para_count">
                                15
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        className="hospital-details-item"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "138px",
                          marginBottom: "20px",
                          background: "url(/user_assets/img/blog-1.jpg)",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="main_heading">
                          <p className="main_heading-para">ICU Bed</p>
                          <div className="d-flex align-items-center">
                            <p className="total_para me-3 text-success">
                              Total -
                              <span className="text-dark total_para_count">
                                20
                              </span>
                            </p>
                            <p className="avlble_para text-danger">
                              Available -
                              <span className="text-dark total_para_count">
                                15
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div
                        className="hospital-details-item"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "138px",
                          marginBottom: "20px",
                          background: "url(/user_assets/img/blog-1.jpg)",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="main_heading">
                          <p className="main_heading-para">Regular Ambulance</p>
                          <div className="d-flex align-items-center">
                            <p className="total_para me-3 text-success">
                              Total -
                              <span className="text-dark total_para_count">
                                20
                              </span>
                            </p>
                            <p className="avlble_para text-danger">
                              Available -
                              <span className="text-dark total_para_count">
                                15
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        className="hospital-details-item"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "138px",
                          marginBottom: "20px",
                          background: "url(/user_assets/img/blog-1.jpg)",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="main_heading">
                          <p className="main_heading-para">ICU Ambulance</p>
                          <div className="d-flex align-items-center">
                            <p className="total_para me-3 text-success">
                              Total -
                              <span className="text-dark total_para_count">
                                20
                              </span>
                            </p>
                            <p className="avlble_para text-danger">
                              Available -
                              <span className="text-dark total_para_count">
                                15
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div
                        className="hospital-details-item"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "138px",
                          marginBottom: "20px",
                          background: "url(/user_assets/img/blog-1.jpg)",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="main_heading">
                          <p className="main_heading-para">Operation Theater</p>
                          <div className="d-flex align-items-center">
                            <p className="total_para me-3 text-success">
                              Total -
                              <span className="text-dark total_para_count">
                                20
                              </span>
                            </p>
                            <p className="avlble_para text-danger">
                              Available -
                              <span className="text-dark total_para_count">
                                15
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        className="hospital-details-item"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "138px",
                          marginBottom: "20px",
                          background: "url(/user_assets/img/blog-1.jpg)",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="main_heading">
                          <p className="main_heading-para">Burn Care Unit</p>
                          <div className="d-flex align-items-center">
                            <p className="total_para me-3 text-success">
                              Total -
                              <span className="text-dark total_para_count">
                                20
                              </span>
                            </p>
                            <p className="avlble_para text-danger">
                              Available -
                              <span className="text-dark total_para_count">
                                15
                              </span>
                            </p>
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
      <div className="poly_details_doctor" id="doctor">
        <div className="container">
          <p className="fs-4 fw-bold text-center border-bottom border-2 border-info">
            Our Doctor List
          </p>
          <div className="row">
            <div className="col-3">
              <div className="profile-widget me-3">
                <div className="doc-img">
                  <a href="doctor-profile.html">
                    <Image
                      height={280}
                      width={320}
                      className="img-fluid"
                      alt="User Image"
                      src="/assets/images/doctors/doctor-thumb-01.jpg"
                    />
                  </a>
                </div>
                <div className="pro-content">
                  <h3 className="title">
                    <a href="doctor-profile.html">Dr. Prasenjit Kamila</a>
                    <i className="fas fa-check-circle verified"></i>
                  </h3>
                  <p className="speciality">
                    25 years experience, Consultant Medicine
                  </p>

                  <ul className="available-info">
                    <li>
                      <i className="fas fa-certificate "></i> MBBS
                    </li>
                    <li>
                      <Image
                        height="20"
                        width="20"
                        src="/assets/images/specialities/specialities-01.png"
                        alt=""
                      />
                      Rehabilation
                    </li>
                    <li>
                      <i className="far fa-money-bill-alt text-primary"></i> ₹
                      200 - ₹500
                      <i
                        className="fas fa-info-circle"
                        data-bs-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div className="row row-sm">
                    <div className="col-12">
                      <Link href="#">
                        <a className="btn book-btn">View Profile</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="profile-widget me-3">
                <div className="doc-img">
                  <a href="doctor-profile.html">
                    <Image
                      height={280}
                      width={320}
                      className="img-fluid"
                      alt="User Image"
                      src="/assets/images/doctors/doctor-thumb-01.jpg"
                    />
                  </a>
                </div>
                <div className="pro-content">
                  <h3 className="title">
                    <a href="doctor-profile.html">Dr. Prasenjit Kamila</a>
                    <i className="fas fa-check-circle verified"></i>
                  </h3>
                  <p className="speciality">
                    25 years experience, Consultant Medicine
                  </p>

                  <ul className="available-info">
                    <li>
                      <i className="fas fa-certificate "></i> MBBS
                    </li>
                    <li>
                      <Image
                        height="20"
                        width="20"
                        src="/assets/images/specialities/specialities-01.png"
                        alt=""
                      />
                      Rehabilation
                    </li>
                    <li>
                      <i className="far fa-money-bill-alt text-primary"></i> ₹
                      200 - ₹500
                      <i
                        className="fas fa-info-circle"
                        data-bs-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div className="row row-sm">
                    <div className="col-12">
                      <Link href="#">
                        <a className="btn book-btn">View Profile</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="profile-widget me-3">
                <div className="doc-img">
                  <a href="doctor-profile.html">
                    <Image
                      height={280}
                      width={320}
                      className="img-fluid"
                      alt="User Image"
                      src="/assets/images/doctors/doctor-thumb-01.jpg"
                    />
                  </a>
                </div>
                <div className="pro-content">
                  <h3 className="title">
                    <a href="doctor-profile.html">Dr. Prasenjit Kamila</a>
                    <i className="fas fa-check-circle verified"></i>
                  </h3>
                  <p className="speciality">
                    25 years experience, Consultant Medicine
                  </p>

                  <ul className="available-info">
                    <li>
                      <i className="fas fa-certificate "></i> MBBS
                    </li>
                    <li>
                      <Image
                        height="20"
                        width="20"
                        src="/assets/images/specialities/specialities-01.png"
                        alt=""
                      />
                      Rehabilation
                    </li>
                    <li>
                      <i className="far fa-money-bill-alt text-primary"></i> ₹
                      200 - ₹500
                      <i
                        className="fas fa-info-circle"
                        data-bs-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div className="row row-sm">
                    <div className="col-12">
                      <Link href="#">
                        <a className="btn book-btn">View Profile</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="profile-widget me-3">
                <div className="doc-img">
                  <a href="doctor-profile.html">
                    <Image
                      height={280}
                      width={320}
                      className="img-fluid"
                      alt="User Image"
                      src="/assets/images/doctors/doctor-thumb-01.jpg"
                    />
                  </a>
                </div>
                <div className="pro-content">
                  <h3 className="title">
                    <a href="doctor-profile.html">Dr. Prasenjit Kamila</a>
                    <i className="fas fa-check-circle verified"></i>
                  </h3>
                  <p className="speciality">
                    25 years experience, Consultant Medicine
                  </p>

                  <ul className="available-info">
                    <li>
                      <i className="fas fa-certificate "></i> MBBS
                    </li>
                    <li>
                      <Image
                        height="20"
                        width="20"
                        src="/assets/images/specialities/specialities-01.png"
                        alt=""
                      />
                      Rehabilation
                    </li>
                    <li>
                      <i className="far fa-money-bill-alt text-primary"></i> ₹
                      200 - ₹500
                      <i
                        className="fas fa-info-circle"
                        data-bs-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div className="row row-sm">
                    <div className="col-12">
                      <Link href="#">
                        <a className="btn book-btn">View Profile</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="poly_details_banner">
        <Image
          src="/user_assets/img/doctorbanner.jpg"
          alt="Polyclinic Banner"
          width="2000"
          height="400"
        />
      </div>
      <div
        className="poly_details_testimonial"
        id="testimonial"
        style={{
          background: "url(/user_assets/img/testimonial-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
          backgroundAttachment: "scroll",
          padding: "50px 0",
        }}
      >
        <div className="container">
          <div className="poly_details_heading pb-4 border-bottom border-2">
            <p className="fs-4 text-center">
              What our <strong>patients say?</strong>
            </p>
            <p className="fs-6 text-center">
              Do you want to tell us your experience or suggest an improvement
              in our services?
              <br /> Just send us your feedback today via a form on our Contact
              page.
            </p>
          </div>
          <div className="poly_details_testimonial_content mt-5">
            <div className="row">
              <div className="col-4 d-flex align-items-start">
                <div className="icon-item me-3">
                  <i className="far fa-quote-right p-3 fs-1"></i>
                </div>
                <div className="icon-con">
                  <p className="fs-6">
                    I&apos;m very thankful to Polyclinic! Web accessibility
                    refers to the inclusive practice of removing barriers that
                    prevent interaction with, or access to websites, by people
                    with disabilities.
                  </p>
                  <div className="poly_details_con_name">
                    <p className="fs-5">- Prasenjit Kamila</p>
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex align-items-start">
                <div className="icon-item me-3">
                  <i className="far fa-quote-right p-3 fs-1"></i>
                </div>
                <div className="icon-con">
                  <p className="fs-6">
                    I&apos;m very thankful to Polyclinic! Web accessibility
                    refers to the inclusive practice of removing barriers that
                    prevent interaction with, or access to websites, by people
                    with disabilities.
                  </p>
                  <div className="poly_details_con_name">
                    <p className="fs-5">- Prasenjit Kamila</p>
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex align-items-start">
                <div className="icon-item me-3">
                  <i className="far fa-quote-right p-3 fs-1"></i>
                </div>
                <div className="icon-con">
                  <p className="fs-6">
                    I&apos;m very thankful to Polyclinic! Web accessibility
                    refers to the inclusive practice of removing barriers that
                    prevent interaction with, or access to websites, by people
                    with disabilities.
                  </p>
                  <div className="poly_details_con_name">
                    <p className="fs-5">- Prasenjit Kamila</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hospital-con-info" id="visit">
        <div className="container">
          <div className="hospital-contact-heading mb-3 text-center">
            <p className=" fs-4 fw-bold">Address & Location</p>
          </div>
          <div className="row align-items-start">
            <div className="col-4">
              <p className="hospital-name">
                Haldia International Chor Hospital
              </p>
              <p className="hospital-email">
                Email ID:
                <span className="hospital-con-info-span">
                  info.haldiachorhospital@rims.com
                </span>
              </p>
              <p className="hospital-phone">
                Phone No:
                <span className="hospital-con-info-span">987-456-321</span>
              </p>
              <p className="hospital-open">
                Opening Time:
                <span className="hospital-con-info-span">10:00 A.M.</span>
              </p>
              <p className="hospital-close">
                Closing Time:
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
            </div>
            <div className="col-4">
              <p className="hospital-street">
                Street Address:
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
              <p className="hospital-landmark">
                Landmark:
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
              <p className="hospital-city">
                City: <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
              <p className="hospital-state">
                State:
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
              <p className="hospital-country">
                Country:
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
            </div>
            <div className="col-4">
              <p className="hospital-pincode">
                Pincode:
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
              <p className="hospital-desc">
                Description:
                <span className="hospital-con-info-span">
                  Nunc quam tellus, rhoncus nec orci ac, auctor bibendum lacus.
                  Nunc quam tellus, rhoncus nec orci ac, auctor bibendum lacus.
                  Nunc quam tellus, rhoncus nec orci ac, auctor bibendum lacus.
                  Nunc quam tellus, rhoncus nec orci ac, auctor bibendum lacus.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map d-flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.716346058072!2d-95.5565430855612!3d29.872453233633234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cfe4516785ed%3A0x774974592a609121!2s54%20Northwest%20Fwy%20%23558%2C%20Houston%2C%20TX%2077040%2C%20USA!5e0!3m2!1sen!2sin!4v1631855334452!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default PremiumNursingHome;
