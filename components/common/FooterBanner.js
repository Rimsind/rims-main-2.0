import Image from "next/image";
import Link from "next/link";
const FooterBanner = () => {
  return (
    <>
      <section className="section section-cta">
        <div className="container">
          <div className="section-cta-inner">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
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
                <div className="book  mb-0 mb-sm-0 mb-md-5 mb-lg-0 mb-xl-0 mb-xxl-0">
                  <Link href="/doctors">
                    <a
                      className="btn text-light py-3 px-4"
                      style={{ backgroundColor: "#0de0fe" }}
                    >
                      Book Now
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="cta-img mb-2">
                  <Image
                    className="img-fluid pb-4 pb-sm-4 pb-md-0 pb-lg-0 pb-xl-0 pb-xxl-0 pt-4 pt-sm-4 pt-md-0 pt-lg-0 pt-xl-0 pt-xxl-0"
                    src="/user_assets/img/gif/cta-right.gif"
                    height={400}
                    width={400}
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
