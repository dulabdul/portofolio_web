/* eslint-disable no-underscore-dangle */
class kontenBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
  <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      <section id="skills" class="container-skills">
          <div class="heading-konten mt-3">
              <h2 class="text-white text-center">What Skill & Tools</h2>
              <h2 class="text-white text-center">I Have for You</h2>
              <hr>
          </div>
          <div class="container">
              <div class="row justify-content-center ">
                  <div class="col">
                      <div class="card bg-skills">
                          <div class="card-body ">
                              <div class="col-12 img-icons">
                                  <img src="icons/html.svg" class="lazyload img-fluid img-svg-html" alt="HTML Icons">
                                  <img src="icons/css3.svg" class="lazyload img-fluid img-svg-css" alt="CSS Icons">
                                  <img src="icons/javascript.svg" class="lazyload img-fluid img-svg-js"
                                      alt="Javascript Icons">
                                  <img src="icons/php.svg" class="lazyload img-fluid img-svg-php" alt="PHP Icons">
                                  <img src="icons/bootstrap.svg" class="lazyload img-fluid img-svg-bts"
                                      alt="Bootstrap Icons">
                                  <img src="icons/git.svg" class="lazyload img-fluid img-svg-git" alt="GIT Icons">
                                  <img src="icons/sass.svg" class="lazyload img-fluid img-svg-sass"
                                      alt="SASS Icons">
                                  <img src="icons/webpack.png" class="lazyload img-fluid" alt="Webpack Icons">
                                  <img src="icons/nodejs.png" class="lazyload img-fluid" alt="NodeJs Icons">
                                  <img src="icons/pwa1.png" class="lazyload img-fluid" alt="Progressive Web Apps Icons">
                                  <img src="icons/wordpress.png" class="lazyload img-fluid" alt="Wordpress Icons">
                                  <img src="icons/react.svg" class="lazyload img-fluid" alt="React Icons">
                              </div>
  
  
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="project" class="container-project pb-5">
          <div class="container">
              <div class="col-12 heading-konten mb-2">
                  <h2 class="text-center mt-2 font-weight-bold text-white heading__tagline">Check Out</h2>
                  <h2 class="text-center mb-3 font-weight-bold text-white heading__tagline">My Recent Project</h2>
                  <hr>
              </div>
              <div id="carouselExampleDark" class="carousel slide carousel-dark slide" data-bs-ride="carousel">
                  <div class="row align-items-center">
  
                      <!-- Button Prev -->
                      <div class="col-1 text-center">
                          <button class="bg-prev-next border-0" type="button" data-bs-target="#carouselExampleDark"
                              data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          </button>
                      </div>
                      <!-- End Of Button Prev -->
  
                      <!-- Project Items -->
                      <div class="col-10">
                          <div class="carousel-inner">
  
                              <!-- Project 1 -->
                              <div class="carousel-item active project-style" data-bs-interval="10000">
                                  <div class="card bg-project border-0">
                                      <div class="row align-items-center p-3">
                                          <div class="col-md-6">
                                              <h3 class="title-project pt-4 ps-4 poppins">Live Report Covid-19</h3><br>
                                              <p class="text-white ps-4 pe-5">Website yang menampilkan data kasus Covid-19
                                                  secara realtime, data didapat dari API covid-19 open source.
                                                  </a><br>
                                                  Technology : HTML, CSS, Javascript,Bootstrap, NodeJs, Webpack,
                                                  PWA(Progressive Webs Apps), Lazyload
                                                  <br></p>
                                              <a href="https://infocorona-e90fb.web.app/" rel="noopener"
                                                  aria-label="Website Covid" target="_blank" class="go btn btn-success"><i
                                                      class="fas fa-external-link-alt" style="font-size: 24px;"></i>
                                                  Demo</a>
                                              <a href="https://github.com/dulabdul/Web_Corona_Info.git" rel="noopener"
                                                  aria-label="Github_covid" target="_blank"
                                                  class="go ml-1 btn btn-success"><i class="fab fa-github"
                                                      style="font-size:24px;"></i> Github</a>
                                          </div>
                                          <div class="col-md-6 p-3 pe-5">
                                              <a href="https://infocorona-e90fb.web.app/" rel="noopener"
                                                  aria-label="Website Covid" target="_blank">
                                                  <picture>
                                                      <source class="lazyload project-img card-img-top img-fluid"
                                                          media="(max-width: 600px)" srcset="./images/project1-small.jpg">
                                                      <img src="./images/project1-large.jpg" alt="Website Covid"
                                                          class="lazyload project-img card-img-top img-fluid">
                                                  </picture>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- End Of Project 1 -->
  
                              <!-- Project 2 -->
                              <div class="carousel-item project-style">
                                  <div class="card bg-project border-0">
                                      <div class="row align-items-center p-3">
                                          <div class="col-md-6">
                                              <h3 class="title-project pt-4 ps-4 poppins">The Resto</h3><br>
                                              <p class="text-white ps-4 pe-5">Final Project "Menjadi Front-End Developer
                                                  Expert" di <a href="dicoding.com">Dicoding Indonesia</a>. Menampilkan
                                                  list restaurant, fitur liked restaurant, fitur search. <br>
                                                  Technology : HTML, CSS, Javascript, NodeJs, Webpack, PWA(Progressive
                                                  Webs Apps), Lazyload, Intregation Testing, dan E2E Testing <br></p>
                                              <a href="https://theresto-fc91d.web.app/" rel="noopener"
                                                  aria-label="The Resto website" target="_blank"
                                                  class="go btn btn-success"><i class="fas fa-external-link-alt"
                                                      style="font-size: 24px;"></i>
                                                  Demo</a>
                                              <a href="https://github.com/dulabdul/The-Resto.git" rel="noopener"
                                                  aria-label="Github_the-resto" target="_blank"
                                                  class="go ml-1 btn btn-success"><i class="fab fa-github"
                                                      style="font-size:24px;"></i> Github</a>
                                          </div>
                                          <div class="col-md-6 p-3 pe-5">
                                              <a href="https://theresto-fc91d.web.app/">
                                                  <picture>
                                                      <source class="lazyload project-img card-img-top img-fluid"
                                                          media="(max-width: 600px)" srcset="./images/project3-small.jpg">
                                                      <img src="./images/project3-large.jpg" alt="Website The Resto"
                                                          class="lazyload project-img card-img-top img-fluid">
                                                  </picture>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- End Of Project 2 -->
                              <!-- Project 3 -->
                              <div class="carousel-item project-style">
                                  <div class="card bg-project border-0">
                                      <div class="row align-items-center p-3">
                                          <div class="col-md-6">
                                              <h3 class="title-project pt-4 ps-4 poppins">CreavTech Web</h3><br>
                                              <p class="text-white ps-4 pe-5">Final Project "Belajar Dasar Pemrograman
                                                  Web" di
                                                  <a href="dicoding.com">Dicoding Indonesia</a>. Website company profile
                                                  statis dengan liblary animasi dari javascript<br>
                                                  <a href="https://creavtech.web.app/" rel="noopener"
                                                      aria-label="Creavtech Website" target="_blank"
                                                      class="go btn btn-success"><i class="fas fa-external-link-alt"
                                                          style="font-size: 24px;"></i>
                                                      Demo</a>
                                                  <a href="https://github.com/dulabdul/Submission_pemprogaman_dasar_web.git"
                                                      rel="noopener" aria-label="Github_creavtech" target="_blank"
                                                      class="go ml-1 btn btn-success"><i class="fab fa-github"
                                                          style="font-size:24px;"></i> Github</a>
                                          </div>
                                          <div class="col-md-6 p-3 pe-5">
                                              <a href="https://creavtech.web.app/">
                                                  <picture>
                                                      <source class="lazyload project-img card-img-top img-fluid"
                                                          media="(max-width: 600px)"
                                                          srcset="./images/creavtech-small.jpg">
                                                      <img src="./images/creavtech-large.jpg" alt="Website creavtech"
                                                          class="lazyload project-img card-img-top img-fluid">
                                                  </picture>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- End Of Project 3 -->
                              <!-- Project 4 -->
                              <div class="carousel-item project-style">
                                  <div class="card bg-project border-0">
                                      <div class="row align-items-center p-3">
                                          <div class="col-md-6">
                                              <h3 class="title-project pt-4 ps-4 poppins">Bookself Apps</h3><br>
                                              <p class="text-white ps-4 pe-5">Final Project "Belajar Membuat Front-End Web
                                                  untuk Pemula" di
                                                  <a href="dicoding.com">Dicoding Indonesia</a>. Website Bookself Apps
                                                  yang memiliki fungsi CRUD Javascript <br>
                                                  <a href="https://bookself-apps.web.app/" rel="noopener"
                                                      aria-label="Website Bookself Apps" target="_blank"
                                                      class="go btn btn-success"><i class="fas fa-external-link-alt"
                                                          style="font-size: 24px;"></i>
                                                      Demo</a>
                                                  <a href="https://github.com/dulabdul/Bookself-Apps-Dicoding.git"
                                                      rel="noopener" aria-label="Github_Bookself_Apps" target="_blank"
                                                      class="go ml-1 btn btn-success"><i class="fab fa-github"
                                                          style="font-size:24px;"></i> Github</a>
                                          </div>
                                          <div class="col-md-6 p-3 pe-5">
                                              <a href="https://bookself-apps.web.app/">
                                                  <picture>
                                                      <source class="lazyload project-img card-img-top img-fluid"
                                                          media="(max-width: 600px)" srcset="./images/bookself-small.jpg">
                                                      <img src="./images/bookself-large.jpg" alt="Website Bookself Apps"
                                                          class="lazyload project-img card-img-top img-fluid">
                                                  </picture>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- End Of Project 4 -->
                              <!-- Project 5 -->
                              <div class="carousel-item project-style">
                                  <div class="card bg-project border-0">
                                      <div class="row align-items-center p-3">
                                          <div class="col-md-6">
                                              <h3 class="title-project pt-4 ps-4 poppins">SoccerBall</h3><br>
                                              <p class="text-white ps-4 pe-5">Project yang menampilkan klasemen
                                                  pertandingan bola liga spanyol dan jadwal tanding. Memiliki fitur untuk
                                                  menmyimpan team favorit dan pertandingan favorit dan push notificaton
                                                  <br>
                                                  Technology : HTML, CSS, Javascript, Materialize CSS, NodeJs, Webpack,
                                                  PWA(Progressive Webs Apps) <br>
                                              </p>
                                              <a href="https://mysoccer-584dc.web.app/" rel="noopener"
                                                  aria-label="Website SoccerBall" target="_blank"
                                                  class="go btn btn-success"><i class="fas fa-external-link-alt"
                                                      style="font-size: 24px;"></i> Demo</a>
                                              <a href="https://github.com/dulabdul/PWA-Dicoding-MySoccer.git"
                                                  rel="noopener" aria-label="Github_soccerBall" target="_blank"
                                                  class="go ml-1 btn btn-success"><i class="fab fa-github"
                                                      style="font-size:24px;"></i>
                                                  Github</a>
                                          </div>
                                          <div class="col-md-6 p-3 pe-5">
                                              <a href="https://mysoccer-584dc.web.app/">
                                                  <picture>
                                                      <source class="lazyload project-img card-img-top img-fluid"
                                                          media="(max-width: 600px)" srcset="./images/project2-small.jpg">
                                                      <img src="./images/project2-large.jpg" alt="Website mySoccer"
                                                          class="lazyload project-img card-img-top img-fluid">
                                                  </picture>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- End Of Project 5 -->
                              <!-- Project 6 -->
                              <div class="carousel-item project-style">
                                  <div class="card bg-project border-0">
                                      <div class="row align-items-center p-3">
                                          <div class="col-md-6">
                                              <h3 class="title-project pt-4 ps-4 poppins">Publik Nasional</h3><br>
                                              <p class="text-white ps-4 pe-5">Project website artikel berita yang dibuat
                                                  dengan Wordpress<br></p>
                                              <a href="https://publiknasional.com/" rel="noopener"
                                                  aria-label="Website publiknasional" target="_blank"
                                                  class="go btn btn-success"><i class="fas fa-external-link-alt"
                                                      style="font-size: 24px;"></i>
                                                  Demo</a>
                                          </div>
                                          <div class="col-md-6 p-3 pe-5">
                                              <a href="https://publiknasional.com/">
                                                  <picture>
                                                      <source class="lazyload project-img card-img-top img-fluid"
                                                          media="(max-width: 600px)"
                                                          srcset="./images/publiknasional-small.jpg">
                                                      <img src="./images/publiknasional-large.jpg"
                                                          alt="Website Publiknasional"
                                                          class="lazyload project-img card-img-top img-fluid">
                                                  </picture>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- End of Project 6 -->
                              <!-- Project 7 -->
                              <div class="carousel-item project-style">
                                  <div class="card bg-project border-0">
                                      <div class="row align-items-center p-3">
                                          <div class="col-md-6">
                                              <h3 class="title-project pt-4 ps-4 poppins">Nonton Kuy</h3><br>
                                              <p class="text-white ps-4 pe-5">Project yang menampilkan daftar film secara
                                                  realtime, data diambil dengan API <a
                                                      href="https://www.themoviedb.org/">themoviedb</a> <br>
                                                  Technology : HTML, CSS, Javascript, NodeJs, Webpack, PWA(Progressive
                                                  Webs Apps), Lazyload, Intregation Testing, dan E2E Testing <br></p>
                                              <a href="https://nonton-kuy.web.app/" rel="noopener"
                                                  aria-label="Website nonton kuy" target="_blank"
                                                  class="go btn btn-success"><i class="fas fa-external-link-alt"
                                                      style="font-size: 24px;"></i>
                                                  Demo</a>
                                              <a href="https://github.com/dulabdul/movie-katalog.git" rel="noopener"
                                                  aria-label="Github_Nonton_Kuy" target="_blank"
                                                  class="go ml-1 btn btn-success"><i class="fab fa-github"
                                                      style="font-size:24px;"></i> Github</a>
                                          </div>
                                          <div class="col-md-6 p-3 pe-5">
                                              <a href="https://nonton-kuy.web.app/">
                                                  <picture>
                                                      <source class="lazyload project-img card-img-top img-fluid"
                                                          media="(max-width: 600px)" srcset="./images/project4-small.jpg">
                                                      <img src="./images/project4-large.jpg" alt="Website Nonton Kuy"
                                                          class="lazyload project-img card-img-top img-fluid">
                                                  </picture>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- End of Project 7 -->
                              <!-- Project 8 -->
                              <div class="carousel-item project-style">
                                  <div class="card bg-project border-0">
                                      <div class="row align-items-center p-3">
                                          <div class="col-md-6">
                                              <h3 class="title-project pt-4 ps-4 poppins">Sistem Informasi Perpustakaan
                                              </h3><br>
                                              <p class="text-white ps-4 pe-5">Project sistem informasi perpustakaan
                                                  dibangun dengan native PHP</a> <br>
                                                  Technology : HTML, CSS, PHP, MySQL, Bootstrap <br></p>
                                              <a href="https://abdul-sipus.000webhostapp.com/" rel="noopener"
                                                  aria-label="Website Sistem informasi perpustakaan" target="_blank"
                                                  class="go btn btn-success"><i class="fas fa-external-link-alt"
                                                      style="font-size: 24px;"></i>
                                                  Demo</a>
                                              <a href="https://github.com/dulabdul/digital-sipus.git" rel="noopener"
                                                  aria-label="Github_Nonton_Kuy" target="_blank"
                                                  class="go ml-1 btn btn-success"><i class="fab fa-github"
                                                      style="font-size:24px;"></i> Github</a>
                                          </div>
                                          <div class="col-md-6 p-3 pe-5">
                                              <a href="https://abdul-sipus.000webhostapp.com/">
                                                  <picture>
                                                      <source class="lazyload project-img card-img-top img-fluid"
                                                          media="(max-width: 600px)" srcset="./images/project5-small.jpg">
                                                      <img src="./images/project5-large.jpg"
                                                          alt="Website Sistem informasi perpustakaan"
                                                          class="lazyload project-img card-img-top img-fluid">
                                                  </picture>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- End of Project 8 -->
                          </div>
                          <!-- End Of Project Items -->
                      </div>
                      <!-- Button Next -->
                      <div class="col-1 text-center">
                          <button class="bg-prev-next border-0" type="button" data-bs-target="#carouselExampleDark"
                              data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          </button>
                      </div>
                      <!-- End Of Button Next -->
  
                  </div>
  
                  <!-- Carousel Indicator -->
                  <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                          class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                          aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                          aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                          aria-label="Slide 4"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                          aria-label="Slide 5"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                          aria-label="Slide 6"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
                          aria-label="Slide 7"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
                          aria-label="Slide 8"></button>
                  </div>
  
              </div>
          </div>
      </section>
  
      <section id="sertifikat" class="container-sertifikat">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-12 heading-konten mb-4">
                      <h2 class="text-center mb-3 fs-1 font-weight-bold heading__tagline text-white">Certificate</h2>
                      <hr>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="100"
                          data-aos-duration="1200">
                          <a href="https://www.dicoding.com/certificates/L4PQM1E92ZO1" rel="noopener"
                              aria-label="Sertifikat" target="_blank">
                              <picture>
                                  <source class="lazyload project-img img-fluid" media="(max-width: 600px)"
                                      srcset="./images/solid-small.jpg">
                                  <img src="./images/solid-large.jpg" alt="Certificate Learn Solid Programming Principles"
                                      class="lazyload project-img img-fluid">
                              </picture>
                          </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Learn Solid Programming Principles <span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="150"
                          data-aos-duration="1200">
                          <a href="https://www.dicoding.com/certificates/2VX31YD83ZYQ" rel="noopener"
                              aria-label="Sertifikat" target="_blank">
                              <picture>
                                  <source class="lazyload project-img img-fluid" media="(max-width: 600px)"
                                      srcset="./images/dasar-web-small.jpg">
                                  <img src="./images/dasar-web-large.jpg" alt="Certificate Learn Basic Web Progamming"
                                      class="lazyload project-img img-fluid">
                              </picture>
                          </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Learn Basic Web Progamming <span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="150"
                          data-aos-duration="1200">
                          <a href="https://www.dicoding.com/certificates/1OP8616L2XQK" rel="noopener"
                              aria-label="Sertifikat" target="_blank">
                              <picture>
                                  <source class="lazyload project-img img-fluid" media="(max-width: 600px)"
                                      srcset="./images/dasar-javascript-small.jpg">
                                  <img src="./images/dasar-javascript-large.jpg"
                                      alt="Certificate Learn Basic Javascript Programming"
                                      class="lazyload project-img img-fluid">
                              </picture>
                          </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Learn Basic Javascript Programming <span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="150"
                          data-aos-duration="1200">
                          <a href="https://www.dicoding.com/certificates/2VX3NRK0QXYQ" rel="noopener"
                              aria-label="Sertifikat" target="_blank">
                              <picture>
                                  <source class="lazyload project-img img-fluid" media="(max-width: 600px)"
                                      srcset="./images/fundamental-pemula-small.jpg">
                                  <img src="./images/fundamental-pemula-large.jpg"
                                      alt="Certificate Learn to Create Web Front-End For Beginners "
                                      class="lazyload project-img img-fluid">
                              </picture>
                          </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Learn to Create Web Front-End For Beginners <span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="200"
                          data-aos-duration="1200">
                          <a href="https://www.dicoding.com/certificates/NVP7K7KGOZR0" rel="noopener"
                              aria-label="Sertifikat" target="_blank">
                              <picture>
                                  <source class="lazyload project-img img-fluid" media="(max-width: 600px)"
                                      srcset="./images/fundamental-small.jpg">
                                  <img src="./images/fundamental-large.jpg"
                                      alt="Certificate Learn Front-End Web Development Fundamentals"
                                      class="lazyload project-img img-fluid">
                              </picture>
                          </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Learn Front-End Web Development Fundamentals <span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="250"
                          data-aos-duration="1200">
                          <a href="https://www.dicoding.com/certificates/QLZ98739EX5D" rel="noopener"
                              aria-label="Sertifikat" target="_blank">
                              <picture>
                                  <source class="lazyload project-img img-fluid" media="(max-width: 600px)"
                                      srcset="./images/mpwa-small.jpg">
                                  <img src="./images/mpwa-large.jpg" alt="Certificate Build Progressive Web Apps"
                                      class="lazyload project-img img-fluid">
                              </picture>
                          </a>
  
                      </div>
                      <p class="font-weight-bold title-certificate">Build Progressive Web Apps<span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="300"
                          data-aos-duration="1200">
                          <a href="https://www.dicoding.com/certificates/MEPJLEER6Z3V" rel="noopener"
                              aria-label="Sertifikat" target="_blank">
                              <picture>
                                  <source class="lazyload project-img img-fluid" media="(max-width: 600px)"
                                      srcset="./images/mfwde-small.jpg">
                                  <img src="./images/mfwde-large.jpg"
                                      alt="Certificate Become a Front-End Web Developer Expert"
                                      class="lazyload project-img img-fluid">
                              </picture>
                          </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Become a Front-End Web Developer Expert <span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="300"
                          data-aos-duration="1200">
                          <picture>
                              <source class="lazyload project-img img-fluid" media="(max-width: 600px)"
                                  srcset="./images/bnsp-jrweb-small.jpg">
                              <img src="./images/bnsp-jrweb-large.jpg" alt="Certificate Junior Web Developer"
                                  class="lazyload project-img img-fluid">
                          </picture>
                          </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Junior Web Developer<span
                              class="d-block font-weight-light text-white">Indonesian Professional Certification
                              Authority</span>
                      </p>
                  </div>
              </div>
          </div>
  </div>
  </section>
  <section id="contact" class="container-contact">
      <div class="container-md">
          <div class="row">
              <div class="col-12 heading-konten">
                  <h2 class="text-center fs-1 font-weight-bold heading__tagline text-white mt-2">Get In Touch</h2>
                  <hr>
              </div>
              <div class="col-12 section_head_contact text-start mt-5" data-aos-once="true" data-aos="fade-right"
                  data-aos-delay="100" data-aos-duration="1200">
                  <p class="title-contact font-weight-light"><span>Contact</span> Information</p>
              </div>
          </div>
          <div class="row section__contact">
              <div class="col-md d-flex mt-3" data-aos-once="true" data-aos="fade-up-right" data-aos-delay="200"
                  data-aos-duration="1200">
                  <div class="icon-contact">
                      <a href="https://wa.me/+6289675293838" rel="noopener" aria-label="Telephone" target="_blank"><i
                              class="fas fa-phone" aria-hidden="true"></i></a>
                  </div>
                  <div class=" contact-text w-75 ml-2">
                      <p class="font-weight-normal fs-4 text-start title-contact">Telephone</p>
                      <p class="font-weight-light text-white text-start">+6289675293838</p>
                  </div>
              </div>
              <div class="col-md d-flex mt-3" data-aos-once="true" data-aos="fade-up" data-aos-delay="250"
                  data-aos-duration="1200">
                  <div class="icon-contact">
                      <a href="mailto:dulabdol1331@gmail.com" rel="noopener" aria-label="Telephone" target="_blank"><i
                              class="far fa-envelope" aria-hidden="true"></i></a>
                  </div>
                  <div class="contact-text w-75 ml-2">
                      <p class="font-weight-normal fs-4 text-start title-contact">Email</p>
                      <p class="font-weight-light text-white text-start">dulabdol331@gmail.com</p>
                  </div>
              </div>
              <div class="col-md d-flex mt-3" data-aos-once="true" data-aos="fade-up-left" data-aos-delay="300"
                  data-aos-duration="1200">
                  <div class="icon-contact">
                      <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </div>
                  <div class="contact-text w-75 ml-2">
                      <p class="font-weight-normal fs-4 text-start title-contact">Address</p>
                      <p class="font-weight-light text-white fs-6 text-start">Jakarta Utara,Indonesia</p>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-12 section_head_sosmed text-start" data-aos-once="true" data-aos="fade-right"
                  data-aos-delay="100" data-aos-duration="1200">
                  <p class="title-contact font-weight-italic"><span>Sosial Media</span>Information</p>
              </div>
          </div>
          <div class="pt-30">
              <div class="col-12 social-media-container mb-5 text-center">
                  <ul class="social-media-link">
                      <li data-aos-once="true" data-aos="fade-up-right" data-aos-delay="200" data-aos-duration="1200"><a
                              href="https://www.instagram.com/ar.dev21__/" rel="noopener" aria-label="Instragam"
                              target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                      <li data-aos-once="true" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1200"><a
                              href="https://www.linkedin.com/in/abdul-rahman-2737131a1/" rel="noopener"
                              aria-label="Linkedin" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                      </li>
                      <li data-aos-once="true" data-aos="fade-up-left" data-aos-delay="300" data-aos-duration="1200"><a
                              href="https://github.com/dulabdul" target="_blank" rel="noopener" aria-label="Github"><i
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