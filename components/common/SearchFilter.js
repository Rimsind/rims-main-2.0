const SearchFilter = () => {
  return (
    <>
      <div className="card search-filter">
        <div className="card-header">
          <h4 className="card-title mb-0">Search Filter</h4>
        </div>
        <div className="card-body">
          <div className="filter-widget">
            <h4>Gender</h4>
            <div className="row">
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Male Doctor
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Female Doctor
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-widget">
            <h4>Select Specialist</h4>
            <div className="row">
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Urology
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Neurology
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Dentist
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Orthopedic
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Cardiologist
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Heart Specialist
                  </label>
                </div>
              </div>
            </div>
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

export default SearchFilter;
