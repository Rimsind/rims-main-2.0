import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
import {
  GeneralInformation,
  FamilyMadicalHistory,
  FunctionalStatus,
  UploadMedicalRecord,
  EmploymentStatus,
  MedicalHistory,
  SocialHistory,
} from "components/forms";

import useSWR from "swr";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import axios from "axios";
import { UserPageLoader } from "components/Loaders";
import { withAuth } from "helpers/withAuth";
const MedicalInformation = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
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
          title="Home / Dashboard / Medical-Information"
          title1="Medical-Information"
        />

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <UserNav status5="active" patient={data} />
              {data ? (
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-9">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="flex-fill">
                        <div className="card-header">
                          <ul
                            role="tablist"
                            className="nav nav-tabs card-header-tabs"
                          >
                            <li className="nav-item">
                              <a
                                href="#tab-1"
                                data-bs-toggle="tab"
                                className="nav-link active "
                                style={{
                                  border: "1px solid #e1e1e1",
                                  borderBottom: "none",
                                  borderTopLeftRadius: "5px",
                                  borderTopRightRadius: "5px",
                                }}
                              >
                                Genral Information
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-2"
                                data-bs-toggle="tab"
                                className="nav-link"
                                style={{
                                  border: "1px solid #e1e1e1",
                                  borderBottom: "none",
                                  borderTopLeftRadius: "5px",
                                  borderTopRightRadius: "5px",
                                }}
                              >
                                Social Histroy & Living Environment
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-3"
                                data-bs-toggle="tab"
                                className="nav-link"
                                style={{
                                  border: "1px solid #e1e1e1",
                                  borderBottom: "none",
                                  borderTopLeftRadius: "5px",
                                  borderTopRightRadius: "5px",
                                }}
                              >
                                Employment Status
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-4"
                                data-bs-toggle="tab"
                                className="nav-link"
                                style={{
                                  border: "1px solid #e1e1e1",
                                  borderBottom: "none",
                                  borderTopLeftRadius: "5px",
                                  borderTopRightRadius: "5px",
                                }}
                              >
                                Medical History
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-5"
                                data-bs-toggle="tab"
                                className="nav-link"
                                style={{
                                  border: "1px solid #e1e1e1",
                                  borderBottom: "none",
                                  borderTopLeftRadius: "5px",
                                  borderTopRightRadius: "5px",
                                }}
                              >
                                Functional Status
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-6"
                                data-bs-toggle="tab"
                                className="nav-link"
                                style={{
                                  border: "1px solid #e1e1e1",
                                  borderBottom: "none",
                                  borderTopLeftRadius: "5px",
                                  borderTopRightRadius: "5px",
                                }}
                              >
                                Family Medical History
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-7"
                                data-bs-toggle="tab"
                                className="nav-link"
                                style={{
                                  border: "1px solid #e1e1e1",
                                  borderBottom: "none",
                                  borderTopLeftRadius: "5px",
                                  borderTopRightRadius: "5px",
                                }}
                              >
                                Medical Records
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <div className="tab-content pt-0">
                            <div
                              role="tabpanel"
                              id="tab-1"
                              className="tab-pane fade show active"
                            >
                              <div className="row">
                                <GeneralInformation
                                  patientId={auth?.user.profileId}
                                  generalInformation={data?.generalInformation}
                                  updated_at={data?.updated_at}
                                />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-2"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <SocialHistory
                                  patientId={auth?.user.profileId}
                                  socialHistory={data?.socialHistory}
                                />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-3"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <EmploymentStatus
                                  patientId={auth?.user.profileId}
                                  employmentStatus={data?.employmentStatus}
                                  updated_at={data?.updated_at}
                                />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-4"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <MedicalHistory
                                  patientId={auth?.user.profileId}
                                  medicalHistory={data?.medicalHistory}
                                  past_sugrical_history={
                                    data?.past_sugrical_history
                                  }
                                  past_medication_history={
                                    data?.past_medication_history
                                  }
                                  updated_at={data?.updated_at}
                                  gender={data?.gender}
                                />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-5"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <FunctionalStatus
                                  patientId={auth?.user.profileId}
                                  functionalStatus={data?.functionalStatus}
                                  updated_at={data?.updated_at}
                                />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-6"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <FamilyMadicalHistory
                                  patientId={auth?.user.profileId}
                                  familyHistory={data?.familyHistory}
                                  updated_at={data?.updated_at}
                                />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-7"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <UploadMedicalRecord
                                  patientId={auth?.user.profileId}
                                  updated_at={data?.updated_at}
                                  upload_medical_record={
                                    data?.upload_medical_record
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <UserPageLoader />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(MedicalInformation);
