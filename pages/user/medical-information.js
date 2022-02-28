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
  console.log(data);

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
                                className="nav-link active"
                              >
                                Genral Information
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-2"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Social Histroy & Living Environment
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-3"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Employment Status
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-4"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Medical History
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-5"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Functional Status
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-6"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Family Medical History
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-7"
                                data-bs-toggle="tab"
                                className="nav-link"
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
                                <GeneralInformation patient={data} />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-2"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <SocialHistory patient={data} />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-3"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <EmploymentStatus patient={data} />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-4"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <MedicalHistory patient={data} />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-5"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <FunctionalStatus patient={data} />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-6"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <FamilyMadicalHistory patient={data} />
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-7"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <UploadMedicalRecord patient={data} />
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

export default MedicalInformation;
