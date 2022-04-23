import PathologySideBar from "components/common/PathologySideBar";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <section className="pathology-section">
        <div className="content mb-3">
          <div className="container-fluid">
            <div className="row">
              <PathologySideBar />
              <div className="col-md-12 col-lg-8 col-xl-9 col-xxl-9">
                <div className="dashboard-welcome-text">
                  <p className="fs-4 fw-bold">Welcome Haldia Pathology👋</p>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                    <div className="dashboard-card border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="dashboard-card-icon">
                            <Image
                              src="/assets/images/Regular-Bed.png"
                              height="50px"
                              width="50px"
                              alt="Regular Bed"
                            />
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="dashboard-card-main-title">
                            <p className="fs-6">Complete Blood Count (CBC)</p>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <p
                            className="badge bg-primary fw-lighter border border-1 border-secondary"
                            style={{ fontSize: "13px" }}
                          >
                            Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                    <div className="dashboard-card border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="dashboard-card-icon">
                            <Image
                              src="/assets/images/Regular-Bed.png"
                              height="50px"
                              width="50px"
                              alt="Regular Bed"
                            />
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="dashboard-card-main-title">
                            <p>Blood Sugar Test</p>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <p
                            className="badge bg-primary fw-lighter border border-1 border-secondary"
                            style={{ fontSize: "13px" }}
                          >
                            Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                    <div className="dashboard-card border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="dashboard-card-icon">
                            <Image
                              src="/assets/images/Regular-Bed.png"
                              height="50px"
                              width="50px"
                              alt="Regular Bed"
                            />
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="dashboard-card-main-title">
                            <p>Lipid Profile</p>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <p
                            className="badge bg-primary fw-lighter border border-1 border-secondary"
                            style={{ fontSize: "13px" }}
                          >
                            Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                    <div className="dashboard-card border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="dashboard-card-icon">
                            <Image
                              src="/assets/images/Regular-Bed.png"
                              height="50px"
                              width="50px"
                              alt="Regular Bed"
                            />
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="dashboard-card-main-title">
                            <p>Liver Function Test</p>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <p
                            className="badge bg-primary fw-lighter border border-1 border-secondary"
                            style={{ fontSize: "13px" }}
                          >
                            Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                    <div className="dashboard-card border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="dashboard-card-icon">
                            <Image
                              src="/assets/images/Regular-Bed.png"
                              height="50px"
                              width="50px"
                              alt="Regular Bed"
                            />
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="dashboard-card-main-title">
                            <p>Urine Analysis</p>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <p
                            className="badge bg-primary fw-lighter border border-1 border-secondary"
                            style={{ fontSize: "13px" }}
                          >
                            Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                    <div className="dashboard-card border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="dashboard-card-icon">
                            <Image
                              src="/assets/images/Regular-Bed.png"
                              height="50px"
                              width="50px"
                              alt="Regular Bed"
                            />
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="dashboard-card-main-title">
                            <p>Kidney Function Test</p>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <p
                            className="badge bg-primary fw-lighter border border-1 border-secondary"
                            style={{ fontSize: "13px" }}
                          >
                            Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                    <div className="dashboard-card border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="dashboard-card-icon">
                            <Image
                              src="/assets/images/Regular-Bed.png"
                              height="50px"
                              width="50px"
                              alt="Regular Bed"
                            />
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="dashboard-card-main-title">
                            <p>Thyroid Function Test</p>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <p
                            className="badge bg-danger fw-lighter border border-1 border-secondary"
                            style={{ fontSize: "13px" }}
                          >
                            Not Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                    <div className="dashboard-card border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="dashboard-card-icon">
                            <Image
                              src="/assets/images/Regular-Bed.png"
                              height="50px"
                              width="50px"
                              alt="Regular Bed"
                            />
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="dashboard-card-main-title">
                            <p>Test for Vitamin D Deficiency</p>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <p
                            className="badge bg-danger fw-lighter border border-1 border-secondary"
                            style={{ fontSize: "13px" }}
                          >
                            Not Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                    <div className="dashboard-card border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="dashboard-card-icon">
                            <Image
                              src="/assets/images/Regular-Bed.png"
                              height="50px"
                              width="50px"
                              alt="Regular Bed"
                            />
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="dashboard-card-main-title">
                            <p>Pap Smear Test (For Women)</p>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <p
                            className="badge bg-danger fw-lighter border border-1 border-secondary"
                            style={{ fontSize: "13px" }}
                          >
                            Not Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;