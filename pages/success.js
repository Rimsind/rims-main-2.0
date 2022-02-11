import { BreadCrums } from "components/common";
import { useRouter } from "next/router";
import Link from "next/link";
const Success = () => {
  const { appointmentId, date, doctorFirstName, doctorLastName } =
    useRouter().query;

  if (!appointmentId || !date) {
    return (
      <div>
        <h2>Booking Unsuccesfull</h2>
      </div>
    );
  }
  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Thank You" title1="Thank You" />
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
                    Dr. {doctorFirstName} {doctorLastName}
                  </b>{" "}
                </p>
                <p className="fs-6 lh-sm">
                  On <b>{date} 5:00 P.M. to 6:00 P.M</b>
                </p>
                <p className="fs-6 lh-sm">
                  Your Appointment Id - <b>{appointmentId}</b>
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
      </main>
    </>
  );
};

export default Success;
