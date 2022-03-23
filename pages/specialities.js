import { BreadCrums } from "components/common";
import Image from "next/image";
import React from "react";

const Specialities = () => {
  return (
    <>
      <div className="page-wrapper">
        <BreadCrums title="Home / Specialities" title1="Specialities" />
        <div className="container">
          <div className="specialities-card">
            <div className="row align-items-center">
              <div className="col-4">
                <Image
                  src="/assets/images/doctors/doctor-01.jpg"
                  height="500px"
                  width="250px"
                  alt="Specialities Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialities;
