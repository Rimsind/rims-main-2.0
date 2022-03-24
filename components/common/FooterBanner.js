import Image from "next/image";
import Link from "next/link";
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
              <div className="col-md-4">
                <div className="cta-img text-end">
                  <Image
                    className="img-fluid"
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
