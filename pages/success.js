import { BreadCrums } from "components/common";
import { useRouter } from "next/router";
import Link from "next/link";
import BookingSuccess from "components/BookingSuccess";
import BookingFailed from "components/BookingFailed";
const Success = () => {
  const {
    appointmentId,
    date,
    doctorFirstName,
    doctorLastName,
    paymentId,
    orderId,
    signature,
    paymentType,
  } = useRouter().query;

  if (!appointmentId) {
    var bookingStatus = "failed";
  } else {
    var bookingStatus = "success";
  }

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Thank You" title1="Thank You" />

        {bookingStatus === "success" ? (
          <BookingSuccess
            doctorFirstName={doctorFirstName}
            doctorLastName={doctorLastName}
            date={date}
            // timeSlot={timeSlot}
            appointmentId={appointmentId}
            paymentId={paymentId}
            orderId={orderId}
            signature={signature}
            paymentType={paymentType}
          />
        ) : (
          <BookingFailed />
        )}
      </main>
    </>
  );
};

export default Success;
