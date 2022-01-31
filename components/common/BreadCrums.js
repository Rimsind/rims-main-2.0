const BreadCrums = (props) => {
  return (
    <>
      {" "}
      <div className="page_content">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8">
              <p className="fs-6">{props.title}</p>
              <p className="fs-5 fw-bold">{props.title1}</p>
            </div>
            <div className="col-md-4 col-12 d-md-block d-none">
              <div className="sort_by">
                <span className="sort_title">Sort by</span>
                <span className="sortby_fliter">
                  <select className="form-select">
                    <option>Select</option>
                    <option className="sorting">Rating</option>
                    <option className="sorting">Popular</option>
                    <option className="sorting">Latest</option>
                    <option className="sorting">Free</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrums;
