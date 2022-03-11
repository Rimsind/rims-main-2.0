const AllergyCard = () => {
  return (
    <>
      <div className="card profile-sidebar patient-card shadow-sm">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <div className="profile-det-info px-3 pt-2">
              <p className="spcl-para fs-5 text-muted">Allergies</p>
            </div>
            <div className="profile-inner-con">
              <div className="inner-item d-flex justify-content-between px-3">
                <div className="profile-item-inner">
                  <p className="text-muted">Penicillin</p>
                </div>
                <div className="profile-item-inner">
                  <p className="fw-bold text-danger">High</p>
                </div>
              </div>
              <div className="inner-item d-flex justify-content-between px-3">
                <div className="profile-item-inner">
                  <p className="text-muted">Tilorone</p>
                </div>
                <div className="profile-item-inner">
                  <p className="fw-bold text-info">Medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllergyCard;
