import Link from "next/link";
const TestCard = ({ data, clinicId }) => {
  return (
    <>
      <div className="card me-2">
        <div className="card-body">
          <div className="diag-test-card-inner-item">
            <h6 className="fs-5" style={{ color: "#427cc5" }}>
              {data?.name}
            </h6>
            <h6 className="text-black pt-2">Pre Test Information</h6>
            <p className="text-secondary">{data?.pre_test_info}</p>
            <h6 className="text-black pt-2">Report Delivery</h6>
            <p className="text-secondary">{data?.report_delivery}</p>
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
              {data?.test_includes?.map((items, index) => (
                <li key={index}>
                  <i className="far fa-check me-1 text-secondary"></i>
                  {items?.items}
                </li>
              ))}
            </ul>
            <h6
              className="mb-5"
              style={{
                fontSize: "30px",
                fontWeight: "500",
                fontFamily: "roboto",
              }}
            >
              ₹{data?.price}
            </h6>
            <div className="test-card-btn-grp">
              <div className="row align-items-center">
                <div className="col-6">
                  <Link
                    href={`/diagnostics/test-list/details?testId=${data?.id}&&clinicId=${clinicId}`}
                  >
                    <a
                      style={{
                        padding: "15px 8px",
                        border: "1px solid #000",
                        background: "white",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      View Details
                    </a>
                  </Link>
                </div>
                <div className="col-6">
                  <a
                    style={{
                      padding: "15px 8px",
                      border: "1px solid #000",
                      background: "white",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Book Now
                  </a>
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
