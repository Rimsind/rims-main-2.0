import Image from "next/image";
const VerifyCard = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p className="fs-6 fw-bold">Doctor Details</p>
              <div className="booking-doc-info d-flex mb-3">
                <a href="doctor-profile.html" className="booking-doc-img">
                  <Image
                    height="100"
                    width="100"
                    src="/assets/images/doctors/doctor-thumb-01.jpg"
                    alt="User Image"
                  />
                </a>
                <div className="booking-info">
                  <h6 className="fs-6 fw-bold">
                    <a href="doctor-profile.html">Dr. Bappa Kamila</a>
                  </h6>
                  <h6 className="text-muted fs-6">MBBS</h6>
                  <h5 className="doc-department fs-6">
                    <i className="fas fa-user-tag"></i>
                    Heart
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p className="fs-6 fw-bold">Clinic Details</p>
              <div className="booking-doc-info d-flex">
                <a href="doctor-profile.html" className="booking-doc-img">
                  <Image
                    height="100"
                    width="100"
                    src="/assets/images/card_image.jpg"
                    alt="User Image"
                  />
                </a>
                <div className="booking-info">
                  <h6 className="fs-6 fw-bold">
                    <a href="doctor-profile.html">Mediland Nursing Home</a>
                  </h6>
                  <p className="text-muted fs-6">
                    HPL Link Road, Haldia, West Bengal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyCard;
