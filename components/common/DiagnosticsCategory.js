import Image from "next/image";

const DiagnosticsCategory = (props) => {
  return (
    <>
      <div className="col-2">
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
