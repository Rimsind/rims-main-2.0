import AuthLayout from "components/layout/AuthLayout";
const SubjectiveInformation = () => {
  return (
    <>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <div class="container" style={{ backgroundColor: "white" }}>
          <header style={{ borderBottom: "5px soli", padding: "2rem" }}>
            <div class="row align-items-center">
              <div class="col-md-2">
                <div class="left-content">
                  <img
                    src="/assets/images/logo-dark.png"
                    style={{ height: "8rem" }}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="middle-content">
                  <p class="fs-4 fw-bold" style={{ color: "#680634" }}>
                    REHAB INTEGRATED MEDICAL SOLUTIONS
                  </p>
                </div>
              </div>
              <div
                class="col-md-4"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <div class="right-content">
                  <p>
                    <i class="fas fa-map-pin" style={{ color: "#680634" }}></i>{" "}
                    Haldia IT Park , City Centre , WB, INDIA (HO)
                  </p>
                  <p>
                    <i class="fas fa-phone" style={{ color: "#680634" }}></i>
                    +91-90384-43073
                  </p>
                  <p>
                    <i
                      class="fas fa-envelope-open-text"
                      style={{ color: "#680634" }}
                    ></i>
                    demo@email.com
                  </p>
                </div>
              </div>
            </div>
          </header>

          <main class="main mt-3">
            <div class="profile_details mb-3">
              <div class="profile_heading">
                <p
                  class="fs-3 fw-bold text-center"
                  style={{ color: "#720330" }}
                >
                  Patient Medical History
                </p>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div
                    class="left_content"
                    style={{
                      background: "linear-gradient(45deg, #116aa1, #720330)",
                      padding: "1rem",
                      color: "white",
                    }}
                  >
                    <div class="patient_image mb-2">
                      <img
                        src="/assets/images/profile.png"
                        style={{ height: "24rem", padding: "1rem" }}
                      />
                    </div>
                    <div class="patient_left_content">
                      <div class="patient_intro mb-2">
                        <p
                          class="fs-5 fw-bold"
                          style={{ borderBottom: "1px solid white" }}
                        >
                          Patient Details
                        </p>
                        <div class="patient_details_inner">
                          <p>Name: Amit Mahapatra</p>
                          <p>Material Status: Married</p>
                          <p>Blood Group: 6</p>
                          <p>Date of Birth: 1999-06-23</p>
                          <p>Gender: Male</p>
                        </div>
                      </div>
                      <div class="patient_intro mb-2">
                        <p
                          class="fs-5 fw-bold"
                          style={{ borderBottom: "1px solid white" }}
                        >
                          Patient Problem Area
                        </p>
                        <div class="patient_details_inner">
                          <p>Fever: 2 Days</p>
                        </div>
                      </div>
                      <div class="patient_intro mb-2">
                        <p
                          class="fs-5 fw-bold"
                          style={{ borderBottom: "1px solid white" }}
                        >
                          Additional Chief Complaint
                        </p>
                        <div class="patient_details_inner">
                          <p>General Problem: Fever</p>
                          <p>Rheumatologic: Joint swelling</p>
                          <p>Neurologic Problems: False</p>
                          <p>Heart Related Problems: Chest pain</p>
                          <p>Blood Related Problems: Nail beet change</p>
                          <p>Stomach & Abdominal Problems: False</p>
                          <p>Mental Problems: False</p>
                          <p>Genital Problem: False</p>
                        </div>
                      </div>
                      <div class="patient_intro mb-2">
                        <p
                          class="fs-5 fw-bold"
                          style={{ borderBottom: "1px solid white" }}
                        >
                          Recent Appointment
                        </p>
                        <div class="patient_details_inner">
                          <p>Any Appointment: Yes</p>
                          <p>Last Appointment Date: 17/10/2021</p>
                        </div>
                      </div>
                      <div class="patient_intro mb-2">
                        <p
                          class="fs-5 fw-bold"
                          style={{ borderBottom: "1px solid white" }}
                        >
                          Consulting With
                        </p>
                        <div class="patient_details_inner">
                          <p>Name: Dr. Samir Barman</p>
                          <p>Qualification: MBBS</p>
                          <p>Specialization: 13</p>
                          <p>Clinic Name: Mediland Nurding Home</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="right_content">
                    <div class="right_content_inner">
                      <p
                        class="fs-5"
                        style={{
                          background:
                            "linear-gradient(45deg, #6f0734, transparent)",
                          padding: "1rem",
                          color: "white",
                          borderRadius: "30px 4px 4px 30px",
                        }}
                      >
                        General Information
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div class="row">
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">Race / Ethnicity :</p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Asian</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">Language :</p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Hindi</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  Highest Level of Education :
                                </p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Master's Degree</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  Hand Foot Dominance :
                                </p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">N/A</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right_content_inner">
                      <p
                        class="fs-5"
                        style={{
                          background:
                            "linear-gradient(45deg, #6f0734, transparent)",
                          padding: "1rem",
                          color: "white",
                          borderRadius: "30px 4px 4px 30px",
                        }}
                      >
                        Social History & Living Environment
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div class="row">
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">Whrere Do You Live :</p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Private Home</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  With Whom Do You Live :
                                </p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Spouse</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  Does Your Home Have :
                                </p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">One Level</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">Do You Use :</p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Glasses</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 main_column">
                            <div class="row">
                              <div class="col-md-4 inner_column">
                                <p class="fs-6 fw-bold">How Many Steps ?</p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">
                                  No. Steps Outside the Home:
                                  <span class="fw-bold">2</span>
                                </p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">
                                  No. Steps Inside the Home:
                                  <span class="fw-bold">0</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 main_column">
                            <p
                              class="fs-5 fw-bold"
                              style={{ borderBottom: "1px solid" }}
                            >
                              Cultural / Religious :
                            </p>
                            <div class="row">
                              <div class="col-md-6 inner_column">
                                <p class="fs-6">
                                  Any cultural or religious beliefs or wishes
                                  that might affect care?
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <p
                              class="fs-5 fw-bold"
                              style={{ borderBottom: "1px solid" }}
                            >
                              Social / Health Habits :
                            </p>
                            <div class="row">
                              <div class="col-md-6 main_column">
                                <div class="row">
                                  <div class="col-md-8 inner_column">
                                    <p class="fs-6 fw-bold">
                                      Do You Smoke Tobacco?
                                    </p>
                                  </div>
                                  <div class="col-md-4 inner_column">
                                    <p class="fs-6">No</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6 main_column">
                                <div class="row">
                                  <div class="col-md-8 inner_column">
                                    <p class="fs-6 fw-bold">
                                      Do You Drink Alcohol?
                                    </p>
                                  </div>
                                  <div class="col-md-4 inner_column">
                                    <p class="fs-6">No</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6 main_column">
                                <div class="row">
                                  <div class="col-md-8 inner_column">
                                    <p class="fs-6 fw-bold">Excercise?</p>
                                  </div>
                                  <div class="col-md-4 inner_column">
                                    <p class="fs-6">Yes</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6 main_column">
                                <div class="row">
                                  <div class="col-md-8 inner_column">
                                    <p class="fs-6 fw-bold">
                                      If Yes How Many Times Per Week?
                                    </p>
                                  </div>
                                  <div class="col-md-4 inner_column">
                                    <p class="fs-6">7</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6 main_column">
                                <div class="row">
                                  <div class="col-md-8 inner_column">
                                    <p class="fs-6 fw-bold">
                                      How Many Minutes Per Day?
                                    </p>
                                  </div>
                                  <div class="col-md-4 inner_column">
                                    <p class="fs-6">30</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right_content_inner">
                      <p
                        class="fs-5"
                        style={{
                          background:
                            "linear-gradient(45deg, #6f0734, transparent)",
                          padding: "1rem",
                          color: "white",
                          borderRadius: "30px 4px 4px 30px",
                        }}
                      >
                        Past Medical History
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div class="col-md-12 main_column">
                          <p
                            class="fs-5 fw-bold"
                            style={{ borderBottom: "1px solid" }}
                          >
                            Past Medical History - Please Check If Anyone In You
                            Have Or Had Any Or The Following :
                          </p>
                          <div class="row">
                            <div class="col-md-6 inner_column">
                              <p class="fs-6">No past medical history</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 main_column">
                          <p
                            class="fs-5 fw-bold"
                            style={{ borderBottom: "1px solid" }}
                          >
                            Past Medical History - For Women Only :
                          </p>
                          <div class="row">
                            <div class="col-md-6 main_column">
                              <div class="row">
                                <div class="col-md-8 inner_column">
                                  <p class="fs-6 fw-bold">
                                    Pelvic Inflammatory Disease :
                                  </p>
                                </div>
                                <div class="col-md-4 inner_column">
                                  <p class="fs-6">No</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 main_column">
                              <div class="row">
                                <div class="col-md-8 inner_column">
                                  <p class="fs-6 fw-bold">
                                    Trouble With Period :
                                  </p>
                                </div>
                                <div class="col-md-4 inner_column">
                                  <p class="fs-6">No</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 main_column">
                              <div class="row">
                                <div class="col-md-8 inner_column">
                                  <p class="fs-6 fw-bold">
                                    Complicated Pregnancies :
                                  </p>
                                </div>
                                <div class="col-md-4 inner_column">
                                  <p class="fs-6">No</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 main_column">
                              <div class="row">
                                <div class="col-md-8 inner_column">
                                  <p class="fs-6 fw-bold">Pregnant:</p>
                                </div>
                                <div class="col-md-4 inner_column">
                                  <p class="fs-6">No</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 main_column">
                              <div class="row">
                                <div class="col-md-8 inner_column">
                                  <p class="fs-6 fw-bold">Endometriosis :</p>
                                </div>
                                <div class="col-md-4 inner_column">
                                  <p class="fs-6">No</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 main_column">
                              <div class="row">
                                <div class="col-md-8 inner_column">
                                  <p class="fs-6 fw-bold">Any Other :</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 main_column">
                          <p
                            class="fs-5 fw-bold"
                            style={{ borderBottom: "1px solid" }}
                          >
                            Surgical History – Please List Any Surgeries You
                            Had, And If Known Include Dates:
                          </p>
                        </div>
                        <div class="col-md-12 main_column">
                          <p
                            class="fs-5 fw-bold"
                            style={{ borderBottom: "1px solid" }}
                          >
                            Diagnostic Test/Measures - Within The Past Year,
                            Have You Had Any Of The Following (Check All That
                            Apply):
                          </p>
                          <p class="fs-6">False</p>
                        </div>
                        <div class="col-md-12 main_column">
                          <p
                            class="fs-5 fw-bold"
                            style={{ borderBottom: "1px solid" }}
                          >
                            Medications & Allergies – Please Check Or List All
                            Medications Or Allergies:
                          </p>
                          <div class="row">
                            <div class="col-md-6 main_column">
                              <div class="row">
                                <div class="col-md-6 inner_column">
                                  <p class="fs-6 fw-bold">
                                    Non - Prescription :
                                  </p>
                                </div>
                                <div class="col-md-6 inner_column">
                                  <p class="fs-6">False</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 main_column">
                              <div class="row">
                                <div class="col-md-6 inner_column">
                                  <p class="fs-6 fw-bold">Prescription :</p>
                                </div>
                                <div class="col-md-6 inner_column"></div>
                              </div>
                            </div>
                            <div class="col-md-6 main_column">
                              <div class="row">
                                <div class="col-md-6 inner_column">
                                  <p class="fs-6 fw-bold">Allergies :</p>
                                </div>
                                <div class="col-md-6 inner_column"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right_content_inner">
                      <p
                        class="fs-5"
                        style={{
                          background:
                            "linear-gradient(45deg, #6f0734, transparent)",
                          padding: "1rem",
                          color: "white",
                          borderRadius: "30px 4px 4px 30px",
                        }}
                      >
                        Employment Status
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div class="row">
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">Work Status :</p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Work Full Time</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">Occuption?</p>
                              </div>
                              <div class="col-md-4 inner_column"></div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  Your Work Involves (Check All That Apply) :
                                </p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">False</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right_content_inner">
                      <p
                        class="fs-5"
                        style={{
                          background:
                            "linear-gradient(45deg, #6f0734, transparent)",
                          padding: "1rem",
                          color: "white",
                          borderRadius: "30px 4px 4px 30px",
                        }}
                      >
                        Current Functional Status
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div class="row">
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  Any Difficulty With Current Functional Status:
                                </p>
                              </div>
                              <div class="col-md-4 inner_column"></div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  Any Difficulty With Self-Care Activities Such
                                  As:
                                </p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Bathing</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  Any Difficulty With Walking / Movement Such
                                  As:
                                </p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Bed Mobility</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  Any Difficulty With Home Management Such As:
                                </p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Care of Dependents</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  Any Difficulty With Community And Work
                                  Activities Such As:
                                </p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">Work</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right_content_inner">
                      <p
                        class="fs-5"
                        style={{
                          background:
                            "linear-gradient(45deg, #6f0734, transparent)",
                          padding: "1rem",
                          color: "white",
                          borderRadius: "30px 4px 4px 30px",
                        }}
                      >
                        Prior Functional Status
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <p
                          class="fs-5 fw-bold"
                          style={{ borderBottom: "1px solid" }}
                        >
                          Difficulty With Community And Work Activities Such As
                          (Your Status Prior To The Date Of Onset/Injury):
                        </p>
                        <div class="row">
                          <div class="col-md-12 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">Your Prior Status:</p>
                              </div>
                              <div class="col-md-4 inner_column">
                                <p class="fs-6">No</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  Prior to your current injury or condition,
                                  were you pain-free without any difficulty with
                                  locomotion/movement, self-care activities,
                                  home management, community, and work
                                  activities?
                                </p>
                              </div>
                              <div class="col-md-4 inner_column"></div>
                            </div>
                          </div>
                          <div class="col-md-6 main_column">
                            <div class="row">
                              <div class="col-md-8 inner_column">
                                <p class="fs-6 fw-bold">
                                  If No, Please Explain:
                                </p>
                              </div>
                              <div class="col-md-4 inner_column"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right_content_inner">
                      <p
                        class="fs-5"
                        style={{
                          background:
                            "linear-gradient(45deg, #6f0734, transparent)",
                          padding: "1rem",
                          color: "white",
                          borderRadius: "30px 4px 4px 30px",
                        }}
                      >
                        Family Medical History
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div class="row">
                          <div class="col-md-12 main_column">
                            <table class="table table-striped">
                              <thead class="table-dark">
                                <tr>
                                  <th scope="col">Sl.</th>
                                  <th scope="col">Relation</th>
                                  <th scope="col">Age (If Living)</th>
                                  <th scope="col">Age (If Death)</th>
                                  <th scope="col">Cause of Death</th>
                                  <th scope="col">Problems</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Grand Father</td>
                                  <td>0</td>
                                  <td>80</td>
                                  <td>Old Age</td>
                                  <td>Diabetes</td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td>Grand Father</td>
                                  <td>0</td>
                                  <td>80</td>
                                  <td>Old Age</td>
                                  <td>Diabetes</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer style={{ marginBottom: "1rem" }}>
            <p
              class="text-center"
              style={{
                background: "linear-gradient(45deg, #116aa1, #720330)",
                color: "white",
                padding: "1rem 0",
              }}
            >
              Thank You
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SubjectiveInformation;
SubjectiveInformation.getLayout = (SubjectiveInformation) => (
  <AuthLayout>{SubjectiveInformation}</AuthLayout>
);
