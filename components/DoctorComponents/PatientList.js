import Image from "next/image";
import Link from "next/link";
const PatientList = () => {
  return (
    <>
      {" "}
      <tr>
        <td>01</td>
        <td>
          <h2 className="table-avatar">
            <div href="doctor-profile.html" className="avatar avatar-sm me-2">
              <Image
                height="145"
                width="145"
                className="avatar-img rounded-circle"
                src="/assets/images/profile.png"
                alt="User Image"
              />
            </div>

            <div>
              Dr. Amit Mahapatra
              <span>Male</span>
            </div>
          </h2>
        </td>
        <td>24</td>
        <td>
          12-12-2022
          <span className="d-block text-info">9:30 AM</span>
        </td>
        <td>
          <span className="badge rounded-pill bg-warning-light">Pending</span>

          <span className="badge rounded-pill bg-success-light">Completed</span>
        </td>
        <td className="text-end">
          <div className="table-action">
            <Link href={`/doctors/my-patients/1`}>
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

export default PatientList;
