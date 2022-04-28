import { BreadCrums } from "components/common/index";
import Image from "next/image";
import Link from "next/link";

const DetailsNew = () => {
  return (
    <section className="section-details">
      <BreadCrums title="Home / Doctor Details" title1="Doctor Details" />
      <div className="container-fluid">
        <div className="content">
          <div className="row align-items-start">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-2">
              <div className="card">
                <div className="card-body">
                  <div className="doctor-left-profile">
                    <div
                      className="doctor-left-profile-inner"
                      style={{
                        background: "url(/user_assets/img/bg-doc-bnnr.jpg)",
                        position: "relative",
                        padding: "4rem",
                      }}
                    >
                      <div
                        className="doc-lft-prof"
                        style={{
                          position: "absolute",
                          marginTop: "-50px",
                          marginLeft: "-40px",
                        }}
                      >
                        <Image
                          height="140"
                          width="140"
                          src={"/assets/images/alternate/doctor-male.png"}
                          style={{
                            height: "15rem",
                            background: "#0b6ea5",
                            padding: "10px",
                          }}
                          className="img-fluid border border-1 rounded-circle bg-light"
                          alt="User Image"
                        />
                      </div>
                    </div>
                    <div className="doc-lft-innr-dtls mt-5">
                      <div className="doc-lft-innr-titl">
                        <h6>
                          <span className="fs-5 fw-bold text-info">
                            Panskura Polyclinics
                          </span>
                        </h6>
                      </div>
                      <div className="doc-lft-innr-sb-titl">
                        <h6 className="fs-6 text-muted fst-italic">
                          Panskura, West Bengal
                        </h6>
                        <h6 className="fs-6 text-muted mt-4">
                          <span className="text-info">
                            <i className="fas fa-clock"></i>
                          </span>
                          <span className="text-secondary ms-2">
                            10:00 A.M to 8:00 P.M
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h6 className="fs-6 fw-bold">Features</h6>
                </div>
                <div className="card-body">
                  <div className="doc-left-innr-qal">
                    <div className="clinic-services">
                      <span className="me-1 mb-1 ms-1">Pharmacy</span>
                      <span className="me-1 mb-1 ms-1">Pathology</span>
                      <span className="me-1 mb-1 ms-1">Ambulance</span>
                      <span className="me-1 mb-1 ms-1">Dental Clinic</span>
                      <span className="me-1 mb-1 ms-1">Eye Clinic</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h6 className="fs-6 fw-bold">Contact Us</h6>
                </div>
                <div className="card-body">
                  <div className="doc-left-innr-qal">
                    <span
                      className="text-info"
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        fontStyle: "italic",
                      }}
                    >
                      Address
                    </span>
                    <h6 className="fs-6 text-secondary">
                      Baidibar,Panskura,West Bengal, Pin -721634
                    </h6>
                    <span
                      className="text-info"
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        fontStyle: "italic",
                      }}
                    >
                      Email ID
                    </span>
                    <h6 className="fs-6 text-secondary">
                      demopolyclinic2022@email.com
                    </h6>
                    <span
                      className="text-info"
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        fontStyle: "italic",
                      }}
                    >
                      Phone No.
                    </span>
                    <h6 className="fs-6 text-secondary">+91 8101817796</h6>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h6 className="fs-6 fw-bold">Google Map</h6>
                </div>
                <div className="card-body">
                  <div className="doc-left-innr-qal">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59162.79901960036!2d88.05869855798426!3d22.062026721715704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0cb35788045%3A0x58f6d5c69f0de04d!2sHaldia%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1642855030171!5m2!1sen!2sin"
                      width="200"
                      height="200"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-10">
              <div className="row align-items-start">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
              <div className="row align-items-start">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
              <div className="row align-items-start">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                  <div className="profile-widget me-3">
                    <div className="doc-img">
                      <Link href="#">
                        <a>
                          <Image
                            height={280}
                            width={320}
                            className="img-fluid"
                            alt="User Image"
                            src={"/assets/images/alternate/alt-user.png"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link href="#">
                          <a>Dr. Samir Barman</a>
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">Rehabilation</p>

                      <ul className="available-info">
                        <li>
                          <i className="fas fa-certificate "></i>
                          Experience : 25 years
                        </li>
                        <li>
                          <Image
                            height="20"
                            width="20"
                            src="/assets/images/alternate/alt-specialty.png"
                            alt=""
                          />
                          Medicine
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt text-primary"></i>
                          ₹ 200 - ₹500
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
              <div className="user-main-pagination mb-4">
                <div className="list-pagination">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-10"></div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-2">
                      {/* <div className="row">
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start">
                            {startValue >= 5 ? (
                              <button
                                className="btn btn-primary"
                                onClick={previousValue}
                              >
                                <i className="fal fa-long-arrow-left me-2"></i>
                                Prev
                              </button>
                            ) : (
                              <button className="btn btn-primary" disabled>
                                <i className="fal fa-long-arrow-left me-2"></i>
                                Prev
                              </button>
                            )}
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-end">
                            {doctors?.length - endValue >= 0 ? (
                              <button
                                className="btn btn-primary"
                                onClick={nextData}
                              >
                                Next
                                <i className="fal fa-long-arrow-right ms-2"></i>
                              </button>
                            ) : (
                              <button className="btn btn-primary" disabled>
                                Next
                                <i className="fal fa-long-arrow-right ms-2"></i>
                              </button>
                            )}
                          </div>
                        </div> */}
                      <div className="row">
                        {/* <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start">
                          <button className="btn btn-primary" disabled>
                            <i className="fal fa-long-arrow-left me-2"></i>
                            Prev
                          </button>
                        </div> */}
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" class="btn btn-primary">
                            Prev
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary disabled"
                          >
                            1
                          </button>
                          <button type="button" class="btn btn-primary">
                            Next
                          </button>
                        </div>
                        {/* <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-end">
                          <button className="btn btn-primary" disabled>
                            Next
                            <i className="fal fa-long-arrow-right ms-2"></i>
                          </button>
                        </div> */}
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
  );
};

export default DetailsNew;
