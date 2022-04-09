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
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
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
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
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
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
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
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
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
      <section className="section-about-company mb-5">
        <div className="container">
          <div className="about-company">
            <div className="row align-items-center">
              <div className="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
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

              <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
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
              as patient does not have to call the doctor's office for the
              appointment, medical supplies, doctor,s does not have to wait for
              the patient, patient or a family member does not have to wait in
              pharmacy for medicine so there are many benefits we have put
              together which we will elaborate on later in this brochure.
            </p>
          </div>
        </div>
      </section>
      <section className="section-about-mission-vision my-3">
        <div className="container">
          <div className="about-mission-vision">
            <div className="row align-items-center">
              <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <div className="about-company-inner-right-content">
                  <Image
                    src="/assets/images/hero_image_02.jpg"
                    height="600"
                    width="500"
                    alt="About Image"
                  />
                </div>
              </div>
              <div className="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                <div className="about-mission-vision-inner-left-content mb-5">
                  <p className="about-mission-vision-sub-heading">
                    We care for the whole person
                  </p>
                  <p className="about-mission-vision-heading">
                    Preventing heart disease is possible, by recognizing your
                    symptoms and risk <br />
                    factors early.
                  </p>
                </div>
                <div className="row">
                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="about-mission-vision-icon mb-3">
                      <i className="far fa-crosshairs fs-2"></i>
                    </div>
                    <div className="about-mission-vision-icon-content">
                      <p className="about-mission-vision-icon-title">Mission</p>
                      <p className="about-mission-vision-icon-para">
                        Our mission is to provide the best quality healthcare
                        affordable to the 1.3 billion citizens of our nation.
                        Our mantra is to provide our users with the most
                        accurate & comprehensive information empowering them to
                        make better healthcare decisions.
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="about-mission-vision-icon mb-3">
                      <i className="far fa-eye fs-2"></i>
                    </div>
                    <div className="about-mission-vision-icon-content">
                      <p className="about-mission-vision-icon-title">Vision</p>
                      <p className="about-mission-vision-icon-para">
                        We work 24×7 with a vision to connect the entire medical
                        fraternity all over the globe and bring their knowledge
                        and resources on a single platform to ensure that the
                        people receive the best Healthcare information and
                        resources. healthcare decisions.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-4">
                    <div className="about-mission-vision-icon">
                      <i className="far fa-crosshairs fs-2"></i>
                    </div>
                    <div className="about-mission-vision-icon-content">
                      <p className="about-mission-vision-icon-title">
                        24/7 Ambulance Service{" "}
                      </p>
                      <p className="about-mission-vision-icon-para">
                        Ambulance services are measured on the time it takes
                        from receiving a 00000 call to the vehicle arriving at
                        the patient’s location. It should take 8 minutes for the
                        ambulance to arrive if the call is life threatening or
                        an emergency.
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="about-mission-vision-icon">
                      <i className="far fa-crosshairs fs-2"></i>
                    </div>
                    <div className="about-mission-vision-icon-content">
                      <p className="about-mission-vision-icon-title">
                        Latest Technology{" "}
                      </p>
                      <p className="about-mission-vision-icon-para">
                        Ambulance services are measured on the time it takes
                        from receiving a 00000 call to the vehicle arriving at
                        the patient’s location. It should take 8 minutes for the
                        ambulance to arrive if the call is life threatening or
                        an emergency.
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="about-mission-vision-icon">
                      <i className="far fa-crosshairs fs-2"></i>
                    </div>
                    <div className="about-mission-vision-icon-content">
                      <p className="about-mission-vision-icon-title">
                        Online Doctor Treatments
                      </p>
                      <p className="about-mission-vision-icon-para">
                        Ambulance services are measured on the time it takes
                        from receiving a 00000 call to the vehicle arriving at
                        the patient’s location. It should take 8 minutes for the
                        ambulance to arrive if the call is life threatening or
                        an emergency.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-about-banner-info"
        style={{
          background: "url(/assets/images/background_image_03.jpg)",
          height: "500px",
          backgroundSize: "cover",
          margin: "25px 25px 35px 25px",
        }}
      >
        <div className="container">
          <div className="about-banner-content" style={{ paddingTop: "70px" }}>
            <div className="about-banner-content-heading">
              <p className="about-banner-content-heading-title">
                We are a<br /> multidisciplinary
                <br /> team of experts
              </p>
            </div>
            <div className="about-banner-content-sub-heading">
              <p className="about-banner-content-sub-heading-title">
                Delivering world class medical care
              </p>
            </div>
            <div className="about-banner-content-para">
              <p className="about-banner-content-para-content">
                Our Hospital provide the highest quality care to improve the
                health of our entire community through innovation,
                collaboration, service excellence, diversity and a commitment to
                patient safety
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-about-faq-service mb-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="about-faq">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Rims IT Services & Solutions
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        The main objective of this segment is to digitalize the
                        Entire healthcare system and provide quality healthcare
                        information & services to society.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Rims Hospital Services & Solutions
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        RIMS provides a high-efficiency hospital management
                        system embedded with numerous modern tools and
                        technology. Our system is capable of reducing the manual
                        workload to a great extent creating a chain of
                        uninterrupted workflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Rims Polyclinic Services & Solutions
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        DEMO RIMS provides a high-efficiency hospital management
                        system embedded with numerous modern tools and
                        technology. Our system is capable of reducing the manual
                        workload to a great extent creating a chain of
                        uninterrupted workflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Rims Diagnostic Services & Solutions
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        DEMO RIMS provides a high-efficiency hospital management
                        system embedded with numerous modern tools and
                        technology. Our system is capable of reducing the manual
                        workload to a great extent creating a chain of
                        uninterrupted workflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Rims Nursing Services
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        This segment is precisely designed for research and
                        development on the existing nursing home management
                        system and revolutionize them with the tools,
                        technology, and resources of the 21st century. It will
                        enhance the Work efficiency of the organization.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Rims Pharmacy Services & Solutions
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        RIMS pharmacy segments run 24x7 to fulfill our customer
                        need through our multiple outlets and also Buy them
                        through our online store.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Rims Social Services
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We acknowledge our responsibility towards our society.
                        To accomplish these responsibilities RIMS carryout
                        multiple CSR projects in the hope to make a small
                        contribution to our society.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        Rims Long Time Care Services & Solutions
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        DEMO We acknowledge our responsibility towards our
                        society. To accomplish these responsibilities RIMS
                        carryout multiple CSR projects in the hope to make a
                        small contribution to our society.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="company-services mb-4">
                <div className="row align-items-start">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <div className="company-service-icon">
                      <i
                        className="fas fa-ambulance py-4 px-4 rounded fs-3 text-light"
                        style={{ background: "#02c9b8" }}
                      ></i>
                    </div>
                  </div>
                  <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <p className="company-service-title fs-5 fw-bold">
                      24/7 Ambulance Service
                    </p>
                    <p className="company-service-para">
                      Ambulance services are measured on the time it takes from
                      receiving a 00000 call to the vehicle arriving at the
                      patient’s location. It should take 8 minutes for the
                      ambulance to arrive if the call is life threatening or an
                      emergency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="company-services mb-4">
                <div className="row align-items-start">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <div className="company-service-icon">
                      <i
                        className="fab fa-medrt py-4 px-4 rounded fs-3 text-light"
                        style={{ background: "#02c9b8" }}
                      ></i>
                    </div>
                  </div>
                  <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <p className="company-service-title fs-5 fw-bold">
                      Latest Technology
                    </p>
                    <p className="company-service-para">
                      Ambulance services are measured on the time it takes from
                      receiving a 00000 call to the vehicle arriving at the
                      patient’s location. It should take 8 minutes for the
                      ambulance to arrive if the call is life threatening or an
                      emergency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="company-services mb-4">
                <div className="row align-items-start">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <div className="company-service-icon">
                      <i
                        className="fas fa-laptop-medical py-4 px-4 rounded fs-3 text-light"
                        style={{ background: "#02c9b8" }}
                      ></i>
                    </div>
                  </div>
                  <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <p className="company-service-title fs-5 fw-bold">
                      Online Doctor Treatments
                    </p>
                    <p className="company-service-para">
                      Ambulance services are measured on the time it takes from
                      receiving a 00000 call to the vehicle arriving at the
                      patient’s location. It should take 8 minutes for the
                      ambulance to arrive if the call is life threatening or an
                      emergency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
