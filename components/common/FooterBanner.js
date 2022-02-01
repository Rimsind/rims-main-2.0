import Image from "next/image";
const FooterBanner = () => {
  return (
    <>
      <section className="section section-cta">
        <div className="container">
          <div className="section-cta-inner">
            <div className="row">
              <div className="col-md-8">
                <div className="section-heading">
                  <p className="mb-3">Introducing Prime Doctors</p>
                  <h2>
                    Hassel-free appoinments
                    <br />
                    with Prime Doctors
                  </h2>
                </div>
                <div className="section-content d-flex justify-content-between">
                  <p>
                    <i className="far fa-times-circle"></i> Reasonable Wait Time
                  </p>
                  <p>
                    <i className="far fa-times-circle"></i> Fixed Consultation
                    Fee
                  </p>
                  <p>
                    <i className="far fa-times-circle"></i> Consultation With
                    The Preferred Doctor
                  </p>
                </div>
                <div className="book">
                  <button type="button" className="btn btn-primary">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cta-img">
                  <Image
                    height="430"
                    width="550"
                    src="/assets/images/doc-slide-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterBanner;
