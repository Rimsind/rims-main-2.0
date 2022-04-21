import PathologySideBar from "components/common/PathologySideBar";
import { BreadCrums } from "components/common";

const Facilities = () => {
  return (
    <>
      <section className="patho-facilities">
        <BreadCrums title="Home / Dashboard / Facilities" title1="Facilities" />
        <div className="content mb-3">
          <div className="container-fluid">
            <div className="row">
              <PathologySideBar />
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9 col-xxl-9">
                <div className="card">
                  <div className="card-header">
                    <p className="fs-5 fw-bold text-center lh-1">Overview</p>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row align-items-center">
                        <div className="patho-faclt-brd-end-n col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-bottom border-1 border-end">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <p className="fs-6 fw-bold">
                                Complete Blood Count (CBC)
                              </p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name1"
                                  id="group1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Available
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name1"
                                  id="group2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Not Available
                                </label>
                              </div>
                            </div>
                          </div>
                          <p className="fst-italic fs-6">
                            (It is used to diagnose anaemia, infections, certain
                            types of cancer, and so on. It’s especially
                            important for Indian women as they tend to suffer
                            from iron deficiency and anaemia and may require
                            supplementation.)
                          </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-bottom border-1 pt-2 pt-sm-2 pt-md-2 pt-lg-0 pt-xl-0 pt-xxl-0">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <p className="fs-6 fw-bold">Blood Sugar Test</p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name2"
                                  id="group3"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Available
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name2"
                                  id="group4"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Not Available
                                </label>
                              </div>
                            </div>
                          </div>
                          <p className="fst-italic fs-6">
                            (Done after a 12-hour fasting period, this helps
                            detect diabetes. In cases of pre-diabetes and
                            diabetes, an additional test, HbA1C that indicates
                            the average blood sugar levels over the previous 3
                            months is done. )
                          </p>
                        </div>
                        <div className="patho-faclt-brd-end-n col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-bottom border-1 border-end pt-2">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <p className="fs-6 fw-bold">Lipid Profile</p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name3"
                                  id="group1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Available
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name3"
                                  id="group2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Not Available
                                </label>
                              </div>
                            </div>
                          </div>
                          <p className="fst-italic fs-6">
                            (It is an accurate indicator of your heart health.
                            This blood test measures the total cholesterol,
                            triglycerides, and HDL and LDL levels. )
                          </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-bottom border-1 pt-2">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <p className="fs-6 fw-bold">
                                Liver Function Test
                              </p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name4"
                                  id="group3"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Available
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name4"
                                  id="group4"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Not Available
                                </label>
                              </div>
                            </div>
                          </div>
                          <p className="fst-italic fs-6">
                            (This is done annually to screen for liver
                            conditions, such as alcohol-induced liver damage,
                            fatty liver, Hepatitis C and B.)
                          </p>
                        </div>
                        <div className="patho-faclt-brd-end-n col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-bottom border-1 border-end pt-2">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <p className="fs-6 fw-bold">Urine Analysis</p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name5"
                                  id="group1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Available
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name5"
                                  id="group2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Not Available
                                </label>
                              </div>
                            </div>
                          </div>
                          <p className="fst-italic fs-6">
                            ( It checks for presence of proteins, sugar and
                            blood (especially in smokers who are at high risk
                            for bladder cancer) in the urine sample, which could
                            indicate kidney disease, among other conditions.)
                          </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-bottom border-1 pb-5 pt-2">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <p className="fs-6 fw-bold">
                                Kidney Function Test
                              </p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name6"
                                  id="group3"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Available
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name6"
                                  id="group4"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Not Available
                                </label>
                              </div>
                            </div>
                          </div>
                          <p className="fs-6 fst-italic">
                            (A high reading of serum creatinine may indicate
                            impaired kidney function.)
                          </p>
                        </div>
                        <div className="patho-faclt-brd-end-n col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-bottom border-1 border-end pt-2">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <p className="fs-6 fw-bold">
                                Thyroid Function Test
                              </p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name8"
                                  id="group1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Available
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name8"
                                  id="group2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Not Available
                                </label>
                              </div>
                            </div>
                          </div>
                          <p className="fs-6 fst-italic">
                            ( These blood tests are important in detecting
                            underactive (hypothyroidism) or overactive thyroid
                            (hyperthyroidism))
                          </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-bottom border-1 pt-2">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <p className="fs-6 fw-bold">
                                Test for Vitamin D Deficiency
                              </p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name9"
                                  id="group3"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Available
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name9"
                                  id="group4"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Not Available
                                </label>
                              </div>
                            </div>
                          </div>
                          <p className="fs-6 fst-italic">
                            ( An extremely common condition, Vitamin D
                            deficiency increases the risk of bone loss and
                            osteoporosis in later years, among other things.)
                          </p>
                        </div>
                        <div className="patho-faclt-brd-end-n col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-bottom border-1 border-end pt-2">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <p className="fs-6 fw-bold">
                                Pap Smear Test (For Women)
                              </p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name10"
                                  id="group1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Available
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name10"
                                  id="group2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Not Available
                                </label>
                              </div>
                            </div>
                          </div>
                          <p className="fs-6 fst-italic">
                            ( It can catch pre-cancerous changes in the cervix,
                            and is recommended for every sexually-active woman
                            after the age of 21.)
                          </p>
                        </div>
                        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-bottom border-1 border-end pt-2">
                          <div className="row align-items-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <p>X-ray</p>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name11"
                                  id="group3"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Available
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="name11"
                                  id="group4"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Not Available
                                </label>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </form>
                  </div>
                </div>
                {/* 
                <div className="card">
                  <div className="card-header">
                    <p className="fs-5 fw-bold text-center lh-1">Features</p>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-end">
                      <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                        <div className="features-add-sec mb-3">
                          <div className="row align-items-center">
                            <div className="col-4">
                              <p className="fs-6 fw-bold">Add Features</p>
                            </div>
                            <div className="col-4">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option>Select Features</option>
                                <option value="Pharmacy">Pharmacy</option>
                                <option value="Patology">Patology</option>
                                <option value="Ambulance">Ambulance</option>
                                <option value="Radiology">Radiology</option>
                              </select>
                            </div>
                            <div className="col-4">
                              <div className="features-add-btn text-start">
                                <button
                                  className="btn btn-secondary"
                                >
                                  Add Features
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                        <div className="features-pill-item mt-4">
                          <div className="row align-items-center">
                            <div className="col" key={index}>
                              <p
                                className="badge fs-6 fw-light py-2 px-4"
                                style={{ backgroundColor: "#0001fbb8" }}
                              >
                                <a href="#">
                                  <i className="fal fa-times me-2 text-light"></i>
                                </a>
                                {items?.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="save-btn-poly mt-4 text-end">
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
