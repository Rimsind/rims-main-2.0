import Image from "next/image";
import React from "react";
export const EprescriptionReport = React.forwardRef((props, ref) => {
  const { appointments, specialty, bloodGroup } = props;

  return (
    <div ref={ref}>
      <div className="prescription">
        <div className="container prescription-body">
          <div className="pres-topbar-ribbon py-1 px-1">
            <div className="row align-items-end">
              <div className="col-md-1">
                <div className="left-content">
                  <Image
                    src="/assets/images/logo-white.png"
                    alt="logo"
                    width={500}
                    height={350}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="middle-content">
                  <p className="fs-6 fw-bold text-light">
                    REHAB INTEGRATED MEDICAL SOLUTIONS
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="right-content">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <p className="text-light">
                        <i className="fas fa-map-marker-alt text-light me-2"></i>
                        Haldia City Centre , WB
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-light">
                        <i className="fas fa-phone text-light me-2"></i>
                        +91-90384-43073
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-light">
                        <i className="fas fa-envelope-open-text text-light me-2"></i>
                        demo@email.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="py-1 px-2 presc-header">
            <div className="row align-items-center m-auto">
              <div className="col-md-4">
                <div className="header-inner-item text-start">
                  <p className="fs-3 fw-bold fst-italic lh-1">
                    Dr. {appointments?.doctor?.firstName}
                    {appointments?.doctor?.lastName}
                  </p>
                  <p className="fs-6 fw-bold lh-1">
                    {appointments?.doctor?.qualification}
                  </p>
                  <p className="fs-6 lh-1">{specialty?.name}</p>
                  <p className="fs-6 lh-1">
                    Reg. No.-{appointments?.doctor?.registration_no}
                  </p>
                  <p className="fs-6 lh-1">
                    Mob: {appointments?.doctor?.phone}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="doctor-symbol text-center">
                  <Image
                    src="/assets/images/doctor-symbol.png"
                    alt="Doctor Symbol"
                    width={150}
                    height={150}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="header-inner-item text-end">
                  <p className="fs-3 fw-bold fst-italic lh-1">
                    {appointments?.polyclinic?.name ||
                      appointments?.nursing_home?.name ||
                      appointments?.hospital?.name}
                  </p>
                  <p className="fs-6 lh-1">
                    {appointments?.polyclinic?.street_address ||
                      appointments?.nursing_home?.street_address ||
                      appointments?.hospital?.street_address}
                    ,
                    {appointments?.polyclinic?.city ||
                      appointments?.nursing_home?.city ||
                      appointments?.hospital?.city}
                  </p>
                  <p className="fs-6 lh-1">
                    {appointments?.polyclinic?.city ||
                      appointments?.nursing_home?.city ||
                      appointments?.hospital?.city}
                    ,
                    {appointments?.polyclinic?.country ||
                      appointments?.nursing_home?.country ||
                      appointments?.hospital?.country}
                    , PIN:
                    {appointments?.polyclinic?.pincode ||
                      appointments?.nursing_home?.pincode ||
                      appointments?.hospital?.pincode}
                  </p>
                  <p className="fs-6 lh-1">
                    Email :{" "}
                    {appointments?.polyclinic?.email ||
                      appointments?.nursing_home?.email ||
                      appointments?.hospital?.email}
                  </p>
                  <p className="fs-6 lh-1">
                    Mobile No:{" "}
                    {appointments?.polyclinic?.phone ||
                      appointments?.nursing_home?.phone ||
                      appointments?.hospital?.phone}
                  </p>
                </div>
              </div>
            </div>
          </header>

          <main className="main mt-3">
            <p className="presc-title fs-3 fw-bold text-center">e-Prescption</p>
            <div className="presc-main_outer_bg">
              <div className="profile_details mb-3">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img
                      className="presc-img-profile"
                      alt=""
                      src={
                        appointments?.patient?.image?.url ||
                        "/assets/images/profile.png"
                      }
                    />
                  </div>
                  <div className="col-md-8">
                    <p className="fs-5 fw-bold text-light border-bottom border-light">
                      Patient Details
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="patient_intro mb-2">
                          <div className="patient_details_inner">
                            <p className="fs-6 fw-bold text-light lh-1 text-light lh-1">
                              Name :
                              <span className="fs-6 fw-light ms-1">
                                {appointments?.patient?.first_name}
                                {appointments?.patient?.last_name}
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Material Status :
                              <span className="fs-6 fw-light ms-1">
                                {appointments?.patient?.marital_status}
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Blood Group :
                              <span className="fs-6 fw-light ms-1">
                                {bloodGroup?.name}
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Age :
                              <span className="fs-6 fw-light ms-1">
                                {appointments?.patient?.age}
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Gender :
                              <span className="fs-6 fw-light ms-1">
                                {appointments?.patient?.gender}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="patient_intro mb-2">
                          <div className="patient_details_inner">
                            <p className="fs-6 fw-bold text-light lh-1">
                              Mobile :
                              <span className="fs-6 fw-light ms-1">
                                {appointments?.patient?.mobile}
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Email :
                              <span className="fs-6 fw-light ms-1">
                                {appointments?.patient?.email}
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              City :
                              <span className="fs-6 fw-light ms-1">
                                {appointments?.patient?.address.city}
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Country :
                              <span className="fs-6 fw-light ms-1">India</span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              State :
                              <span className="fs-6 fw-light ms-1">
                                {appointments?.patient?.address.state}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-5 presc-table-title">Medicine</p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl No.</th>
                      <th scope="col">Medicine Name</th>
                      <th scope="col">MG</th>
                      <th scope="col">Route</th>
                      <th scope="col">Duration (Days)</th>
                      <th scope="col">Frequency</th>
                      <th scope="col">Reason</th>
                      <th scope="col">Instruction</th>
                      <th scope="col">Side Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments?.eprescription?.medicine.map(
                      (items, index) => (
                        <tr key={index}>
                          <th scope="row">#{index + 1}</th>
                          <td>{items?.name}</td>
                          <td>{items?.mg}</td>
                          <td>{items?.route}</td>
                          <td>{items?.duration}</td>
                          <td>{items?.frequency}</td>
                          <td>{items?.reason}</td>
                          <td>{items?.instruction}</td>
                          <td>{items?.sideEffects}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-5 presc-table-title">Test</p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl No.</th>
                      <th scope="col">Test Name</th>
                      <th scope="col">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments?.eprescription?.test?.map((items, index) => (
                      <tr key={index}>
                        <th scope="row">#{index + 1}</th>
                        <td>{items?.name}</td>
                        <td>{items?.specification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-5 presc-table-title">
                  Food & Fluid Restriction
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Food & Fluid Restriction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments?.eprescription?.restrictions.map(
                      (items, index) => (
                        <tr key={index}>
                          <th scope="row">#{index + 1}</th>
                          <td>{items?.name || items?.others}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-5 presc-table-title">Patient Education</p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Patient Education</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments?.eprescription?.patient_education?.map(
                      (items, index) => (
                        <tr key={index}>
                          <th scope="row">#{index + 1}</th>
                          <td>{items?.name || items?.others}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-5 presc-table-title">
                  Precaution & Safety Measures
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Patient Education</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments?.eprescription?.safetyMeasures?.map(
                      (items, index) => (
                        <tr key={index}>
                          <th scope="row">#{index + 1}</th>
                          <td>{items?.name || items?.others}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-5 presc-table-title">
                  Other Treatment Referral
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Patient Education</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments?.eprescription?.treatmentReferral?.map(
                      (items, index) => (
                        <tr key={index}>
                          <th scope="row">#{index + 1}</th>
                          <td>{items?.name || items?.others}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-5 presc-table-title">Set Follow Time Period</p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th></th>
                      <th scope="col">Date</th>

                      <th scope="col">Followup Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>*</td>
                      <td>{appointments?.eprescription?.followUp_date}</td>
                      <td>{appointments?.eprescription?.followUp_type}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>

          <footer className="presc-footer">
            <div className="row align-items-center pt-3 px-3">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="banner-logo text-center mb-2">
                  <Image
                    height="50"
                    width="75"
                    src="/assets/images/logo-white.png"
                    alt=""
                  />
                </div>
                <p className="text-light fs-5 fw-bold text-center lh-1">
                  Powered by Rims Technology
                </p>
                <p className="text-light text-center fs-6 lh-1 fst-italic">
                  A unit of Retar Mediserve Pvt. Ltd.
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
});
