import { BreadCrums } from "components/common";
import { useRouter } from "next/router";
import Link from "next/link";
import BookingSuccess from "components/BookingSuccess";
import BookingFailed from "components/BookingFailed";
const Success = () => {
  const { appointmentId, date, timeSlot, doctorFirstName, doctorLastName } =
    useRouter().query;

  if (!appointmentId || !date || !timeSlot) {
    var bookingStatus = "failed";
  } else {
    var bookingStatus = "success";
  }
  console.log(bookingStatus);
  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Thank You" title1="Thank You" />

        {bookingStatus === "success" ? (
          <BookingSuccess
            doctorFirstName={doctorFirstName}
            doctorLastName={doctorLastName}
            date={date}
            timeSlot={timeSlot}
            appointmentId={appointmentId}
          />
        ) : (
          <BookingFailed />
        )}
      </main>
    </>
  );
};

export default Success;
