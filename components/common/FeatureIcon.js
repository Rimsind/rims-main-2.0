import Image from "next/image";
const FeatureIcon = (props) => {
  return (
    <>
      <div className="col-md">
        <div className="feature-item text-center">
          <Image
            height={500}
            width={500}
            src={props.img}
            className="img"
            alt="Feature"
          />
          <p>{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureIcon;
