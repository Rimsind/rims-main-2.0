import Link from "next/link";
import {
  RoutineCardClosed,
  RoutineCardOpen,
} from "components/DoctorComponents";

const DoctorTimetableCard = ({ data, doctorId }) => {
  console.log(data);
  if (data.polyclnic !== null) {
    var clinicId = data?.polyclinic?.id;
    var clinicType = "polyclinics";
    console.log("polyclinic");
  }
  if (data?.hospital !== null) {
    var clinicId = data?.hospital?.id;
    var clinicType = "hospitals";
    console.log("hospital");
  }
  if (data?.nursing_home !== null) {
    var clinicId = data?.nursing_home?.id;
    var clinicType = "nursing-homes";
    console.log("nursing-home");
  }
  return (
    <>
      <tbody>
        <tr>
          <td className="py-2">
            <h4 className="doc-name fs-5">
              <a href="doctor-profile.html">
                <i className="fas fa-hospital me-1"></i>
                {data?.polyclinic?.name ||
                  data?.nursing_home?.name ||
                  data?.hospital?.name}
              </a>
            </h4>
            <p className="doc-speciality text-dark">
              <i className="fas fa-map-marker-alt"></i>{" "}
              {data?.polyclinic?.street_address ||
                data?.hospital?.street_address ||
                data?.nursing_home?.street_address}
              ,<br />
              {data?.polyclinic?.city ||
                data?.hospital?.city ||
                data?.nursing_home?.city}
            </p>
          </td>

          <td className="text-center">
            {!!data?.routine?.monday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.monday_start_time}
                endTime={data?.routine?.monday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td className="text-center">
            {!!data?.routine?.tuesday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.tuesday_start_time}
                endTime={data?.routine?.tuesday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td className="text-center">
            {!!data?.routine?.wednesday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.wednesday_start_time}
                endTime={data?.routine?.wednesday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td className="text-center">
            {!!data?.routine?.thursday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.thursday_start_time}
                endTime={data?.routine?.thursday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td className="text-center">
            {!!data?.routine?.friday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.friday_start_time}
                endTime={data?.routine?.friday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td className="text-center">
            {!!data?.routine?.saturday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.saturday_start_time}
                endTime={data?.routine?.saturday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td className="text-center">
            {!!data?.routine?.sunday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.sunday_start_time}
                endTime={data?.routine?.sunday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td className="text-center">
            <p className="fs-6 text-dark" style={{ fontWeight: "500" }}>
              <i
                className="far fa-money-bill me-1"
                style={{ color: "#1d00a3" }}
              ></i>
              - ₹ {data?.fee}
            </p>
            <Link
              href={`/booking-slots?doctorId=${doctorId}&&clinicType=${clinicType}&&clinicId=${clinicId}&&timeTableId=${data?.id}&&fee=${data?.fee}`}
            >
              <a
                className="btn text-light fs-6 px-4 px-sm-4 px-md-4 px-lg-2 px-xl-2 px-xxl-4"
                style={{ backgroundColor: "#1d00a3" }}
              >
                Book Now
              </a>
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default DoctorTimetableCard;
