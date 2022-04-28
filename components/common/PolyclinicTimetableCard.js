import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
const PolyclinicTimetableCard = ({ data }) => {
  const { data: specialty } = useSWR(
    `${apiUrl}/specialties/${data?.specialty}`,
    fetcher
  );

  return (
    <>
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
                  src={
                    data?.image?.url || "/assets/images/alternate/alt-user.png"
                  }
                />
              </a>
            </Link>
          </div>
          <div className="pro-content">
            <h3 className="title">
              <Link href="#">
                <a>
                  Dr. {data?.firstName} {data?.lastName}
                </a>
              </Link>
              <i className="fas fa-check-circle verified"></i>
            </h3>
            <p className="speciality">{data?.qualification}</p>

            <ul className="available-info">
              <li>
                <i className="fas fa-certificate "></i>
                Experience : {data?.experienceInYrs} years
              </li>
              <li>
                <Image
                  height="20"
                  width="20"
                  src="/assets/images/alternate/alt-specialty.png"
                  alt=""
                />
                {specialty?.name}
              </li>
              <li>
                <i className="far fa-money-bill-alt text-primary"></i>₹
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
      </div>
    </>
  );
};

export default PolyclinicTimetableCard;
