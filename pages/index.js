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
const Index = () => {
  const { data: specialties } = useSWR(`${apiUrl}/specialties`, fetcher);
  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);
  const { data: polyclinics } = useSWR(`${apiUrl}/polyclinics`, fetcher);
  const { data: nursingHomes } = useSWR(`${apiUrl}/nursing-homes`, fetcher);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 4, itemsToScroll: 3 },
    { width: 768, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 1 },
  ];

  return (
    <>
      <main className="main">
        <section
          className="section section-banner"
          style={{ backgroundImage: "url(/assets/images/main.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5 search-doctor">
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
                    <div className="submit-section">
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
              <div className="col-md-7"></div>
            </div>
          </div>
        </section>
        <section className="section section-specialities">
          <div className="container-fluid">
            <div className="section-header text-center">
              <h2 className="fs-4">Clinic and Specialities</h2>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="row justify-content-center mb-lg-5">
              <div className="col-md-9">
                <div className="specialities-slider slider">
                  <div className="row carousel-styling">
                    <Carousel breakPoints={breakPoints}>
                      {specialties?.map((items, index) => (
                        <SpecialityBlock specialties={items} key={index} />
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2">
                <div className="d-grid gap-2 read-more">
                  <button className="btn btn-primary" type="button">
                    View More
                  </button>
                </div>
              </div>
              <div className="col-md-5"></div>
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
                  <a href="#">Read More..</a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="doctor-slider slider">
                  <div className="row carousel-styling">
                    <Carousel breakPoints={breakPoints}>
                      <VerticalDoctorCard />
                      <VerticalDoctorCard />
                      <VerticalDoctorCard />
                      <VerticalDoctorCard />
                      <VerticalDoctorCard />
                      <VerticalDoctorCard />
                      <VerticalDoctorCard />
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-features">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 features-img">
                <Image
                  height="380"
                  width="390"
                  src="/assets/images/features/feature.png"
                  className="img-fluid"
                  alt="Feature"
                />
              </div>
              <div className="col-md-7">
                <div className="section-header">
                  <h2 className="mt-2">Availabe Features in Our Clinic</h2>
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
                  <h2>Availabe Features in Our Clinic</h2>
                  <p>Meet our Experts & Book Online</p>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="clinic-feature">
              <div className="row">
                <FacilityCard
                  title="Operation"
                  img="/assets/images/clinic/clinic-1.jpg"
                />
                <FacilityCard
                  title="Medical"
                  img="/assets/images/clinic/clinic-2.jpg"
                />
                <FacilityCard
                  title="Patient Ward"
                  img="/assets/images/clinic/clinic-3.jpg"
                />
                <FacilityCard
                  title="TEST ROOM"
                  img="/assets/images/clinic/clinic-4.jpg"
                />
                <FacilityCard
                  title="ICU"
                  img="/assets/images/clinic/clinic-5.jpg"
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
                  <h2>Clinic & Specialities</h2>
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
                <Carousel breakPoints={breakPoints}>
                  <VerticalPolyclinicCard />
                  <VerticalPolyclinicCard />
                  <VerticalPolyclinicCard />
                  <VerticalPolyclinicCard />
                  <VerticalPolyclinicCard />
                  <VerticalPolyclinicCard />
                  <VerticalPolyclinicCard />
                  <VerticalPolyclinicCard />
                </Carousel>
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
