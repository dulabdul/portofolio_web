/* eslint-disable no-underscore-dangle */
class kontenBar extends HTMLElement {
    connectedCallback() {
        this._render();
    }

    _render() {
        this.innerHTML = /* html */ `
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      <section id="project" class="pb-5">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-12 heading mb-4">
                      <h2 class="text-center mb-3 fs-1 font-weight-bold heading__tagline">Project</h2>
                      <hr>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card card-project shadow" data-aos="fade-up-right" data-aos-delay="100"data-aos-duration="1200">
                      <a href="https://infocorona-e90fb.web.app/" rel="noopener" aria-label="Website Covid" target="_blank">
                      <picture>
                      <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./dist/project1-small.jpg">
                      <img src="./dist/project1-large.jpg" alt="Website Covid"
                      class="lazyload project-img card-img-top img-fluid">
                  </picture>
                  </a>
                          <div class="card-body">
                              <p class="card-title">Live Report Covid-19</p>
                              
                              <a href="https://infocorona-e90fb.web.app/" rel="noopener" aria-label="Website Covid" target="_blank"
                                  class="go btn btn-danger"><i class="fas fa-external-link-alt"></i> Open
                                  Web</a>
                                  <a href="https://github.com/dulabdul/Web_Corona_Info.git" rel="noopener" aria-label="Github_covid" target="_blank" class="go ml-1 btn btn-danger"><i class="fab fa-github" style="font-size:21px;"></i> Open
                                  Github</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card card-project shadow" data-aos="fade-up" data-aos-delay="150"data-aos-duration="1200">
                      <a href="https://mysoccer-584dc.web.app/" rel="noopener" aria-label="Website mySoccer" target="_blank">
                      <picture>
                      <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./dist/project2-small.jpg">
                      <img src="./dist/project2-large.jpg" alt="Website mySoccer"
                      class="lazyload project-img card-img-top img-fluid">
                  </picture>
                  </a>
                          <div class="card-body">
                              <p class="card-title">SoccerBall</p>
                              <a href="https://mysoccer-584dc.web.app/" rel="noopener" aria-label="Website mySoccer" target="_blank" class="go btn btn-danger"><i class="fas fa-external-link-alt"></i> Open
                                  Web</a>
                                  <a href="https://github.com/dulabdul/PWA-Dicoding-MySoccer.git" rel="noopener" aria-label="Website mySoccer" target="_blank" class="go ml-1 btn btn-danger"><i class="fab fa-github" style="font-size:21px;"></i> Open
                                    Github</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card card-project shadow" data-aos="fade-up-left" data-aos-delay="200"data-aos-duration="1200">
                      <a href="https://theresto-fc91d.web.app/" rel="noopener" aria-label="Website The Resto" target="_blank">
                      <picture>
                      <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./dist/project3-small.jpg">
                      <img src="./dist/project3-large.jpg" alt="Website The Resto"
                      class="lazyload project-img card-img-top img-fluid">
                  </picture>
                  </a>
                          <div class="card-body">
                              <p class="card-title">The Resto</p>
                              <a href="https://theresto-fc91d.web.app/" rel="noopener" aria-label="Website The Resto"  target="_blank" class="go btn btn-danger"><i class="fas fa-external-link-alt"></i> Open
                                  Web</a>
                                  <a href="https://github.com/dulabdul/The-Resto.git" rel="noopener" aria-label="Website The Resto"  target="_blank" class="go ml-1 btn btn-danger"><i class="fab fa-github" style="font-size:21px;"></i> Open
                                  Github</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card card-project shadow" data-aos="fade-up-right" data-aos-delay="250"data-aos-duration="1200">
                      <a href="https://wawastore24.my.id/" rel="noopener" aria-label="Website WawaStore"  target="_blank">
                      <picture>
                      <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./dist/wawastore-small.jpg">
                      <img src="./dist/wawastore-large.jpg" alt="Website Wawastore"
                      class="lazyload project-img card-img-top img-fluid">
                  </picture>
                  </a>
                          <div class="card-body">
                              <p class="card-title">Toko Online WawaStore</p>
                              <a href="https://wawastore24.my.id/" rel="noopener" aria-label="Website WawaStore" target="_blank" class="go btn btn-danger"><i class="fas fa-external-link-alt"></i> Open
                                  Web</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card card-project shadow" data-aos="fade-up-left" data-aos-delay="300"data-aos-duration="1200">
                      <a href="https://nonton-kuy.web.app/" rel="noopener" aria-label="Website nonton kuy" target="_blank">
                      <picture>
                      <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./dist/project4-small.jpg">
                      <img src="./dist/project4-large.jpg" alt="Website Nonton Kuy"
                      class="lazyload project-img card-img-top img-fluid">
                  </picture>
                  </a>
                          <div class="card-body">
                              <p class="card-title">Nonton Kuy</p>
                              <a href="https://nonton-kuy.web.app/" rel="noopener" aria-label="Website nonton kuy" target="_blank" class="go btn btn-danger"><i class="fas fa-external-link-alt"></i> Open
                                  Web</a>
                                  <a href="https://github.com/dulabdul/movie-katalog.git" rel="noopener" aria-label="Website nonton kuy" target="_blank" class="go ml-1 btn btn-danger"><i class="fab fa-github" style="font-size:21px;"></i> Open
                                  Github</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 mb-3">
                  <div class="card card-project shadow" data-aos="fade-up-left" data-aos-delay="300"data-aos-duration="1200">
                  <a href="https://abdul-sipus.000webhostapp.com/" rel="noopener" aria-label="Website nonton kuy" target="_blank">
                  <picture>
                  <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./dist/project5-small.jpg">
                  <img src="./dist/project5-large.jpg" alt="Website Nonton Kuy"
                  class="lazyload project-img card-img-top img-fluid">
              </picture>
              </a>
                      <div class="card-body">
                          <p class="card-title">Sistem Perpustakaan</p>
                          <p>Usename : jwd</p>
                          <p>Password : 12345</p>
                          <a href="https://abdul-sipus.000webhostapp.com/" rel="noopener" aria-label="Website Sistem Perpustakaan" target="_blank" class="go btn btn-danger"><i class="fas fa-external-link-alt"></i> Open
                              Web</a>
                              <a href="https://github.com/dulabdul/digital-sipus.git" rel="noopener" aria-label="Website Sistem Perpustakaan" target="_blank" class="go ml-1 btn btn-danger"><i class="fab fa-github" style="font-size:21px;"></i> Open
                              Github</a>
                      </div>
                  </div>
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
                      <img src="./dist/solid-large.jpg" alt="Sertifikat Dasar Web"
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
customElements.define('konten-bar', kontenBar);