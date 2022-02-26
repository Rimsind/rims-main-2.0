import {
  FooterBanner,
  SpecialityBlock,
  VerticalDoctorCard,
  FeatureIcon,
  FacilityCard,
  VerticalPolyclinicCard,
} from "components/common/";

import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
import Link from "next/link";
import { SliderCardLoader, SpecialtyLoader } from "components/Loaders";
const Index = () => {
  const { data: specialties } = useSWR(`${apiUrl}/specialties`, fetcher);
  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);
  const { data: polyclinics } = useSWR(`${apiUrl}/polyclinics`, fetcher);
  const { data: nursingHomes } = useSWR(`${apiUrl}/nursing-homes`, fetcher);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 1 },
    { width: 768, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <main className="main">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/images/main.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/main.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/main.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>

        <section className="section section-about-filter">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                <div className="left-about">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3 mt-md-3 mt-lg-0 mt-xl-0 mt-xxl-0">
                      <p className="fs-2">
                        Safety of your data is our
                        <br />
                        <span className="fw-bold">top priority.</span>
                      </p>
                      <ul className="fa-ul">
                        <li className="lh-lg">
                          <span className="fa-li">
                            <i className="fas fa-check text-primary"></i>
                          </span>
                          Multi-level security checks
                        </li>
                        <li className="lh-lg">
                          <span className="fa-li">
                            <i className="fas fa-check text-primary"></i>
                          </span>
                          Multiple data backups
                        </li>
                        <li className="lh-lg">
                          <span className="fa-li">
                            <i className="fas fa-check text-primary"></i>
                          </span>
                          Stringent data privacy policies
                        </li>
                      </ul>
                      <div className="about-btn-new mb-3">
                        <button className="btn btn-primary" type="button">
                          Read More
                        </button>
                      </div>
                      <div className="secure-batch mt-5">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="secure-batch-items text-center">
                              <Image
                                className="img-fluid"
                                src="/user_assets/img/security_2.png"
                                height={50}
                                width={50}
                              />
                              <p>
                                256-bit
                                <br />
                                encryption
                              </p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="secure-batch-items text-center">
                              <Image
                                className="img-fluid"
                                src="/user_assets/img/security_3.png"
                                height={50}
                                width={50}
                              />
                              <p>
                                ISO 27001
                                <br />
                                certified
                              </p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="secure-batch-items text-center">
                              <Image
                                className="img-fluid"
                                src="/user_assets/img/security_4.png"
                                height={50}
                                width={50}
                              />
                              <p>
                                HIPAA
                                <br />
                                data centers
                              </p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="secure-batch-items text-center">
                              <Image
                                className="img-fluid"
                                src="/user_assets/img/security_5.png"
                                height={50}
                                width={50}
                              />
                              <p>
                                DSCI
                                <br />
                                member
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3 mt-md-3 mt-lg-3 mt-xl-3 mt-xxl-5">
                      <div className="secure-batch-items text-center">
                        <Image
                          className="img-fluid"
                          src="/user_assets/img/security-seal.png"
                          height={300}
                          width={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-3 mt-md-3 mt-lg-0 mt-xl-0 mt-xxl-0">
                <div className="right-about">
                  <div className="about-filter">
                    <div className="search-doctor">
                      <div className="search-area">
                        <h2 className="text-center fs-5 mb-3">
                          Search Doctor, Make an Appointment
                        </h2>
                        <form className="search-input">
                          <div className="row">
                            <div className="col-12 col-md-12 mb-3">
                              <div className="form-group">
                                <select className="form-select form-control">
                                  <option>Select State</option>
                                  <option>West Bengal</option>
                                  <option>Delhi</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-md-12 mb-3">
                              <div className="form-group">
                                <select className="form-select form-control">
                                  <option>Select City</option>
                                  <option>Haldia</option>
                                  <option>Tamluk</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-md-12 mb-3">
                              <div className="form-group">
                                <select className="form-select form-control">
                                  <option>Select Speciality</option>
                                  <option>Heart</option>
                                  <option>Eye</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-12 col-md-12">
                              <div className="form-group">
                                <select className="form-select form-control">
                                  <option>Select Doctor</option>
                                  <option>Dr. Samir Barman</option>
                                  <option>Dr. Bappa Kamila</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="submit-section text-end">
                            <button
                              type="submit"
                              className="btn btn-primary submit-btn"
                            >
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-specialities">
          <div className="container-fluid">
            <div className="section-header text-center">
              <h2 className="fs-4">Clinic and Specialities</h2>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                .
              </p>
            </div>
            <div className="row justify-content-center mb-lg-5">
              <div className="col-md-9">
                <div className="specialities-slider slider">
                  <div className="row carousel-styling">
                    {specialties ? (
                      <Carousel breakPoints={breakPoints}>
                        {specialties?.map((items, index) => (
                          <SpecialityBlock specialties={items} key={index} />
                        ))}
                      </Carousel>
                    ) : (
                      <>
                        <Carousel breakPoints={breakPoints}>
                          <SpecialtyLoader />
                          <SpecialtyLoader />
                          <SpecialtyLoader />
                          <SpecialtyLoader />
                        </Carousel>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md col-lg-5"></div>
              <div className="col-md col-lg-2">
                <div className="d-grid gap-2 read-more mt-sm-2 mt-md-2">
                  <button className="btn btn-primary" type="button">
                    View More
                  </button>
                </div>
              </div>
              <div className="col-md col-lg-5"></div>
            </div>
          </div>
        </section>
        <section className="section section-doctor">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-header">
                  <h2>Book Our Doctor</h2>
                  <p>Lorem Ipsum is simply dummy text</p>
                </div>
                <div className="about-content">
                  <p className="fs-6">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum.
                  </p>
                  <p className="fs-6">
                    web page editors now use Lorem Ipsum as their default model
                    text, and a search for &apos;lorem ipsum&apos; will uncover
                    many web sites still in their infancy. Various versions have
                    evolved over the years, sometimes
                  </p>
                  <Link href="/doctors">
                    <a>Read More...</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="doctor-slider slider">
                  <div className="row carousel-styling">
                    {doctors ? (
                      <Carousel breakPoints={breakPoints}>
                        {doctors?.map((items, index) => (
                          <VerticalDoctorCard data={items} key={index} />
                        ))}
                      </Carousel>
                    ) : (
                      <>
                        <Carousel breakPoints={breakPoints}>
                          <SliderCardLoader />
                          <SliderCardLoader />
                          <SliderCardLoader />
                          <SliderCardLoader />
                        </Carousel>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-features">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 features-img text-sm-center">
                <Image
                  height="500"
                  width="500"
                  src="/user_assets/img/gif/solid-1.gif"
                  className="img-fluid"
                  alt="Feature"
                />
              </div>
              <div className="col-md-7">
                <div className="section-header">
                  <h2 className="mt-2">Your Top Rated Services & Facilities</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className="features-slider slider">
                  <div className="row carousel-styling">
                    <Carousel breakPoints={breakPoints}>
                      <FeatureIcon
                        title="Operation"
                        img="/assets/images/features/feature-01.jpg"
                      />
                      <FeatureIcon
                        title="Medical"
                        img="/assets/images/features/feature-02.jpg"
                      />
                      <FeatureIcon
                        title="Patient Ward"
                        img="/assets/images/features/feature-03.jpg"
                      />
                      <FeatureIcon
                        title="Test Room"
                        img="/assets/images/features/feature-04.jpg"
                      />
                      <FeatureIcon
                        title="ICU"
                        img="/assets/images/features/feature-05.jpg"
                      />
                      <FeatureIcon
                        title="Laboartory"
                        img="/assets/images/features/feature-06.jpg"
                      />
                      <FeatureIcon
                        title="Operation"
                        img="/assets/images/features/feature-07.jpg"
                      />
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clinic-features-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading">
                  <h2>Availabe Features in Our Polyclinic</h2>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="clinic-feature text-md-center text-sm-center">
              <div className="row">
                <FacilityCard
                  title="Patient Ward"
                  img="/assets/images/clinic/clinic-1.png"
                />
                <FacilityCard
                  title="Pharmacy"
                  img="/assets/images/clinic/clinic-2.png"
                />
                <FacilityCard
                  title="Pathology"
                  img="/assets/images/clinic/clinic-3.png"
                />
                <FacilityCard
                  title="Doctors"
                  img="/assets/images/clinic/clinic-4.png"
                />
                <FacilityCard
                  title="Ambulance"
                  img="/assets/images/clinic/clinic-5.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="our-doctors-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading">
                  <h2>Your Best Rated Polyclinics</h2>
                  <p>
                    Access to expert physicians and surgeons, technologies and
                    top-quality surgery facilities right here.
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-end"></div>
            </div>
            <div className="our-doctors">
              <div className="d-flex carousel-styling">
                {polyclinics ? (
                  <Carousel breakPoints={breakPoints}>
                    {polyclinics?.map((items, index) => (
                      <VerticalPolyclinicCard data={items} key={index} />
                    ))}
                  </Carousel>
                ) : (
                  <Carousel breakPoints={breakPoints}>
                    <SliderCardLoader />
                    <SliderCardLoader />
                    <SliderCardLoader />
                    <SliderCardLoader />
                  </Carousel>
                )}
              </div>
            </div>
          </div>
        </section>
        <FooterBanner />
      </main>
    </>
  );
};

export default Index;
