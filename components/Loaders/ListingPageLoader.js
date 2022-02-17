const ListingPageLoader = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img list-card-img-loader-sec"></div>
              <div className="doc-info-cont">
                <p className="placeholder-glow left-doc-info-con-load-w">
                  <span className="placeholder col-8 bg-primary"></span>
                  <span className="placeholder col-12 bg-secondary"></span>
                  <span className="placeholder col-6 bg-secondary"></span>
                </p>
                <p className="placeholder-glow left-doc-info-con-load-w">
                  <span className="placeholder col-4 bg-secondary"></span>
                  <span className="placeholder col-8 bg-secondary"></span>
                </p>
              </div>
            </div>
            <div className="doc-info-right">
              <p className="placeholder-glow right-doc-info-con-load-w">
                <span className="placeholder col-8 bg-primary"></span>
                <span className="placeholder col-12 bg-secondary"></span>
                <span className="placeholder col-6 bg-secondary"></span>
              </p>

              <div className="clinic-booking">
                <a
                  href="#"
                  tabindex="-1"
                  className="btn btn-primary disabled placeholder col-4"
                  aria-hidden="true"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPageLoader;
