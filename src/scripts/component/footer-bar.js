/* eslint-disable no-underscore-dangle */
class footerBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
                    <!--Ini Footer-->
    <footer class="footer p-3">
    <p class="text-center text-white font-weight-light font-italic">&copy;2022.Develop by abdulrahman <i class="fas fa-heart"></i></p>
</footer>
<!--Ini Akhir Footer-->
                    `;
  }
}
customElements.define('footer-bar', footerBar);