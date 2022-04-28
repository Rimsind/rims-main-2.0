import { BreadCrums } from "components/common/index";
import Image from "next/image";

const Details = () => {
  return (
    <>
      <section className="section-diag-details">
        <main className="main">
          <BreadCrums
            title="Home / Diagnostic-Center-Details"
            title1="Diagnostic Center Details"
          />
          <div className="content">
            <div className="container">
              <div className="diag-center-banner">
                <div className="diag-center-banner-img">
                  <div
                    className="doctor-left-profile-inner"
                    style={{
                      background:
                        "url(/assets/images/banner-diagonostic-center.jpg)",
                      position: "relative",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                      borderStyle: "solid",
                      borderWidth: "2px",
                      borderImage: "linear-gradient(45deg, red, blue) 1",
                    }}
                  >
                    <div
                      className="doc-lft-prof"
                      style={{
                        position: "absolute",
                        marginTop: "220px",
                        marginLeft: "583px",
                      }}
                    >
                      <Image
                        height="140"
                        width="140"
                        src={"/assets/images/alternate/doctor-male.png"}
                        style={{
                          height: "15rem",
                          background: "#0b6ea5",
                          padding: "10px",
                        }}
                        className="img-fluid border border-1 rounded-circle bg-light"
                        alt="User Image"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="diag-center-banner-info text-center"
                  style={{ marginTop: "70px" }}
                >
                  <h6 className="fs-4 fw-bold text-info">
                    Apollo Diagnostics Center
                  </h6>
                </div>
                <div className="diag-center-banner-sub-info text-center">
                  <h6 className="fs-6 fst-italic text-secondary">
                    City Center, Haldia, WB, India
                  </h6>
                  <h6 className="fs-6 text-muted">
                    <span className="text-info">
                      <i className="fas fa-mobile"></i>
                    </span>
                    <span className="text-secondary ms-2">
                      +91 8945 9632 52
                    </span>
                  </h6>
                </div>
                <div className="diag-center-faclt"></div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Details;
