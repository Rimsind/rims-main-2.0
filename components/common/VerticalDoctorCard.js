import Image from "next/image";
import Link from "next/link";
const VerticalDoctorCard = ({ data }) => {
  return (
    <>
      <div className="profile-widget me-3">
        <div className="doc-img">
          <a href="doctor-profile.html">
            <Image
              height={280}
              width={320}
              className="img-fluid"
              alt="User Image"
              src={data?.image?.url || "/assets/images/profile.png"}
            />
          </a>
        </div>
        <div className="pro-content">
          <h3 className="title">
            <a href="doctor-profile.html">
              Dr. {data?.firstName} {data?.lastName}
            </a>
            <i className="fas fa-check-circle verified"></i>
          </h3>
          <p className="speciality">
            {data?.experienceInYrs} years experience, Consultant{" "}
            {data?.specialty?.name}
          </p>

          <ul className="available-info">
            <li>
              <i className="fas fa-certificate"></i> {data?.qualification}
            </li>
            <li>
              <i className="fas fa-user-tag"></i> {data?.specialty?.name}
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i> ₹{data?.feeScale?.min} -
              ₹{data?.feeScale?.max}
              <i
                className="fas fa-info-circle"
                data-bs-toggle="tooltip"
                title="Lorem Ipsum"
              ></i>
            </li>
          </ul>
          <div className="row row-sm">
            <div className="col-12">
              <Link href={`/doctors/${data?.id}`}>
                <a className="btn book-btn">View Profile</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalDoctorCard;
