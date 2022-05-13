import Image from "next/image";

const DiagnosticsCategory = (props) => {
  return (
    <>
      <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
        <div className="speicality-item text-center">
          <div className="">
            <Image
              src={props.url}
              className="img-fluid"
              width="100px"
              height="100px"
              alt={props.title}
            />
          </div>
          <p>{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default DiagnosticsCategory;
