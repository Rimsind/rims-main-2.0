const FeatureIcon = (props) => {
  return (
    <>
      {" "}
      <div className="col-md">
        <div className="feature-item text-center">
          <img src={props.img} className="img-fluid" alt="Feature" />
          <p>{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureIcon;
