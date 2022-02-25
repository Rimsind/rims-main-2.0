import AuthLayout from "components/layout/AuthLayout";
import { useRouter } from "next/router";
import { useAuth } from "context";
import useSWR from "swr";
import { apiUrl } from "config/api";
const Eprescription = () => {
  const { id } = useRouter().query;

  const { auth } = useAuth();

  const { data: appointments } = useSWR(
    `${apiUrl}/appointments/${id}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  const { doctor, patient, eprescription } = appointments;

  return (
    <>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <div className="container" style={{ backgroundColor: "white" }}>
          <div
            className="topbar-ribbon py-1 px-1"
            style={{ backgroundColor: "#075f99 !important" }}
          >
            <div className="row align-items-end">
              <div className="col-md-1">
                <div className="left-content">
                  <img
                    src="/assets/images/logo-white.png"
                    style={{ height: "3rem" }}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="middle-content">
                  <p className="fs-6 fw-bold" style={{ color: "white" }}>
                    REHAB INTEGRATED MEDICAL SOLUTIONS
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="right-content">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <p className="text-light">
                        <i
                          className="fas fa-map-marker-alt"
                          style={{ color: "white" }}
                        ></i>
                        Haldia City Centre , WB
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-light">
                        <i
                          className="fas fa-phone"
                          style={{ color: "white" }}
                        ></i>
                        +91-90384-43073
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-light">
                        <i
                          className="fas fa-envelope-open-text"
                          style={{ color: "white" }}
                        ></i>
                        demo@email.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="py-1 px-2" style={{ borderBottom: "5px solid" }}>
            <div className="row align-items-center m-auto">
              <div className="col-md-4">
                <div className="header-inner-item text-start">
                  <p className="fs-3 fw-bold fst-italic lh-1">
                    Dr. {doctor?.firstName} {doctor?.lastName}
                  </p>
                  <p className="fs-6 fw-bold lh-1">{doctor?.qualification}</p>
                  <p className="fs-6 lh-1">{doctor?.specialty}</p>
                  <p className="fs-6 lh-1">Reg. No.-58905 (WBMC)</p>
                  <p className="fs-6 lh-1">Mob: {doctor?.phone}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="doctor-symbol text-center">
                  <img src="/assets/images/doctor-symbol.png" height="150px" />
                </div>
              </div>

              <div className="col-md-4">
                <div className="header-inner-item text-end">
                  <p className="fs-3 fw-bold fst-italic lh-1">
                    Dr. {doctor?.firstName} {doctor?.lastName}
                  </p>
                  <p className="fs-6 fw-bold lh-1">{doctor?.qualification}</p>
                  <p className="fs-6 lh-1">{doctor?.specialty}</p>
                  <p className="fs-6 lh-1">Reg. No.-58905 (WBMC)</p>
                  <p className="fs-6 lh-1">Mob: {doctor?.phone}</p>
                </div>
              </div>
            </div>
          </header>

          <main className="main mt-3">
            <p
              className="fs-3 fw-bold text-center"
              style={{ color: "#720330" }}
            >
              e-Prescption
            </p>
            <div
              className="main_outer_bg"
              style={{
                background: "linear-gradient(45deg, #116aa1, #720330)",
                position: "relative",
                padding: "1rem",
              }}
            >
              <div className="profile_details mb-3">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img
                      src={patient?.image?.url || "/assets/images/profile.png"}
                      style={{
                        height: "19rem",
                        background: "#0b6ea5",
                        padding: "1rem",
                        position: "absolute",
                        marginTop: "-145px",
                        marginLeft: "25px",
                        boxShadow: "1px 8px 12px 0px #00000038",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <p
                      className="fs-5 fw-bold"
                      style={{
                        borderBottom: "1px solid white",
                        color: "white",
                      }}
                    >
                      Patient Details
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="patient_intro mb-2">
                          <div className="patient_details_inner">
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Name :
                              <span className="fs-6 fw-light">
                                {" "}
                                {patient?.first_name} {patient?.last_name}
                              </span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Material Status :{" "}
                              <span className="fs-6 fw-light">
                                {patient?.marital_status}
                              </span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Blood Group :{" "}
                              <span className="fs-6 fw-light">
                                {patient?.blood_group}
                              </span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Date of Birth :{" "}
                              <span className="fs-6 fw-light">
                                {patient?.dob}
                              </span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Gender :{" "}
                              <span className="fs-6 fw-light">
                                {patient?.gender}{" "}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="patient_intro mb-2">
                          <div className="patient_details_inner">
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Mobile :{" "}
                              <span className="fs-6 fw-light">
                                {patient?.mobile}
                              </span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Email :{" "}
                              <span className="fs-6 fw-light">
                                {patient?.email}
                              </span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              City :{" "}
                              <span className="fs-6 fw-light">
                                {patient?.address.city}
                              </span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Country :{" "}
                              <span className="fs-6 fw-light">India</span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              State :{" "}
                              <span className="fs-6 fw-light">
                                {patient?.address.state}
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
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Medicine
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
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
                    {eprescription?.medicine.map((items, index) => (
                      <tr key={index}>
                        <th scope="row">*</th>
                        <td>{items?.name}</td>
                        <td>{items?.mg}</td>
                        <td>{items?.route}</td>
                        <td>{items?.duration}</td>
                        <td>{items?.frequency}</td>
                        <td>{items?.reason}</td>
                        <td>{items?.instruction}</td>
                        <td>{items?.sideEffects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Test
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Test Name</th>
                      <th scope="col">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eprescription?.test?.map((items, index) => (
                      <tr key={index}>
                        <th scope="row">*</th>
                        <td>{items?.name}</td>
                        <td>{items?.specification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
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
                    <tr>
                      <th scope="row">*</th>
                      <td>{eprescription?.restrictions}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Patient Education
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Patient Education</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">*</th>
                      <td>{eprescription?.patient_education}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
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
                    <tr>
                      <th scope="row">*</th>
                      <td>{eprescription?.safetyMeasures}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
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
                    <tr>
                      <th scope="row">*</th>
                      <td>{eprescription?.treatmentreferral}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Set Follow Time Period
                </p>
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
                      <td>{eprescription?.followup?.date}</td>
                      <td>{eprescription?.followup?.type}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>

          <footer
            style={{ background: "linear-gradient(45deg, #116aa1, #720330)" }}
          >
            <div className="row align-items-center pt-3 px-3">
              <div className="col-md-4">
                <p className="text-light text-start">
                  For next appointment click <a href="#">this link</a>
                </p>
              </div>
              <div className="col-md-4">
                <div className="banner-logo text-center mb-2">
                  <img src="/assets/images/logo-white.png" height="50px" />
                </div>
                <p className="text-light fs-5 fw-bold text-center lh-1">
                  Powered by Rims Technology
                </p>
                <p className="text-light text-center fs-6 lh-1 fst-italic">
                  A unit of Retar Mediserve Pvt. Ltd.
                </p>
              </div>
              <div className="col-md-4">
                <p className="text-light text-end">
                  For appointment click <a href>this link</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Eprescription;

Eprescription.getLayout = (Eprescription) => (
  <AuthLayout>{Eprescription}</AuthLayout>
);
