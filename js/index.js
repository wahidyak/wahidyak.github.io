(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  const navLinks = document.querySelectorAll('.nav__link');

  function setNavOpen(open) {
    document.body.classList.toggle('nav-open', open);
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
  }

  function isNavOpen() {
    return document.body.classList.contains('nav-open');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      setNavOpen(!isNavOpen());
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isNavOpen()) {
        setNavOpen(false);
        navToggle.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!isNavOpen()) return;
      const target = e.target;
      if (nav.contains(target) || navToggle.contains(target)) return;
      setNavOpen(false);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setNavOpen(false));
  });
})();
