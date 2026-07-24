/* ===================================================================
   PORTAFOLIO PERSONAL — JavaScript
   =================================================================== */

(function () {
  'use strict';

  /* ---------- ELEMENTOS DEL DOM ---------- */
  var navbar = document.getElementById('navbar');
  var toggle = document.getElementById('navbar-toggle');
  var menu = document.getElementById('navbar-menu');
  var navLinks = document.querySelectorAll('.nav-link');
  var yearSpan = document.getElementById('current-year');
  var sections = document.querySelectorAll('section[id]');

  /* ---------- ANO DINAMICO ---------- */
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ---------- IMAGEN DE PROYECTO FALLBACK ---------- */
  var projectImages = document.querySelectorAll('.project-image img');
  projectImages.forEach(function (img) {
    img.addEventListener('error', function () {
      this.style.display = 'none';
    });
    if (img.complete && img.naturalWidth === 0) {
      img.style.display = 'none';
    }
  });

  /* ---------- MENU MOVIL ---------- */
  function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menu de navegacion');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu de navegacion');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (menu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (toggle) {
    toggle.addEventListener('click', toggleMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (menu.classList.contains('open')) {
        closeMenu();
      }
    });
  });

  /* ---------- NAVBAR SCROLL SHADOW ---------- */
  function onScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- ACTIVE NAV LINK ---------- */
  function updateActiveLink() {
    var scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* ---------- ANIMACIONES AL APARECER ---------- */
  var animatedElements = document.querySelectorAll(
    '.skill-card, .project-card, .about-text, .contact-item, .section-title'
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- INICIALIZACION ---------- */
  onScroll();
  updateActiveLink();
})();
