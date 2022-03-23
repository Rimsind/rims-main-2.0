import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import Link from "next/link";
import Image from "next/image";
const MyDoctors = ({ data }) => {
  const { data: specialty } = useSWR(
    `${apiUrl}/specialties/${data?.specialty}`,
    fetcher
  );

  return (
    <>
      <tr>
        <td>#{data?.id}</td>
        <td>
          <h2 className="table-avatar">
            <a href="doctor-profile.html" className="avatar avatar-sm me-2">
              <Image
                height="145"
                width="145"
                className="avatar-img rounded-circle"
                src={
                  data?.image?.url || "/assets/images/alternate/alt-user-2.png"
                }
                alt="User Image"
              />
            </a>

            <a>
              Dr. {data?.firstName} {data?.lastName}
            </a>
          </h2>
        </td>
        <td>
          <span>{specialty?.name}</span>
        </td>

        <td className="text-end">
          <div className="table-action">
            <Link href="#">
              <a className="btn btn-sm bg-danger-light">
                <i className="far fa-trash-alt"></i> Delete
              </a>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyDoctors;
