import {
  Form1,
  Form2,
  Form3,
  Form4,
  Form5,
  Form6,
  Form7,
  Form8,
  Form9,
  Form10,
  Form11,
  Form12,
  Form13,
  Form14,
  Form15,
  Form16,
  Form17,
} from "components/DoctorComponents/rehab/examinationform";

const RehabExamination = ({ appointmentId, appointment }) => {
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
              className="nav-link cst-tooltip fs-6 active"
            >
              Form 01
              <span className="cst-tooltiptext">
                Aerobic Capacity With Functional Mobility Skill Assessment
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-102"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 02
              <span className="cst-tooltiptext">Anthropometric Assessment</span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-103"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 03
              <span className="cst-tooltiptext">
                Circulatory Assessment Includes Arterial / Venous / Lymphatic
                System
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-104"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 04
              <span className="cst-tooltiptext">
                Arousal, Attention And Cognitive Assessment
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-105"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 05
              <span className="cst-tooltiptext">
                Cranial And Peripheral Nerve Assessment
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-106"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 06
              <span className="cst-tooltiptext">
                Reflex And Sensory Assessment
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-107"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 07
              <span className="cst-tooltiptext">Postural Assessment</span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-108"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 08
              <span className="cst-tooltiptext">Gait Assessment</span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-109"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 09
              <span className="cst-tooltiptext">
                Postural Control Or Balance Assessment
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-110"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 10
              <span className="cst-tooltiptext">
                Motor Function Assessment Includes Motor Control And Motor
                Learning
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-111"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 11
              <span className="cst-tooltiptext">
                Manual Muscle Strength And Range Of Motion Assessment
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-112"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 12
              <span className="cst-tooltiptext">Pain Assessment</span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-113"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 13
              <span className="cst-tooltiptext">
                Environmental Barrier Assessment
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-114"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 14
              <span className="cst-tooltiptext">
                Orthotic And Prosthetic Assessment
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-115"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 15
              <span className="cst-tooltiptext">
                Joint Integrety And Mobility Assessment
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-116"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 16
              <span className="cst-tooltiptext">
                Ventilation, Respiration And Gas Exchange
              </span>
            </a>
          </li>
          <li className="nav-icon">
            <i className="fad fa-arrow-alt-right fs-6 me-3"></i>
          </li>
          <li className="nav-item me-3" id="inner-nav-link">
            <a
              href="#tab-117"
              data-bs-toggle="tab"
              className="nav-link cst-tooltip fs-6"
            >
              Form 17
              <span className="cst-tooltiptext">Wound Assessment</span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            role="tabpanel"
            id="tab-101"
            className="tab-pane fade show active"
          >
            <Form1
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-102" className="tab-pane fade">
            <Form2
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-103" className="tab-pane fade">
            <Form3
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-104" className="tab-pane fade">
            <Form4
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-105" className="tab-pane fade">
            <Form5
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-106" className="tab-pane fade">
            <Form6
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-107" className="tab-pane fade">
            <Form7
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-108" className="tab-pane fade">
            <Form8
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-109" className="tab-pane fade">
            <Form9
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-110" className="tab-pane fade">
            <Form10
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-111" className="tab-pane fade">
            <Form11
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-112" className="tab-pane fade">
            <Form12
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-113" className="tab-pane fade">
            <Form13
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-114" className="tab-pane fade">
            <Form14
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-115" className="tab-pane fade">
            <Form15
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-116" className="tab-pane fade">
            <Form16
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
          <div role="tabpanel" id="tab-117" className="tab-pane fade">
            <Form17
              appointmentId={appointmentId}
              rehabData={appointment?.rehab}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RehabExamination;
