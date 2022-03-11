const NotesCard = () => {
  return (
    <>
      <div className="card profile-sidebar patient-card shadow-sm">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <div className="profile-det-info px-3 pt-2">
              <p className="fs-5 text-muted">Notes</p>
            </div>
            <div className="profile-inner-con">
              <p className="text-muted fs-6 ps-3 pe-3">
                Knee pain, Headeches, Last time he looked sick
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesCard;
