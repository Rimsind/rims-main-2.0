import { BreadCrums } from "components/common/index";
import Image from "next/image";
import Link from "next/link";

const Details2 = () => {
  return (
    <>
      <BreadCrums
        title="Home / Polyclinic Details"
        title1="Polyclinic Details"
      />
      <div className="polyclinic_details_nav sticky-top">
        <div className="bg-custom-poly-nav text-light">
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
              <a className="fs-6 text-light" href="#services">
                Services
              </a>
            </li>
            <li className="me-2 border-end border-light pe-2">
              <a className="fs-6 text-light" href="#doctor">
                Doctors
              </a>
            </li>
            <li className="me-2 border-end border-light pe-2">
              <a className="fs-6 text-light" href="#testimonial">
                Testimonial
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
        className="polyclinic-details-main text"
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
        <p className="polyclinic-details-main-name">
          Kathi Super-Specialist Polyclinic
        </p>
        <p className="polyclinic-details-main-sub-name border-bottom border-3 border-warning">
          Kathi, West Bengal
        </p>
      </div>
      <div
        className="polyclinic_details_info d-flex align-items-center"
        id="aboutUs"
        style={{
          background: "url(/user_assets/img/poly-about-item.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundAttachment: "scroll",
          borderColor: "#caccce",
          borderTopWidth: "1px",
          borderBottomWidth: "1px",
          backgroundColor: "#000428",
          color: "#fafcfe",
          borderColor: "#3a3c4e",
        }}
      >
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-6">
              <div className="left-poly-item">
                <p className="d-flex flex-column fs-2 text-end me-5">
                  <span>
                    <strong>Polyclinic</strong> is suitable for wide
                  </span>{" "}
                  <span>variety of business websites</span>
                </p>
              </div>
            </div>
            <div className="col-6 border-start border-1 border-info">
              <div className="right-poly-item ms-5">
                <p className="d-flex flex-column fs-6">
                  Suitable for any medical business related websites: from small
                  clinics to hospitals, veterinary, dentist, plastic surgery,
                  chiropractic clinics, rehabs, laboratory, spa, pharmacy,
                  ambulance, beauty salons and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="poly_details_about" id="whyChooseUs">
        <div className="container">
          <div className="row">
            <div className="col-6 bg-left-custom-clr">
              <p className="fs-4">Find a Doctor</p>
              <div className="poly_details_find_doctor_form">
                <form>
                  <div className="row align-items-baseline">
                    <div className="col-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Doctor"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Position</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="mb-3">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Specialities</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <button className="btn btn-dark">Search Doctor</button>
                    </div>
                  </div>
                </form>
              </div>
              <p className="fs-6 fst-italic mt-3">
                Enter specialist&apos;s name into search field and/or narrow
                down the search results by selecting job position and specialty.
              </p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6 bg-mddl-custom-clr">
                  <p className="fs-4">Who Are We?</p>
                  <p className="fs-6 pt-3">
                    EASY TO USE COMPLETE MEDICAL SOLUTION.
                  </p>
                  <p className="fs-6 pt-3">
                    Accessibility matters especially with medical institutions,
                    and that&apos;s why the Polyclinic theme is fully
                    accessibility ready!
                  </p>
                </div>
                <div className="col-6 bg-right-custom-clr">
                  <p className="fs-4">Visiting Hours</p>
                  <p className="fs-6 pt-3 lh-1">
                    <i className="fad fa-clock me-2"></i>
                    <span className="me-2 border-bottom border-light">
                      Mon – Fri
                    </span>{" "}
                    <span className="border-bottom border-light">
                      6:30 – 18:00
                    </span>
                  </p>
                  <p className="fs-6 pt-3 lh-1">
                    <i className="fad fa-clock me-2"></i>
                    <span className="me-2 border-bottom border-light">
                      Weekend
                    </span>{" "}
                    <span className="border-bottom border-light">
                      6:30 – 18:00
                    </span>
                  </p>
                  <p className="fs-6 pt-3 lh-1">
                    <i className="fad fa-clock me-2"></i>
                    <span className="me-2 border-bottom border-light">
                      Holiday
                    </span>{" "}
                    <span className="border-bottom border-light">
                      6:30 – 18:00
                    </span>
                  </p>
                  <p className="fs-6 pt-3">
                    <i className="fad fa-mobile me-2"></i>
                    <span className="me-2 ">911-123-456 for nonstop</span>{" "}
                    <span>emergency service</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="poly_details_why_choose">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="left_why_choose_item">
                <p className="fs-4">
                  Thank you for visiting <strong>Polyclinic</strong>!
                </p>
                <p className="fs-6">
                  WE ARE A CLINIC THAT HAS BEEN IN BUSINESS FOR 15 YEARS
                  PROVIDING TOP LOCAL MEDICAL CARE.
                </p>
                <p className="fs-6">
                  We have 7 treatment rooms and a comfortable waiting area with
                  receptionist. We treat patients of all ages. Web accessibility
                  refers to the inclusive practice of removing barriers that
                  prevent interaction with, or access to websites, by people
                  with disabilities.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <Image
                    src="/user_assets/img/lab-image.jpg"
                    alt="Image"
                    width={500}
                    height={450}
                  />
                </div>
                <div className="col-6 d-flex flex-column">
                  <Image
                    src="/user_assets/img/lab-image.jpg"
                    alt="Image"
                    width={500}
                    height={450}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="poly_details_advantage" id="services">
        <div className="container">
          <div className="row">
            <div className="col-4 bg-col-first p-4">
              <p className="fs-3">
                Take advantage of the <br />
                wide range of services
              </p>
              <p className="fs-6">
                If you aren’t a patient, would like to become one and live
                within our locality, please contact us or pop in to see us.
              </p>
            </div>
            <div className="col-4 d-flex bg-col-poly-second">
              <div className="icon-item me-3">
                <i className="fad fa-plus fs-1 p-3 bg-poly-icon text-light rounded"></i>
              </div>
              <div className="icon-con">
                <p className="fs-3">Cancer Care</p>
                <p className="fs-6">
                  The physicians and staff are committed to providing
                  convenient, high-quality, compassionate care.
                </p>
              </div>
            </div>
            <div className="col-4 d-flex bg-col-poly-third">
              <div className="icon-item me-3">
                <i className="fad fa-plus fs-1 p-3 bg-poly-icon text-light rounded"></i>
              </div>
              <div className="icon-con">
                <p className="fs-3">Cancer Care</p>
                <p className="fs-6">
                  The physicians and staff are committed to providing
                  convenient, high-quality, compassionate care.
                </p>
              </div>
            </div>
            <div className="col-4 d-flex bg-col-poly-four">
              <div className="icon-item me-3">
                <i className="fad fa-plus fs-1 p-3 bg-poly-icon text-light rounded"></i>
              </div>
              <div className="icon-con">
                <p className="fs-3">Cancer Care</p>
                <p className="fs-6">
                  The physicians and staff are committed to providing
                  convenient, high-quality, compassionate care.
                </p>
              </div>
            </div>
            <div className="col-4 d-flex bg-col-poly-fifth">
              <div className="icon-item me-3">
                <i className="fad fa-plus fs-1 p-3 bg-poly-icon text-light rounded"></i>
              </div>
              <div className="icon-con">
                <p className="fs-3">Cancer Care</p>
                <p className="fs-6">
                  The physicians and staff are committed to providing
                  convenient, high-quality, compassionate care.
                </p>
              </div>
            </div>
            <div className="col-4 d-flex bg-col-poly-sixth">
              <div className="icon-item me-3">
                <i className="fad fa-plus fs-1 p-3 bg-poly-icon text-light rounded"></i>
              </div>
              <div className="icon-con">
                <p className="fs-3">Cancer Care</p>
                <p className="fs-6">
                  The physicians and staff are committed to providing
                  convenient, high-quality, compassionate care.
                </p>
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
                      />{" "}
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
                      />{" "}
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
                      />{" "}
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
                      />{" "}
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
                Phone No:{" "}
                <span className="hospital-con-info-span">987-456-321</span>
              </p>
              <p className="hospital-open">
                Opening Time:{" "}
                <span className="hospital-con-info-span">10:00 A.M.</span>
              </p>
              <p className="hospital-close">
                Closing Time:{" "}
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
            </div>
            <div className="col-4">
              <p className="hospital-street">
                Street Address:{" "}
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
              <p className="hospital-landmark">
                Landmark:{" "}
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
              <p className="hospital-city">
                City: <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
              <p className="hospital-state">
                State:{" "}
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
              <p className="hospital-country">
                Country:{" "}
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
            </div>
            <div className="col-4">
              <p className="hospital-pincode">
                Pincode:{" "}
                <span className="hospital-con-info-span">10:00 P.M.</span>
              </p>
              <p className="hospital-desc">
                Description:{" "}
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

export default Details2;
