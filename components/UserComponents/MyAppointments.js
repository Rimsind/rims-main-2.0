import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";

const MyAppointments = ({ data, sl, path }) => {
  const { data: specialty } = useSWR(
    `${apiUrl}/specialties/${data?.doctor?.specialty}`,
    fetcher
  );

  return (
    <>
      <tr>
        <td>#{sl}</td>
        <td>{data?.id}</td>
        <td>
          <h2 className="table-avatar">
            <a href="doctor-profile.html" className="avatar avatar-sm me-2">
              <Image
                height="50"
                width="50"
                className="avatar-img rounded-circle"
                src={data?.doctor?.image?.url || "/assets/images/profile.png"}
                alt="User Image"
              />
            </a>

            <a>
              Dr. {data?.doctor?.firstName} {data?.doctor?.lastName}
              <span>{specialty?.name}</span>
            </a>
          </h2>
        </td>
        <td>
          {data?.date}
          <span className="d-block text-info">{data?.timeSlot}</span>
        </td>

        <td>₹{data?.fee}</td>
        <td>{data?.eprescription?.followUp_date}</td>
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
            {!!data.appointment_status === false ? (
              <></>
            ) : (
              <Link href={`/${path}/appointments/${data?.id}`}>
                <a className="btn btn-sm bg-info-light">
                  <i className="far fa-eye"></i> View
                </a>
              </Link>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyAppointments;
