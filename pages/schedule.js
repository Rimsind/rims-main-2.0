import { BreadCrums, VerifyCard } from "components/common";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import Router, { useRouter } from "next/router";
import { useAuth } from "context";
import { useState } from "react";

const Schedule = () => {
  const { doctorId, polyclinicId, fee } = useRouter().query;
  const { auth } = useAuth();
  const { data: doctor } = useSWR(`${apiUrl}/doctors/${doctorId}`, fetcher);
  const { data: polyclinic } = useSWR(
    `${apiUrl}/polyclinics/${polyclinicId}`,
    fetcher
  );

  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const submitData = () => {
    if (!auth.user && !auth.token) {
      Router.push(`/user/login`);
    } else {
      if (date && time) {
        Router.push(
          `/checkout?doctorId=${doctorId}&&polyclinicId=${polyclinicId}&&fee=${fee}&&date=${date}&&time=${time}`
        );
      } else {
        alert("Please Select Date and Time");
      }
    }
  };

  var today = new Date();

  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if (day < 10) {
    var newDay = "0" + day;
  } else {
    var newDay = day;
  }
  if (month < 10) {
    var newMonth = "0" + month;
  } else {
    var newMonth = month;
  }
  const minDate = year + "-" + newMonth + "-" + newDay;

  var maxDay = today.getDate() + 7;
  var maxMonth = today.getMonth() + 1;
  var maxYear = today.getFullYear();
  if (maxDay < 10) {
    var newMaxDay = "0" + maxDay;
  } else {
    var newMaxDay = maxDay;
  }
  if (maxMonth < 10) {
    var newMaxMonth = "0" + maxMonth;
  } else {
    var newMaxMonth = maxMonth;
  }
  const maxDate = maxYear + "-" + newMaxMonth + "-" + newMaxDay;

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM",
    "08:00 PM - 09:00 PM",
  ];

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
                    <h4 className="mb-1">{date}</h4>
                    <p className="text-muted">{time}</p>
                  </div>
                  <div className="col-12 col-sm-8 col-md-6 text-sm-end">
                    <div className="date-picker mb-3">
                      <input
                        type="date"
                        min={minDate}
                        max={maxDate}
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
                          {timeSlots.map((items, index) => (
                            <div
                              className="col-3 col-md-3  col-xl-3 col-lg-3 mb-2"
                              key={index}
                            >
                              <div className="schd-item me-2">
                                <button
                                  className="btn btn-primary rounded-1"
                                  value={items}
                                  onClick={(e) => setTime(e.target.value)}
                                >
                                  {items}
                                </button>
                              </div>
                            </div>
                          ))}
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
