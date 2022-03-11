import Image from "next/image";
import Link from "next/link";

const AppointmentList = ({ data }) => {
  return (
    <>
      <tr>
        <td>01</td>
        <td>
          <h2 className="table-avatar">
            <a href="doctor-profile.html" className="avatar avatar-sm me-2">
              <Image
                height="145"
                width="145"
                className="avatar-img rounded-circle"
                src={data?.patient?.image?.url || "/assets/images/profile.png"}
                alt="User Image"
              />
            </a>
            <Link href={`/user/appointments/${data?.id}`}>
              <a>
                Dr. {data?.patient?.first_name} {data?.patient?.last_name}
                <span>{data?.patient?.gender}</span>
              </a>
            </Link>
          </h2>
        </td>
        <td>{data?.patient?.age}</td>
        <td>
          {data?.date}
          <span className="d-block text-info">{data?.timeSlot}</span>
        </td>

        <td>₹{data?.fee}</td>

        <td>
          {!!data.appointment_status === false ? (
            <span className="badge rounded-pill bg-warning-light">Pending</span>
          ) : (
            <span className="badge rounded-pill bg-success-light">
              Completed
            </span>
          )}
        </td>
        <td className="text-end">
          <div className="table-action">
            <Link href={`/doctors/appointments/subjective-details?${data?.id}`}>
              <a className="btn btn-sm bg-info-light">
                <i className="far fa-eye"></i> View
              </a>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AppointmentList;
