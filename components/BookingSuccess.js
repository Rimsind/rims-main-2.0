import Link from "next/link";
const BookingSuccess = (props) => {
  return (
    <>
      <div className="thank_you_main d-flex justify-content-center">
        <div className="thank_you_inner shadow-lg">
          <div className="container">
            <div className="success_icon text-center">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="success_content text-center mt-3">
              <p className="fs-4">Appointment Booked Successfully!</p>
              <p className="fs-6 lh-sm">
                Appointment booked with{" "}
                <b>
                  Dr. {props.doctorFirstName} {props.doctorLastName}
                </b>{" "}
              </p>
              <p className="fs-6 lh-sm">
                On{" "}
                <b>
                  {props.date} Time : {props.timeSlot}
                </b>
              </p>
              <p className="fs-6 lh-sm">
                Your Appointment Id - <b>{props.appointmentId}</b>
              </p>
            </div>
            <div className="scs_inv_btn text-center mt-5">
              <Link href="/">
                <a className="btn btn-primary">Back to Home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSuccess;
