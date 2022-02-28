const ListPagination = () => {
  return (
    <>
      <div className="list-pagination">
        <div className="row">
          <div className="col-lg-10"></div>
          <div className="col-2">
            <div className="row">
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
