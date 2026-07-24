/* ===================================================================
   PORTAFOLIO PERSONAL — JavaScript
   =================================================================== */

(function () {
  'use strict';

  /* ---------- ANO DINAMICO ---------- */
  var yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ---------- ACTIVE NAV LINK ---------- */
  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    var scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (link) {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = 'var(--text)';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* ---------- ANIMACIONES AL APARECER ---------- */
  var animatedElements = document.querySelectorAll(
    '.skills-grid span, .project-card, .split p, .section h2, .section .eyebrow'
  );

  animatedElements.forEach(function (el) {
    el.classList.add('animate-on-scroll');
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- INICIALIZACION ---------- */
  updateActiveLink();
})();
