const RoutineCardOpen = ({ startTime, endTime }) => {
  return (
    <>
      <div className="doctor-location-items text-center">
        <div className="row align-items-center">
          <div className="col-6">
            <span
              className="fs-6"
              style={{ color: "#1d00a3", fontWeight: "500" }}
            >
              From
            </span>
            <p className="fs-6 text-dark" style={{ fontWeight: "500" }}>
              {startTime}
            </p>
          </div>
          <div className="col-6">
            <span
              className="fs-6"
              style={{ color: "#1d00a3", fontWeight: "500" }}
            >
              To
            </span>
            <p className="fs-6 text-dark" style={{ fontWeight: "500" }}>
              {endTime}
            </p>
          </div>
        </div>
        {/* <div className="row align-items-center">
          <div className="col-6">
            <p className="fs-6 text-dark" style={{ fontWeight: "500" }}>
              <i
                className="far fa-money-bill me-1"
                style={{ color: "#1d00a3" }}
              ></i>
              - ₹500
            </p>
          </div>
          <div className="col-6">
            <p className="fs-6 text-dark" style={{ fontWeight: "500" }}>
              <i
                className="far fa-loveseat me-1"
                style={{ color: "#1d00a3" }}
              ></i>
              - 100
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default RoutineCardOpen;
