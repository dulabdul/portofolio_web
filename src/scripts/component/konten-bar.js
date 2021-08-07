/* eslint-disable no-underscore-dangle */
class kontenBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">

      <section id="home">
          <div class="container-sm">
              <div class="jumbotron bg-transparent">
                  <div class="row justify-content-evenly">
                      <div class="col-md-6 text-start hero">
                          <h1 class="display-4 font-weight-bold">Hallo,</h1>
                          <h1 class="display-4 font-weight-bold">Saya <span>Abdul</span></h1>
                          <h1 class="display-4 font-weight-normal fs-2 mt-4">Front-End Web Developer</h1>
                      </div>
                      <div class="col-md-6 mt-4">
                      <picture>
                      <source class="lazyload profile-img rounded-circle img-thumbnail shadow-sm img-fluid" media="(max-width: 600px)" srcset="./images/abdul-small.jpg">
                      <img src="./images/abdul-large.jpg" alt="Abdulrahman"
                      class="lazyload profile-img rounded-circle img-thumbnail shadow-sm img-fluid">
                  </picture>
                      </div>
                  </div>
              </div>
              <a class="button-sm-call btn btn-outline-danger text-start" href="#contact" role="button"><i
                      class="fas fa-phone mr-1" style="font-size: 24px;" aria-hidden="true"></i>Contact Me</a>
              <div class="mt-3 text-dark">
                  <div class="icon">
                      <a href="https://www.instagram.com/ar.dev21__/" rel="noopener" aria-label="Instragam" class="active" target="_blank"><i
                              class="fab fa-instagram" aria-hidden="true"></i></a>
                      <a href="https://www.linkedin.com/in/abdul-rahman-2737131a1/" rel="noopener" aria-label="Linkedin" target="_blank"><i
                              class="fab fa-linkedin" aria-hidden="true"></i></a>
                      <a href="https://github.com/dulabdul" target="_blank" rel="noopener" aria-label="Github"><i class="fab fa-github"
                              aria-hidden="true"></i></a>
                      <a href="mailto:dulabdol1331@gmail.com" rel="noopener" aria-label="Email" target="_blank"><i class="fas fa-envelope"
                              aria-hidden="true"></i></a>
                  </div>
              </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#aa01013a" fill-opacity="1"
                  d="M0,160L34.3,154.7C68.6,149,137,139,206,144C274.3,149,343,171,411,170.7C480,171,549,149,617,122.7C685.7,96,754,64,823,53.3C891.4,43,960,53,1029,85.3C1097.1,117,1166,171,1234,192C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
              </path>
          </svg>
      </section>
      <section id="about" class="about">
          <div class="container-sm">
              <div class="row justify-content-center">
                  <div class="col-md-12 heading">
                      <h2 class="text-center mb-3 fs-1 heading__tagline font-weight-bold">About Me</h2>
                      <hr>
                  </div>
                  <div class="col-md-4 about-img">
                  <picture>
                  <source class="lazyload img-fluid img-about mb-4" media="(max-width: 600px)" srcset="./images/abdul_2-small.jpg">
                  <img src="./images/abdul_2-large.jpg" alt="Abdulrahman"
                  class="lazyload img-fluid img-about mb-4">
              </picture>
                  </div>
                  <div class="col-md-8 heading__name ">
                      <p class="text-start fs-5 paragraf-about">Perkenalkan Saya <span class="font-weight-bold">Abdul
                              Rahman,
                          </span>saat ini
                          tinggal di Banten, Kota Serang. Saya seorang
                          fresh graduate dari SMKN1 Kota Serang jurusan Teknik Komputer dan Jaringan, di SMK saya
                          mengikuti organisasi Gerakan Disiplin Siswa
                          dan menjabat sebagai Ketua Umum periode 2019-2020. Saya aktif di kegiatan organisasi seperti
                          event graduation, porseni, bansos organisasi, dan lainnya.</p>
                      <p class="text-start fs-5">
                          Saya memiliki ketertarikan di bidang Web Developer khususnya Front-End Web Developer, selama
                          pandemi sekolah saya melaksanakan kegiatan belajar secara daring, tetapi bagi saya sekolah
                          daring bukan berarti berhenti belajar atau menjadi halangan, saya mencoba untuk improvisasi
                          skill saya dengan
                          mengikuti beasiswa dari Dicoding di learning path Front-End Web Developer.
                      </p>
                      <p class="text-start fs-5">
                          Saya memiliki karakter disiplin, jujur, dan bertanggung jawab.Selain itu, saya bisa
                          bekerja secara tim
                          ataupun individu untuk menyelesaikan suatu kerjaan, saya memiliki kenginan kuat untuk
                          belajar
                          hal baru dalam hidup saya.
                      </p>
                      <a class="download button-sm-call ml-3 btn btn-danger text-start"
                          href="https://drive.google.com/file/d/1SgUnerjouMq7G4fcayHyufraeaFpQD8M/view?usp=sharing"
                          rel="noopener" aria-label="Download" target="_blank" role="button"><i class="fas fa-download"></i> Download
                          Resume</a>
                  </div>
                  <div class="col-md-12 section_head_about">
                      <h3 class="text-start mt-4 mb-3 fs-2">Keahlian</h3>
                  </div>
                  <div class="col-md-6">
                      <div class="card shadow mb-3">
                          <div class="shadow-sm">
                              <div class="row">
                                  <div class="col-6 progress-icon">
                                      <p class="text-start mt-1 ml-4 fs-5 font-weight-bold"><i class="fab fa-html5"
                                              aria-hidden="true"></i>
                                          <span class="text-dark ml-2">HTML 5 </span></p>
                                  </div>
                                  <div class="col-6">
                                      <p class="text-end mt-3 mr-2 font-weight-bold fs-6">70%</p>
                                  </div>
                              </div>
                              <div class="progress" style="height: 8px">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 70%;"
                                      aria-valuenow="70" aria-label="Progres-Bar" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="card shadow mb-3">
                          <div class="shadow-sm">
                              <div class="row">
                                  <div class="col-6 progress-icon">
                                      <p class="font-weight-bold text-start mt-1 ml-4 fs-5"><i class="fab fa-css3-alt"></i>
                                          <span class="text-dark ml-2">CSS 3 </span></p>
                                  </div>
                                  <div class="col-6">
                                      <p class="text-end mt-3 mr-2 font-weight-bold fs-6">65%</p>
                                  </div>
                              </div>
                              <div class="progress" style="height: 8px">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 65%;"
                                      aria-valuenow="65" aria-label="Progres-Bar" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="card shadow mb-3">
                          <div class="shadow-sm">
                              <div class="row">
                                  <div class="col-6 progress-icon">
                                      <p class="font-weight-bold text-start mt-1 ml-4 fs-5"><i class="fab fa-js-square"></i>
                                          <span class="text-dark ml-2">JavaScript </span></p>
                                  </div>
                                  <div class="col-6">
                                      <p class="text-end mt-3 mr-2 font-weight-bold fs-6">50%</p>
                                  </div>
                              </div>
                              <div class="progress" style="height: 8px">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 50%;"
                                      aria-valuenow="50" aria-label="Progres-Bar" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="card shadow mb-3">
                          <div class="shadow-sm">
                              <div class="row">
                                  <div class="col-6 progress-icon">
                                      <p class="font-weight-bold text-start mt-1 ml-4 fs-5"><i class="fab fa-node-js"></i>
                                          <span class="text-dark ml-2">Node.Js </span></p>
                                  </div>
                                  <div class="col-6">
                                      <p class="text-end mt-3 mr-2 font-weight-bold fs-6">55%</p>
                                  </div>
                              </div>
                              <div class="progress" style="height: 8px">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 55%;"
                                      aria-valuenow="55" aria-label="Progres-Bar" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="card shadow mb-3">
                          <div class="shadow-sm">
                              <div class="row">
                                  <div class="col-6 progress-icon">
                                      <p class="font-weight-bold text-start mt-1 ml-4 fs-5"><i class="fab fa-bootstrap"></i>
                                          <span class="text-dark ml-2">Bootstrap </span></p>
                                  </div>
                                  <div class="col-6">
                                      <p class="text-end mt-3 mr-2 font-weight-bold fs-6">50%</p>
                                  </div>
                              </div>
                              <div class="progress" style="height: 8px">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 50%;"
                                      aria-valuenow="50" aria-label="Progres-Bar" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="card shadow mb-3">
                          <div class="shadow-sm">
                              <div class="row">
                                  <div class="col-6 progress-icon">
                                      <p class="font-weight-bold text-start mt-1 ml-4 fs-5"><i class="fas fa-code"></i>
                                          <span class="text-dark ml-2">Webpack </span></p>
                                  </div>
                                  <div class="col-6">
                                      <p class="text-end mt-3 mr-2 font-weight-bold fs-6">60%</p>
                                  </div>
                              </div>
                              <div class="progress" style="height: 8px">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 60%;"
                                      aria-valuenow="60" aria-label="Progres-Bar" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="card shadow mb-3">
                          <div class="shadow-sm">
                              <div class="row">
                                  <div class="col-6 progress-icon">
                                      <p class="font-weight-bold text-start mt-1 ml-4 fs-5"><i class="fab fa-git-square"
                                              aria-hidden="true"></i>
                                          <span class="text-dark ml-2">Git </span></p>
                                  </div>
                                  <div class="col-6">
                                      <p class="text-end mt-3 mr-2 font-weight-bold fs-6">55%</p>
                                  </div>
                              </div>
                              <div class="progress" style="height: 8px">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 55%;"
                                      aria-valuenow="55" aria-label="Progres-Bar" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="card shadow mb-3">
                          <div class="shadow-sm">
                              <div class="row">
                                  <div class="col-8 progress-icon">
                                      <p class="font-weight-bold text-start mt-1 ml-4 fs-5"><i class="fas fa-code"></i>
                                          <span class="text-dark ml-2">PWA (Progressive Web App) </span></p>
                                  </div>
                                  <div class="col-4">
                                      <p class="text-end mt-3 mr-2 font-weight-bold fs-6">60%</p>
                                  </div>
                              </div>
                              <div class="progress" style="height: 8px">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 60%;"
                                      aria-valuenow="60" aria-label="Progres-Bar" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="card shadow mb-3">
                          <div class="shadow-sm">
                              <div class="row">
                                  <div class="col-8 progress-icon">
                                      <p class="font-weight-bold text-start mt-1 ml-4 fs-5"><i class="fas fa-code" aria-hidden="true"></i>
                                          <span class="text-dark ml-2">Materialize CSS</span></p>
                                  </div>
                                  <div class="col-4">
                                      <p class="text-end mt-3 mr-2 font-weight-bold fs-6">45%</p>
                                  </div>
                              </div>
                              <div class="progress" style="height: 8px">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 45%;"
                                      aria-valuenow="45" aria-label="Progres-Bar" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container-md">
              <div class="row align-item-center">
                  <div class="col-md-12 section_head_about">
                      <h3 class="text-start mt-4 mb-2 fs-2">Hobi</h3>
                  </div>
                  <div class="col-md about-hobi text-center">
                      <i class="fas fa-hiking"></i>
                      <p class="mt-3 fs-4">Hiking</p>
                  </div>
                  <div class="col-md about-hobi text-center">
                      <i class="fas fa-film"></i>
                      <p class="mt-3 fs-4">Menonton Film/Anime</p>
                  </div>
                  <div class="col-md about-hobi text-center">
                      <i class="fas fa-running"></i>
                      <p class="mt-3 fs-4">Running</p>
                  </div>
              </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#fff" fill-opacity="1"
                  d="M0,288L120,282.7C240,277,480,267,720,261.3C960,256,1200,256,1320,256L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
              </path>
          </svg>
      </section>
      <section id="project" class="pb-5">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-12 heading mb-4">
                      <h2 class="text-center mb-3 fs-1 font-weight-bold heading__tagline">Project</h2>
                      <hr>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card card-project shadow">
                      <a href="https://corona-info-3aea2.web.app/" rel="noopener" aria-label="Website Covid" target="_blank">
                      <picture>
                      <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./images/project1-small.jpg">
                      <img src="./images/project1-large.jpg" alt="Website Covid"
                      class="lazyload project-img card-img-top img-fluid">
                  </picture>
                  </a>
                          <div class="card-body">
                              <p class="card-title">Live Report Covid-19</p>
                              
                              <a href="https://corona-info-3aea2.web.app/" rel="noopener" aria-label="Website Covid" target="_blank"
                                  class="go btn btn-danger"><i class="fas fa-external-link-alt"></i> Open
                                  Web</a>
                                  <a href="https://github.com/dulabdul/Web_Corona_Info.git" rel="noopener" aria-label="Github_covid" target="_blank" class="go ml-1 btn btn-danger"><i class="fab fa-github" style="font-size:21px;"></i> Open
                                  Github</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card card-project shadow">
                      <a href="https://mysoccer-584dc.web.app/" rel="noopener" aria-label="Website mySoccer" target="_blank">
                      <picture>
                      <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./images/project2-small.jpg">
                      <img src="./images/project2-large.jpg" alt="Website mySoccer"
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
                      <div class="card card-project shadow">
                      <a href="https://theresto-fc91d.web.app/" rel="noopener" aria-label="Website The Resto" target="_blank">
                      <picture>
                      <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./images/project3-small.jpg">
                      <img src="./images/project3-large.jpg" alt="Website The Resto"
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
                      <div class="card card-project shadow">
                      <a href="https://wawastore24.my.id/" rel="noopener" aria-label="Website WawaStore"  target="_blank">
                      <picture>
                      <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./images/wawastore-small.jpg">
                      <img src="./images/wawastore-large.jpg" alt="Website Wawastore"
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
                      <div class="card card-project shadow">
                      <a href="https://nonton-kuy.web.app/" rel="noopener" aria-label="Website nonton kuy" target="_blank">
                      <picture>
                      <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="./images/project4-small.jpg">
                      <img src="./images/project4-large.jpg" alt="Website Nonton Kuy"
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
                      <div class="card-project shadow">
                      <a href="https://www.dicoding.com/certificates/L4PQM1E92ZO1" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="./images/solid-small.jpg">
                      <img src="./images/solid-large.jpg" alt="Sertifikat_Solid"
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
                      <div class="card-project shadow">
                      <a href="https://www.dicoding.com/certificates/2VX3NRK0QXYQ" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="./images/solid-small.jpg">
                      <img src="./images/solid-large.jpg" alt="Sertifikat Dasar Web"
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
                      <div class="card-project shadow">
                      <a href="https://www.dicoding.com/certificates/GRX5GO3WVX0M" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="./images/fundamental-small.jpg">
                      <img src="./images/fundamental-large.jpg" alt="Sertifikat Fundamental Web"
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
                      <div class="card-project shadow">
                      <a href="https://www.dicoding.com/certificates/QLZ98739EX5D" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="./images/mpwa-small.jpg">
                      <img src="./images/mpwa-large.jpg" alt="Sertifikat MPWA"
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
                      <div class="card-project shadow">
                      <a href="https://www.dicoding.com/certificates/MEPJLEER6Z3V" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="./images/mfwde-small.jpg">
                      <img src="./images/mfwde-large.jpg" alt="Sertifikat MFWDE"
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
                  <div class="col-12 section_head_contact text-start mt-3">
                      <h3><span>Informasi</span> Kontak</h3>
                  </div>
              </div>
              <div class="row section__contact">
                  <div class="col-md d-flex mt-3">
                      <div class="icon-contact">
                          <a href="https://wa.me/+6289675293838" rel="noopener" aria-label="Telephone" target="_blank"><i class="fas fa-phone"
                                  aria-hidden="true"></i></a>
                      </div>
                      <div class=" contact-text w-75 ml-2">
                                  <p class="font-weight-bold fs-4 text-start">Telepon</p>
                                  <p class="font-weight-light fs-6 text-start">+6289675293838</p>
                      </div>
                  </div>
                  <div class="col-md d-flex mt-3">
                      <div class="icon-contact">
                          <a href="mailto:dulabdol1331@gmail.com" rel="noopener" aria-label="Telephone" target="_blank"><i class="far fa-envelope"
                                  aria-hidden="true"></i></a>
                      </div>
                      <div class="contact-text w-75 ml-2">
                          <p class="font-weight-bold fs-4 text-start">Email</p>
                          <p class="font-weight-light fs-6 text-start">dulabdol331@gmail.com</p>
                      </div>
                  </div>
                  <div class="col-md d-flex mt-3">
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
                  <div class="col-12 section_head_sosmed text-start">
                      <h3><span>Informasi</span>Media Sosial</h3>
                  </div>
              </div>
              <div class="pt-30">
                  <div class="col-12 social-media-container mb-5 text-center">
                      <ul class="social-media-link">
                          <li><a href="https://www.instagram.com/dul.abdul21/" rel="noopener" aria-label="Instragam" target="_blank"><i
                                      class="fab fa-instagram" aria-hidden="true"></i></a></li>
                          <li><a href="https://www.linkedin.com/in/abdul-rahman-2737131a1/" rel="noopener" aria-label="Linkedin"
                                  target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                          <li><a href="https://github.com/dulabdul" target="_blank" rel="noopener" aria-label="Github"><i
                                      class="fab fa-github" aria-hidden="true"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#aa01013a" fill-opacity="1"
                  d="M0,96L40,133.3C80,171,160,245,240,229.3C320,213,400,107,480,85.3C560,64,640,128,720,154.7C800,181,880,171,960,144C1040,117,1120,75,1200,74.7C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
              </path>
          </svg>
      </section>
  </div>
                    `;
  }
}
customElements.define('konten-bar', kontenBar);
