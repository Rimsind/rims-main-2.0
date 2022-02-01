import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
const PrivacySettings = () => {
  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / Privacy-Settings"
          title1="Medical-Information"
        />

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <UserNav status6="active" />

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-6">
                        <form>
                          <div className="form-group">
                            <label>Old Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>New Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="submit-section">
                            <button
                              type="submit"
                              className="btn btn-primary submit-btn"
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
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

export default PrivacySettings;
