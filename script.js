/* ===================================================================
   Hemanth S Kumar — Portfolio Scripts
   Handles: nav, role toggle, scroll animations, section highlighting
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Navigation --- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  function closeNav() {
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
    navToggle.classList.remove('open');
  }

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navOverlay.classList.toggle('open', isOpen);
    navToggle.classList.toggle('open', isOpen);
  });

  navOverlay.addEventListener('click', closeNav);

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  /* --- Role-Track Toggle --- */
  const toggleBtns = document.querySelectorAll('.role-toggle button');
  const heroSubtitles = document.querySelectorAll('.hero-subtitle[data-track]');
  const aboutTexts = document.querySelectorAll('.about-text[data-track]');
  const resumeBtn = document.getElementById('resume-btn');

  const resumeLinks = {
    core: 'assets/resume-core-engineering.pdf',
    it: 'assets/resume-it-support.pdf'
  };

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const track = btn.dataset.track;

      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      heroSubtitles.forEach(el => {
        el.classList.toggle('hidden', el.dataset.track !== track);
      });

      aboutTexts.forEach(el => {
        el.classList.toggle('hidden', el.dataset.track !== track);
      });

      if (resumeBtn) {
        resumeBtn.href = resumeLinks[track];
      }
    });
  });

  /* --- Navbar scroll state --- */
  const nav = document.querySelector('.nav');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial state

  /* --- Scroll fade-in animations --- */
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

  /* --- Active section highlighting --- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function highlightNav() {
    const scrollY = window.scrollY + 120;
    let currentId = '';

    sections.forEach(section => {
      if (scrollY >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav(); // initial state
});
