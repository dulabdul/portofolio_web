/* eslint-disable no-underscore-dangle */
class kontenBar extends HTMLElement {
    connectedCallback() {
        this._render();
    }

    _render() {
        this.innerHTML = /* html */ `
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      <section id="skills">
      <div class="tagline-skills mt-3">
          <h2 class="text-white text-center">What Skill & Tools</h2>
          <h2 class="text-white text-center">I Have for You</h2>
      </div>
      <div class="container">
          <div class="row justify-content-center ">
              <div class="col">
                  <div class="card bg-skills">
                      <div class="card-body ">
                          <div class="col img-icons">
                              <img src="../src/public/icons/html.svg" class="lazyload img-fluid img-svg-html"
                                  alt="HTML Icons">
                              <img src="../src/public/icons/css3.svg" class="lazyload img-fluid img-svg-css"
                                  alt="CSS Icons">
                              <img src="../src/public/icons/javascript.svg" class="lazyload img-fluid img-svg-js"
                                  alt="Javascript Icons">
                              <img src="../src/public/icons/php.svg" class="lazyload img-fluid img-svg-php"
                                  alt="PHP Icons">
                              <img src="../src/public/icons/bootstrap.svg" class="lazyload img-fluid img-svg-bts"
                                  alt="Bootstrap Icons">
                              <img src="../src/public/icons/git.svg" class="lazyload img-fluid img-svg-git"
                                  alt="GIT Icons">
                              <img src="../src/public/icons/vscode.svg" class="lazyload img-fluid img-svg-vscode"
                                  alt="Visual Studio Code Icons">
                                  <img src="../src/public/icons/webpack.png" class="lazyload img-fluid"
                                  alt="Webpack Icons">
                              <img src="../src/public/icons/nodejs.png" class="lazyload img-fluid" alt="NodeJs Icons">
                              <img src="../src/public/icons/pwa1.png" class="lazyload img-fluid"
                                  alt="Progressive Web Apps Icons">
                              <img src="../src/public/icons/wordpress.png" class="lazyload img-fluid"
                                  alt="Wordpress Icons">
                              <img src="../src/public/icons/adobe-xd.png" class="lazyload img-fluid"
                                  alt="Adobe Xd Icons">
                          </div>


                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
      <section id="project" class="pb-5">
      <div class="container">
          <div class="col-12 heading mb-2">
            <h2 class="text-center fs-1 font-weight-bold text-white heading__tagline">Check Out</h2>
            <h2 class="text-center mb-3 fs-2 font-weight-bold text-white heading__tagline">My Recent Project</h2>
        </div>
    <div id="carouselExampleDark" class="carousel slide carousel-dark slide" data-bs-ride="carousel">
      <div class="row align-items-center">
        
        <!-- Button Prev -->
        <div class="col-1 text-center">
          <button class="project border-0" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
        </div>
        <!-- End Of Button Prev -->
          
        <!-- Project Items -->
        <div class="col-10">
          <div class="carousel-inner">
            
            <!-- Project 1 -->
            <div class="carousel-item" data-bs-interval="10000">
              <div class="card bg-skills border-0">
                <div class="row align-items-center p-3">
                  <div class="col-md-6">
                    <p class="title-project fw-bold fs-4 pt-4 ps-4 poppins">Live Report Covid-19</p><br>
                    <p class="text-white fs-6 ps-4 pe-5">Website yang menampilkan statistik <br>
                      Front end : HTML | CSS | Javascript | Bootstrap <br>
                      Back end : Native PHP | Mysql</p>
                      <a href="https://infocorona-e90fb.web.app/" rel="noopener" aria-label="Website Covid" target="_blank"
                        class="go btn btn-success"><i class="fas fa-external-link-alt" style="font-size: 24px;"></i> Demo</a>
                        <a href="https://github.com/dulabdul/Web_Corona_Info.git" rel="noopener" aria-label="Github_covid" target="_blank" class="go ml-1 btn btn-success"><i class="fab fa-github" style="font-size:24px;"></i> Github</a>
                  </div>
                  <div class="col-md-6 p-3 pe-5">
                  <a href="https://infocorona-e90fb.web.app/" rel="noopener" aria-label="Website Covid" target="_blank">
                    <picture>
                    <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./dist/project1-small.jpg">
                    <img src="./dist/project1-large.jpg" alt="Website Covid"
                    class="lazyload project-img card-img-top img-fluid">
                </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Of Project 1 -->

            <!-- Project 2 -->
            <div class="carousel-item active">
            <div class="card bg-skills border-0">
            <div class="row align-items-center p-3">
              <div class="col-md-6">
                <p class="title-project fw-bold fs-4 pt-4 ps-4 poppins">Sistem Informasi Administrasi</p><br>
                <p class="text-white fs-6 ps-4 pe-5">Project magang di dinas pendidikan, membuat sistem informasi untuk pencatatan surat masuk dan keluar. <br>
                  Front end : HTML | CSS | Javascript | Bootstrap <br>
                  Back end : Native PHP | Mysql</p>
                  <a href="https://infocorona-e90fb.web.app/" rel="noopener" aria-label="Website Covid" target="_blank"
                  class="go btn btn-success"><i class="fas fa-external-link-alt" style="font-size: 24px;"></i> Demo</a>
                  <a href="https://github.com/dulabdul/Web_Corona_Info.git" rel="noopener" aria-label="Github_covid" target="_blank" class="go ml-1 btn btn-success"><i class="fab fa-github" style="font-size:24px;"></i>
                  Github</a>
              </div>
              <div class="col-md-6 p-3 pe-5">
                <a href="https://suratdispendik.000webhostapp.com">
                  <img src="./dist/solid-large.jpg" class="card-img-top shadow" alt="...">
                </a>
              </div>
            </div>
          </div>
            </div>
            <!-- End Of Project 2 -->

            <!-- Project 3 -->
            <div class="carousel-item">
            <div class="card bg-skills border-0">
            <div class="row align-items-center p-3">
              <div class="col-md-6">
                <p class="title-project fw-bold fs-4 pt-4 ps-4 poppins">Sistem Informasi Administrasi</p><br>
                <p class="text-white fs-6 ps-4 pe-5">Project magang di dinas pendidikan, membuat sistem informasi untuk pencatatan surat masuk dan keluar. <br>
                  Front end : HTML | CSS | Javascript | Bootstrap <br>
                  Back end : Native PHP | Mysql</p>
                  <a href="https://infocorona-e90fb.web.app/" rel="noopener" aria-label="Website Covid" target="_blank"
                  class="go btn btn-success"><i class="fas fa-external-link-alt" style="font-size: 24px;"></i> Demo</a>
                  <a href="https://github.com/dulabdul/Web_Corona_Info.git" rel="noopener" aria-label="Github_covid" target="_blank" class="go ml-1 btn btn-success"><i class="fab fa-github" style="font-size:24px;"></i> Github</a>
              </div>
              <div class="col-md-6 p-3 pe-5">
                <a href="https://suratdispendik.000webhostapp.com">
                  <img src="./dist/solid-large.jpg" class="card-img-top shadow" alt="...">
                </a>
              </div>
            </div>
          </div>
            </div>
            <!-- End Of Project 3 -->

          </div>
        </div>
        <!-- End Of Project Items -->
          
        <!-- Button Next -->
        <div class="col-1 text-center">
          <button class="project border-0" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
        <!-- End Of Button Next -->

      </div>

      <!-- Carousel Indicator -->
      <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    </div>
    </div>
      </section>
      <section id="sertifikat">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-12 heading mb-4">
                      <h2 class="text-center mb-3 fs-1 font-weight-bold heading__tagline">Certificate</h2>
                      <hr>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="100"data-aos-duration="1200">
                      <a href="https://www.dicoding.com/certificates/L4PQM1E92ZO1" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="./dist/solid-small.jpg">
                      <img src="./dist/solid-large.jpg" alt="Sertifikat_Solid"
                      class="lazyload project-img img-fluid">
                  </picture>
                  </a>
                      </div>
                      <p class="font-weight-bold">Belajar Prinsip Pemprogaman Solid <span
                              class="d-block font-weight-normal">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="150"data-aos-duration="1200">
                      <a href="https://www.dicoding.com/certificates/2VX3NRK0QXYQ" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="./dist/solid-small.jpg">
                      <img src="./dist/web-large.jpg" alt="Sertifikat Dasar Web"
                      class="lazyload project-img img-fluid">
                  </picture>
                  </a>
                      </div>
                      <p class="font-weight-bold">Belajar Dasar Pemprogaman Web <span
                              class="d-block font-weight-normal">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="200"data-aos-duration="1200">
                      <a href="https://www.dicoding.com/certificates/GRX5GO3WVX0M" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="./dist/fundamental-small.jpg">
                      <img src="./dist/fundamental-large.jpg" alt="Sertifikat Fundamental Web"
                      class="lazyload project-img img-fluid">
                  </picture>
                  </a>
                      </div>
                      <p class="font-weight-bold">Belajar Fundamental Front-End Web <span
                              class="d-block font-weight-normal">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="250"data-aos-duration="1200">
                      <a href="https://www.dicoding.com/certificates/QLZ98739EX5D" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="./dist/mpwa-small.jpg">
                      <img src="./dist/mpwa-large.jpg" alt="Sertifikat MPWA"
                      class="lazyload project-img img-fluid">
                  </picture>
                  </a>
                       
                      </div>
                      <p class="font-weight-bold">Membangun Progressive Web Apps<span
                              class="d-block font-weight-normal">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="300"data-aos-duration="1200">
                      <a href="https://www.dicoding.com/certificates/MEPJLEER6Z3V" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="./dist/mfwde-small.jpg">
                      <img src="./dist/mfwde-large.jpg" alt="Sertifikat MFWDE"
                      class="lazyload project-img img-fluid">
                  </picture>
                  </a>
                      </div>
                      <p class="font-weight-bold">Menjadi Front-End Web Developer Expert <span
                              class="d-block font-weight-normal">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
              </div>
          </div>
      </section>
      <section id="contact">
          <div class="container-md">
              <div class="row">
                  <div class="col-12 heading">
                      <h2 class="text-center fs-1 font-weight-bold heading__tagline">Contact Me</h2>
                      <hr>
                  </div>
                  <div class="col-12 section_head_contact text-start mt-5" data-aos-once="true" data-aos="fade-right" data-aos-delay="100"data-aos-duration="1200">
                      <h3><span>Informasi</span> Kontak</h3>
                  </div>
              </div>
              <div class="row section__contact">
                  <div class="col-md d-flex mt-3" data-aos-once="true" data-aos="fade-up-right" data-aos-delay="200"data-aos-duration="1200">
                      <div class="icon-contact">
                          <a href="https://wa.me/+6289675293838" rel="noopener" aria-label="Telephone" target="_blank"><i class="fas fa-phone"
                                  aria-hidden="true"></i></a>
                      </div>
                      <div class=" contact-text w-75 ml-2">
                                  <p class="font-weight-bold fs-4 text-start">Telepon</p>
                                  <p class="font-weight-light fs-6 text-start">+6289675293838</p>
                      </div>
                  </div>
                  <div class="col-md d-flex mt-3" data-aos-once="true" data-aos="fade-up" data-aos-delay="250"data-aos-duration="1200">
                      <div class="icon-contact">
                          <a href="mailto:dulabdol1331@gmail.com" rel="noopener" aria-label="Telephone" target="_blank"><i class="far fa-envelope"
                                  aria-hidden="true"></i></a>
                      </div>
                      <div class="contact-text w-75 ml-2">
                          <p class="font-weight-bold fs-4 text-start">Email</p>
                          <p class="font-weight-light fs-6 text-start">dulabdol331@gmail.com</p>
                      </div>
                  </div>
                  <div class="col-md d-flex mt-3" data-aos-once="true" data-aos="fade-up-left" data-aos-delay="300"data-aos-duration="1200">
                      <div class="icon-contact">
                          <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                      </div>
                      <div class="contact-text w-75 ml-2">
                          <p class="font-weight-bold fs-4 text-start">Alamat</p>
                          <p class="font-weight-light fs-6 text-start">Perumahan Puri Serang Hijau, Kota
                              Serang,
                              Banten 42121</p>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12 section_head_sosmed text-start" data-aos-once="true" data-aos="fade-right" data-aos-delay="100"data-aos-duration="1200">
                      <h3><span>Informasi</span>Media Sosial</h3>
                  </div>
              </div>
              <div class="pt-30">
                  <div class="col-12 social-media-container mb-5 text-center">
                      <ul class="social-media-link">
                          <li data-aos-once="true" data-aos="fade-up-right" data-aos-delay="200"data-aos-duration="1200"><a href="https://www.instagram.com/dul.abdul21/" rel="noopener" aria-label="Instragam" target="_blank"><i
                                      class="fab fa-instagram" aria-hidden="true"></i></a></li>
                          <li data-aos-once="true" data-aos="fade-up" data-aos-delay="250"data-aos-duration="1200"><a href="https://www.linkedin.com/in/abdul-rahman-2737131a1/" rel="noopener" aria-label="Linkedin"
                                  target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                          <li data-aos-once="true" data-aos="fade-up-left" data-aos-delay="300"data-aos-duration="1200"><a href="https://github.com/dulabdul" target="_blank" rel="noopener" aria-label="Github"><i
                                      class="fab fa-github" aria-hidden="true"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  </div>
                    `;
    }
}
customElements.define("konten-bar", kontenBar);