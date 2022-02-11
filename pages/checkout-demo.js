import { BreadCrums, VerifyCard } from "components/common";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";

import { useRouter } from "next/router";
const Checkout = () => {
  const { doctorId, polyclinicId, fee, date } = useRouter().query;
  const { data: doctor } = useSWR(`${apiUrl}/doctors/${doctorId}`, fetcher);
  const { data: polyclinic } = useSWR(
    `${apiUrl}/polyclinics/${polyclinicId}`,
    fetcher
  );
  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Checkout" title1="Complaints" />
        <div className="content">
          <div className="container">
            <VerifyCard doctorDetails={doctor} polyclinicDetails={polyclinic} />
            <div className="row">
              <div className="col-md-7 col-lg-8">
                <form>
                  <div className="card">
                    <div className="payment-widget">
                      <h4 className="card-title mb-3 fs-5">Payment Method</h4>

                      <div className="payment-list">
                        <label className="payment-radio credit-card-option">
                          <input type="radio" name="radio" checked />
                          <span className="checkmark"></span>
                          Credit card
                        </label>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group card-label">
                              <label htmlFor="card_name">Name on Card</label>
                              <input
                                className="form-control"
                                id="card_name"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group card-label">
                              <label htmlFor="card_number">Card Number</label>
                              <input
                                className="form-control"
                                id="card_number"
                                placeholder="1234  5678  9876  5432"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="expiry_month">Exp Month</label>
                              <input
                                className="form-control"
                                id="expiry_month"
                                placeholder="MM"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="expiry_year">Exp Year</label>
                              <input
                                className="form-control"
                                id="expiry_year"
                                placeholder="YY"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="cvv">CVV</label>
                              <input
                                className="form-control"
                                id="cvv"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="payment-list mt-3">
                        <label className="payment-radio cash-option">
                          <input type="radio" name="radio" />
                          <span className="checkmark"></span>
                          Cash On Clinic
                        </label>
                      </div>

                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <input type="checkbox" id="terms_accept" />
                          <label htmlFor="terms_accept">
                            I have read and accept
                            <a href="#">Terms &amp; Conditions</a>
                          </label>
                        </div>
                      </div>

                      <div className="submit-section mt-4 d-grid gap-2">
                        <a
                          href="thank_you.html"
                          className="btn btn-primary submit-btn"
                        >
                          Confirm and Pay
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="card booking-card">
                  <div className="card-header">
                    <h4 className="card-title fs-5 mb-0">Summary</h4>
                  </div>
                  <div className="card-body">
                    <div className="booking-summary">
                      <div className="booking-item-wrap">
                        <ul className="booking-date">
                          <li>
                            Date <span>{date}</span>
                          </li>
                          <li>
                            Time <span>10:00 AM</span>
                          </li>
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;