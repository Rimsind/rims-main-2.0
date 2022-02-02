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
const MedicalInformation = () => {
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
              <UserNav status5="active" />

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div class="flex-fill">
                      <div class="card-header">
                        <ul
                          role="tablist"
                          class="nav nav-tabs card-header-tabs"
                        >
                          <li class="nav-item">
                            <a
                              href="#tab-1"
                              data-bs-toggle="tab"
                              class="nav-link active"
                            >
                              Genral Information
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#tab-2"
                              data-bs-toggle="tab"
                              class="nav-link"
                            >
                              Social Histroy & Living Environment
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#tab-3"
                              data-bs-toggle="tab"
                              class="nav-link"
                            >
                              Employment Status
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#tab-4"
                              data-bs-toggle="tab"
                              class="nav-link"
                            >
                              Medical History
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#tab-5"
                              data-bs-toggle="tab"
                              class="nav-link"
                            >
                              Functional Status
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#tab-6"
                              data-bs-toggle="tab"
                              class="nav-link"
                            >
                              Family Medical History
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#tab-7"
                              data-bs-toggle="tab"
                              class="nav-link"
                            >
                              Medical Records
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="card-body">
                        <div class="tab-content pt-0">
                          <div
                            role="tabpanel"
                            id="tab-1"
                            class="tab-pane fade show active"
                          >
                            <div class="row">
                              <GeneralInformation />
                            </div>
                          </div>
                          <div role="tabpanel" id="tab-2" class="tab-pane fade">
                            <div class="row">
                              <SocialHistory />
                            </div>
                          </div>
                          <div role="tabpanel" id="tab-3" class="tab-pane fade">
                            <div class="row">
                              <EmploymentStatus />
                            </div>
                          </div>
                          <div role="tabpanel" id="tab-4" class="tab-pane fade">
                            <div class="row">
                              <MedicalHistory />
                            </div>
                          </div>
                          <div role="tabpanel" id="tab-5" class="tab-pane fade">
                            <div class="row">
                              <FunctionalStatus />
                            </div>
                          </div>
                          <div role="tabpanel" id="tab-6" class="tab-pane fade">
                            <div class="row">
                              <FamilyMadicalHistory />
                            </div>
                          </div>
                          <div role="tabpanel" id="tab-7" class="tab-pane fade">
                            <div class="row">
                              <UploadMedicalRecord />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default MedicalInformation;
