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
// gsap
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

gsap.to('.hallo', {
  duration: 1.2,
  delay: 1.5,
  text: 'Hi,Iam',
});
gsap.to('.hero span', {
  duration: 1.2,
  delay: 3,
  text: 'Abdul',
});
gsap.to('.hero p', {
  duration: 1.2,
  delay: 5,
  text: 'Rahman',
});
gsap.to('.title-job', {
  duration: 1.5,
  delay: 6,
  text: 'Front-End Web Developer',
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
// window.addEventListener('scroll', scroll, function () {
//   let nav = document.querySelector('#nav-area');
//   nav.classList.toggle('sticky', window.scrollY > 0);
// })
// End Navbar On Scroll
