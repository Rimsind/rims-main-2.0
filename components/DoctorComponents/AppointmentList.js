import Image from "next/image";
import Link from "next/link";

const AppointmentList = ({ data, sl }) => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if (day < 10) {
    var newDay = "0" + day;
  } else {
    var newDay = day;
  }
  if (month < 10) {
    var newMonth = "0" + month;
  } else {
    var newMonth = month;
  }

  const currentDate = year + "-" + newMonth + "-" + newDay;

  return (
    <>
      <tr>
        <td>#{sl}</td>
        <td>{data?.id}</td>
        <td>
          <h2 className="table-avatar">
            <a className="avatar avatar-sm me-2">
              <Image
                height="145"
                width="145"
                className="avatar-img rounded-circle"
                src={data?.patient?.image?.url || "/assets/images/profile.png"}
                alt="User Image"
              />
            </a>

            <a>
              {data?.patient?.title}
              {data?.patient?.first_name} {data?.patient?.last_name}
              <span>{data?.patient?.gender}</span>
            </a>
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
        {!!data.appointment_status === false ? (
          <td className="text-end">
            <div className="table-action">
              {data?.date === currentDate ? (
                <>
                  <Link
                    href={`/doctors/appointments/clinical-examination?id=${data?.id}`}
                  >
                    <a className="btn btn-sm bg-warning">
                      <i className="far fa-pencil"></i> Edit
                    </a>
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </td>
        ) : (
          <td className="text-end">
            <div className="table-action">
              <Link href={`/doctors/appointments/view?id=${data?.id}`}>
                <a className="btn btn-sm bg-info-light">
                  <i className="far fa-eye"></i> View
                </a>
              </Link>
            </div>
          </td>
        )}
      </tr>
    </>
  );
};

export default AppointmentList;
