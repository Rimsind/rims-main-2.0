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
import Slider from "react-slick";
import { SliderCardLoader, SpecialtyLoader } from "components/Loaders";

const Index = () => {
  const { data: banners } = useSWR(`${apiUrl}/banners`, fetcher);
  const { data: specialties } = useSWR(`${apiUrl}/specialties`, fetcher);
  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);
  const { data: polyclinics } = useSWR(`${apiUrl}/polyclinics`, fetcher);
  const { data: nursingHomes } = useSWR(`${apiUrl}/nursing-homes`, fetcher);
  const { data: hospitals } = useSWR(`${apiUrl}/hospitals`, fetcher);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 1 },
    { width: 768, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 4 },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };

  return (
    <>
      <main className="main">
        {!!banners ? (
          <Slider {...settings}>
            {banners?.map((items, index) => (
              <div key={index}>
                <section
                  className="section section-banner d-flex justify-content-center flex-column align-items-center"
                  style={{ backgroundImage: `url(${items.img.url})` }}
                ></section>
              </div>
            ))}
          </Slider>
        ) : (
          <section
            className="section section-banner d-flex justify-content-center flex-column align-items-center"
            style={{ backgroundColor: "#f0f0f5" }}
          >
            <div className="loader-sec-center-big"></div>
          </section>
        )}

        <section
          className="category-sec"
          style={{ marginTop: "-64px", background: "#fff" }}
        >
          <div className="container">
            <div className="d-flex">
              <div className="set-category">
                <div className="d-flex align-items-center set-category-flex">
                  <div className="img-holder">
                    <a href="#">
                      <i
                        className="fas fa-bed fs-4"
                        style={{ color: "#1860ca" }}
                      ></i>
                    </a>
                  </div>
                  <div className="info-holder border-end border-1">
                    <h3>Visit a Doctor</h3>
                    <p>
                      We hire the best specialists to deliver top-notch
                      diagnostic services for you.
                    </p>
                    <a href="#" className="book-now">
                      Book Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="set-category">
                <div className="d-flex align-items-center set-category-flex">
                  <div className="img-holder">
                    <a href="#">
                      <i
                        className="fas fa-plus fs-4"
                        style={{ color: "#0ce0ff" }}
                      ></i>
                    </a>
                  </div>
                  <div className="info-holder border-end border-1">
                    <h3>Find a Pharmacy</h3>
                    <p>
                      We provide the a wide range of medical services, so every
                      person could have the opportunity.
                    </p>
                    <a href="#" className="book-now">
                      Book Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="set-category">
                <div className="d-flex align-items-center set-category-flex">
                  <div className="img-holder">
                    <a href="#">
                      <i
                        className="fas fa-city fs-4"
                        style={{ color: "#00bcd1" }}
                      ></i>
                    </a>
                  </div>
                  <div className="info-holder">
                    <h3>Find a Lab</h3>
                    <p>
                      We use the first-class medical equipment for timely
                      diagnostics of various diseases.
                    </p>
                    <a href="#" className="book-now">
                      Book Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
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
              <div className="col-md col-lg-2 text-center">
                <Link href="/specialties">
                  <a className="btn btn-primary py-3 px-4">View More</a>
                </Link>
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
                    <a className="btn btn-primary py-3 px-4">View More</a>
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
              <div className="col-md-6">
                <div className="poly-btn text-lg-end text-xl-end text-xxl-end text-center mb-3 mb-lg-3 mb-xl-3 mb-xxl-3">
                  <Link href="/polyclinics">
                    <a className="btn btn-primary py-3 px-4">View More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="our-doctors">
              <div className="d-flex carousel-styling">
                {polyclinics ? (
                  <Carousel breakPoints={breakPoints}>
                    {polyclinics?.map((items, index) => (
                      <VerticalPolyclinicCard
                        data={items}
                        key={index}
                        link="polyclinics"
                      />
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
                  <h2>Your Best Rated Hospitals</h2>
                  <p>
                    Access to expert physicians and surgeons, technologies and
                    top-quality surgery facilities right here.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="poly-btn text-lg-end text-xl-end text-xxl-end text-center mb-3 mb-lg-3 mb-xl-3 mb-xxl-3">
                  <Link href="/hospitals">
                    <a className="btn btn-primary py-3 px-4">View More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="our-doctors">
              <div className="d-flex carousel-styling">
                {hospitals ? (
                  <Carousel breakPoints={breakPoints}>
                    {hospitals?.map((items, index) => (
                      <VerticalPolyclinicCard
                        data={items}
                        key={index}
                        link="polyclinics"
                      />
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
        <section className="section-normal-banner">
          <div className="section-normal-banner-content">
            <Image
              src="/user_assets/img/search-bg12.png"
              width="2500px"
              height="400px"
              alt="Normal Banner"
            />
          </div>
        </section>
        <section className="our-doctors-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading">
                  <h2>Your Best Rated Nursing Homes</h2>
                  <p>
                    Access to expert physicians and surgeons, technologies and
                    top-quality surgery facilities right here.
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-end">
                <div className="poly-btn text-lg-end text-xl-end text-xxl-end text-center mb-3 mb-lg-3 mb-xl-3 mb-xxl-3">
                  <Link href="/doctors">
                    <a className="btn btn-primary py-3 px-4">View More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="our-doctors">
              <div className="d-flex carousel-styling">
                {nursingHomes ? (
                  <Carousel breakPoints={breakPoints}>
                    {nursingHomes?.map((items, index) => (
                      <VerticalPolyclinicCard
                        data={items}
                        key={index}
                        link="nursing-homes"
                      />
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
