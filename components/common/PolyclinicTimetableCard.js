import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
const PolyclinicTimetableCard = ({ schedule }) => {
  const { data: specialty } = useSWR(
    `${apiUrl}/specialties/${schedule?.specialty}`,
    fetcher
  );
  return (
    <>
      <div className="doctor-widget p-4 shadow-sm">
        <div className="doc-info-left">
          <div className="doctor-img">
            <Link href={`/doctors/${schedule?.id}`}>
              <a>
                {schedule?.gender === "Male" ? (
                  <Image
                    height="150"
                    width="150"
                    src={
                      schedule?.image?.url ||
                      "/assets/images/assets/doctor-male.png"
                    }
                    className="img-fluid"
                    alt="User Image"
                  />
                ) : (
                  <Image
                    height="150"
                    width="150"
                    src={
                      schedule?.image?.url ||
                      "/assets/images/assets/doctor-female.png"
                    }
                    className="img-fluid"
                    alt="User Image"
                  />
                )}
              </a>
            </Link>
          </div>
          <div className="doc-info-cont">
            <Link href={`/doctors/${schedule?.id}`}>
              <a>
                {" "}
                <h4 className="doc-name">
                  Dr. {schedule?.firstName} {schedule?.lastName}
                </h4>
              </a>
            </Link>
            <p className="doc-speciality">
              {schedule?.experienceInYrs} years experience, Consultant{" "}
              {schedule?.specialty}
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
            <i className="far fa-envelope mb-3"></i> {schedule?.email}
            <div className="clinic-services">
              <span>
                <i className="fab fa-skype"></i> Skype Id: {schedule?.skype_id}
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
                {schedule?.qualification}
              </li>

              <li>
                <i className="fas fa-map-marker-alt"></i>{" "}
                {schedule?.address?.city}, {schedule?.address?.state}
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
            <Link href={`/doctors/${schedule?.id}`}>
              <a className="apt-btn">View Profile</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolyclinicTimetableCard;
