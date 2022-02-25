import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
import Image from "next/image";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { UserPageLoader } from "components/Loaders";
import Link from "next/link";
import { useRouter } from "next/router";
const AppointmentId = () => {
  const { id } = useRouter().query;
  const { auth } = useAuth();

  const { data: appointments } = useSWR(
    `${apiUrl}/appointments/${id}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  const { data: patient } = useSWR(
    `${apiUrl}/patients/${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / My Appointments"
          title1="My Appointments"
        />

        <div className="content mb-3">
          <div className="container-fluid">
            <div className="row">
              <UserNav status2="active" patient={patient} />

              <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                <div className="upper-section">
                  <div className="row align-items-baseline">
                    <div className="col-4">
                      <div className="left-upper-content pt-3 ps-2 mb-3 rounded text-light">
                        <div className="row">
                          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <p className="fs-6 lh-1">Revisit Details</p>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <div className="end-items d-flex left-para-date">
                              <p className="fs-6 me-2 lh-1">Date - </p>
                              <p className="fs-6 lh-1">
                                {appointments?.eprescription?.followup?.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="right-upper-content">
                        <div className="row">
                          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 text-end">
                            <div className="d-grid gap-2">
                              <Link
                                href={`/user/reports/clinical-examination?id=${id}`}
                              >
                                <a
                                  className="btn btn-primary py-2"
                                  type="button"
                                >
                                  Download Clinical Assessments
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <div className="d-grid gap-2">
                              <Link
                                href={`/user/reports/e-prescription?id=${id}`}
                              >
                                <a
                                  className="btn btn-danger py-2"
                                  type="button"
                                >
                                  Download e-Prescription
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 app-items">
                        <p className="fs-6 fw-bold">Appt Id</p>
                        <p className="fs-6 fst-italic">#{appointments?.id}</p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 app-items">
                        <p className="fs-6 fw-bold">Appt Date</p>
                        <p className="fs-6 fst-italic">{appointments?.date}</p>
                      </div>
                      {/* <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 app-items">
                        <p className="fs-6 fw-bold">Appt Time</p>

                        <p className="fs-6 fst-italic">12:24 P.M</p>
                      </div> */}
                      <div className="col-sm-6 col-md-6 col-lg-4 app-items">
                        <p className="fs-6 fw-bold">Doctor Details</p>
                        <div className="app-items-inner d-flex">
                          <div className="left-image me-2">
                            <Image
                              height="50"
                              width="50"
                              src={
                                appointments?.doctor?.image?.url ||
                                "/assets/images/profile.png"
                              }
                              className="img-fluid rounded"
                              alt="User Image"
                            />
                          </div>
                          <div className="right-details">
                            <p className="fs-6 lh-1 fst-normal">
                              Dr. {appointments?.doctor?.firstName}{" "}
                              {appointments?.doctor?.lastName}
                            </p>
                            <p className="fs-6 fst-italic lh-1">
                              {appointments?.doctor?.specialty}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 app-items">
                        <p className="fs-6 fw-bold">Clinic Details</p>
                        <div className="app-items-inner d-flex">
                          <div className="left-image me-2">
                            <Image
                              height="50"
                              width="50"
                              src={
                                appointments?.polyclinic?.coverImage?.url ||
                                "/assets/images/polyclinic.jpg"
                              }
                              className="img-fluid rounded"
                              alt="User Image"
                            />
                          </div>
                          <div className="right-details">
                            <p className="fs-6 lh-1 fst-normal">
                              {appointments?.polyclinic?.name}
                            </p>
                            <p className="fs-6 fst-italic lh-1">
                              {appointments?.polyclinic?.city},{" "}
                              {appointments?.polyclinic?.state}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body">
                    <p className="fs-5 text-center border-bottom pb-2">
                      Chief Complains
                    </p>
                    <table className="table table-striped mt-4">
                      <thead className="table-primary">
                        <tr>
                          <th scope="col">Description</th>
                          <th scope="col">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments?.chiefComplaints.map((items, index) => (
                          <tr>
                            <td>{items?.description}</td>
                            <td>{items?.duration} Days</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentId;
