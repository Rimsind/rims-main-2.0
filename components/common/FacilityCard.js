const FacilityCard = (props) => {
  return (
    <>
      <div className="col-md">
        <div className="item">
          <div className="clinic-features">
            <img src={props.img} alt="" className="img-fluid" />
            <div className="clinic-feature-overlay">
              <a href="#" className="img-overlay">
                {props.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilityCard;
