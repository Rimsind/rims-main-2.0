const SpecialityBlock = ({ specialties }) => {
  return (
    <>
      <div className="col-md">
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <img
              src={specialties?.image?.url}
              className="img-fluid"
              alt="Speciality"
            />
            <span>
              <i className="fa fa-circle" aria-hidden="true"></i>
            </span>
          </div>
          <p>{specialties?.name}</p>
        </div>
      </div>
    </>
  );
};

export default SpecialityBlock;
