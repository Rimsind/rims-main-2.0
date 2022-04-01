import Image from "next/image";

const About = () => {
  return (
    <>
      <section
        className="section-about"
        style={{
          background: "url(/assets/images/hero_about.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container-fluid">
          <div
            className="about-inner-content d-flex justify-content-center align-items-center"
            style={{ height: "500px" }}
          >
            <div className="about-hero-content">
              <div className="about-banner-title text-center">
                <p className="about-title">
                  We Are World-Leading
                  <br />
                  <span className="about-title-span">Cardiologists</span>
                </p>
                <p className="about-sub-title">
                  Specializing in the diagnosis, treatment
                  <br /> and monitoring of heart disorders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-about-feature pt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-inner-icon">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div className="card-inner-text">
                    <p className="card-inner-para">
                      Interventional Cardiology <br />
                      and Cardic Surgery
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-inner-icon">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div className="card-inner-text">
                    <p className="card-inner-para">
                      Interventional Cardiology <br />
                      and Cardic Surgery
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-inner-icon">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div className="card-inner-text">
                    <p className="card-inner-para">
                      Interventional Cardiology <br />
                      and Cardic Surgery
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-inner-icon">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div className="card-inner-text">
                    <p className="card-inner-para">
                      Interventional Cardiology <br />
                      and Cardic Surgery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-about-company">
        <div className="container">
          <div className="about-company">
            <div className="row align-items-center">
              <div className="col-7">
                <div className="about-company-inner-left-content">
                  <p className="about-company-heading">
                    Comprehensive range of <br />
                    capabilities
                  </p>
                  <p className="about-company-sub-heading">
                    Delivering world class cardiology care
                  </p>
                  <p className="about-company-first-para">
                    <span className="first-para">
                      Our company is the company aiming to integrate the entire
                      health care system in one single platform and the ultimate
                      focus of the software design is such a way that the
                      complete health care needs of a person are resolved and
                      high level of satisfaction of using this software those
                      who will be using so that they can give the best care with
                      the highest level of outcome. We will be presenting our
                      main objectives through our brochure so that every one of
                      you exactly know what this company is going to provide
                      that will benefit to our people and overall, to our
                      society so that we all can leave in a healthier lifestyle
                      without putting a burden on others.
                    </span>
                    <br />
                    <br />
                    Through our innovative software design, our patient will
                    know whether he or she has any medical problems and for that
                    whether there is immediate medical attention is required or
                    medical attention is necessary. Our innovative design will
                    help our patient to find an appropriate physician in their
                    location or if it is not available it will find out in other
                    location and help to make their appointments easy through
                    our mobile app system. Our innovation will help healthcare
                    providers manage patients and practices.
                    <br />
                    <br />
                  </p>
                </div>
              </div>

              <div className="col-5">
                <div className="about-company-inner-right-content">
                  <Image
                    src="/assets/images/about-company-inner-image.jpg"
                    height="900"
                    width="1000"
                    alt="About Image"
                  />
                </div>
              </div>
            </div>
            <p className="about-company-first-para">
              Our Medical software is a category of tools used in medical
              settings that collect data on individual patient health for
              establishing a correct diagnosis so that proper care can be
              provided to the patient. Our innovative design will our clients to
              have accurate financial information regarding the care they are
              receiving so that there is no confusing between the provider and
              the customer or patient. There is much other innovative design in
              place in this software where we have tried to ensure that and
              provider and the customer get their maximum benefit from it such
              as patient does not have to call the doctor’s office for the
              appointment, medical supplies, doctor,s does not have to wait for
              the patient, patient or a family member does not have to wait in
              pharmacy for medicine so there are many benefits we have put
              together which we will elaborate on later in this brochure.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
