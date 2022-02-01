import Image from "next/image";
const SpecialityBlock = () => {
  return (
    <>
      <div className="col-md">
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Image
              height="100"
              width="100"
              src="/assets/images/specialities/specialities-01.png"
              className="img-fluid"
              alt="Speciality"
            />
            <span>
              <i className="fa fa-circle" aria-hidden="true"></i>
            </span>
          </div>
          <p>Urology</p>
        </div>
      </div>
    </>
  );
};

export default SpecialityBlock;
