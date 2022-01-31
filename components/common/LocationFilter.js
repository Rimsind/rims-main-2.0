const LocationFilter = () => {
  return (
    <>
      {" "}
      <div className="card search-filter">
        <div className="card-header">
          <h4 className="card-title mb-0">Location Filter</h4>
        </div>
        <div className="card-body">
          <div className="filter-widget">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="filter-widget">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="btn-search">
            <button type="button" className="btn w-100">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationFilter;
