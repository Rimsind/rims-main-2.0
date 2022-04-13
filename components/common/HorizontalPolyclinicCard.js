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
                <Link href={`/${props.link}/details?id=${data?.id}`}>
                  <a>
                    <Image
                      height="130"
                      width="150"
                      src={
                        data?.image?.url ||
                        "/assets/images/alternate/alt-hospital.png"
                      }
                      className="img-fluid"
                      alt="User Image"
                    />
                  </a>
                </Link>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <Link href={`/${props.link}/details?id=${data?.id}`}>
                    <a>{data?.name}</a>
                  </Link>
                </h4>
                <p className="doc-speciality">
                  {data?.city}
                  {data?.address?.city}, {data?.state}
                  {data?.address?.state}
                </p>
                <i className="far fa-envelope"></i> {data?.email}
                <div className="clinic-details"></div>
                <div className="clinic-services">
                  {data?.features?.map((items, index) => (
                    <span key={index}>{items?.feature_name}</span>
                  ))}
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
                    {data?.workingHours?.Start} to {data?.workingHours?.end}
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {data?.street_address}
                    {data?.address?.street_address}, {data?.city}
                    {data?.address?.city}
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link href={`/${props.link}/details?id=${data?.id}`}>
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
