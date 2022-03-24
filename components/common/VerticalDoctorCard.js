import Image from "next/image";
import Link from "next/link";
const VerticalDoctorCard = ({ data }) => {
  return (
    <>
      <div className="profile-widget me-3">
        <div className="doc-img">
          <Link href={`/doctors/${data?.id}`}>
            <a>
              {data?.gender === "Male" && (
                <Image
                  height={280}
                  width={320}
                  className="img-fluid"
                  alt="User Image"
                  src={
                    data?.image?.url ||
                    "/assets/images/alternate/doctor-male.png"
                  }
                />
              )}
              {data?.gender === "Female" && (
                <Image
                  height={280}
                  width={320}
                  className="img-fluid"
                  alt="User Image"
                  src={
                    data?.image?.url ||
                    "/assets/images/alternate/doctor-female.png"
                  }
                />
              )}
              {data?.gender === "" ||
                (data?.gender === null && (
                  <Image
                    height={280}
                    width={320}
                    className="img-fluid"
                    alt="User Image"
                    src={
                      data?.image?.url ||
                      "/assets/images/alternate/alt-user.png"
                    }
                  />
                ))}
            </a>
          </Link>
        </div>
        <div className="pro-content">
          <h3 className="title">
            <Link href={`/doctors/${data?.id}`}>
              <a>
                Dr. {data?.firstName} {data?.lastName}
              </a>
            </Link>
            <i className="fas fa-check-circle verified"></i>
          </h3>
          <p className="speciality">
            {data?.experienceInYrs} years experience, Consultant{" "}
            {data?.specialty?.name}
          </p>

          <ul className="available-info">
            <li>
              <i className="fas fa-certificate "></i> {data?.qualification}
            </li>
            <li>
              <Image
                height="20"
                width="20"
                src={
                  data?.specialty?.image?.url ||
                  "/assets/images/alternate/alt-specialty.png"
                }
                alt=""
              />{" "}
              {data?.specialty?.name}
            </li>
            <li>
              <i className="far fa-money-bill-alt text-primary"></i> ₹
              {data?.feeScale?.min} - ₹{data?.feeScale?.max}
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
