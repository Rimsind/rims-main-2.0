const SpecialtyLoader = () => {
  return (
    <>
      <div className="speicality-item text-center">
        <div className="speicality-img loading-spec">
          <div className="loader-sec"></div>
          <span>
            <i className="fa fa-circle" aria-hidden="true"></i>
          </span>
        </div>
        <p className="placeholder-glow">
          <span className="placeholder col-12 bg-primary"></span>
          <span className="placeholder col-6 bg-success"></span>
          <span className="placeholder col-4 bg-success"></span>
        </p>
      </div>
    </>
  );
};

export default SpecialtyLoader;
