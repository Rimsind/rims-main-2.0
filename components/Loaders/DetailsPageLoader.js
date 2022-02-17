const DetailsPageLoader = () => {
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
                <span className="placeholder col-8 bg-secondary"></span>
                <span className="placeholder col-12 bg-secondary"></span>
                <span className="placeholder col-6 bg-secondary"></span>
                <span className="placeholder col-12 bg-secondary"></span>
              </p>
              <div className="doctor-action">
                <a
                  href="#"
                  tabIndex="-1"
                  className="btn btn-white disabled placeholder"
                  aria-hidden="true"
                >
                  <i className="far fa-bookmark"></i>
                </a>

                <a
                  href="#"
                  tabIndex="-1"
                  className="btn btn-white disabled placeholder"
                  aria-hidden="true"
                >
                  <i className="far fa-comment-alt"></i>
                </a>

                <a
                  href="#"
                  tabIndex="-1"
                  className="btn btn-white disabled placeholder"
                  aria-hidden="true"
                >
                  <i className="fas fa-phone"></i>
                </a>

                <a
                  href="#"
                  tabIndex="-1"
                  className="btn btn-white disabled placeholder"
                  aria-hidden="true"
                >
                  <i className="fas fa-video"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card details_tab">
        <div className="card-body pt-0 card-body-tab-sec">
          <div className="loader-sec-big"></div>
        </div>
      </div>
    </>
  );
};

export default DetailsPageLoader;
