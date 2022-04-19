const ListPagination = () => {
  return (
    <>
      <div className="list-pagination">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-10"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-2">
            <div className="row aling-items-center">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start">
                <button className="btn btn-primary">
                  <i className="fal fa-long-arrow-left me-2"></i>Prev
                </button>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-end">
                <button className="btn btn-primary">
                  Next<i className="fal fa-long-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPagination;
