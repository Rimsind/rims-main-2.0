const ListPagination = () => {
  return (
    <>
      <div className="list-pagination">
        <div className="row">
          <div className="col-4 col-md-4  col-lg-4 col-xl-10 col-xxl-10"></div>
          <div className="col-8 col-md-8 col-lg-8 col-xl-2 col-xxl-2 text-center text-lg-end text-xl-end text-xxl-end">
            <div className="row aling-items-center">
              <div className="col-6 ">
                <button className="btn btn-primary">
                  <i className="fal fa-long-arrow-left me-2"></i>Prev
                </button>
              </div>
              <div className="col-6">
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
