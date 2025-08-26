// Navbar toggler symbol swap
const toggler = document.getElementById("navbar-toggler");
const collapse = document.getElementById("navbarNav");

if (collapse && toggler) {
  collapse.addEventListener("show.bs.collapse", () => {
    toggler.textContent = "×";
  });
  collapse.addEventListener("hide.bs.collapse", () => {
    toggler.textContent = "☰";
  });
}

// Smooth scroll with offset for fixed navbar (native scroll-behavior in CSS handles most cases)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 110; // matches --scroll-offset
      window.scrollTo({ top, behavior: 'smooth' });
      // close mobile nav after click
      if (collapse && collapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapse);
        bsCollapse.hide();
      }
    }
  });
});

// Active link highlighting with IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar .nav-link[href^="#"]');

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (!id) return;
      const link = document.querySelector(`.navbar .nav-link[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-50% 0px -45% 0px', threshold: 0.01 });

  sections.forEach((sec) => observer.observe(sec));
}

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
const setNavbarBg = () => {
  if (!navbar) return;
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
setNavbarBg();
window.addEventListener('scroll', setNavbarBg, { passive: true });

// Animate on scroll using IntersectionObserver
const animTargets = document.querySelectorAll('[data-anim]');
if ('IntersectionObserver' in window && animTargets.length) {
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        animObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  animTargets.forEach((el) => animObserver.observe(el));
}