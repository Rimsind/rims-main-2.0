import React from "react";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </p>
            <div className="privacy-part-title">
              <h6 className="fs-6 fw-bold">User Privacy Policy</h6>
            </div>
            <p className="fs-6">
              <b>A)</b> <span className="fw-bold">User Registration:</span>
              Account Registration for the user. When you register for an
              Account, we may ask for your contact information, including items
              such as name, company name, address, email address, and telephone
              number. After Login open dashboard, from there you can View /
              Update Profiles , Medical information , Get Appointment , Change
              Password & Advance Setting .<br /> <br />
              <b>B)</b> <span className="fw-bold">Payment Information:</span>
              When you add your financial account information to your Account,
              that information is directed to our third-party payment processor.
              We do not store your financial account information on our systems;
              however, we have access to, and may retain, subscriber information
              through our third-party payment processor. <br />
              <br />
              <b>C)</b> <span className="fw-bold">User Content:</span> Your all
              Data/ Medical Information will be secure in Our Server. Your
              medical information will be strictly confidential without patient
              consent; it will not be shared with nobody.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
