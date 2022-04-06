import Image from "next/image";
import React from "react";

const Copyright = () => {
  return (
    <>
      <section
        className="section-copyright"
        style={{ backgroundColor: "#15558d", color: "#fff" }}
      >
        <div className="container">
          <div className="row pt-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center text-sm-center text-md-center text-lg-start text-xl-start text-xxl-start">
              <p>
                &copy; Copyright
                <span className="ms-2">Rehab Integrated Medical Solutions</span>
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center text-sm-center text-md-center text-lg-end text-xl-end text-xxl-end">
              <Image
                src="/assets/images/payment-method.png"
                height="20px"
                width="400px"
                alt="Payment Method"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Copyright;
