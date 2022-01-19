/* eslint-disable no-underscore-dangle */
class navBar extends HTMLElement {
    connectedCallback() {
        this._render();
    }

    _render() {
        this.innerHTML = /* html */ `
        <header>
              <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-transparent topnav " id="nav-area">
        <div class="container">
            <div class="nav-name">
                <a class="navbar-brand" href="#">Abdul <span>Rahman</span></a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav nav-pills navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-url nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-url nav-link" href="#about">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-url nav-link" href="#project">Project</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-url nav-link" href="#sertifikat">Certificate</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-url nav-link" href="#contact">Contact</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <section id="home">
    <div class="container">
        <div class="jumbotron bg-transparent">
            <div class="row justify-content-evenly">
                <div class="col-md-6 text-start hero">
                    <h1 class="hallo text-white display-4 font-weight-bold"></h1>
                    <span class="display-4 font-weight-bold"></span>
                    <p class="display-4 name font-weight-bold"></p>
                    <h1 class="title-job text-white display-4 font-weight-normal fs-2 mt-4"></h1>
                </div>
                <div class="col-md-6 mt-4">
                <img  data-aos="flip-up" data-aos-duration="1500"
src="../src/public/images/coding1.png" alt="Abdulrahman"
                class="lazyload profile-img img-fluid">
                </div>
            </div>
        </div>
        <a class="button-sm-call btn btn-outline-success text-start" href="#contact" role="button"><i
                class="fas fa-phone mr-1" style="font-size: 24px;" aria-hidden="true"></i>Contact Me</a>
        <div class="mb-3 pb-4 text-dark">
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
</section>
    </header>
    <!--Ini Akhir Navigasi-->
                  `;
    }
}

customElements.define('nav-bar', navBar);