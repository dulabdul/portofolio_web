import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import './styles/style.css';
import 'bootstrap';
import 'regenerator-runtime';
import $ from 'jquery';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import component
import './scripts/component/navbar';
import './scripts/component/konten-bar';
import './scripts/component/footer-bar';

$(document).ready(() => {
  $('body').scrollspy({
    target: '#nav-area',
  });
});
