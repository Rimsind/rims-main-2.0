import { BreadCrums } from "components/common";
import Image from "next/image";

const Help = () => {
  return (
    <>
      <section className="section-help">
        <BreadCrums title="Home / Help" title1="Help" />
        <div className="container">
          <div className="content">
            <div className="help-inner-links">
              <div className="row align-items-center">
                <div className="col-3 text-center">
                  <div
                    className="card effect shadow-lg rounded"
                    style={{ border: "8px solid #4489c7" }}
                  >
                    <div className="card-body">
                      <a
                        href="#"
                        style={{
                          color: "white",
                          fontSize: "19px",
                          textShadow: "0 2px 3px #3a3a3a",
                        }}
                      >
                        <div className="help-profile">
                          <div className="help-profile-image">
                            <Image
                              src="/assets/images/alternate/doctor-female.png"
                              height={80}
                              width={80}
                              alt="User Help Profile"
                            />
                          </div>
                          <div className="help-profile-title">
                            <p>User / Patient Help</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div
                    className="card effect shadow-lg rounded"
                    style={{ border: "8px solid #4489c7" }}
                  >
                    <div className="card-body">
                      <a
                        href="#"
                        style={{
                          color: "white",
                          fontSize: "19px",
                          textShadow: "0 2px 3px #3a3a3a",
                        }}
                      >
                        <div className="help-profile">
                          <div className="help-profile-image">
                            <Image
                              src="/assets/images/alternate/doctor-male.png"
                              height={80}
                              width={80}
                              alt="Doctor Help Profile"
                            />
                          </div>
                          <div className="help-profile-title">
                            <p>Doctor Help</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div
                    className="card effect shadow-lg rounded"
                    style={{ border: "8px solid #4489c7" }}
                  >
                    <div className="card-body">
                      <a
                        href="#"
                        style={{
                          color: "white",
                          fontSize: "19px",
                          textShadow: "0 2px 3px #3a3a3a",
                        }}
                      >
                        <div className="help-profile">
                          <div className="help-profile-image">
                            <Image
                              src="/assets/images/alternate/alt-polyclinic.png"
                              height={80}
                              width={80}
                              alt="Polyclinic Help Profile"
                            />
                          </div>
                          <div className="help-profile-title">
                            <p>Polyclinic Help</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div
                    className="card effect shadow-lg rounded"
                    style={{ border: "8px solid #4489c7" }}
                  >
                    <div className="card-body">
                      <a
                        href="#"
                        style={{
                          color: "white",
                          fontSize: "19px",
                          textShadow: "0 2px 3px #3a3a3a",
                        }}
                      >
                        <div className="help-profile">
                          <div className="help-profile-image">
                            <Image
                              src="/assets/images/alternate/alt-nursing.png"
                              height={80}
                              width={80}
                              alt="Nursing Home Help Profile"
                            />
                          </div>
                          <div className="help-profile-title">
                            <p>Nursing Home Help</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="help-inner-content">
              <div
                className="inner-terms-content p-5 my-4"
                style={{ background: "#f1f1f1" }}
              >
                <p className="fs-6 fst-italic">Updated November 9, 2021</p>
                <p className="fs-4 fw-bold text-center border-bottom border-1 border-dark pb-3">
                  {/* Help */}
                </p>
                <p className="fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ut rutrum nisl. Maecenas fermentum, orci vitae
                  rhoncus maximus, ante felis fermentum nunc, sed sodales felis
                  nisi at augue. Nullam pellentesque, leo a pharetra pretium,
                  sapien lacus convallis felis, eget tincidunt arcu metus eget
                  est. Suspendisse congue sapien ac eros accumsan, vel dignissim
                  libero pulvinar. Mauris eu est vel magna interdum eleifend eu
                  id felis. Suspendisse suscipit sem sed pellentesque viverra.
                  Nulla volutpat arcu turpis, feugiat auctor ipsum rhoncus nec.
                  Integer fermentum, nisl non interdum iaculis, nulla lorem
                  pretium felis, a aliquet eros ante ac purus.
                </p>
                <p className="fs-6">
                  Quisque ac vehicula metus. Mauris convallis finibus dolor quis
                  faucibus. Aenean ut finibus ipsum. Vestibulum et justo in
                  mauris sagittis malesuada nec sed enim. Aenean tempus magna eu
                  aliquet pharetra. Aenean in aliquet magna. Etiam tempor
                  consectetur bibendum. Phasellus feugiat, leo ut dictum
                  posuere, tellus mi finibus lectus, at rutrum tellus felis eu
                  felis. Phasellus sit amet nunc eget lacus maximus
                  sollicitudin. Pellentesque vulputate, nunc quis hendrerit
                  lacinia, nibh ante ullamcorper nunc, ac commodo augue purus
                  sed neque. Sed interdum metus eros, id ultrices leo convallis
                  quis. Duis a viverra nunc, non dictum arcu. Integer ac erat et
                  lectus aliquam fermentum ac ac ex. Quisque hendrerit nunc eu
                  dui placerat convallis. Pellentesque sit amet eros sed quam
                  rhoncus maximus. Fusce lobortis id eros tincidunt tempor.
                  Nulla facilisi. Pellentesque sit amet libero dolor. Fusce
                  libero lorem, varius ut nisl vel, commodo scelerisque enim.
                  Nullam consectetur, purus a maximus eleifend, eros magna
                  tempor arcu, quis cursus felis turpis nec nisl. Donec porta
                  risus et blandit interdum. Quisque fermentum nec quam sed
                  faucibus. Mauris vestibulum augue vel est consectetur, sit
                  amet accumsan libero tincidunt. Vivamus eleifend dictum odio
                  accumsan convallis.
                </p>
                <p className="fs-6">
                  Quisque ac vehicula metus. Mauris convallis finibus dolor quis
                  faucibus. Aenean ut finibus ipsum. Vestibulum et justo in
                  mauris sagittis malesuada nec sed enim. Aenean tempus magna eu
                  aliquet pharetra. Aenean in aliquet magna. Etiam tempor
                  consectetur bibendum. Phasellus feugiat, leo ut dictum
                  posuere, tellus mi finibus lectus, at rutrum tellus felis eu
                  felis. Phasellus sit amet nunc eget lacus maximus
                  sollicitudin. Pellentesque vulputate, nunc quis hendrerit
                  lacinia, nibh ante ullamcorper nunc, ac commodo augue purus
                  sed neque. Sed interdum metus eros, id ultrices leo convallis
                  quis. Duis a viverra nunc, non dictum arcu. Integer ac erat et
                  lectus aliquam fermentum ac ac ex. Quisque hendrerit nunc eu
                  dui placerat convallis. Pellentesque sit amet eros sed quam
                  rhoncus maximus. Fusce lobortis id eros tincidunt tempor.
                  Nulla facilisi. Pellentesque sit amet libero dolor. Fusce
                  libero lorem, varius ut nisl vel, commodo scelerisque enim.
                  Nullam consectetur, purus a maximus eleifend, eros magna
                  tempor arcu, quis cursus felis turpis nec nisl. Donec porta
                  risus et blandit interdum. Quisque fermentum nec quam sed
                  faucibus. Mauris vestibulum augue vel est consectetur, sit
                  amet accumsan libero tincidunt. Vivamus eleifend dictum odio
                  accumsan convallis.
                </p>
                <p className="fs-6">
                  Quisque fermentum nec quam sed faucibus. Mauris vestibulum
                  augue vel est consectetur, sit amet accumsan libero tincidunt.
                  Vivamus eleifend dictum odio accumsan convallis. Vestibulum
                  ante ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Phasellus ut ante commodo, auctor urna non,
                  tincidunt nisi. Morbi gravida quis velit in placerat.
                  Suspendisse nec leo sodales, condimentum risus vel, sagittis
                  risus. Fusce nisl risus, mollis vitae felis quis, rhoncus
                  tincidunt metus. In hac habitasse platea dictumst. Ut dictum
                  justo eu imperdiet molestie. Nullam nec posuere ligula, sed
                  accumsan diam. Etiam eu sagittis orci, ac gravida nisl. Fusce
                  lectus diam, euismod vitae orci eget, hendrerit convallis
                  tortor. Donec eget odio lacus. Nunc nulla neque, posuere in
                  posuere eget, blandit sed libero. Aliquam ut faucibus ligula.
                  Ut leo orci, lobortis eget eleifend a, semper et lorem. Donec
                  sollicitudin facilisis vestibulum. Donec massa ipsum,
                  tincidunt eget ipsum et, vulputate rutrum leo. Cras ultricies,
                  orci ultrices maximus fermentum, enim quam lobortis justo, et
                  auctor felis diam vitae libero. Aenean quis est lectus.
                  Quisque placerat sapien sit amet varius vulputate. Mauris
                  dictum quis lectus eget facilisis. Integer consequat commodo
                  feugiat. Nullam congue enim eu lacus eleifend, sit amet
                  pretium sem aliquam. Proin hendrerit aliquam mauris sit amet
                  mollis. Sed dapibus libero eu elit commodo auctor. Sed
                  volutpat felis nec nulla efficitur vehicula. Proin convallis
                  sagittis faucibus. Donec ac ornare lorem. Donec nec lorem non
                  leo bibendum fringilla ut eu mi. Nunc maximus mollis purus nec
                  rhoncus. Nullam bibendum luctus dolor non pharetra. Donec
                  pretium sem ut risus dictum, et sollicitudin nisi sodales.
                  Pellentesque a nulla nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
