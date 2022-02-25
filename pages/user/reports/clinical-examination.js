import AuthLayout from "components/layout/AuthLayout";
import { useRouter } from "next/router";
import { useAuth } from "context";
import useSWR from "swr";
import { apiUrl } from "config/api";
const ClinicalExamination = () => {
  const { id } = useRouter().query;

  const { auth } = useAuth();

  const { data: appointment } = useSWR(
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
                  Clinical Examination Report
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
                        src={
                          appointment?.patient?.image?.url ||
                          "/assets/images/profile.png"
                        }
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
                          <p>
                            Name : {appointment?.patient?.first_name}{" "}
                            {appointment?.patient?.last_name}
                          </p>
                          <p>
                            Material Status :{" "}
                            {appointment?.patient?.marital_status}
                          </p>
                          <p>
                            Blood Group : {appointment?.patient?.blood_group}
                          </p>
                          <p>Date of Birth : {appointment?.patient?.dob}</p>
                          <p>Gender : {appointment?.patient?.gender}</p>
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
                          <p>
                            Dr. {appointment?.doctor?.firstName}{" "}
                            {appointment?.doctor?.lastName}
                          </p>
                          <p>
                            Qualification: {appointment?.doctor?.qualification}
                          </p>
                          <p>
                            Specialization: {appointment?.doctor?.specialty}
                          </p>
                          <p>Clinic Name: {appointment?.polyclinic?.name}</p>
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
                        Chief Complaints with Duration
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div
                          class="patient_details_inner"
                          style={{ marginLeft: "2rem" }}
                        >
                          <div class="row">
                            <div class="col-md-12 main_column mb-5">
                              <table class="table table-striped">
                                <thead class="table-dark">
                                  <tr>
                                    <th scope="col">Sl.</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Duration</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {appointment?.chiefComplaints.map(
                                    (items, index) => (
                                      <tr key={index}>
                                        <th scope="row">*</th>
                                        <td>{items?.description}</td>
                                        <td>{items?.duration}</td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                              <p
                                class="fs-5 fw-bold"
                                style={{ borderBottom: "1px solid white" }}
                              >
                                Additional Chief Complaint
                              </p>
                              <div class="patient_details_inner">
                                {appointment?.general_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    General Problem:{" "}
                                    {appointment?.general_problems}
                                  </p>
                                )}
                                {appointment?.genetal_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Genital Problem :{" "}
                                    {appointment?.genetal_problems}
                                  </p>
                                )}
                                {appointment?.heart_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Heart Related Problems :{" "}
                                    {appointment?.heart_problems}
                                  </p>
                                )}
                                {appointment?.joint_related_problems ===
                                "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Joint Related Problems :{" "}
                                    {appointment?.joint_related_problems}
                                  </p>
                                )}
                                {appointment?.mental_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Mental Problems :{" "}
                                    {appointment?.mental_problems}
                                  </p>
                                )}
                                {appointment?.neuro_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Neurologic Problems :{" "}
                                    {appointment?.neuro_problems}
                                  </p>
                                )}
                                {appointment?.stomach_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Stomach & Abdominal Problems :{" "}
                                    {appointment?.stomach_problems}
                                  </p>
                                )}
                                {appointment?.blood_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Stomach & Abdominal Problems :{" "}
                                    {appointment?.blood_problems}
                                  </p>
                                )}
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
                        Clinical Investigation
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div class="row">
                          <div class="col-md-12 main_column">
                            <p>
                              {appointment?.assesment?.clinicalInvestigation}
                            </p>
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
                        Medical Diagnosis
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div
                          class="patient_details_inner"
                          style={{ marginLeft: "2rem" }}
                        >
                          <div class="row">
                            <div class="col-md-12 main_column mb-5">
                              <table class="table table-striped">
                                <thead class="table-dark">
                                  <tr>
                                    <th scope="col">Sl.</th>
                                    <th scope="col">ICD 10 Code</th>
                                    <th scope="col">Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {appointment?.assesment?.diagnosis.map(
                                    (items, index) => (
                                      <tr key={index}>
                                        <th scope="row">*</th>
                                        <td>{items?.icd10}</td>
                                        <td>{items?.description}</td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
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
                        Treatment Plan
                      </p>
                      <div
                        class="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div class="col-md-12 main_column">
                          <p>{appointment?.assesment?.treatmentPlan}</p>
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

export default ClinicalExamination;

ClinicalExamination.getLayout = (ClinicalExamination) => (
  <AuthLayout>{ClinicalExamination}</AuthLayout>
);
