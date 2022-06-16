import React from "react";

const TermsCondition = () => {
  return (
    <>
      <section className="terms-condiotion">
        <div className="container">
          <div
            className="inner-terms-content p-5 my-4"
            style={{ background: "#f1f1f1" }}
          >
            <p className="fs-6 fst-italic">Updated June 16, 2022</p>
            <p className="fs-4 fw-bold text-center border-bottom border-1 border-dark pb-3">
              Terms & Condition
            </p>
            <div className="terms-part-title">
              <h6 className="fs-6 fw-bold">User Terms & Condition</h6>
            </div>
            <p className="fs-6">
              After booking an appointment, your medical information will be
              shared with the doctors. Patient evaluation report and
              e-prescription will be shared with the Institute (polyclinic,
              Nursing home, Hospitals) after treatment. The patient's
              e-prescription will be shared with the diagnostic center if the
              patient makes an appointment at the diagnostic center.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsCondition;
