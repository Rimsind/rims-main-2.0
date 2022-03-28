import {
  Skin,
  Head,
  Eyes,
  Ears,
  Nose,
  Throat,
  Neck,
  Neurological,
  Psychological,
  Endocrinal,
  Abdominal,
  Rectal,
  PeripheralVascular,
  Hematological,
  Gastrointestinal,
  Cardiovascular,
  LymphNodes,
  Genitourinary,
  Breasts,
  Respiratory,
} from "components/DoctorComponents/medicine/ExaminationForm";
import axios from "axios";
import { apiUrl } from "config/api";
import { useAuth } from "context";
import useSWR from "swr";
const MedicineExamination = ({ appointmentId }) => {
  const { auth } = useAuth();
  const { data: appointmentDetails } = useSWR(
    `${apiUrl}/appointments/${appointmentId}`,
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
      <div className="clinical-assesment-tab-panel">
        <ul
          role="tablist"
          className="nav nav-tabs card-header-tabs align-items-center"
        >
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-101"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Skin"
              className="nav-link fs-6 active"
            >
              Form 01
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-102"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Head"
              className="nav-link fs-6"
            >
              Form 02
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-103"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Eyes"
              className="nav-link fs-6"
            >
              Form 03
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-104"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Ears"
              className="nav-link fs-6"
            >
              Form 04
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-105"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Nose"
              className="nav-link fs-6"
            >
              Form 05
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-106"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Throat"
              className="nav-link fs-6"
            >
              Form 06
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-107"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Neck"
              className="nav-link fs-6"
            >
              Form 07
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-108"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Lymph Nodes"
              className="nav-link fs-6"
            >
              Form 08
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-109"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Respiratory, Thorax & Lungs"
              className="nav-link fs-6"
            >
              Form 09
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-110"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Cardiovascular"
              className="nav-link fs-6"
            >
              Form 10
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-111"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Gastrointestinal"
              className="nav-link fs-6"
            >
              Form 11
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-112"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Breasts"
              className="nav-link fs-6"
            >
              Form 12
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-113"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Abdominal"
              className="nav-link fs-6"
            >
              Form 13
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-114"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Genitourinary"
              className="nav-link fs-6"
            >
              Form 14
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-115"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Rectal"
              className="nav-link fs-6"
            >
              Form 15
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-116"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Peripheral Vascular"
              className="nav-link fs-6"
            >
              Form 16
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-117"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Neurological"
              className="nav-link fs-6"
            >
              Form 17
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-118"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Hematological"
              className="nav-link fs-6"
            >
              Form 18
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-119"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Endocrinal"
              className="nav-link fs-6"
            >
              Form 19
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-120"
              data-bs-toggle="tab"
              data-bs-placement="top"
              title="Psychological & Psychiatric Illness"
              className="nav-link fs-6"
            >
              Form 20
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            role="tabpanel"
            id="tab-101"
            className="tab-pane fade show active"
          >
            <Skin
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-102" className="tab-pane fade">
            <Head
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-103" className="tab-pane fade">
            <Eyes
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-104" className="tab-pane fade">
            <Ears
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-105" className="tab-pane fade">
            <Nose
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-106" className="tab-pane fade">
            <Throat
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-107" className="tab-pane fade">
            <Neck
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-108" className="tab-pane fade">
            <LymphNodes
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-109" className="tab-pane fade">
            <Respiratory
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-110" className="tab-pane fade">
            <Cardiovascular
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-111" className="tab-pane fade">
            <Gastrointestinal
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-112" className="tab-pane fade">
            <Breasts
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-113" className="tab-pane fade">
            <Abdominal
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-114" className="tab-pane fade">
            <Genitourinary
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-115" className="tab-pane fade">
            <Rectal
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-116" className="tab-pane fade">
            <PeripheralVascular
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-117" className="tab-pane fade">
            <Neurological
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-118" className="tab-pane fade">
            <Hematological
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-119" className="tab-pane fade">
            <Endocrinal
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
          <div role="tabpanel" id="tab-120" className="tab-pane fade">
            <Psychological
              data={appointmentDetails?.medicine}
              appointmentId={appointmentId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicineExamination;
