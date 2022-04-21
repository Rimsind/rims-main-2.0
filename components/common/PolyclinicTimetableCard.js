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
      <div className="doctor-widget p-4 shadow-sm">
        <div className="doc-info-left">
          <div className="doctor-img">
            <Link href={`/doctors/${data?.id}`}>
              <a>
                {data?.gender === "Male" ? (
                  <Image
                    height="150"
                    width="150"
                    src={
                      data?.image?.url ||
                      "/assets/images/alternate/doctor-male.png"
                    }
                    className="img-fluid"
                    alt="User Image"
                  />
                ) : (
                  <Image
                    height="150"
                    width="150"
                    src={
                      data?.image?.url ||
                      "/assets/images/alternate/doctor-female.png"
                    }
                    className="img-fluid"
                    alt="User Image"
                  />
                )}
              </a>
            </Link>
          </div>
          <div className="doc-info-cont">
            <Link href={`/doctors/${data?.id}`}>
              <a>
                {" "}
                <h4 className="doc-name">
                  Dr. {data?.firstName} {data?.lastName}
                </h4>
              </a>
            </Link>
            <p className="doc-speciality">
              {data?.experienceInYrs} years experience, Consultant{" "}
              {data?.specialty}
            </p>
            <h5 className="doc-department">
              <Image
                src={
                  specialty?.image?.url ||
                  "/assets/images/alternate/alt-specialty/png"
                }
                height="20"
                width="20"
                alt=""
              />
              {"  "}
              {specialty?.name}
            </h5>
            <i className="far fa-envelope mb-3"></i> {data?.email}
            <div className="clinic-services">
              <span>
                <i className="fab fa-skype"></i> Skype Id: {data?.skype_id}
              </span>
            </div>
          </div>
        </div>
        {/* <div className="doc-info-center ms-auto">
          <div className="widget business-widget">
            <div className="widget-content">
              <div className="listing-hours">
                <div className="listing-day"></div>
                <div className="listing-day">
                  <div className="day">Monday</div>
                  <div className="time-items">
                    <span className="time">07:00 AM - 09:00 PM</span>
                  </div>
                </div>
                <div className="listing-day">
                  <div className="day">Tuesday</div>
                  <div className="time-items">
                    <span className="time">07:00 AM - 09:00 PM</span>
                  </div>
                </div>
                <div className="listing-day">
                  <div className="day">Wednesday</div>
                  <div className="time-items">
                    <span className="time">07:00 AM - 09:00 PM</span>
                  </div>
                </div>
                <div className="listing-day">
                  <div className="day">Thursday</div>
                  <div className="time-items">
                    <span className="time">07:00 AM - 09:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="doc-info-right">
          <div className="clini-infos">
            <ul>
              <li>
                <i className="fas fa-certificate"></i> hii
                {data?.qualification}
              </li>

              <li>
                <i className="fas fa-map-marker-alt"></i> {data?.address?.city},{" "}
                {data?.address?.state}
              </li>
              <li>
                <i className="far fa-money-bill-alt"></i> ₹300 - ₹1000
                <i
                  className="fas fa-info-circle"
                  data-bs-toggle="tooltip"
                  title="Lorem Ipsum"
                ></i>
              </li>
            </ul>
          </div>
          <div className="clinic-booking">
            <Link href={`/doctors/details?id=${data?.id}`}>
              <a className="apt-btn">View Profile</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolyclinicTimetableCard;
