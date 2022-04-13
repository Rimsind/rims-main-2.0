const AllergyCard = ({ medicalHistory }) => {
  return (
    <>
      <div className="card profile-sidebar patient-card shadow-sm">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <div className="profile-det-info px-3 pt-2">
              <p className="spcl-para fs-5 text-danger">Allergies</p>
            </div>
            <div className="profile-inner-con px-3">
              <p className="text-info text-start">
                {medicalHistory?.allergies}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllergyCard;
