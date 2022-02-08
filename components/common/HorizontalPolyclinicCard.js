import Image from "next/image";
import Link from "next/link";
const HorizontalPolyclinicCard = (props) => {
  const { data } = props;

  return (
    <>
      {" "}
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img poly-img">
                <a href="doctor-profile.html">
                  <Image
                    height="130"
                    width="145"
                    src={
                      data?.coverImage?.url ||
                      data?.profile_image?.url ||
                      "/assets/images/polyclinic.jpg"
                    }
                    className="img-fluid"
                    alt="User Image"
                  />
                </a>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <a href="doctor-profile.html">{data?.name}</a>
                </h4>
                <p className="doc-speciality">
                  {data?.city}, {data?.state}
                </p>
                <i className="far fa-envelope"></i> {data?.email}
                <div className="clinic-details"></div>
                <div className="clinic-services">
                  <span>Dental Fillings</span>
                  <span> Whitneing</span>
                  <span> Whitneing</span>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="fas fa-mobile"></i> {data?.phone}
                  </li>
                  <li>
                    <i className="far fa-clock"></i>
                    10:00 A.M to 8:00 P.M
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {data?.street_address}, {data?.city}
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link href={`/${props.link}/${data?.id}`}>
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

export default HorizontalPolyclinicCard;
