import {
  MedicineEntry,
  TestEntry,
  PrecautionEntry,
  ReferralEntry,
  RestrictionEntry,
  EducationEntry,
  FollowUpEntry,
} from "./PrescriptionForms";

const EPrescription = ({
  appointmentId,
  eprescription,
  assesment,
  patient,
}) => {
  return (
    <>
      {eprescription === null ? (
        <>
          <div className="card">
            <div className="card-body">
              <h5 className="text-danger text-center">
                Please Complete the Assesment form!
              </h5>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            <div className="card-body">
              <ul className="nav nav-tabs nav-tabs-solid">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#bottom-justified-tab11"
                    data-bs-toggle="tab"
                  >
                    Medicine
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#bottom-justified-tab12"
                    data-bs-toggle="tab"
                  >
                    Test
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#bottom-justified-tab13"
                    data-bs-toggle="tab"
                  >
                    Precaution & Safety Measures
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#bottom-justified-tab14"
                    data-bs-toggle="tab"
                  >
                    Food & Fluid Restriction
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#bottom-justified-tab15"
                    data-bs-toggle="tab"
                  >
                    Patient Education
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#bottom-justified-tab16"
                    data-bs-toggle="tab"
                  >
                    Other Treatment Referral
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#bottom-justified-tab17"
                    data-bs-toggle="tab"
                  >
                    Set Follow Time Period
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane show active"
                  id="bottom-justified-tab11"
                >
                  <MedicineEntry
                    assesment={assesment}
                    patient={patient}
                    appointmentId={appointmentId}
                    eprescription={eprescription}
                  />
                </div>
                <div className="tab-pane" id="bottom-justified-tab12">
                  <TestEntry
                    assesment={assesment}
                    patient={patient}
                    appointmentId={appointmentId}
                    eprescription={eprescription}
                  />
                </div>
                <div className="tab-pane" id="bottom-justified-tab13">
                  <PrecautionEntry
                    assesment={assesment}
                    patient={patient}
                    appointmentId={appointmentId}
                    eprescription={eprescription}
                  />
                </div>
                <div className="tab-pane" id="bottom-justified-tab14">
                  <RestrictionEntry
                    assesment={assesment}
                    patient={patient}
                    appointmentId={appointmentId}
                    eprescription={eprescription}
                  />
                </div>
                <div className="tab-pane" id="bottom-justified-tab15">
                  <EducationEntry
                    assesment={assesment}
                    patient={patient}
                    appointmentId={appointmentId}
                    eprescription={eprescription}
                  />
                </div>
                <div className="tab-pane" id="bottom-justified-tab16">
                  <ReferralEntry
                    assesment={assesment}
                    patient={patient}
                    appointmentId={appointmentId}
                    eprescription={eprescription}
                  />
                </div>
                <div className="tab-pane" id="bottom-justified-tab17">
                  <FollowUpEntry
                    assesment={assesment}
                    patient={patient}
                    appointmentId={appointmentId}
                    eprescription={eprescription}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EPrescription;
