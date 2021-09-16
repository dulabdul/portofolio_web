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
  text: 'Hi,Saya',
});
gsap.to('.hero span', {
  duration: 1.4,
  delay: 3,
  text: 'Abdul Rahman',
});
gsap.to('.title-job', {
  duration: 1.5,
  delay: 4.5,
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
