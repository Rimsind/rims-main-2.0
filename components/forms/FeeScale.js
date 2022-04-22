import React from "react";

const FeeScale = () => {
  return (
    <>
      <div className="card">
        <div className="card-header fs-6 fw-bold">Fee Scale</div>
        <div className="card-body">
          <form className="form-inline">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="mb-3">
                  <label>Minimum:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ex: ₹200"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="mb-3">
                  <label>Maximum:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ex: ₹500"
                  />
                </div>
              </div>
            </div>
            <div className="submit-section text-end">
              <input
                type="submit"
                className="btn btn-primary submit-btn"
                value="Save Changes"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeeScale;
