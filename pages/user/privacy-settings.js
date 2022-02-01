import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
const PrivacySettings = () => {
  return (
    <>
      <div class="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / Privacy-Settings"
          title1="Medical-Information"
        />

        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <UserNav status6="active" />

              <div class="col-md-7 col-lg-8 col-xl-9">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-6">
                        <form>
                          <div class="form-group">
                            <label>Old Password</label>
                            <input type="password" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label>New Password</label>
                            <input type="password" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label>Confirm Password</label>
                            <input type="password" class="form-control" />
                          </div>
                          <div class="submit-section">
                            <button
                              type="submit"
                              class="btn btn-primary submit-btn"
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
