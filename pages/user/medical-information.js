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
                <div className="card">
                  <div className="card-body">
                    <GeneralInformation />
                    <SocialHistory />
                    <EmploymentStatus />
                    <MedicalHistory />
                    <FunctionalStatus />
                    <FamilyMadicalHistory />
                    <UploadMedicalRecord />
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
