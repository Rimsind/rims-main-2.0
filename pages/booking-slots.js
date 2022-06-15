import Image from "next/image";
import Router, { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { useState } from "react";

const BookingSlots = () => {
  const { doctorId, clinicId, clinicType, timeTableId, fee } =
    useRouter().query;

  const { data: clinic } = useSWR(
    `${apiUrl}/${clinicType}/${clinicId}`,
    fetcher
  );
  const { data: doctor } = useSWR(`${apiUrl}/doctors/${doctorId}`, fetcher);
  const [date, setDate] = useState(null);
  var today = new Date();
  var currDate = today.getDate();
  var currMonth = today.getMonth() + 1;

  const dateSelect = (data) => {
    const value =
      data?.day.toString() + "-" + data?.month.toString() + "-" + data?.year;
    setDate(value);
  };

  const ckeckout = () => {
    if (date === null) {
      alert("Please Select a date");
      return;
    } else {
      Router.push(
        `/checkout?doctorId=${doctorId}&&clinicId=${clinicId}&&date=${date}&&clinicType=${clinicType}&&fee=${fee}`
      );
    }
  };

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
                              src={
                                clinic?.image?.url ||
                                "/assets/images/alternate/alt-polyclinic.png"
                              }
                              height={100}
                              width={100}
                              alt="Polyclinic Image"
                            />
                          </div>
                          <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                            <h6 className="fs-5 fw-bold">{clinic?.name}</h6>
                            <h6 className="fs-6">
                              {clinic?.city}, {clinic?.state}
                            </h6>
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
                      {doctor?.timeTable
                        ?.filter((items, index) => {
                          if (items?.id?.toString().includes(timeTableId)) {
                            return items;
                          }
                        })
                        .map((items, index) => (
                          <div className="row align-items-center" key={index}>
                            {items?.date_and_slots
                              ?.filter((data, index) => {
                                if (
                                  data?.day > currDate &&
                                  data?.month >= currMonth
                                ) {
                                  return items;
                                }
                              })
                              .map((data, index) => (
                                <div
                                  className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3 text-center"
                                  key={index}
                                >
                                  <div className="booking-item">
                                    <button
                                      className="btn btn-book-custom"
                                      onClick={() => dateSelect(data, index)}
                                    >
                                      {data?.day.toString().length < 2 ? (
                                        <>0{data?.day}</>
                                      ) : (
                                        <>{data?.day}</>
                                      )}
                                      -
                                      {data?.month.toString().length < 2 ? (
                                        <>0{data?.month}</>
                                      ) : (
                                        <>{data?.month}</>
                                      )}
                                      -{data?.year}
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>
                        ))}
                    </div>
                    {/* <div className="row align-items-center">
                      <div className="col-3">
                        <div className="innr-time-table">
                          <input type="checkbox" id="activate-div1" />
                          <label for="activate-div1">
                            <div className="my-div">26-06-2022</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="innr-time-table">
                          <input type="checkbox" id="activate-div2" />
                          <label for="activate-div2">
                            <div className="my-div">26-06-2022</div>
                          </label>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="row align-items-center pt-4">
                    <div className="col-12 text-end">
                      <button
                        className="btn btn-primary px-5"
                        onClick={ckeckout}
                      >
                        Next
                      </button>
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
