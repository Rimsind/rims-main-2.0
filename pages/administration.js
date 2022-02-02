import Image from "next/image";
const Administration = () => {
  return (
    <>
      <main>
        <div class="admin_page">
          <div class="container">
            <div class="admin_page_logo">
              <Image
                height="170"
                width="200"
                src="/assets/images/logo-dark.png"
              />
            </div>

            <div class="card_list">
              <div class="card-inner">
                <a href="#">
                  <div class="card-item shadow bg-primary p-4 rounded-3">
                    <div class="card-item-inner d-flex align-items-center">
                      <div class="card-inner-icon">
                        <i class="fas fa-user-md fs-1 border rounded-circle p-3 text-light bg-primary"></i>
                      </div>
                      <div class="card-inner-con ms-3">
                        <p class="fs-5 text-light">Doctor Login</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-inner">
                <a href="#">
                  <div class="card-item shadow bg-primary p-4 rounded-3">
                    <div class="card-item-inner d-flex align-items-center">
                      <div class="card-inner-icon">
                        <i class="fas fa-capsules fs-1 border rounded-circle p-3 text-light bg-primary"></i>
                      </div>
                      <div class="card-inner-con ms-3">
                        <p class="fs-5 text-light">Polyclinic Login</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="card-inner">
                <a href="#">
                  <div class="card-item shadow bg-primary p-4 rounded-3">
                    <div class="card-item-inner d-flex align-items-center">
                      <div class="card-inner-icon">
                        <i class="fas fa-hospital fs-1 border rounded-circle p-3 text-light bg-primary"></i>
                      </div>
                      <div class="card-inner-con ms-3">
                        <p class="fs-5 text-light">Nursing Home Login</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="back_to_home text-center">
              <button type="button" class="btn btn-success ps-5 pe-5 pt-3 pb-3">
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Administration;
