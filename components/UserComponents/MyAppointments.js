import Image from "next/image";
const MyAppointments = ({ data }) => {
  console.log(data);
  return (
    <>
      <tr>
        <td>
          <h2 className="table-avatar">
            <a href="doctor-profile.html" className="avatar avatar-sm me-2">
              <Image
                height="145"
                width="145"
                className="avatar-img rounded-circle"
                src={data?.doctor?.image?.url || "/assets/images/profile.png"}
                alt="User Image"
              />
            </a>
            <a href="doctor-profile.html">
              Dr. {data?.doctor?.firstName} {data?.doctor?.lastName}
              <span>{data?.doctor?.specialty}</span>
            </a>
          </h2>
        </td>
        <td>
          {data?.date}
          <span className="d-block text-info">10.00 AM</span>
        </td>

        <td>₹add fee</td>
        <td>add</td>
        <td>
          <span className="badge rounded-pill bg-success-light">Confirm</span>
        </td>
        <td className="text-end">
          <div className="table-action">
            <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
              <i className="far fa-eye"></i> View
            </a>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyAppointments;
