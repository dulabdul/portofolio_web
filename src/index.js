/* eslint-disable func-names */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import './styles/scss/main.scss';
import './styles/scss/modules/_font.scss';
import './styles/scss/modules/_mixin.scss';
import './styles/scss/modules/_variables.scss';
import './styles/css/main.css';
import 'bootstrap';
import 'regenerator-runtime';
import $ from 'jquery';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import component
import './scripts/component/navbar';
import './scripts/component/konten-bar';
import './scripts/component/footer-bar';
// gsap
import {
  gsap,
} from 'gsap';
import {
  TextPlugin,
} from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

gsap.to('.hallo', {
  duration: 1.2,
  delay: 1.5,
  text: 'Hi,Iam',
});
gsap.to('.first-name', {
  duration: 1,
  delay: 3,
  text: 'Abdul',
});
gsap.to('.last-name', {
  duration: 1,
  delay: 4,
  text: 'Rahman',
});
gsap.to('.title-job', {
  duration: 1.2,
  delay: 5.2,
  text: 'Front-End Web Developer',
});
gsap.to('.title-info', {
  duration: 3.5,
  delay: 6.5,
  text: 'Turning your idea into a cool produk with a good web developer. Iam here to help your to turning idea to amazing product',
});
/*
gsap.from('.display-4', {
  duration: 1,
  x: -50,
  opacity: 0,
  delay: 0.5,
});
*/

$(document).ready(() => {
  $('body').scrollspy({
    target: '#nav-area',
  });
});
// Navbar On Scroll
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// End
