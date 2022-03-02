import Link from "next/link";
const BookingFailed = () => {
  return (
    <>
      <div className="thank_you_main d-flex justify-content-center">
        <div className="thank_you_inner shadow-lg">
          <div className="container">
            <div className="danger_icon text-center">
              <i className="fas fa-times-circle"></i>
            </div>
            <div className="success_content text-center mt-3">
              <p className="fs-4">Appointment Booking Failed!</p>
              <p className="fs-6 lh-sm">
                Booking Failed due to some reasons please try again.{" "}
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

export default BookingFailed;
