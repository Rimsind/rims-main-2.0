import Image from "next/image";

const BookingSlots = () => {
  return (
    <>
      <section className="next-booking-slots">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="card-booking-upper">
                    <div className="row align-items-start">
                      <div className="col-1">
                        <a href="#">
                          <i className="far fa-arrow-left fs-5 text-danger"></i>
                        </a>
                      </div>
                      <div className="col-11">
                        <div className="row align-items-center">
                          <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                            <Image
                              src="/assets/images/alternate/alt-polyclinic.png"
                              height={100}
                              width={100}
                              alt="Polyclinic Image"
                            />
                          </div>
                          <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                            <h6 className="fs-5 fw-bold">Rims Polyclinic</h6>
                            <h6 className="fs-6">Haldia, West Bengal</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-booking-lower mt-4"
                    style={{ backgroundColor: "#efefef", padding: "20px" }}
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3 text-center">
                        <div className="booking-item">
                          <button className="btn btn-book-custom">
                            23-06-2022
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3 text-center">
                        <div className="booking-item">
                          <button className="btn btn-book-custom">
                            23-06-2022
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3 text-center">
                        <div className="booking-item">
                          <button className="btn btn-book-custom">
                            23-06-2022
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3 text-center">
                        <div className="booking-item">
                          <button className="btn btn-book-custom">
                            23-06-2022
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3 text-center">
                        <div className="booking-item">
                          <button className="btn btn-book-custom">
                            23-06-2022
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3 text-center">
                        <div className="booking-item">
                          <button className="btn btn-book-custom">
                            23-06-2022
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3 text-center">
                        <div className="booking-item">
                          <button className="btn btn-book-custom">
                            23-06-2022
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3 text-center">
                        <div className="booking-item">
                          <button className="btn btn-book-custom">
                            23-06-2022
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center pt-4">
                    <div className="col-12 text-end">
                      <button className="btn btn-primary px-5">Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingSlots;
