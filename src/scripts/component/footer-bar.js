/* eslint-disable no-underscore-dangle */
class footerBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
                    <!--Ini Footer-->
    <footer class="footer p-3">
    <p class="text-center text-black mt-2 font-italic">&copy; Portofolio Abdulrahman_2021</p>
</footer>
<!--Ini Akhir Footer-->
                    `;
  }
}
customElements.define('footer-bar', footerBar);
