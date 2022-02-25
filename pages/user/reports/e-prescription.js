import AuthLayout from "components/layout/AuthLayout";
const Eprescription = () => {
  return (
    <>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <div class="container" style={{ backgroundColor: "white" }}>
          <div
            class="topbar-ribbon py-1 px-1"
            style={{ backgroundColor: "#075f99 !important" }}
          >
            <div class="row align-items-end">
              <div class="col-md-1">
                <div class="left-content">
                  <img
                    src="/assets/images/logo-white.png"
                    style={{ height: "3rem" }}
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="middle-content">
                  <p class="fs-6 fw-bold" style={{ color: "white" }}>
                    REHAB INTEGRATED MEDICAL SOLUTIONS
                  </p>
                </div>
              </div>
              <div class="col-md-7">
                <div class="right-content">
                  <div class="row align-items-center">
                    <div class="col-md-4">
                      <p class="text-light">
                        <i
                          class="fas fa-map-marker-alt"
                          style={{ color: "white" }}
                        ></i>
                        Haldia City Centre , WB
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p class="text-light">
                        <i class="fas fa-phone" style={{ color: "white" }}></i>
                        +91-90384-43073
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p class="text-light">
                        <i
                          class="fas fa-envelope-open-text"
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
          <header class="py-1 px-2" style={{ borderBottom: "5px solid" }}>
            <div class="row align-items-center m-auto">
              <div class="col-md-4">
                <div class="header-inner-item text-start">
                  <p class="fs-3 fw-bold fst-italic lh-1">Dr. Samir Barman</p>
                  <p class="fs-6 fw-bold lh-1">MBBS.MD.(O&G)</p>
                  <p class="fs-6 lh-1">
                    Consultant Gynaecologist & Obstetrician
                  </p>
                  <p class="fs-6 lh-1">Reg. No.-58905 (WBMC)</p>
                  <p class="fs-6 lh-1">Mob.-987-456-321</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="doctor-symbol text-center">
                  <img src="/assets/images/doctor-symbol.png" height="150px" />
                </div>
              </div>

              <div class="col-md-4">
                <div class="header-inner-item text-end">
                  <p class="fs-3 fw-bold fst-italic lh-1">Dr. Samir Barman</p>
                  <p class="fs-6 fw-bold lh-1">MBBS.MD.(O&G)</p>
                  <p class="fs-6 lh-1">
                    Consultant Gynaecologist & Obstetrician
                  </p>
                  <p class="fs-6 lh-1">Reg. No.-58905 (WBMC)</p>
                  <p class="fs-6 lh-1">Mob.-987-456-321</p>
                </div>
              </div>
            </div>
          </header>

          <main class="main mt-3">
            <p class="fs-3 fw-bold text-center" style={{ color: "#720330" }}>
              e-Prescption
            </p>
            <div
              class="main_outer_bg"
              style={{
                background: "linear-gradient(45deg, #116aa1, #720330)",
                position: "relative",
                padding: "1rem",
              }}
            >
              <div class="profile_details mb-3">
                <div class="row align-items-center">
                  <div class="col-md-4">
                    <img
                      src="/assets/images/amit_1.jpg"
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
                  <div class="col-md-8">
                    <p
                      class="fs-5 fw-bold"
                      style={{
                        borderBottom: "1px solid white",
                        color: "white",
                      }}
                    >
                      Patient Details
                    </p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="patient_intro mb-2">
                          <div class="patient_details_inner">
                            <p
                              class="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Name:
                              <span class="fs-6 fw-light">Amit Mahapatra</span>
                            </p>
                            <p
                              class="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Material Status:
                              <span class="fs-6 fw-light">Married</span>
                            </p>
                            <p
                              class="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Blood Group: <span class="fs-6 fw-light">6</span>
                            </p>
                            <p
                              class="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Date of Birth:
                              <span class="fs-6 fw-light">1999-06-23 </span>
                            </p>
                            <p
                              class="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Gender: <span class="fs-6 fw-light">Male </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="patient_intro mb-2">
                          <div class="patient_details_inner">
                            <p
                              class="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Mobile:{" "}
                              <span class="fs-6 fw-light">8945632148</span>
                            </p>
                            <p
                              class="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Email:
                              <span class="fs-6 fw-light">amit@gmail.com</span>
                            </p>
                            <p
                              class="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Street Address:
                              <span class="fs-6 fw-light">City Center</span>
                            </p>
                            <p
                              class="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Country: <span class="fs-6 fw-light">India</span>
                            </p>
                            <p
                              class="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              State: <span class="fs-6 fw-light">WB</span> ; Pin
                              -<span class="fs-6 fw-light">721657</span>
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
                class="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  class="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Medicine
                </p>
                <table class="table table-striped table-borderless">
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
                    <tr>
                      <th scope="row">1</th>
                      <td>Moexipril (Univasc)</td>
                      <td>500</td>
                      <td>Oral</td>
                      <td>60</td>
                      <td>Daily</td>
                      <td>hgavcfjhdvjhvbfh</td>
                      <td>fjhvdfjhbh</td>
                      <td>fjhvdfjhbh</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Moexipril (Univasc)</td>
                      <td>500</td>
                      <td>Oral</td>
                      <td>60</td>
                      <td>Daily</td>
                      <td>hgavcfjhdvjhvbfh</td>
                      <td>fjhvdfjhbh</td>
                      <td>fjhvdfjhbh</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Moexipril (Univasc)</td>
                      <td>500</td>
                      <td>Oral</td>
                      <td>60</td>
                      <td>Daily</td>
                      <td>hgavcfjhdvjhvbfh</td>
                      <td>fjhvdfjhbh</td>
                      <td>fjhvdfjhbh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  class="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Test
                </p>
                <table class="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Test Name</th>
                      <th scope="col">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                      <td>Modi repudiandae qui temporibus voluptate eaque</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                      <td>Modi repudiandae qui temporibus voluptate eaque</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                      <td>Modi repudiandae qui temporibus voluptate eaque</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  class="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Food & Fluid Restriction
                </p>
                <table class="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Food & Fluid Restriction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  class="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Patient Education
                </p>
                <table class="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Patient Education</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  class="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Set Follow Time Period
                </p>
                <table class="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Days</th>
                      <th scope="col">Weeks</th>
                      <th scope="col">Months</th>
                      <th scope="col">Followup Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>02</td>
                      <td>1st</td>
                      <td>January</td>
                      <td>Regular Visit</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>02</td>
                      <td>1st</td>
                      <td>January</td>
                      <td>Regular Visit</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>02</td>
                      <td>1st</td>
                      <td>January</td>
                      <td>Regular Visit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>

          <footer
            style={{ background: "linear-gradient(45deg, #116aa1, #720330)" }}
          >
            <div class="row align-items-center pt-3 px-3">
              <div class="col-md-4">
                <p class="text-light text-start">
                  For next appointment click <a href="#">this link</a>
                </p>
              </div>
              <div class="col-md-4">
                <div class="banner-logo text-center mb-2">
                  <img src="/assets/images/logo-white.png" height="50px" />
                </div>
                <p class="text-light fs-5 fw-bold text-center lh-1">
                  Powered by Rims Technology
                </p>
                <p class="text-light text-center fs-6 lh-1 fst-italic">
                  A unit of Retar Mediserve Pvt. Ltd.
                </p>
              </div>
              <div class="col-md-4">
                <p class="text-light text-end">
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
