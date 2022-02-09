import Image from "next/image";
const VerticalDoctorCard = () => {
  return (
    <>
      <div className="profile-widget me-3">
        <div className="doc-img">
          <a href="doctor-profile.html">
            <Image
              height={220}
              width={320}
              className="img-fluid"
              alt="User Image"
              src="/assets/images/doctors/doctor-01.jpg"
            />
          </a>
        </div>
        <div className="pro-content">
          <h3 className="title">
            <a href="doctor-profile.html">Dr. Samir Barman</a>
            <i className="fas fa-check-circle verified"></i>
          </h3>
          <p className="speciality">
            25 years experience, Consultant Rehabilitation
          </p>

          <ul className="available-info">
            <li>
              <i className="fas fa-certificate"></i> MBBS
            </li>
            <li>
              <i className="fas fa-user-tag"></i> Rehabilitation
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i> $300 - $1000
              <i
                className="fas fa-info-circle"
                data-bs-toggle="tooltip"
                title="Lorem Ipsum"
              ></i>
            </li>
          </ul>
          <div className="row row-sm">
            <div className="col-12">
              <a href="doctor-profile.html" className="btn book-btn">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalDoctorCard;
