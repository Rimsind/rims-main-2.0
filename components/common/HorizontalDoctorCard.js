import Image from "next/image";
import Link from "next/link";
const HorizontalDoctorCard = ({ doctorData }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img">
                <a href="doctor-profile.html">
                  <Image
                    height="150"
                    width="150"
                    src={doctorData?.image?.url || "/assets/images/profile.png"}
                    className="img-fluid"
                    alt="User Image"
                  />
                </a>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  Dr. {doctorData?.firstName} {doctorData?.lastName}
                </h4>
                <p className="doc-speciality">
                  {doctorData?.experienceInYrs} years experience, Consultant{" "}
                  {doctorData?.specialty?.name}
                </p>
                <h5 className="doc-department">
                  <img src="/assets/images/badge.png"></img>
                  {doctorData?.specialty?.name}
                </h5>
                <i className="far fa-envelope mb-3 me-2"></i>
                {doctorData?.email}
                <div className="clinic-services">
                  <span>
                    <i className="fab fa-skype"></i> Skype Id:{" "}
                    {doctorData?.skype_id}
                  </span>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="fas fa-certificate"></i>
                    {doctorData?.qualification}
                  </li>

                  <li>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {doctorData?.address?.city}, {doctorData?.address?.state}
                  </li>
                  <li>
                    <i className="far fa-money-bill-alt"></i> ₹
                    {doctorData?.feeScale?.min} - ₹{doctorData?.feeScale?.max}
                    <i
                      className="fas fa-info-circle"
                      data-bs-toggle="tooltip"
                      title="Lorem Ipsum"
                    ></i>
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link href={`/doctors/${doctorData?.id}`}>
                  <a className="view-pro-btn">View Profile</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalDoctorCard;
