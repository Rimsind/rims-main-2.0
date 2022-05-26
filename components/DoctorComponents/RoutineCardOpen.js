const RoutineCardOpen = ({ startTime, endTime }) => {
  return (
    <>
      <span
        className="badge"
        style={{
          backgroundColor: "#0833ebb0",
          fontSize: "15px",
          fontWeight: "400",
          padding: "8px 15px",
        }}
      >
        Open
      </span>
      <p className="mt-1">
        {startTime} - {endTime}
      </p>
    </>
  );
};

export default RoutineCardOpen;
