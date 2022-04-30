const TestCard = () => {
  return (
    <>
      <div className="card me-2">
        <div className="card-body">
          <div className="diag-test-card-inner-item">
            <h6 className="fs-5" style={{ color: "#427cc5" }}>
              Malaria Test
            </h6>
            <h6 className="text-black pt-2">Pre Test Information</h6>
            <p className="text-secondary">
              No special prparation is required for the test.
            </p>
            <h6 className="text-black pt-2">Report Delivery</h6>
            <p className="text-secondary">Same Day</p>
            <h6
              className="text-black pt-2"
              style={{
                fontSize: "18px",
                fontFamily: "roboto",
                fontWeight: "600",
              }}
            >
              Includes:
            </h6>
            <ul className="list-unstyled">
              <li>
                <i className="far fa-check me-1 text-secondary"></i>
                Blood Glucose
              </li>
              <li>
                <i className="far fa-check me-1 text-secondary"></i>
                Liver Functioning
              </li>
              <li>
                <i className="far fa-check me-1 text-secondary"></i>
                Heart Health
              </li>
            </ul>
            <h6
              className="mb-5"
              style={{
                fontSize: "30px",
                fontWeight: "500",
                fontFamily: "roboto",
              }}
            >
              ₹300
            </h6>
            <div className="test-card-btn-grp">
              <div className="row align-items-center">
                <div className="col-6">
                  <button
                    style={{
                      padding: "15px 8px",
                      border: "1px solid #000",
                      background: "white",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    View Details
                  </button>
                </div>
                <div className="col-6">
                  <button
                    style={{
                      padding: "15px 8px",
                      border: "1px solid #000",
                      background: "white",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCard;
