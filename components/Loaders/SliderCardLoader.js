const SliderCardLoader = () => {
  return (
    <>
      <div className="profile-widget me-3">
        <div className="doc-img card-img-loader-sec"></div>
        <div className="pro-content">
          <p className="placeholder-glow">
            <span className="placeholder col-8 bg-primary"></span>
            <span className="placeholder col-12 bg-secondary"></span>
            <span className="placeholder col-6 bg-secondary"></span>
          </p>
          <p className="placeholder-glow">
            <span className="placeholder col-9 bg-warning"></span>
            <span className="placeholder col-7 bg-secondary"></span>
            <span className="placeholder col-8 bg-secondary"></span>
            <span className="placeholder col-4 bg-secondary"></span>
          </p>

          <div className="row row-sm">
            <div className="col-12">
              <a
                href="#"
                tabindex="-1"
                className="btn btn-primary disabled placeholder col-12"
                aria-hidden="true"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCardLoader;
