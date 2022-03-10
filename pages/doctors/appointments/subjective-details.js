import Link from "next/link";
const SubjectiveDetails = () => {
  return (
    <>
      <div
        className="page-wrapper"
        id="page-wrapper"
        style={{
          padding: "1.875rem 1.875rem 0",
        }}
      >
        {/* <BreadCrum title="Diagnosis" /> */}
        <p>Diagnosis</p>
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12 col-md-7"></div>
              <div className="col-md-5 col-sm-12">
                <div className="patient-btn-group d-flex justify-content-end">
                  <div className="btn-group-item me-2 shadow-sm">
                    <button className="btn btn-success">
                      Print Clinical Report
                    </button>
                  </div>
                  <div className="btn-group-item ms-2 shadow-sm">
                    <button className="btn btn-danger">
                      Print E-Prescription
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2">
              {/* <PatientDemographics patientInfo={data?.patient} /> */}
              <div className="card profile-sidebar patient-card shadow-sm">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <div className="patient-img text-center">
                      <img
                        src="../../user_assets/img/profile.png"
                        alt="User Image"
                      />
                    </div>
                    <div className="profile-det-info pt-2 ps-3 text-center">
                      <p className="fs-5">Prasenjit kamila</p>
                      <div className="patient-details">
                        <p className="text-success fs-6 fw-bold">ID- #1097</p>
                      </div>
                    </div>
                    <div className="profile-inner-con">
                      <div className="inner-item d-flex justify-content-between px-3">
                        <div className="profile-item-inner">
                          <p className="text-muted">Gender</p>
                        </div>
                        <div className="profile-item-inner">
                          <p className="fw-bold">Other</p>
                        </div>
                      </div>
                      <div className="inner-item d-flex justify-content-between px-3">
                        <div className="profile-item-inner">
                          <p className="text-muted">Age</p>
                        </div>
                        <div className="profile-item-inner">
                          <p className="fw-bold">20</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <AllergyCard /> */}
              <div className="card profile-sidebar patient-card shadow-sm">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <div className="profile-det-info px-3 pt-2">
                      <p className="spcl-para fs-5 text-muted">Allergies</p>
                    </div>
                    <div className="profile-inner-con">
                      <div className="inner-item d-flex justify-content-between px-3">
                        <div className="profile-item-inner">
                          <p className="text-muted">Penicillin</p>
                        </div>
                        <div className="profile-item-inner">
                          <p className="fw-bold text-danger">High</p>
                        </div>
                      </div>
                      <div className="inner-item d-flex justify-content-between px-3">
                        <div className="profile-item-inner">
                          <p className="text-muted">Tilorone</p>
                        </div>
                        <div className="profile-item-inner">
                          <p className="fw-bold text-info">Medium</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <NotesCard /> */}
              <div className="card profile-sidebar patient-card shadow-sm">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <div className="profile-det-info px-3 pt-2">
                      <p className="fs-5 text-muted">Notes</p>
                    </div>
                    <div className="profile-inner-con">
                      <p className="text-muted fs-6 ps-3 pe-3">
                        Knee pain, Headeches, Last time he looked sick
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-10 col-xl-10">
              <div className="card">
                <div className="card-header">
                  <div className="custom-tab row align-items-center">
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div
                        className="tablinks diag-inner-content bg-primary pt-4 pb-1 text-center active"
                        id="defaultOpen"
                      >
                        <p className="fs-5 fw-bold text-light">
                          Subjective Informtion
                        </p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="tablinks diag-inner-content bg-primary pt-4 pb-1 text-center">
                        <Link
                          href={`/doctors/appointments/clinical-examination`}
                        >
                          <p className="fs-5 fw-bold text-light">
                            Clinical Assesment
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tabcontent" id="subjective">
                    <div className="card-header border-bottom">
                      <ul
                        role="tablist"
                        className="nav nav-tabs card-header-tabs"
                      >
                        <li className="nav-item">
                          <a
                            href="#tab-8"
                            data-bs-toggle="tab"
                            className="nav-link active"
                          >
                            Chief Complaints
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-1"
                            data-bs-toggle="tab"
                            className="nav-link "
                          >
                            General Information
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-2"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Social Histroy & Living Environment
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-3"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Employment Status
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-4"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Medical History
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-5"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Functional Status
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-6"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Family Medical History
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-7"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Past Medical Records
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content pt-0">
                        <div
                          role="tabpanel"
                          id="tab-8"
                          className="tab-pane fade show active"
                        >
                          {/* <CheifComplaints appointmentId={id} /> */}
                          <p>Cheif Complaints</p>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-1"
                          className="tab-pane fade  "
                        >
                          {/* <GeneralInfo
                            patientId={data?.patient?.id}
                            generalInformation={
                              data?.patient?.generalInformation
                            }
                          /> */}
                          <p>General Info</p>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-2"
                          className="tab-pane fade"
                        >
                          {/* <SocialHistory
                            patientId={data?.patient?.id}
                            socialHistory={data?.patient?.socialHistory}
                          /> */}
                          <p>Social History</p>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-3"
                          className="tab-pane fade"
                        >
                          {/* <EmploymentStatus
                            patientId={data?.patient?.id}
                            employmentStatus={data?.patient?.employmentStatus}
                          /> */}
                          <p>Employment Status</p>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-4"
                          className="tab-pane fade"
                        >
                          {/* <MedicalHistory
                            patientId={data?.patient?.id}
                            medicalHistory={data?.patient?.medicalHistory}
                          /> */}
                          <p>Medical History</p>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-5"
                          className="tab-pane fade"
                        >
                          {/* <FunctionalStatus
                            patientId={data?.patient?.id}
                            functionalStatus={data?.patient?.functionalStatus}
                          /> */}
                          <p>Functional Status</p>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-6"
                          className="tab-pane fade"
                        >
                          {/* <FamilyHistory
                            patientId={data?.patient?.id}
                            familyHistory={data?.patient?.familyHistory}
                          /> */}
                          <p>Family History</p>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-7"
                          className="tab-pane fade"
                        >
                          {/* <MedicalRecords patientId={data?.patient?.id} /> */}
                          <p>Medical Records</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="tabcontent" id="assesment">
                    <div className="card shadow-sm">
                      <div className="card flex-fill">
                        <div className="card-header">
                          <ul
                            role="tablist"
                            className="nav nav-tabs card-header-tabs"
                          >
                            <li className="nav-item">
                              <a
                                href="#tab-11"
                                data-bs-toggle="tab"
                                className="nav-link active"
                              >
                                General Information
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-12"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Social Histroy & Living Environment
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-13"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Employment Status
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-14"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Past Medical History
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-15"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Current Functional Status
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-16"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Family Medical History
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-17"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Past Medical Records
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <div className="tab-content pt-0">
                            <div
                              role="tabpanel"
                              id="tab-11"
                              className="tab-pane fade show active"
                            >
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Race / Ethnicity -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Asian</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Language -</p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">English</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Highest Level of Edcuation -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Master Degree</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Hand Foot Dominance -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Right</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-12"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Where Do You Live?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Private Home</p>
                                      <p className="fs-6">Rented Home</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        With Whom Do You Live?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Alone</p>
                                      <p className="fs-6">Relative(s)</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Does Your Home Have?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">One Level</p>
                                      <p className="fs-6">Two Level</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        How Many Steps?
                                      </p>
                                    </div>
                                    <div className="item d-flex">
                                      <div className="item-inner me-3">
                                        <p className="fs-6 fw-bold">
                                          No. Steps Outside The Home -
                                        </p>
                                      </div>
                                      <div className="item-inner">
                                        <p>2</p>
                                      </div>
                                    </div>
                                    <div className="item d-flex">
                                      <div className="item-inner me-3">
                                        <p className="fs-6 fw-bold">
                                          No. Steps Inside The Home -
                                        </p>
                                      </div>
                                      <div className="item-inner">
                                        <p>2</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Do You Use?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Forearm Crutches</p>
                                      <p className="fs-6">Axillary Crutches</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Cultural / Religious
                                  </p>
                                  <div className="row">
                                    <div className="col-md-5">
                                      <div className="item">
                                        <p className="fs-6 fw-bold">
                                          Any cultural or religious beliefs or
                                          wishes that might affect care?
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="item-inner">
                                        <p className="fs-6">
                                          Some quick example text to build on
                                          the card title and make up the bulk of
                                          the card&apos;s content. Some quick
                                          example text to build on the card
                                          title and make up the bulk of the
                                          card&apos;s content.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Social / Health Habits
                                  </p>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Do You Smoke Tobacco?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">No</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Do You Drink Alchohol?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">No</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Excercise?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            If yes how many times per week?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">10</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            How many minutes per day?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">20</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-13"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Work Status -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Work Full Time</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Occupation -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Businessman</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Your Work Involves (Check All That
                                        Apply)
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Prolonged Standing</p>
                                      <p className="fs-6">
                                        Working with bent neck
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-14"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="inner-item">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Past Medical History - Please Check If
                                        Anyone In Your Family Has Or Had Any Or
                                        The Following:
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Diabetes</p>
                                      <p className="fs-6">Genetic Disease</p>
                                      <p className="fs-6">Pacemaker</p>
                                      <p className="fs-6">AIDS</p>
                                      <p className="fs-6">Anemia</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-6 fw-bold">
                                    Past Medical History - For Women Only:
                                  </p>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Pelvic Inflammatory Disease -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Trouble with Period -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Complicated Pregnancies -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Pregnant -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Endometriosis -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Any Other -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">
                                            Hello I am Fine
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-6 fw-bold">
                                    Surgical History – Please List Any Surgeries
                                    You Had, And If Known Include Dates:
                                  </p>
                                  <table className="table">
                                    <thead className="table-info table-striped table-bordered">
                                      <tr>
                                        <th>Title</th>
                                        <th>Date</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>First</td>
                                        <td>2022-01-18</td>
                                      </tr>
                                      <tr>
                                        <td>Second</td>
                                        <td>2022-01-14</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="col-md-12 mt-3">
                                  <div className="inner-item">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Diagnostic Test/Measures - Within The
                                        Past Year, Have You Had Any Of The
                                        Following (Check All That Apply):
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Bronchoscopy</p>
                                      <p className="fs-6">
                                        EMG/Nerve Conduction
                                      </p>
                                      <p className="fs-6">Angiogram</p>
                                      <p className="fs-6">Stool Test</p>
                                      <p className="fs-6">CT scan</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-6 fw-bold">
                                    Medications & Allergies – Please Check Or
                                    List All Medications Or Allergies:
                                  </p>
                                  <table className="table">
                                    <thead className="table-info table-striped table-bordered">
                                      <tr>
                                        <th>Medicine Name</th>
                                        <th>Medicine Dose</th>
                                        <th>Start Date</th>
                                        <th>Status</th>
                                        <th>Type</th>
                                        <th>Route</th>
                                        <th>Frequency</th>
                                        <th>Any Side Effect</th>
                                        <th>If Yes</th>
                                        <th>Allergies</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Cipcal</td>
                                        <td>500</td>
                                        <td>13/01/2022</td>
                                        <td>Continue</td>
                                        <td>Prescribed</td>
                                        <td>Oral</td>
                                        <td>2 times per day</td>
                                        <td>Yes</td>
                                        <td>Headech</td>
                                        <td>Rashes</td>
                                      </tr>
                                      <tr>
                                        <td>Cipcal</td>
                                        <td>500</td>
                                        <td>13/01/2022</td>
                                        <td>Continue</td>
                                        <td>Prescribed</td>
                                        <td>Oral</td>
                                        <td>2 times per day</td>
                                        <td>Yes</td>
                                        <td>Headech</td>
                                        <td>Rashes</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-15"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Any Difficulty With Current Functional
                                    Mobility
                                  </p>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Bed Mobility
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Transfers (Such As Bed To Chair,
                                            From Bed To Commode / Toilet)
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Any Difficulty With Walking / Movement Such
                                    As
                                  </p>
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            On Ramps
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Gai (Walking)
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            On Level Surfaces
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            On Stairs
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            On Uneven Surfaces
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Any Difficulty With Self-Care Activities
                                    Such As
                                  </p>
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Bathing
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Dressing
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Toileting
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Any Difficulty With Home Management Such As
                                  </p>
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Household Chores
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Shopping
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Driving / Transporting
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Care Of Dependents
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Any Difficulty With Community And Work
                                    Activities Such As
                                  </p>
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">Work</p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">School</p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Recreation
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">Sport</p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Play Activities
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-16"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <table className="table">
                                    <thead className="table-info table-striped table-bordered">
                                      <tr>
                                        <th>Relation</th>
                                        <th>Age (If Living)</th>
                                        <th>Age (If Death)</th>
                                        <th>Cause of Death</th>
                                        <th>Problems</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Brother</td>
                                        <td>56</td>
                                        <td>0</td>
                                        <td>NA</td>
                                        <td>High Blood Pressure</td>
                                      </tr>
                                      <tr>
                                        <td>Brother</td>
                                        <td>56</td>
                                        <td>0</td>
                                        <td>NA</td>
                                        <td>High Blood Pressure</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-17"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <table className="table">
                                    <thead className="table-info table-striped table-bordered">
                                      <tr>
                                        <th>Title</th>
                                        <th>Relation</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Test 1</td>
                                        <td>View</td>
                                      </tr>
                                      <tr>
                                        <td>Test 2</td>
                                        <td>View</td>
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectiveDetails;
