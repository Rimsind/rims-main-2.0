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
          <span className="doc-qualification">{data?.qualification}</span>
          <ul className="available-info">
            <li>
              <div className="row align-items-baseline">
                <div className="col-12">
                  <Image
                    height="20"
                    width="20"
                    src="/assets/images/doctor-symbol.png"
                    alt=""
                  />
                  {data?.specialties?.map((items, index) => (
                    <span key={index}>{items?.name} </span>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <div className="row align-items-baseline">
                <div className="col-5">
                  <span className="fw-bold me-1 text-info">Exp:</span>
                  <span>{data?.experienceInYrs} Yrs.</span>
                </div>{" "}
                <div className="col-7">
                  <i className="far fa-money-bill-alt text-primary"></i> ₹{" "}
                  {data?.feeScale?.min} - ₹{data?.feeScale?.max}
                  <i
                    className="fas fa-info-circle"
                    data-bs-toggle="tooltip"
                    title="Lorem Ipsum"
                  ></i>
                </div>
              </div>
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
