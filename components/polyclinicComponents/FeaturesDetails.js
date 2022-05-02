const FeaturesDetails = ({ data }) => {
  return (
    <>
      <section className="poly-features">
        <div className="card">
          <div className="card-header">
            <p className="fs-5 fw-bold text-center lh-1">Features</p>
          </div>
          <div className="card-body">
            <div className="row align-items-baseline">
              <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                <div className="features-add-sec mb-3">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <p className="fs-6 fw-bold">Add Features</p>
                    </div>
                    <div className="col-4">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        // onChange={(e) => setFeatures(e.target.value)}
                      >
                        <option>Select Features</option>
                        <option value="Pharmacy">Pharmacy</option>
                        <option value="Patology">Patology</option>
                        <option value="Ambulance">Ambulance</option>
                        <option value="Radiology">Radiology</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <div className="features-add-btn text-start">
                        <button
                          className="btn btn-secondary"
                          // onClick={addFeatures}
                        >
                          Add Features
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                <div className="features-pill-item mt-4">
                  <div className="row align-items-center">
                    {data?.features?.map((items, index) => (
                      <div className="col" key={index}>
                        <p
                          className="badge fs-6 fw-light py-2 px-4"
                          style={{ backgroundColor: "#0001fbb8" }}
                        >
                          <a href="#">
                            <i className="fal fa-times me-2 text-light"></i>
                          </a>
                          {items?.feature_name}
                        </p>
                      </div>
                    ))}

                    {/* {allFeatures?.map((items, index) => (
                              <div className="col" key={index}>
                                <p
                                  className="badge fs-6 fw-light py-2 px-4"
                                  style={{ backgroundColor: "#0001fbb8" }}
                                >
                                  <a href="#">
                                    <i className="fal fa-times me-2 text-light"></i>
                                  </a>
                                  {items?.name}
                                </p>
                              </div>
                            ))} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="save-btn-poly mt-4 text-end">
              <button
                className="btn btn-primary"
                // onClick={submitFeatures}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesDetails;
