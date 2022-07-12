import { BreadCrums, VerifyCard } from "components/common";
import ForbidenPage from "components/Loaders/ForbidenPage";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { useAuth } from "context";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  generalProblems,
  rehumatologic,
  neurologicProblems,
  heartRelatedProblems,
  bloodRelatedProblems,
  stomachAdbdominalProblems,
  mentalProblems,
  genetialProblem,
} from "./api/chiefComplaintesData";
import Link from "next/link";
const Checkout = () => {
  const { doctorId, clinicId, clinicType, fee, date } = useRouter().query;

  if (clinicType === "polyclinics") {
    var clinic = "polyclinics";
    var polyclinicId = parseInt(clinicId);
    var nursingHomeId = null;
    var hospitalId = null;
  } else if (clinicType === "nursing-homes") {
    var clinic = "nursing-homes";
    var polyclinicId = null;
    var nursingHomeId = parseInt(clinicId);
    var hospitalId = null;
  } else if (clinicType === "hospitals") {
    var clinic = "hospitals";
    var polyclinicId = null;
    var nursingHomeId = null;
    var hospitalId = parseInt(clinicId);
  }

  const { auth } = useAuth();
  const { data: doctor } = useSWR(`${apiUrl}/doctors/${doctorId}`, fetcher);
  const { data: clinicDetails } = useSWR(
    `${apiUrl}/${clinic}/${clinicId}`,
    fetcher
  );

  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [complainList, setComplainList] = useState([]);

  const addComplaints = () => {
    setComplainList([
      ...complainList,
      {
        description: description,
        duration: duration,
      },
    ]);
    setDescription("");
    setDuration("");
  };

  const deleteComplaints = (index) => {
    const id = index;
    setComplainList((oldComplaints) => {
      return oldComplaints.filter((curElem, index) => {
        return index !== id;
      });
    });
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const [paymentType, setPaymentType] = useState("cash");
  const [paymentId, setPaymentId] = useState();
  const [orderId, setOrderId] = useState();
  const [signature, setSignature] = useState();

  const { register, handleSubmit } = useForm();
  const checkout = async (data, event) => {
    event.preventDefault();
    const payload = {
      patient: auth?.user?.profileId,
      doctor: doctor?.id,
      date: date,
      fee: fee,
      chiefComplaints: complainList,
      polyclinic: polyclinicId,
      nursing_home: nursingHomeId,
      hospital: hospitalId,
      general_problems: data.general_problems.toString(),
      joint_related_problems: data.joint_related_problems.toString(),
      neuro_problems: data.neuro_problems.toString(),
      heart_problems: data.heart_problems.toString(),
      blood_problems: data.blood_problems.toString(),
      stomach_problems: data.stomach_problems.toString(),
      mental_problems: data.mental_problems.toString(),
      genetal_problems: data.genetal_problems.toString(),
    };

    if (paymentType == "online") {
      try {
        const res = await initializeRazorpay();

        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }

        // Make API call to the serverless API
        const data = await fetch(`/api/razorpay?price=${1}`, {
          method: "POST",
        }).then((t) => t.json());

        var options = {
          key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
          name: "RIMS IND ",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "Thankyou for your test donation",
          image: "https://manuarora.in/logo.png",

          handler: function (response) {
            setPaymentId(response.razorpay_payment_id);
            setOrderId(response.razorpay_order_id);
            setSignature(response.razorpay_signature);
            alert("Payment Success Please wait and do not refresh the page");
          },

          prefill: {
            name: "",
            contact: "",
          },
        };

        const res1 = await axios.post(`${apiUrl}/appointments`, payload, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        const result = res1.data;
        Router.push(
          {
            pathname: "/success",
            query: {
              doctorFirstName: doctor?.firstName,
              doctorLastName: doctor?.lastName,
              appointmentId: result.id,
              date: result.date,
              paymentId: paymentId,
              orderId: orderId,
              signature: signature,
              paymentType: paymentType,
            },
          },
          {
            pathname: "/booking-result",
          }
        );

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        console.log(error);
      }
    } else if (paymentType === "cash") {
      try {
        const res = await axios.post(`${apiUrl}/appointments`, payload, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        const result = res.data;
        Router.push(
          {
            pathname: "/success",
            query: {
              doctorFirstName: doctor?.firstName,
              doctorLastName: doctor?.lastName,
              appointmentId: result.id,
              date: result.date,
              paymentType: paymentType,
            },
          },
          {
            pathname: "/booking-result",
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Checkout" title1="Complaints" />
        <div className="content">
          <div className="container">
            <VerifyCard doctorDetails={doctor} clinicDetails={clinicDetails} />
            <form onSubmit={handleSubmit(checkout)}>
              <div className="row align-items-start">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                  <div className="card shadow-sm">
                    <div className="prbl-header">
                      <p className="fs-6 fw-bold">Explain Your Problem</p>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-12">
                        <div className="expln-prbl p-3">
                          <textarea
                            className="form-control mb-3"
                            rows="2"
                            cols="8"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                          ></textarea>
                          <div className="row align-items-start">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Duration"
                                onChange={(e) => setDuration(e.target.value)}
                                value={duration}
                              />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="btn-search">
                                <button
                                  type="button"
                                  className="btn btn-primary w-100"
                                  onClick={addComplaints}
                                >
                                  ADD
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="table-desc p-3">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th className="text-center" colSpan="2">
                                  Complain Description
                                </th>
                                <th>Duration</th>
                              </tr>
                            </thead>
                            <tbody>
                              {complainList.map((item, index) => (
                                <tr key={index}>
                                  <td className="table-action">
                                    <i
                                      className="far fa-times-circle"
                                      onClick={() => {
                                        deleteComplaints(index);
                                      }}
                                    ></i>
                                  </td>
                                  <td>{item.description}</td>
                                  <td>{item.duration}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card accrd-section shadow-sm">
                    <div className="accrd-header">
                      <p className="fs-6 fw-bold">Advance Option</p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="card">
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="false"
                                  aria-controls="collapseOne"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-3">
                                      <div className="accrd-img">
                                        <Image
                                          height="100"
                                          width="100"
                                          src="/assets/images/accordian/general-problem.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-9">
                                      <p className="fs-6 fw-normal">
                                        General Problems
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {generalProblems.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="general_problems"
                                          value={item}
                                          {...register("general_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
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
                                  <div className="row align-items-center">
                                    <div className="col-3">
                                      <div className="accrd-img">
                                        <Image
                                          height="150"
                                          width="150"
                                          src="/assets/images/accordian/rheumatology.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-9">
                                      <p className="fs-6 fw-normal">
                                        Rehumetologic
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {rehumatologic.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="joint_related_problems"
                                          value={item}
                                          {...register(
                                            "joint_related_problems"
                                          )}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="headingThree"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-3">
                                      <div className="accrd-img">
                                        <Image
                                          height="100"
                                          width="100"
                                          src="/assets/images/accordian/neurological.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-9">
                                      <p className="fs-6 fw-normal">
                                        Neurologic Problems
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {neurologicProblems.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="neuro_problems"
                                          value={item}
                                          {...register("neuro_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
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
                                  <div className="row align-items-center">
                                    <div className="col-3">
                                      <div className="accrd-img">
                                        <Image
                                          height="100"
                                          width="100"
                                          src="/assets/images/accordian/heart-problem.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-9">
                                      <p className="fs-6 fw-normal">
                                        Heart Related Problems
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {heartRelatedProblems.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="heart_problems"
                                          value={item}
                                          {...register("heart_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="card">
                          <div className="accordion" id="accordionRight">
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
                                  <div className="row align-items-center">
                                    <div className="col-3">
                                      <div className="accrd-img">
                                        <Image
                                          height="50"
                                          width="50"
                                          src="/assets/images/accordian/blood.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-9">
                                      <p className="fs-6 fw-normal">
                                        Blood Related Problems
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFive"
                                data-bs-parent="#accordionRight"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {bloodRelatedProblems.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="blood_problems"
                                          value={item}
                                          {...register("blood_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
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
                                  <div className="row align-items-center">
                                    <div className="col-3">
                                      <div className="accrd-img">
                                        <Image
                                          height="50"
                                          width="50"
                                          src="/assets/images/accordian/stomach.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-9">
                                      <p className="fs-6 fw-normal">
                                        Stomach & Abdominal Problems
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseSix"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingSix"
                                data-bs-parent="#accordionRight"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {stomachAdbdominalProblems.map(
                                      (item, index) => (
                                        <div key={index}>
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="stomach_problems"
                                            value={item}
                                            {...register("stomach_problems")}
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault"
                                          >
                                            {item}
                                          </label>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="headingSeven"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSeven"
                                  aria-expanded="false"
                                  aria-controls="collapseSeven"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-3">
                                      <div className="accrd-img">
                                        <Image
                                          height="150"
                                          width="150"
                                          src="/assets/images/accordian/mental-problem.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-9">
                                      <p className="fs-6 fw-normal">
                                        Mental Problems
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseSeven"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingSeven"
                                data-bs-parent="#accordionRight"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {mentalProblems.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="mental_problems"
                                          value={item}
                                          {...register("mental_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="headingEight"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseEight"
                                  aria-expanded="false"
                                  aria-controls="collapseEight"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-3">
                                      <div className="accrd-img">
                                        <Image
                                          height="100"
                                          width="100"
                                          src="/assets/images/accordian/genetial.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-9">
                                      <p className="fs-6 fw-normal">
                                        Genetial Problems
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseEight"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingEight"
                                data-bs-parent="#accordionRight"
                              >
                                <div className="accordion-body">
                                  <div className="form-check">
                                    {genetialProblem.map((item, index) => (
                                      <div key={index}>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="genetal_problems"
                                          value={item}
                                          {...register("genetal_problems")}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          {item}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                  <div className="card booking-card">
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#4f96ff" }}
                    >
                      <h4 className="card-title fs-5 mb-0 text-light">
                        Appointment Summary
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="booking-summary">
                        <div className="booking-item-wrap">
                          <ul className="booking-date">
                            <li>
                              Date <span>{date}</span>
                            </li>
                            {/* <li>
                              Time <span></span>
                            </li> */}
                          </ul>
                          <ul className="booking-fee">
                            <li>
                              Consulting Fee <span>₹ {fee}</span>
                            </li>
                            {/* <li>
                            Booking Fee <span>$10</span>
                          </li>
                          <li>
                            Video Call <span>$50</span>
                          </li> */}
                          </ul>
                          <div className="booking-total">
                            <ul className="booking-total-list">
                              <li>
                                <span>Total</span>
                                <span className="total-cost">₹ {fee}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="payment-widget">
                      <h4 className="card-title mb-3 fs-5">Payment Method</h4>

                      <div className="payment-list">
                        {/* <label className="payment-radio credit-card-option">
                          <input type="radio" name="radio" checked />
                          <span className="checkmark"></span>
                          Credit card
                        </label> */}
                      </div>

                      <div className="payment-list mt-3">
                        <div className="row">
                          <div className="col-12 mb-2">
                            {" "}
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment-method"
                                value="online"
                                onChange={(e) => setPaymentType(e.target.value)}
                              />
                              <label className="form-check-label">
                                Online Payment
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment-method"
                                defaultChecked
                                value="cash"
                                onChange={(e) => setPaymentType(e.target.value)}
                              />
                              <label className="form-check-label">
                                Cash on Clinic
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <p>
                            By Clicking on Book Now you agree the Terms &
                            Conditions
                            <Link href="/terms-condition">
                              <a className="ms-1">Terms &amp; Conditions</a>
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className="submit-section  d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                        >
                          Confirm and Pay
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-success" type="submit">
                    Book Appointment
                  </button> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
