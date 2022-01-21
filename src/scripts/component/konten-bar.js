/* eslint-disable no-underscore-dangle */
class kontenBar extends HTMLElement {
    connectedCallback() {
        this._render();
    }

    _render() {
        this.innerHTML = /* html */ `
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      <section id="skills">
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
                          <div class="col img-icons">
                              <img src="./icons/html.svg" class="lazyload img-fluid img-svg-html"
                                  alt="HTML Icons">
                              <img src="./icons/css3.svg" class="lazyload img-fluid img-svg-css"
                                  alt="CSS Icons">
                              <img src="./icons/javascript.svg" class="lazyload img-fluid img-svg-js"
                                  alt="Javascript Icons">
                              <img src="./icons/php.svg" class="lazyload img-fluid img-svg-php"
                                  alt="PHP Icons">
                              <img src="./icons/bootstrap.svg" class="lazyload img-fluid img-svg-bts"
                                  alt="Bootstrap Icons">
                              <img src="./icons/git.svg" class="lazyload img-fluid img-svg-git"
                                  alt="GIT Icons">
                              <img src="./icons/vscode.svg" class="lazyload img-fluid img-svg-vscode"
                                  alt="Visual Studio Code Icons">
                                  <img src="./icons/webpack.png" class="lazyload img-fluid"
                                  alt="Webpack Icons">
                              <img src="./icons/nodejs.png" class="lazyload img-fluid" alt="NodeJs Icons">
                              <img src="./icons/pwa1.png" class="lazyload img-fluid"
                                  alt="Progressive Web Apps Icons">
                              <img src="./icons/wordpress.png" class="lazyload img-fluid"
                                  alt="Wordpress Icons">
                              <img src="./icons/adobe-xd.png" class="lazyload img-fluid"
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
          <div class="col-12 heading-konten mb-2">
            <h2 class="text-center mt-2 fs-1 font-weight-bold text-white heading__tagline">Check Out</h2>
            <h2 class="text-center mb-3 fs-2 font-weight-bold text-white heading__tagline">My Recent Project</h2>
            <hr>
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
                    <p class="text-white fs-6 ps-4 pe-5">Website yang menampilkan data kasus Covid-19 secara realtime, data didapat dari API covid-19 open source.
                    </a><br>
                      Technology : HTML, CSS, Javascript,Bootstrap, NodeJs, Webpack, PWA(Progressive Webs Apps), Lazyload 
                      <br></p>
                      <a href="https://infocorona-e90fb.web.app/" rel="noopener" aria-label="Website Covid" target="_blank"
                        class="go btn btn-success"><i class="fas fa-external-link-alt" style="font-size: 24px;"></i> Demo</a>
                        <a href="https://github.com/dulabdul/Web_Corona_Info.git" rel="noopener" aria-label="Github_covid" target="_blank" class="go ml-1 btn btn-success"><i class="fab fa-github" style="font-size:24px;"></i> Github</a>
                  </div>
                  <div class="col-md-6 p-3 pe-5">
                  <a href="https://infocorona-e90fb.web.app/" rel="noopener" aria-label="Website Covid" target="_blank">
                    <picture>
                    <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)" srcset="project1-small.jpg">
                    <img src="project1-large.jpg" alt="Website Covid"
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
                <p class="title-project fw-bold fs-4 pt-4 ps-4 poppins">SoccerBall</p><br>
                <p class="text-white fs-6 ps-4 pe-5">Project yang menampilkan klasemen pertandingan bola liga spanyol dan jadwal tanding. Memiliki fitur untuk menmyimpan team favorit dan pertandingan favorit dan push notificaton <br>
                Technology : HTML, CSS, Javascript, Materialize CSS, NodeJs, Webpack, PWA(Progressive Webs Apps) <br>
                 </p>
                  <a href="https://mysoccer-584dc.web.app/" rel="noopener" aria-label="Website SoccerBall" target="_blank"
                  class="go btn btn-success"><i class="fas fa-external-link-alt" style="font-size: 24px;"></i> Demo</a>
                  <a href="https://github.com/dulabdul/PWA-Dicoding-MySoccer.git" rel="noopener" aria-label="Github_soccerBall" target="_blank" class="go ml-1 btn btn-success"><i class="fab fa-github" style="font-size:24px;"></i>
                  Github</a>
              </div>
              <div class="col-md-6 p-3 pe-5">
                <a href="https://mysoccer-584dc.web.app/">
                <picture>
                <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)"
                    srcset="project2-small.jpg">
                <img src="project2-large.jpg" alt="Website mySoccer"
                    class="lazyload project-img card-img-top img-fluid">
            </picture>
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
                <p class="title-project fw-bold fs-4 pt-4 ps-4 poppins">The Resto</p><br>
                <p class="text-white fs-6 ps-4 pe-5">Project kelas "Menjadi Front-End Developer Expert" di <a href="dicoding.com">Dicoding Indonesia</a>. Menampilkan list restaurant, fitur liked restaurant, fitur search. <br>
                Technology : HTML, CSS, Javascript, NodeJs, Webpack, PWA(Progressive Webs Apps), Lazyload, Intregation Testing, dan E2E Testing  <br></p>
                  <a href="https://theresto-fc91d.web.app/" rel="noopener" aria-label="Website Covid" target="_blank"
                  class="go btn btn-success"><i class="fas fa-external-link-alt" style="font-size: 24px;"></i> Demo</a>
                  <a href="https://github.com/dulabdul/The-Resto.git" rel="noopener" aria-label="Github_the-resto" target="_blank" class="go ml-1 btn btn-success"><i class="fab fa-github" style="font-size:24px;"></i> Github</a>
              </div>
              <div class="col-md-6 p-3 pe-5">
                <a href="https://theresto-fc91d.web.app/">
                <picture>
                <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)"
                    srcset="project3-small.jpg">
                <img src="project3-large.jpg" alt="Website The Resto"
                    class="lazyload project-img card-img-top img-fluid">
            </picture>
                </a>
              </div>
            </div>
          </div>
            </div>
            <!-- End Of Project 3 -->
            <!-- Project 4 -->
            <div class="carousel-item">
            <div class="card bg-skills border-0">
            <div class="row align-items-center p-3">
              <div class="col-md-6">
                <p class="title-project fw-bold fs-4 pt-4 ps-4 poppins">Publik Nasional</p><br>
                <p class="text-white fs-6 ps-4 pe-5">Website artikel berita<br></p>
                  <a href="https://publiknasional.com/" rel="noopener" aria-label="Website Covid" target="_blank"
                  class="go btn btn-success"><i class="fas fa-external-link-alt" style="font-size: 24px;"></i> Demo</a>
              </div>
              <div class="col-md-6 p-3 pe-5">
                <a href="https://publiknasional.com/">
                <picture>
                <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)"
                    srcset="publiknasional-small.jpg">
                <img src="publiknasional-large.jpg" alt="Website The Resto"
                    class="lazyload project-img card-img-top img-fluid">
            </picture>
                </a>
              </div>
            </div>
          </div>
            </div>
            <!-- End of Project 4 -->
          <!-- Project 5 -->
          <div class="carousel-item">
          <div class="card bg-skills border-0">
          <div class="row align-items-center p-3">
            <div class="col-md-6">
              <p class="title-project fw-bold fs-4 pt-4 ps-4 poppins">Nonton Kuy</p><br>
              <p class="text-white fs-6 ps-4 pe-5">Project yang menampilkan daftar film secara realtime, data diambil dengan API <a href="https://www.themoviedb.org/">themoviedb</a> <br>
              Technology : HTML, CSS, Javascript, NodeJs, Webpack, PWA(Progressive Webs Apps), Lazyload, Intregation Testing, dan E2E Testing  <br></p>
                <a href="https://nonton-kuy.web.app/" rel="noopener" aria-label="Website Covid" target="_blank"
                class="go btn btn-success"><i class="fas fa-external-link-alt" style="font-size: 24px;"></i> Demo</a>
                <a href="https://github.com/dulabdul/movie-katalog.git" rel="noopener" aria-label="Github_Nonton_Kuy" target="_blank" class="go ml-1 btn btn-success"><i class="fab fa-github" style="font-size:24px;"></i> Github</a>
            </div>
            <div class="col-md-6 p-3 pe-5">
              <a href="https://nonton-kuy.web.app/">
              <picture>
              <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)"
                  srcset="project4-small.jpg">
              <img src="project4-large.jpg" alt="Website Nonton Kuy"
                  class="lazyload project-img card-img-top img-fluid">
          </picture>
              </a>
            </div>
          </div>
        </div>
          </div>
          <!-- End of Project 5 -->
        <!-- Project 6 -->
        <div class="carousel-item">
        <div class="card bg-skills border-0">
        <div class="row align-items-center p-3">
          <div class="col-md-6">
            <p class="title-project fw-bold fs-4 pt-4 ps-4 poppins">Sistem Informasti Perpustakaan</p><br>
            <p class="text-white fs-6 ps-4 pe-5">Project sistem informasi perpustakaan dibangun dengan native PHP</a> <br>
            Technology : HTML, CSS, PHP, MySQL, Bootstrap  <br></p>
              <a href="https://abdul-sipus.000webhostapp.com/" rel="noopener" aria-label="Website Covid" target="_blank"
              class="go btn btn-success"><i class="fas fa-external-link-alt" style="font-size: 24px;"></i> Demo</a>
              <a href="https://github.com/dulabdul/digital-sipus.git" rel="noopener" aria-label="Github_Nonton_Kuy" target="_blank" class="go ml-1 btn btn-success"><i class="fab fa-github" style="font-size:24px;"></i> Github</a>
          </div>
          <div class="col-md-6 p-3 pe-5">
            <a href="https://abdul-sipus.000webhostapp.com/">
            <picture>
            <source class="lazyload project-img card-img-top img-fluid" media="(max-width: 600px)"
                srcset="project5-small.jpg">
            <img src="project5-large.jpg" alt="Website Nonton Kuy"
                class="lazyload project-img card-img-top img-fluid">
        </picture>
            </a>
          </div>
        </div>
      </div>
        </div>
        <!-- End of Project 6 -->
        </div>
        <!-- End Of Project Items -->
          </div>
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
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>

    </div>
    </div>
      </section>
      <section id="sertifikat">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-12 heading-konten mb-4">
                      <h2 class="text-center mb-3 fs-1 font-weight-bold heading__tagline text-white">Certificate</h2>
                      <hr>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="100"data-aos-duration="1200">
                      <a href="https://www.dicoding.com/certificates/L4PQM1E92ZO1" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="solid-small.jpg">
                      <img src="solid-large.jpg" alt="Sertifikat_Solid"
                      class="lazyload project-img img-fluid">
                  </picture>
                  </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Belajar Prinsip Pemprogaman Solid <span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="150"data-aos-duration="1200">
                      <a href="https://www.dicoding.com/certificates/2VX3NRK0QXYQ" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="solid-small.jpg">
                      <img src="web-large.jpg" alt="Sertifikat Dasar Web"
                      class="lazyload project-img img-fluid">
                  </picture>
                  </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Belajar Dasar Pemprogaman Web <span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="200"data-aos-duration="1200">
                      <a href="https://www.dicoding.com/certificates/GRX5GO3WVX0M" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="fundamental-small.jpg">
                      <img src="fundamental-large.jpg" alt="Sertifikat Fundamental Web"
                      class="lazyload project-img img-fluid">
                  </picture>
                  </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Belajar Fundamental Front-End Web <span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="250"data-aos-duration="1200">
                      <a href="https://www.dicoding.com/certificates/QLZ98739EX5D" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="mpwa-small.jpg">
                      <img src="mpwa-large.jpg" alt="Sertifikat MPWA"
                      class="lazyload project-img img-fluid">
                  </picture>
                  </a>
                       
                      </div>
                      <p class="font-weight-bold title-certificate">Membangun Progressive Web Apps<span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
                  <div class="col-md-4 mb-3">
                      <div class="card-project shadow" data-aos="zoom-in-up" data-aos-delay="300"data-aos-duration="1200">
                      <a href="https://www.dicoding.com/certificates/MEPJLEER6Z3V" rel="noopener" aria-label="Sertifikat" target="_blank">
                      <picture>
                      <source class="lazyload project-img img-fluid" media="(max-width: 600px)" srcset="mfwde-small.jpg">
                      <img src="mfwde-large.jpg" alt="Sertifikat MFWDE"
                      class="lazyload project-img img-fluid">
                  </picture>
                  </a>
                      </div>
                      <p class="font-weight-bold title-certificate">Menjadi Front-End Web Developer Expert <span
                              class="d-block font-weight-light text-white">Dicoding
                              Indonesia</span>
                      </p>
                  </div>
              </div>
          </div>
      </section>
      <section id="contact">
          <div class="container-md">
              <div class="row">
                  <div class="col-12 heading-konten">
                      <h2 class="text-center fs-1 font-weight-bold heading__tagline text-white mt-2">Get In Touch</h2>
                      <hr>
                  </div>
                  <div class="col-12 section_head_contact text-start mt-5" data-aos-once="true" data-aos="fade-right" data-aos-delay="100"data-aos-duration="1200">
                      <p class="title-certificate font-weight-light"><span>Contact</span> Information</p>
                  </div>
              </div>
              <div class="row section__contact">
                  <div class="col-md d-flex mt-3" data-aos-once="true" data-aos="fade-up-right" data-aos-delay="200"data-aos-duration="1200">
                      <div class="icon-contact">
                          <a href="https://wa.me/+6289675293838" rel="noopener" aria-label="Telephone" target="_blank"><i class="fas fa-phone"
                                  aria-hidden="true"></i></a>
                      </div>
                      <div class=" contact-text w-75 ml-2">
                                  <p class="font-weight-normal fs-4 text-start title-certificate">Telephone</p>
                                  <p class="font-weight-light text-white fs-6 text-start">+6289675293838</p>
                      </div>
                  </div>
                  <div class="col-md d-flex mt-3" data-aos-once="true" data-aos="fade-up" data-aos-delay="250"data-aos-duration="1200">
                      <div class="icon-contact">
                          <a href="mailto:dulabdol1331@gmail.com" rel="noopener" aria-label="Telephone" target="_blank"><i class="far fa-envelope"
                                  aria-hidden="true"></i></a>
                      </div>
                      <div class="contact-text w-75 ml-2">
                          <p class="font-weight-normal fs-4 text-start title-certificate">Email</p>
                          <p class="font-weight-light text-white fs-6 text-start">dulabdol331@gmail.com</p>
                      </div>
                  </div>
                  <div class="col-md d-flex mt-3" data-aos-once="true" data-aos="fade-up-left" data-aos-delay="300"data-aos-duration="1200">
                      <div class="icon-contact">
                          <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                      </div>
                      <div class="contact-text w-75 ml-2">
                          <p class="font-weight-normal fs-4 text-start title-certificate">Address</p>
                          <p class="font-weight-light text-white fs-6 text-start">Jakarta Utara, Indonesia</p>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12 section_head_sosmed text-start" data-aos-once="true" data-aos="fade-right" data-aos-delay="100"data-aos-duration="1200">
                      <p class="title-certificate font-weight-italic"><span>Sosial Media</span>Information</p>
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