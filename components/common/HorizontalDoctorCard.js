import Image from "next/image";
import Link from "next/link";
const HorizontalDoctorCard = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img">
                <Link href={`/doctors/${data?.id}`}>
                  <a>
                    <Image
                      height="150"
                      width="150"
                      src={data?.image?.url || "/assets/images/profile.png"}
                      className="img-fluid"
                      alt="User Image"
                    />
                  </a>
                </Link>
              </div>
              <div className="doc-info-cont">
                <Link href={`/doctors/${data?.id}`}>
                  <a>
                    <h4 className="doc-name">
                      Dr. {data?.firstName} {data?.lastName}
                    </h4>
                  </a>
                </Link>
                <p className="doc-speciality">
                  {data?.experienceInYrs} years experience, Consultant{" "}
                  {data?.specialty?.name}
                </p>
                <h5 className="doc-department">
                  <Image
                    height="20"
                    width="20"
                    src={
                      data?.specialty?.image?.url ||
                      "/assets/images/profile.png"
                    }
                    alt=""
                  />{" "}
                  {data?.specialty?.name}
                </h5>
                <i className="far fa-envelope mb-3 me-2"></i>
                {data?.email}
                <div className="clinic-services">
                  <span>
                    <i className="fab fa-skype"></i> Skype Id: {data?.skype_id}
                  </span>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="fas fa-certificate"></i>
                    {data?.qualification}
                  </li>

                  <li>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {data?.address?.city}, {data?.address?.state}
                  </li>
                  <li>
                    <i className="far fa-money-bill-alt"></i> ₹
                    {data?.feeScale?.min} - ₹{data?.feeScale?.max}
                    <i
                      className="fas fa-info-circle"
                      data-bs-toggle="tooltip"
                      title="Lorem Ipsum"
                    ></i>
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link href={`/doctors/${data?.id}`}>
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
