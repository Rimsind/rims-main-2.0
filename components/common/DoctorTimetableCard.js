import Image from "next/image";
import Link from "next/link";
import {
  RoutineCardClosed,
  RoutineCardOpen,
} from "components/DoctorComponents";

const DoctorTimetableCard = ({ data, doctorId, indexValue }) => {
  console.log(data);
  if (indexValue % 2 === 0) {
    var color = "#abd5ff";
  } else {
    var color = "#abd5ff91";
  }

  return (
    <>
      <tbody>
        <tr>
          <td className="py-2">
            <Image
              className="border border-2 border-primary rounded"
              height={50}
              width={50}
              src={
                data?.polyclinic?.image?.url ||
                data?.hospital?.image?.url ||
                data?.nursing_home?.image?.url
              }
              alt="Polyclinic Image"
            />
            <h4 className="doc-name fs-5">
              <a href="doctor-profile.html">
                {data?.polyclinic?.name ||
                  data?.hursing_home?.name ||
                  data?.hospital?.name}
              </a>
            </h4>
            <p className="doc-speciality text-dark">
              {data?.polyclinic?.street_address ||
                data?.hospital?.street_address ||
                data?.nursing_home?.street_address}
              ,<br />
              {data?.polyclinic?.city ||
                data?.hospital?.city ||
                data?.nursing_home?.city}
              ,
              {data?.polyclinic?.state ||
                data?.hospital?.state ||
                data?.nursing_home?.state}
              ,<br />
              {data?.polyclinic?.country ||
                data?.hospital?.country ||
                data?.nursing_home?.country}{" "}
              . PIN-
              {data?.polyclinic?.pincode ||
                data?.hospital?.pincode ||
                data?.nursing_home?.pincode}
            </p>
            <p className="fs-6 text-dark" style={{ fontWeight: "500" }}>
              <i
                className="far fa-money-bill me-1"
                style={{ color: "#1d00a3" }}
              ></i>
              - ₹ {data?.fee}
            </p>
            <Link href="#">
              <a
                className="btn text-light fs-6 px-4 px-sm-4 px-md-4 px-lg-2 px-xl-2 px-xxl-4"
                style={{ backgroundColor: "#1d00a3" }}
              >
                Book Now
              </a>
            </Link>
          </td>

          <td>
            {!!data?.routine?.monday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.monday_start_time}
                endTime={data?.routine?.monday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td>
            {!!data?.routine?.tuesday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.tuesday_start_time}
                endTime={data?.routine?.tuesday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td>
            {!!data?.routine?.wednesday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.wednesday_start_time}
                endTime={data?.routine?.wednesday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td>
            {!!data?.routine?.thursday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.thursday_start_time}
                endTime={data?.routine?.thursday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td>
            {!!data?.routine?.friday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.friday_start_time}
                endTime={data?.routine?.friday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td>
            {!!data?.routine?.saturday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.saturday_start_time}
                endTime={data?.routine?.saturday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
          <td>
            {!!data?.routine?.sunday === true ? (
              <RoutineCardOpen
                startTime={data?.routine?.sunday_start_time}
                endTime={data?.routine?.sunday_end_time}
              />
            ) : (
              <RoutineCardClosed />
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default DoctorTimetableCard;
