/* eslint-disable no-underscore-dangle */
class navBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
              <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light topnav " id="nav-area">
        <div class="container">
            <div class="nav-name">
                <a class="navbar-brand" href="#">Abdul Rahman</a>
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
    <!--Ini Akhir Navigasi-->
                  `;
  }
}
customElements.define('nav-bar', navBar);
