import { BreadCrums, VerifyCard } from "components/common";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import Router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "context";
import { useState } from "react";

const Schedule = () => {
  const { doctorId, polyclinicId, fee } = useRouter().query;
  const { data: doctor } = useSWR(`${apiUrl}/doctors/${doctorId}`, fetcher);
  const { data: polyclinic } = useSWR(
    `${apiUrl}/polyclinics/${polyclinicId}`,
    fetcher
  );

  // const { auth } = useAuth();

  // if (!auth.user && !auth.token) {
  //   Router.push(`user/login`);
  // }
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  console.log(date, time);

  const submitData = () => {
    if (date && time) {
      Router.push(
        `/checkout?doctorId=${doctorId}&&polyclinicId=${polyclinicId}&&fee=${fee}&&date=${date}&&time=${time}`
      );
    } else {
      alert("Please Select Date and Time");
    }
  };

  // const { register, handleSubmit } = useForm();
  // const addDate = async (data, event) => {
  //   event.preventDefault();
  //   if (!data.date) {
  //     alert("Please Select Date and Time");
  //   } else {
  //     const payload = {
  //       date: data.date,
  //     };
  //     Router.push(
  //       `/checkout?doctorId=${doctorId}&&polyclinicId=${polyclinicId}&&fee=${fee}&&date=${payload.date}`
  //     );
  //   }
  // };

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Schedule" title1="Schedule" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <VerifyCard
                  doctorDetails={doctor}
                  polyclinicDetails={polyclinic}
                />
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-6">
                    <h4 className="mb-1">11 November 2019</h4>
                    <p className="text-muted">Monday</p>
                  </div>
                  <div className="col-12 col-sm-8 col-md-6 text-sm-end">
                    <div className="date-picker mb-3">
                      <input
                        type="date"
                        className="form-control"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="card booking-schedule schedule-widget">
                  <div className="schedule-cont">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="time-slot row mb-2">
                          <div className="col-3 col-md-3  col-xl-3 col-lg-3 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:00 AM - 9:15 AM"
                                onClick={(e) => setTime(e.target.value)}
                              >
                                9:00 AM - 9:15 AM
                              </button>
                            </div>
                          </div>
                          <div className="col-3 col-md-3  col-xl-3 col-lg-3 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:15 AM - 9:30 AM"
                                onClick={(e) => setTime(e.target.value)}
                              >
                                9:15 AM - 9:30 AM
                              </button>
                            </div>
                          </div>
                          <div className="col-3 col-md-3  col-xl-3 col-lg-3 mb-2">
                            <div className="schd-item me-2">
                              <button
                                className="btn btn-primary rounded-1"
                                value="9:30 AM - 9:45 AM"
                                onClick={(e) => setTime(e.target.value)}
                              >
                                9:30 AM - 9:45 AM
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="submit-section proceed-btn text-end">
                  <button
                    className="btn btn-primary submit-btn"
                    onClick={submitData}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Schedule;
