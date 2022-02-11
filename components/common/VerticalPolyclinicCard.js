import Image from "next/image";
import Link from "next/link";
const VerticalPolyclinicCard = ({ data }) => {
  return (
    <>
      <div className="item me-4">
        <div className="our-doctors-card">
          <div className="doctors-header">
            <a href="#">
              <Image
                height={200}
                width={300}
                src={data?.coverImage?.url}
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="doctors-body">
            <a href="doctor-profile.html">
              <h4>{data?.name}</h4>
            </a>
            <p>Dental Filling, Whitning</p>
            <div className="location d-flex">
              <p>
                <i className="fas fa-map-marker-alt"></i> {data?.city},{" "}
                {data?.state}
              </p>
              <p className="ms-auto">
                <i className="far fa-clock"></i> 10:00 A.M to 8:00 P.M
              </p>
            </div>
            <div className="row row-sm">
              <div className="col-12">
                <Link href={`/polyclinics/${data?.id}`}>
                  <a className="btn view-btn" tabIndex="0">
                    View Profile
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalPolyclinicCard;
